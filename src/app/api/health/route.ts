export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    if (!prisma) {
      return Response.json({ status: 'healthy', database: 'not configured' }, { status: 200 })
    }
    await prisma.$queryRaw`SELECT 1`
    return Response.json({ status: 'healthy', database: 'connected' }, { status: 200 })
  } catch (error) {
    return Response.json(
      { status: 'degraded', database: 'unreachable', error: error instanceof Error ? error.message : 'unknown' },
      { status: 200 }
    )
  }
}
