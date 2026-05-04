import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Montrouge 92120 — Devis Gratuit | Grondin',
  description: 'Déménageur à Montrouge (92120, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/montrouge' },
}

const FAQ = [
  {
    question: 'Montrouge est directement adjacent au 14ème — est-ce facile de déménager vers Paris ?',
    answer: 'Montrouge est l\'une des communes les mieux placées pour déménager vers Paris (14ème arrondissement). La continuité urbaine est totale et nos camions transitent sans difficulté. Nos véhicules sont ZFE-conformes pour circuler librement des deux côtés du périphérique.',
  },
  {
    question: 'Montrouge est très dense — comment gérez-vous le stationnement ?',
    answer: 'Montrouge est effectivement une commune très dense avec peu de places de stationnement. Nous anticipons cette contrainte en demandant si nécessaire une autorisation de stationnement en voie publique, ou en intervenant très tôt le matin pour profiter des places disponibles.',
  },
  {
    question: 'Intervenez-vous dans les résidences récentes de Montrouge ?',
    answer: 'Oui. Montrouge a connu un fort développement immobilier ces dernières années avec de nombreux programmes neufs, notamment autour de la station de métro Montrouge. Ces immeubles sont généralement bien équipés pour les déménagements (monte-charges spacieux, accès livraisons). Nous coordonnons avec le gardien pour les créneaux.',
  },
]

export default function DemenagementMontrougePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Montrouge', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/montrouge' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Montrouge' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Montrouge — Hauts-de-Seine (92120)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Montrouge est une commune très prisée des Hauts-de-Seine, directement au sud de Paris (14ème arrondissement). Sa proximité avec la capitale et ses nombreuses lignes de transport en commun en font une ville très dynamique avec un marché immobilier actif.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Devis gratuit
            </Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />
              01 85 44 00 50
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">
              Votre déménageur à Montrouge
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Montrouge concentre principalement des appartements dans des immeubles collectifs de différentes générations : immeubles anciens du centre-ville, résidences des années 1970-80, et de nombreux programmes neufs construits depuis les années 2000. La densité de la ville impose une organisation précise, notamment pour le stationnement et l'accès aux monte-charges.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement vous accompagne avec une visite préalable gratuite pour anticiper les contraintes de votre immeuble et vous remettre un devis personnalisé sous 24h. Nous gérons les formalités avec votre syndic ou gardien et protégeons systématiquement les parties communes.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:map-pin', title: 'Intervention locale', desc: 'Équipes basées en Île-de-France' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-grondin-50 rounded-xl">
                  <Icon icon={item.icon} width={20} height={20} className="text-grondin-500 flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{item.title}</p>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Devis Montrouge</h3>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Mon devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                <Icon icon="ph:phone" width={16} height={16} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
            <Link href="/demenagement-ile-de-france" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Toutes les villes IDF
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement à Montrouge" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
