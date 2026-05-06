import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Noisy-le-Grand 93160 — Devis Gratuit | Grondin',
  description: 'Déménageur à Noisy-le-Grand (93160, Seine-Saint-Denis). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/noisy-le-grand' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans le secteur du Mont d\'Est à Noisy-le-Grand ?',
    answer: 'Oui, nous couvrons l\'ensemble de Noisy-le-Grand, y compris le quartier du Mont d\'Est avec ses immeubles de bureaux et résidences associées, les quartiers résidentiels comme les Clos-Montfort, et le centre-ville. La diversité architecturale de Noisy demande une bonne connaissance du terrain.',
  },
  {
    question: 'Noisy-le-Grand est à cheval sur deux départements — où êtes-vous exactement ?',
    answer: 'Noisy-le-Grand est en Seine-Saint-Denis (93) mais se situe à la frontière du Val-de-Marne. Nous intervenons sans distinction dans toute la commune et ses alentours immédiats.',
  },
  {
    question: 'Comment se passe un déménagement dans les grandes résidences de Noisy-le-Grand ?',
    answer: 'Noisy-le-Grand dispose de plusieurs grandes résidences avec monte-charges de taille conséquente. Nous prenons contact avec le gardien ou le gestionnaire pour réserver les accès en amont. Le déménagement se déroule ensuite dans les règles de l\'art, avec protection des parties communes.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/noisy-le-grand#service',
  name: 'Déménagement Noisy-le-Grand',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Noisy-le-Grand', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/noisy-le-grand',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementNoisyLeGrandPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Noisy-le-Grand', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/noisy-le-grand' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Noisy-le-Grand' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Noisy-le-Grand — Seine-Saint-Denis (93160)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Noisy-le-Grand est une commune de l'est parisien bien desservie par le RER A et E, avec un habitat diversifié : grands ensembles réhabilités, résidences récentes du plateau, maisons individuelles et quartiers pavillonnaires en lisière de forêt.
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
              Votre déménageur à Noisy-le-Grand
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Noisy-le-Grand offre un parc immobilier très varié : barres et tours dans les quartiers Pavé Neuf et Les Clos, maisons individuelles dans les secteurs résidentiels proches des bois, appartements récents dans le centre-ville et le plateau du Mont d'Est. Ces configurations demandent des approches différentes selon le secteur.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement vous accompagne avec une visite préalable gratuite pour identifier les besoins spécifiques de votre logement. Nous établissons un devis personnalisé sous 24h et intervenons avec les équipements adaptés : monte-meubles si nécessaire, camion dimensionné à votre volume.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Mont d\'Est', 'Champy', 'Les Richardets', 'Pavé Neuf', 'Brou-sur-Chantereine', 'Les Fontenelles', 'Centre Ancien'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Noisy-le-Grand (93160)</p>
              <p className="text-xs text-blue-700">Seine-Saint-Denis (93), à 17 km à l'est de Paris. RER A (Noisy-le-Grand-Mont d'Est) et RER E (Noisy-le-Grand-Mont d'Est). Grands ensembles architecturaux emblématiques (Abraxas, Arènes de Picasso) — nos équipes maîtrisent les contraintes d'accès de ces résidences complexes.</p>
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
              <h3 className="font-bold mb-2">Devis Noisy-le-Grand</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Noisy-le-Grand" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
