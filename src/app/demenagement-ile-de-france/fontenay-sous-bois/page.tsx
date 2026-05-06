import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Fontenay-sous-Bois 94120 — Devis Gratuit | Grondin',
  description: 'Déménageur à Fontenay-sous-Bois (94120, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/fontenay-sous-bois' },
}

const FAQ = [
  {
    question: 'Fontenay-sous-Bois est en hauteur — y a-t-il des difficultés d\'accès ?',
    answer: 'Fontenay-sous-Bois est effectivement une ville en dénivelé, avec des rues parfois pentues et des accès variables selon les quartiers. Les secteurs proches du bois de Vincennes ont des rues étroites, tandis que le bas de la ville est plus accessible. Nous évaluons ces contraintes lors de la visite préalable.',
  },
  {
    question: 'Intervenez-vous dans tous les quartiers de Fontenay-sous-Bois ?',
    answer: 'Oui, nous couvrons l\'ensemble de Fontenay-sous-Bois : le plateau résidentiel avec ses villas, le bas de la ville avec ses immeubles collectifs, et le secteur du bois de Vincennes. Chaque quartier a ses spécificités d\'accès que nous prenons en compte.',
  },
  {
    question: 'Fontenay est reliée à Paris par le RER A — est-ce pratique pour organiser un déménagement ?',
    answer: 'Fontenay-sous-Bois est bien reliée à Paris (Vincennes, Nation) par le RER A. Pour nos camions, l\'accès se fait par l\'avenue de la République ou par Vincennes. Nos équipes s\'y rendent facilement et s\'y stationnent avec les autorisations nécessaires.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/fontenay-sous-bois#service',
  name: 'Déménagement Fontenay-sous-Bois',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Fontenay-sous-Bois', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/fontenay-sous-bois',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementFontenayPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Fontenay-sous-Bois', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/fontenay-sous-bois' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Fontenay-sous-Bois' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Fontenay-sous-Bois — Val-de-Marne (94120)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Fontenay-sous-Bois est une commune résidentielle du Val-de-Marne, appréciée pour sa proximité avec le bois de Vincennes et son cadre verdoyant. La ville est construite sur un plateau, ce qui crée des profils topographiques variés selon les quartiers.
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
              Votre déménageur à Fontenay-sous-Bois
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Fontenay-sous-Bois mêle villas avec jardins sur le plateau supérieur, immeubles collectifs des années 1960-80 dans le bas de la ville, et résidences récentes dans les secteurs rénovés. Les dénivelés et les rues en pente demandent parfois un matériel spécifique et une planification adaptée.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement effectue une visite préalable gratuite pour évaluer les accès, identifier les difficultés potentielles (pente, largeur de rue, escaliers) et vous remettre un devis précis sous 24h. Nous adaptons notre équipe et notre matériel à votre situation.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Val-de-Fontenay', 'Les Larris', 'Alouettes', 'Les Roseaux', 'Rigollots', 'Bois de Vincennes côté Fontenay'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Fontenay-sous-Bois (94120)</p>
              <p className="text-xs text-blue-700">Val-de-Marne (94), à l'est de Paris. RER A (Val-de-Fontenay, Fontenay-sous-Bois). Tissu pavillonnaire important dans les quartiers hauts — accès parfois en pente et rues étroites. Nos équipes évaluent l'accessibilité lors de la visite préalable.</p>
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
              <h3 className="font-bold mb-2">Devis Fontenay-sous-Bois</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Fontenay-sous-Bois" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
