import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    console.log('[CRON] Starting cleanup-expired-devis')

    const { prisma } = await import('@/lib/db')
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    const result = await prisma.devisRequest.deleteMany({
      where: {
        createdAt: { lt: thirtyDaysAgo },
        status: 'pending',
      },
    })

    console.log(`[CRON] Deleted ${result.count} expired devis requests`)
    return NextResponse.json({ success: true, deleted: result.count })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[CRON] cleanup-expired-devis error:', msg)
    return NextResponse.json({ error: 'Cleanup failed', message: msg }, { status: 500 })
  }
}
