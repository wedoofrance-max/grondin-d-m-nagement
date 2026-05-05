export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/nodemailer'
import { getDemandeAvisHTML } from '@/lib/email/templates/demandeAvis'

const GOOGLE_REVIEW_URL = 'https://g.page/r/grondin-demenagement/review'

export async function GET(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const startTime = Date.now()
    console.log('[CRON] Starting email-avis')

    const { prisma } = await import('@/lib/db')
    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    const dayStart = new Date(new Date(threeDaysAgo).setHours(0, 0, 0, 0))
    const dayEnd   = new Date(new Date(threeDaysAgo).setHours(23, 59, 59, 999))

    const bookings = await prisma.booking.findMany({
      where: {
        movingDate:        { gte: dayStart, lte: dayEnd },
        status:            'completed',
        reviewRequestSent: false,
      },
      include: { customer: true },
      orderBy: { movingDate: 'asc' },
    })

    console.log(`[CRON] Found ${bookings.length} bookings for review requests`)

    let sent = 0
    let failed = 0
    const results: { bookingRef: string; status: string; error?: string }[] = []

    for (const booking of bookings) {
      const html = getDemandeAvisHTML({
        firstName:       booking.customer.firstName,
        bookingRef:      booking.bookingRef,
        googleReviewUrl: GOOGLE_REVIEW_URL,
      })

      const result = await sendEmail({
        to:        booking.customer.email,
        subject:   'Votre avis nous intéresse — Grondin Déménagement',
        html,
        template:  'demande_avis',
        bookingId: booking.id,
      })

      if (result.success) {
        await prisma.booking.update({
          where: { id: booking.id },
          data:  { reviewRequestSent: true, reviewRequestAt: new Date() },
        })
        sent++
        results.push({ bookingRef: booking.bookingRef, status: 'sent' })
      } else {
        failed++
        results.push({ bookingRef: booking.bookingRef, status: 'failed', error: result.error })
      }
    }

    const duration = Date.now() - startTime
    console.log(`[CRON] Demande avis done in ${duration}ms: ${sent} sent, ${failed} failed`)

    return NextResponse.json({ success: true, duration, found: bookings.length, sent, failed, results })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[CRON] email-avis error:', msg)
    return NextResponse.json({ error: 'Cron job failed', message: msg }, { status: 500 })
  }
}
