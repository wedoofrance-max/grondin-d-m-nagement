export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { DevisSchema } from '@/lib/validations'
import { prisma } from '@/lib/db'
import { sendDevisConfirmation, sendDevisNotification } from '@/lib/email'
import { z } from 'zod'

function generateRef(): string {
  const d = new Date()
  const yy = String(d.getFullYear()).slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `GRD-${yy}${mm}${dd}-${rand}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = DevisSchema.parse(body)

    const devisRef = generateRef()

    // 1. Sauvegarde DB
    const devisRequest = await prisma.devisRequest.create({
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
        formule:          data.formule,
        needDismounting:  data.needDismounting,
        needPacking:      data.needPacking,
        needFullPacking:  data.needFullPacking,
        needCleaning:     data.needCleaning,
        needMonteMeuble:  data.needMonteMeuble,
        needStorage:      data.needStorage,
        storageDuration:  data.storageDuration,
        movingType:       data.movingType,
        rgpdAccepted:     data.rgpdAccepted,
        newsletter:       data.newsletter,
        source:           data.source,
        utmSource:        data.utmSource,
        utmMedium:        data.utmMedium,
        utmCampaign:      data.utmCampaign,
        message:          data.message,
      },
    })

    const emailData = {
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

    // 2. Emails en parallèle — non-bloquants sur la réponse HTTP
    Promise.allSettled([
      sendDevisConfirmation(emailData),   // récap complet → visiteur
      sendDevisNotification(emailData),   // alerte → contact@grondin-demenagement.fr
    ]).then((results) => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.error(`[DEVIS] Email ${i === 0 ? 'confirmation' : 'notification'} failed:`, r.reason)
        }
      })
    })

    return NextResponse.json({ success: true, id: devisRequest.id, ref: devisRef }, { status: 201 })

  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides', details: err.issues }, { status: 400 })
    }
    console.error('[DEVIS] Erreur API:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
