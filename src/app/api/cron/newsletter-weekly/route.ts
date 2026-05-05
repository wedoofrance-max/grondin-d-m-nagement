export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { sendBatchEmails } from '@/lib/email/nodemailer'
import { getNewsletterWeeklyHTML } from '@/lib/email/templates/newsletterWeekly'

export async function GET(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const startTime = Date.now()
    console.log('[CRON] Starting newsletter-weekly')

    const { prisma } = await import('@/lib/db')
    const subscribers = await prisma.customer.findMany({
      where: { newsletter: true },
      select: { email: true, firstName: true },
    })

    console.log(`[CRON] Found ${subscribers.length} newsletter subscribers`)

    const emails = subscribers.map((s) => ({
      to:       s.email,
      subject:  'Nos conseils déménagement cette semaine — Grondin',
      html:     getNewsletterWeeklyHTML({ firstName: s.firstName || 'Cher client', email: s.email }),
      template: 'newsletter_weekly',
    }))

    const result = await sendBatchEmails(emails, 10)
    const duration = Date.now() - startTime

    console.log(`[CRON] Newsletter done in ${duration}ms: ${result.sent} sent, ${result.failed} failed`)
    return NextResponse.json({ success: true, total: subscribers.length, ...result, duration })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[CRON] newsletter-weekly error:', msg)
    return NextResponse.json({ error: 'Newsletter send failed', message: msg }, { status: 500 })
  }
}
