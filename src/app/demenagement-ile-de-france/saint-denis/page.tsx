import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Saint-Denis 93200 — Devis Gratuit | Grondin',
  description: 'Déménageur à Saint-Denis (93200, Seine-Saint-Denis). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/saint-denis' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans tous les secteurs de Saint-Denis ?',
    answer: 'Oui, nous couvrons l\'ensemble de Saint-Denis : le centre-ville historique proche de la Basilique, le quartier Pleyel en pleine transformation, la Plaine Saint-Denis avec ses nombreux logements neufs, et les secteurs résidentiels plus calmes. Chaque quartier présente des accès différents que nous évaluons lors de la visite préalable.',
  },
  {
    question: 'Saint-Denis accueille beaucoup de nouveaux logements — gérez-vous les déménagements dans les immeubles récents ?',
    answer: 'Oui, la Plaine Saint-Denis et le secteur Pleyel voient sortir de nombreux programmes neufs. Ces immeubles disposent généralement de monte-charges et d\'accès véhicules aménagés. Nous coordonnons avec le gardien ou le promoteur pour les créneaux de livraison.',
  },
  {
    question: 'Saint-Denis est-elle bien reliée à Paris pour les déménagements ?',
    answer: 'Saint-Denis est à moins de 10 km de Paris, accessible par l\'A1, le boulevard Ornano ou le boulevard Ney. La proximité est un atout pour les déménagements Paris-Saint-Denis, avec des temps de trajet limités et des camions conformes aux normes de circulation.',
  },
]

export default function DemenagementSaintDenisPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Saint-Denis', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/saint-denis' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Saint-Denis' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Saint-Denis — Seine-Saint-Denis (93200)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Saint-Denis est une ville en pleine mutation, notamment avec le développement de la Plaine Saint-Denis et du secteur Pleyel. Elle concentre des logements anciens, des grands ensembles et un nombre croissant de programmes résidentiels neufs.
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
              Votre déménageur à Saint-Denis
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Saint-Denis propose une diversité de logements : immeubles anciens du centre historique avec escaliers étroits, tours et barres des années 1970 dans les quartiers Franc-Moisin ou Cristino Garcia, et résidences récentes dans la Plaine Saint-Denis. Cette variété demande une équipe expérimentée et du matériel adapté.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement effectue une visite gratuite pour dresser l'inventaire et évaluer les accès. Nous planifions l'intervention en tenant compte des contraintes de circulation locales et protégeons systématiquement les parties communes. Notre devis vous est remis sous 24h.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Basilique', 'Franc-Moisin', 'Pleyel', 'La Plaine Saint-Denis', 'Stade de France', 'Floréal-Saussaie-Allende'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Saint-Denis (93200)</p>
              <p className="text-xs text-blue-700">Seine-Saint-Denis (93), à 9 km au nord de Paris. Métro L13 (Saint-Denis-Porte de Paris) et RER B/D (Saint-Denis). Fort renouvellement urbain dans le secteur Pleyel (future Cité musicale) et La Plaine. Nos camions sont conformes ZFE pour accéder aux nouvelles résidences du secteur.</p>
            </div>

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
              <h3 className="font-bold mb-2">Devis Saint-Denis</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Saint-Denis" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
