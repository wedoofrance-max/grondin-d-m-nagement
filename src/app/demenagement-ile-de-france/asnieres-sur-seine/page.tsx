import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Asnières-sur-Seine 92600 — Devis Gratuit | Grondin',
  description: 'Déménageur à Asnières-sur-Seine (92600, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/asnieres-sur-seine' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans tous les secteurs d\'Asnières-sur-Seine ?',
    answer: 'Oui, nous couvrons l\'ensemble d\'Asnières : le centre-ville avec ses immeubles anciens proches de la Seine, le quartier des Courtilles, le secteur Gabriel Péri et les zones plus résidentielles. Asnières offre une belle diversité d\'habitat que nos équipes ont l\'habitude de traiter.',
  },
  {
    question: 'Asnières est proche du métro parisien — facilitez-vous les déménagements vers Paris ?',
    answer: 'Oui, Asnières-sur-Seine est desservie par le métro 13 (Gabriel Péri), ce qui en fait une commune très proche de Paris. Nos camions ZFE-conformes transitent facilement entre Asnières et les arrondissements parisiens, idéalement en matinée pour éviter les heures de pointe.',
  },
  {
    question: 'Comment gérez-vous les appartements proches des bords de Seine à Asnières ?',
    answer: 'Les résidences en bord de Seine à Asnières sont souvent des immeubles récents avec de bons accès. Certains quais peuvent avoir des restrictions de circulation. Nous vérifions les accès lors de la visite préalable et obtenons les autorisations nécessaires le cas échéant.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/asnieres-sur-seine#service',
  name: 'Déménagement Asnières-sur-Seine',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Asnières-sur-Seine', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/asnieres-sur-seine',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementAsnieresSeinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Asnières-sur-Seine', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/asnieres-sur-seine' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Asnières-sur-Seine' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Asnières-sur-Seine — Hauts-de-Seine (92600)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Asnières-sur-Seine est une ville dynamique des Hauts-de-Seine, limitrophe de Clichy et directement reliée à Paris par le métro. Elle offre un habitat varié entre bords de Seine, immeubles anciens du centre et quartiers résidentiels.
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
              Votre déménageur à Asnières-sur-Seine
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Asnières-sur-Seine concentre des appartements dans des immeubles des années 1970-1990 côté Courtilles, des logements plus anciens en centre-ville avec escaliers typiques, et des résidences récentes dans les quartiers rénovés. La ville connaît également de nombreux emménagements liés à l'attractivité du Grand Paris Express.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement intervient à Asnières avec une visite préalable gratuite pour dresser l'inventaire et évaluer les conditions d'accès. Nous établissons un devis personnalisé sous 24h et coordonnons l'ensemble du déménagement avec soin.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Les Grésillons', 'Trois Ponts', 'Les Hauts d\'Asnières', 'Quartier des Bourguignons', 'Bords de Seine', 'Villeneuve-la-Garenne côté Asnières'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Asnières-sur-Seine (92600)</p>
              <p className="text-xs text-blue-700">Hauts-de-Seine (92), à 8 km au nord-ouest de Paris. RER C et Transilien J (gare d'Asnières-sur-Seine). Nombreux immeubles récents en bord de Seine. Nos camions accèdent aux quais avec les autorisations de stationnement adaptées.</p>
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
              <h3 className="font-bold mb-2">Devis Asnières-sur-Seine</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Asnières-sur-Seine" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
