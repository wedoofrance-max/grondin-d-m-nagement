export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: { devisId: string } }
) {
  const { devisId } = params

  try {
    const { prisma } = await import('@/lib/db')
    const devis = await prisma.devisRequest.findUnique({
      where: { id: devisId },
      select: {
        id:        true,
        devisRef:  true,
        createdAt: true,
        status:    true,
        firstName: true,
        villeDepart:  true,
        villeArrivee: true,
        dateSouhaitee: true,
        formule:   true,
      },
    })

    if (!devis) {
      return NextResponse.json({ error: 'Devis introuvable' }, { status: 404 })
    }

    return NextResponse.json(devis)
  } catch (err) {
    console.error('[DEVIS GET]', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
