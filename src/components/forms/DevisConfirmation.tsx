import { Icon } from '@iconify/react'
import Link from 'next/link'
import type { DevisData } from '@/types'

export function DevisConfirmation({ data }: { data: DevisData }) {
  return (
    <div className="text-center flex flex-col items-center gap-6 py-8">
      <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center">
        <Icon icon="ph:check-fat" width={32} height={32} className="text-success-500" aria-hidden />
      </div>

      <div>
        <h1 className="text-fluid-2xl font-bold text-neutral-900 mb-2">
          Demande reçue, {data.prenom} !
        </h1>
        <p className="text-neutral-600 max-w-md">
          Votre demande de devis pour un déménagement de{' '}
          <strong>{data.typeBien} de {data.superficie}m²</strong>{' '}
          a bien été transmise à notre équipe.
        </p>
      </div>

      <div className="bg-grondin-50 rounded-2xl p-6 text-left w-full max-w-sm">
        <p className="text-sm font-semibold text-grondin-800 mb-4 uppercase tracking-wide">
          Récapitulatif
        </p>
        <ul className="flex flex-col gap-2.5 text-sm text-neutral-700">
          <li className="flex items-center gap-2">
            <Icon icon="ph:house" width={16} height={16} className="text-grondin-500" aria-hidden />
            {data.typeBien} · {data.superficie}m² · {data.nbPieces} pièces
          </li>
          <li className="flex items-center gap-2">
            <Icon icon="ph:map-pin" width={16} height={16} className="text-grondin-500" aria-hidden />
            {data.villeDepart} → {data.villeArrivee}
          </li>
          {data.dateSouhaitee && (
            <li className="flex items-center gap-2">
              <Icon icon="ph:calendar-check" width={16} height={16} className="text-grondin-500" aria-hidden />
              {new Date(data.dateSouhaitee).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
            </li>
          )}
          <li className="flex items-center gap-2 capitalize">
            <Icon icon="ph:package" width={16} height={16} className="text-grondin-500" aria-hidden />
            Formule {data.formule}
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 text-sm text-neutral-500">
        <p className="flex items-center gap-2 justify-center">
          <Icon icon="ph:check-circle-fill" width={16} height={16} className="text-success-500" aria-hidden />
          Email de confirmation envoyé à {data.email}
        </p>
        <p className="flex items-center gap-2 justify-center">
          <Icon icon="ph:phone" width={16} height={16} className="text-grondin-500" aria-hidden />
          Notre équipe vous recontacte rapidement
        </p>
      </div>

      <Link
        href="/"
        className="text-grondin-500 hover:text-grondin-600 underline underline-offset-2 text-sm transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
