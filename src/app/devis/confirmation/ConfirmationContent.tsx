'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { WhatsAppCTA } from '@/components/shared/WhatsAppCTA'

export function ConfirmationContent() {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref') ?? '—'

  return (
    <div className="min-h-[calc(100vh-280px)] bg-neutral-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Icône succès */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
            <Icon icon="ph:check-circle-fill" width={48} height={48} className="text-emerald-500" aria-hidden />
          </div>
          <h1 className="text-fluid-3xl font-bold text-neutral-900 mb-3">
            Demande bien envoyée !
          </h1>
          <p className="text-fluid-lg text-neutral-600">
            Notre équipe vous recontacte sous 24h.
          </p>
        </div>

        {/* Référence */}
        <div className="bg-grondin-50 border border-grondin-200 rounded-2xl p-5 mb-6 text-center">
          <p className="text-xs font-bold text-grondin-600 uppercase tracking-widest mb-2">
            Référence de votre demande
          </p>
          <p className="font-mono text-2xl font-bold text-grondin-700 tracking-wider">
            {ref}
          </p>
          <p className="text-xs text-neutral-500 mt-2">
            Conservez cette référence pour tout échange avec notre équipe.
          </p>
        </div>

        {/* Prochaines étapes */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-card divide-y divide-neutral-100 mb-8">
          {/* Étape 1 */}
          <div className="flex items-start gap-4 p-5">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-grondin-100 rounded-xl">
              <Icon icon="ph:phone-call" width={20} height={20} className="text-grondin-600" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Nous vous appelons sous 24h</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Un conseiller Grondin vous contacte au numéro indiqué pour affiner les détails de votre déménagement.
              </p>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="flex items-start gap-4 p-5">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-grondin-100 rounded-xl">
              <Icon icon="ph:house-line" width={20} height={20} className="text-grondin-600" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Visite sur place</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Nous organisons une visite à votre domicile pour établir un inventaire précis et vous remettre un devis personnalisé.
              </p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex items-start gap-4 p-5">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-grondin-100 rounded-xl">
              <Icon icon="ph:file-text" width={20} height={20} className="text-grondin-600" aria-hidden />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Votre devis</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Vous recevez une offre ferme et personnalisée. Devis 100&nbsp;% gratuit et sans engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Email confirmation */}
        <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl mb-8 text-sm text-emerald-700">
          <Icon icon="ph:envelope-simple-check" width={20} height={20} className="flex-shrink-0 mt-0.5" aria-hidden />
          <p>
            Un email récapitulatif vous a été envoyé. Vérifiez vos spams si vous ne le trouvez pas.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-semibold hover:bg-grondin-600 transition-colors"
          >
            <Icon icon="ph:house" width={18} height={18} aria-hidden />
            Retour à l&apos;accueil
          </Link>

          <a
            href="tel:+33185440050"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl font-semibold hover:border-grondin-400 hover:text-grondin-600 transition-colors"
          >
            <Icon icon="ph:phone" width={18} height={18} aria-hidden />
            01 85 44 00 50
          </a>

          <WhatsAppCTA
            message={`Bonjour, ma demande de devis est la référence ${ref}`}
            source="confirmation_page"
            size="md"
          />
        </div>

      </div>
    </div>
  )
}
