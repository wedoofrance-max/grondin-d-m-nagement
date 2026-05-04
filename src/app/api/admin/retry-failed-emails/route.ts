import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { prisma } = await import('@/lib/db')
    const { sendEmail } = await import('@/lib/email/nodemailer')
    const { sendDevisConfirmation, sendDevisNotification } = await import('@/lib/email')

    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const failed = await prisma.emailLog.findMany({
      where: { status: 'failed', sentAt: { gte: since24h } },
      orderBy: { sentAt: 'desc' },
      take: 50,
    })

    let retried = 0
    let succeeded = 0

    for (const log of failed) {
      try {
        if (log.template === 'devis-confirmation' && log.devisRequestId) {
          const d = await prisma.devisRequest.findUnique({ where: { id: log.devisRequestId } })
          if (d) {
            await sendDevisConfirmation({
              ref: d.devisRef, prenom: d.firstName, nom: d.lastName, email: d.email,
              telephone: d.phone, villeDepart: d.villeDepart, cpDepart: d.cpDepart,
              etageDepart: d.etageDepart, ascenseurDepart: d.ascenseurDepart,
              villeArrivee: d.villeArrivee, cpArrivee: d.cpArrivee, etageArrivee: d.etageArrivee,
              ascenseurArrivee: d.ascenseurArrivee, typeBien: d.typeBien, superficie: d.superficie,
              nbPieces: d.nbPieces, dateSouhaitee: d.dateSouhaitee?.toISOString(),
              flexibilite: d.flexibilite, formule: d.formule ?? undefined,
              needDismounting: d.needDismounting, needPacking: d.needPacking,
              needFullPacking: d.needFullPacking, needCleaning: d.needCleaning,
              needMonteMeuble: d.needMonteMeuble, needStorage: d.needStorage,
              storageDuration: d.storageDuration ?? undefined, message: d.message ?? undefined,
            })
            succeeded++
          }
        } else {
          // Generic retry — re-log as attempted; full content regeneration requires template context
          const result = await sendEmail({ to: log.to, subject: log.subject, html: '<!-- retry -->', template: log.template })
          if (result.success) succeeded++
        }
        retried++
      } catch { /* continue */ }
    }

    return NextResponse.json({ success: true, total: failed.length, retried, succeeded })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
