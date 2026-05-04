import { NextRequest, NextResponse } from 'next/server'
import { sendDevisConfirmation, type DevisEmailData } from '@/lib/email'

export async function GET(req: NextRequest) {
  const secret = req.headers.get('authorization')?.replace('Bearer ', '')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { prisma } = await import('@/lib/db')

    const pending = await prisma.devisRequest.findMany({
      where: {
        emailSent: false,
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      },
      take: 50,
    })

    let sent = 0
    const errors: string[] = []

    for (const d of pending) {
      try {
        const emailData: DevisEmailData = {
          ref:              d.devisRef,
          prenom:           d.firstName,
          nom:              d.lastName,
          email:            d.email,
          telephone:        d.phone,
          villeDepart:      d.villeDepart,
          cpDepart:         d.cpDepart,
          etageDepart:      d.etageDepart,
          ascenseurDepart:  d.ascenseurDepart,
          villeArrivee:     d.villeArrivee,
          cpArrivee:        d.cpArrivee,
          etageArrivee:     d.etageArrivee,
          ascenseurArrivee: d.ascenseurArrivee,
          typeBien:         d.typeBien,
          superficie:       d.superficie,
          nbPieces:         d.nbPieces,
          dateSouhaitee:    d.dateSouhaitee?.toISOString(),
          flexibilite:      d.flexibilite,
          formule:          d.formule ?? undefined,
          needDismounting:  d.needDismounting,
          needPacking:      d.needPacking,
          needFullPacking:  d.needFullPacking,
          needCleaning:     d.needCleaning,
          needMonteMeuble:  d.needMonteMeuble,
          needStorage:      d.needStorage,
          storageDuration:  d.storageDuration ?? undefined,
          message:          d.message ?? undefined,
        }

        await sendDevisConfirmation(emailData)
        await prisma.devisRequest.update({ where: { id: d.id }, data: { emailSent: true } })
        await prisma.emailLog.create({
          data: {
            to:             d.email,
            subject:        'Confirmation de demande de devis',
            template:       'devis-confirmation',
            devisRequestId: d.id,
            status:         'sent',
          },
        })
        sent++
      } catch (err) {
        const msg = (err as Error).message
        errors.push(`${d.id}: ${msg}`)
        await prisma.emailLog.create({
          data: {
            to:             d.email,
            subject:        'Confirmation de demande de devis',
            template:       'devis-confirmation',
            devisRequestId: d.id,
            status:         'failed',
            errorMessage:   msg,
          },
        }).catch(() => {})
      }
    }

    return NextResponse.json({ processed: pending.length, sent, errors })
  } catch (err) {
    console.error('[CRON CONFIRMATION]', err)
    return NextResponse.json({ error: 'Erreur cron' }, { status: 500 })
  }
}
