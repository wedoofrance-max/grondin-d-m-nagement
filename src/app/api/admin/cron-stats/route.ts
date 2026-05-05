export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { prisma } = await import('@/lib/db')
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const since7d  = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const [
      rappelsSent,
      avisRequests,
      emailsLast24h,
      failedLast24h,
      byTemplate,
      pendingDevis,
      totalSubscribers,
    ] = await Promise.all([
      prisma.booking.count({ where: { reminderSent: true } }),
      prisma.booking.count({ where: { reviewRequestSent: true } }),
      prisma.emailLog.count({ where: { sentAt: { gte: since24h } } }),
      prisma.emailLog.count({ where: { status: 'failed', sentAt: { gte: since24h } } }),
      prisma.emailLog.groupBy({ by: ['template', 'status'], _count: true, where: { sentAt: { gte: since7d } } }),
      prisma.devisRequest.count({ where: { status: 'pending' } }),
      prisma.customer.count({ where: { newsletter: true } }),
    ])

    return NextResponse.json({
      rappelsSent,
      avisRequests,
      emailsLast24h,
      failedLast24h,
      deliveryRate: emailsLast24h > 0
        ? Math.round(((emailsLast24h - failedLast24h) / emailsLast24h) * 100)
        : 100,
      byTemplate,
      pendingDevis,
      totalSubscribers,
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
