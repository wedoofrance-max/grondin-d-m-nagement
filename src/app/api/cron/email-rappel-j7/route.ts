import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/nodemailer'
import { getRappelJ7HTML } from '@/lib/email/templates/rappelJ7'

export async function GET(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const startTime = Date.now()
    console.log('[CRON] Starting email-rappel-j7')

    const { prisma } = await import('@/lib/db')
    const sevenDaysFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const dayStart = new Date(new Date(sevenDaysFromNow).setHours(0, 0, 0, 0))
    const dayEnd   = new Date(new Date(sevenDaysFromNow).setHours(23, 59, 59, 999))

    const bookings = await prisma.booking.findMany({
      where: {
        movingDate:   { gte: dayStart, lte: dayEnd },
        status:       { in: ['confirmed', 'in_progress'] },
        reminderSent: false,
      },
      include: { customer: true },
      orderBy: { movingDate: 'asc' },
    })

    console.log(`[CRON] Found ${bookings.length} bookings for J-7 reminders`)

    let sent = 0
    let failed = 0
    const results: { bookingRef: string; status: string; error?: string }[] = []

    for (const booking of bookings) {
      const html = getRappelJ7HTML({
        firstName:        booking.customer.firstName,
        bookingRef:       booking.bookingRef,
        movingDate:       booking.movingDate.toISOString(),
        departureAddress: booking.departureAddress,
        arrivalAddress:   booking.arrivalAddress,
        movingTimeSlot:   booking.movingTimeSlot,
      })

      const result = await sendEmail({
        to:        booking.customer.email,
        subject:   'Votre déménagement dans 7 jours — Grondin Déménagement',
        html,
        template:  'rappel_j7',
        bookingId: booking.id,
      })

      if (result.success) {
        await prisma.booking.update({
          where: { id: booking.id },
          data:  { reminderSent: true, reminderSentAt: new Date() },
        })
        sent++
        results.push({ bookingRef: booking.bookingRef, status: 'sent' })
      } else {
        failed++
        results.push({ bookingRef: booking.bookingRef, status: 'failed', error: result.error })
      }
    }

    const duration = Date.now() - startTime
    console.log(`[CRON] Rappel J-7 done in ${duration}ms: ${sent} sent, ${failed} failed`)

    return NextResponse.json({ success: true, duration, found: bookings.length, sent, failed, results })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[CRON] email-rappel-j7 error:', msg)
    return NextResponse.json({ error: 'Cron job failed', message: msg }, { status: 500 })
  }
}
