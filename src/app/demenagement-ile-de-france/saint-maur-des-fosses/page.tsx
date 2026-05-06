import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Saint-Maur-des-Fossés 94100 — Devis Gratuit | Grondin',
  description: 'Déménageur à Saint-Maur-des-Fossés (94100, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/saint-maur-des-fosses' },
}

const FAQ = [
  {
    question: 'Saint-Maur-des-Fossés est une grande ville — couvrez-vous tous les quartiers ?',
    answer: 'Oui, nous couvrons l\'ensemble de Saint-Maur-des-Fossés avec ses nombreux quartiers : La Varenne, Le Parc, Adamville, La Pie, Les Murets. Saint-Maur est une ville étendue avec une grande diversité de logements, des maisons de ville aux résidences balnéaires en bord de Marne.',
  },
  {
    question: 'Saint-Maur a beaucoup de maisons individuelles — comment organisez-vous ces déménagements ?',
    answer: 'Saint-Maur-des-Fossés est connue pour son tissu pavillonnaire dense avec de nombreuses maisons individuelles, souvent avec jardin, garage et cave. Ces déménagements nécessitent généralement un plus grand volume de transport et une équipe plus importante. La visite préalable nous permet de calibrer précisément les ressources nécessaires.',
  },
  {
    question: 'Peut-on déménager facilement de Saint-Maur vers Paris ?',
    answer: 'Saint-Maur est à environ 15 km du centre de Paris, accessible via l\'A4 ou la RN4. Nos camions peuvent y accéder facilement en 20-30 minutes selon l\'heure. Un déménagement Saint-Maur-Paris se planifie en une journée pour des volumes standards.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/saint-maur-des-fosses#service',
  name: 'Déménagement Saint-Maur-des-Fossés',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Saint-Maur-des-Fossés', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/saint-maur-des-fosses',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementSaintMaurPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Saint-Maur-des-Fossés', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/saint-maur-des-fosses' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Saint-Maur-des-Fossés' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Saint-Maur-des-Fossés — Val-de-Marne (94100)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Saint-Maur-des-Fossés est l'une des communes les plus étendues et résidentielles du Val-de-Marne, avec ses quartiers en bord de Marne, ses maisons de caractère et ses rues arborées prisées des familles.
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
              Votre déménageur à Saint-Maur-des-Fossés
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Saint-Maur-des-Fossés est une ville essentiellement résidentielle, dominée par les maisons individuelles et les villas dans les secteurs de La Varenne et du Parc, ainsi que quelques immeubles collectifs dans les zones plus urbanisées. Les rues sont souvent larges et les accès relativement aisés pour les camions de déménagement.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement réalise une visite préalable gratuite pour évaluer votre logement et établir un devis détaillé sous 24h. Pour les maisons volumineuses, nous dimensionnons l'équipe et le camion en conséquence et planifions le déménagement sur la durée nécessaire.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['La Varenne-Saint-Hilaire', 'Saint-Maur-des-Fossés centre', 'Le Parc Saint-Maur', 'Adamville', 'Bonneuil côté Saint-Maur', 'Chennevières côté Saint-Maur', 'Bords de Marne'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Saint-Maur-des-Fossés (94100)</p>
              <p className="text-xs text-blue-700">Val-de-Marne (94), en boucle de la Marne à 14 km de Paris. RER A (La Varenne-Chennevières, Le Parc Saint-Maur, Saint-Maur-Créteil). Nombreuses maisons bourgeoises et pavillons avec jardin — déménagements souvent plus volumineux nécessitant un grand camion et une équipe renforcée.</p>
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
              <h3 className="font-bold mb-2">Devis Saint-Maur-des-Fossés</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Saint-Maur-des-Fossés" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
