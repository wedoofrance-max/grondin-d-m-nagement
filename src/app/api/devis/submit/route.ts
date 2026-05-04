import { NextRequest, NextResponse } from 'next/server'
import { DevisSchema } from '@/lib/validations'
import { sendDevisConfirmation, sendDevisNotification, type DevisEmailData } from '@/lib/email'
import { z } from 'zod'

function generateDevisRef(): string {
  const date = new Date()
  const yy   = date.getFullYear().toString().slice(-2)
  const mm   = String(date.getMonth() + 1).padStart(2, '0')
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `GRD-${yy}${mm}-${rand}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = DevisSchema.parse(body)

    const devisRef = generateDevisRef()
    let savedId    = devisRef

    // Persist to DB (requires DATABASE_URL in env)
    try {
      const { prisma } = await import('@/lib/db')
      const record = await prisma.devisRequest.create({
        data: {
          devisRef,
          firstName:        data.prenom,
          lastName:         data.nom,
          email:            data.email,
          phone:            data.telephone,
          villeDepart:      data.villeDepart,
          cpDepart:         data.cpDepart,
          etageDepart:      data.etageDepart,
          ascenseurDepart:  data.ascenseurDepart,
          villeArrivee:     data.villeArrivee,
          cpArrivee:        data.cpArrivee,
          etageArrivee:     data.etageArrivee,
          ascenseurArrivee: data.ascenseurArrivee,
          typeBien:         data.typeBien,
          superficie:       data.superficie,
          nbPieces:         data.nbPieces,
          dateSouhaitee:    data.dateSouhaitee ? new Date(data.dateSouhaitee) : null,
          flexibilite:      data.flexibilite,
          formule:          data.formule ?? null,
          needDismounting:  data.needDismounting,
          needPacking:      data.needPacking,
          needFullPacking:  data.needFullPacking,
          needCleaning:     data.needCleaning,
          needMonteMeuble:  data.needMonteMeuble,
          needStorage:      data.needStorage,
          storageDuration:  data.storageDuration ?? null,
          movingType:       data.movingType,
          source:           data.source ?? null,
          utmSource:        data.utmSource ?? null,
          utmMedium:        data.utmMedium ?? null,
          utmCampaign:      data.utmCampaign ?? null,
          message:          data.message ?? null,
          rgpdAccepted:     data.rgpdAccepted,
          newsletter:       data.newsletter,
          emailSent:        false,
        },
      })
      savedId = record.id
    } catch (dbErr) {
      console.error('[DEVIS] DB unavailable:', (dbErr as Error).message)
    }

    const emailData: DevisEmailData = {
      ref:              devisRef,
      prenom:           data.prenom,
      nom:              data.nom,
      email:            data.email,
      telephone:        data.telephone,
      villeDepart:      data.villeDepart,
      cpDepart:         data.cpDepart,
      etageDepart:      data.etageDepart,
      ascenseurDepart:  data.ascenseurDepart,
      villeArrivee:     data.villeArrivee,
      cpArrivee:        data.cpArrivee,
      etageArrivee:     data.etageArrivee,
      ascenseurArrivee: data.ascenseurArrivee,
      typeBien:         data.typeBien,
      superficie:       data.superficie,
      nbPieces:         data.nbPieces,
      dateSouhaitee:    data.dateSouhaitee,
      flexibilite:      data.flexibilite,
      formule:          data.formule,
      needDismounting:  data.needDismounting,
      needPacking:      data.needPacking,
      needFullPacking:  data.needFullPacking,
      needCleaning:     data.needCleaning,
      needMonteMeuble:  data.needMonteMeuble,
      needStorage:      data.needStorage,
      storageDuration:  data.storageDuration,
      message:          data.message,
    }

    // Confirmation récapitulative au client
    try {
      await sendDevisConfirmation(emailData)
    } catch (e) {
      console.error('[DEVIS] Client email failed:', (e as Error).message)
    }

    // Fiche complète à l'équipe Grondin
    try {
      await sendDevisNotification(emailData)
    } catch (e) {
      console.error('[DEVIS] Internal email failed:', (e as Error).message)
    }

    console.log('[DEVIS]', devisRef, '—', data.prenom, data.nom, '—', data.villeDepart, '→', data.villeArrivee)

    return NextResponse.json({ success: true, id: savedId, ref: devisRef }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides', details: err.issues }, { status: 400 })
    }
    console.error('[DEVIS] Unexpected error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
