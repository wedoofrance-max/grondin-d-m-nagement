import type { Metadata } from 'next'
import { DevisForm } from '@/components/forms/DevisForm'
import { Icon } from '@iconify/react'
import { TrustBadge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title:       'Devis Déménagement Gratuit — Paris & IDF',
  description: 'Obtenez votre devis de déménagement gratuit en quelques clics. Sans engagement. Grondin Déménagement intervient à Paris et en Île-de-France 7j/7.',
  alternates:  { canonical: 'https://grondin-demenagement.fr/devis' },
}

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header page */}
      <div className="bg-grondin-900 py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <p className="text-grondin-300 text-xs font-semibold uppercase tracking-widest mb-3">
            100% gratuit · Sans engagement
          </p>
          <h1 className="text-fluid-4xl font-extrabold text-white mb-4">
            Votre devis de déménagement
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Remplissez le formulaire en quelques clics et notre équipe vous recontacte rapidement avec une estimation personnalisée.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Formulaire */}
          <DevisForm />

          {/* Sidebar réassurance */}
          <aside className="hidden lg:flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-6">
              <h2 className="text-base font-bold text-neutral-900 mb-4">
                Pourquoi choisir Grondin ?
              </h2>
              <div className="flex flex-col divide-y divide-neutral-100">
                <TrustBadge icon="ph:star-fill"    label="4,9/5 Google"         sub="34 avis vérifiés" />
                <TrustBadge icon="ph:users-three"  label="1 500+ clients"        sub="Accompagnés depuis notre création" />
                <TrustBadge icon="ph:clock"        label="Disponible 7j/7"       sub="De 8h30 à 20h00" />
                <TrustBadge icon="ph:shield-check" label="Assurance incluse"     sub="RC Pro sur chaque déménagement" />
                <TrustBadge icon="ph:handshake"    label="20+ partenaires B2B"   sub="Réseau professionnel établi" />
              </div>
            </div>

            <div className="bg-grondin-50 rounded-2xl border border-grondin-100 p-6">
              <h2 className="text-sm font-bold text-grondin-900 mb-3">Besoin d&apos;aide ?</h2>
              <p className="text-sm text-neutral-600 mb-4">
                Notre équipe est disponible pour répondre à toutes vos questions.
              </p>
              <a
                href="tel:+33185440050"
                className="flex items-center gap-2 text-grondin-600 font-semibold hover:text-grondin-700 transition-colors"
              >
                <Icon icon="ph:phone" width={18} height={18} aria-hidden />
                01 85 44 00 50
              </a>
              <p className="text-xs text-neutral-500 mt-1">7j/7 · 8h30–20h00</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
