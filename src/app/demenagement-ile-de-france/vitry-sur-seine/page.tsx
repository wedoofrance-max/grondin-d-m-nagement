import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Vitry-sur-Seine 94400 — Devis Gratuit | Grondin',
  description: 'Déménageur à Vitry-sur-Seine (94400, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/vitry-sur-seine' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans le secteur Mac-Val et les quartiers proches de la Seine à Vitry ?',
    answer: 'Oui, nous couvrons l\'ensemble de Vitry-sur-Seine : les quartiers proches de la Seine, le centre-ville, les secteurs en rénovation du Grand Paris et les zones pavillonnaires au sud. La ville connaît un fort développement résidentiel que nous suivons de près.',
  },
  {
    question: 'Vitry-sur-Seine se développe beaucoup — gérez-vous les déménagements dans les immeubles neufs ?',
    answer: 'Oui, Vitry connaît de nombreuses livraisons de programmes neufs. Ces immeubles disposent souvent de monte-charges spacieux et d\'accès véhicules aménagés. Nous coordonnons avec le promoteur ou le gestionnaire pour les créneaux de livraison.',
  },
  {
    question: 'Comment accéder à Vitry-sur-Seine depuis Paris pour un déménagement ?',
    answer: 'Vitry-sur-Seine est accessible via l\'A86, l\'avenue de Paris (N19) ou le périphérique. Depuis Paris (13ème arrondissement), la route est directe et rapide. Nous planifions nos interventions tôt le matin pour profiter d\'un trafic réduit.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/vitry-sur-seine#service',
  name: 'Déménagement Vitry-sur-Seine',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Vitry-sur-Seine', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/vitry-sur-seine',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementVitrySeinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Vitry-sur-Seine', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/vitry-sur-seine' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Vitry-sur-Seine' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Vitry-sur-Seine — Val-de-Marne (94400)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Vitry-sur-Seine est une grande commune du Val-de-Marne en pleine transformation urbaine, avec de nombreux programmes de logements neufs et des quartiers résidentiels établis. Une ville dont le parc immobilier est en constante évolution.
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
              Votre déménageur à Vitry-sur-Seine
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Vitry-sur-Seine présente des logements très variés : grands ensembles dans les secteurs nord proches de Paris, maisons individuelles dans les quartiers sud, résidences neuves livrées dans le cadre du Grand Paris Express, et anciens logements ouvriers reconvertis. Cette diversité demande une équipe expérimentée et polyvalente.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement vous accompagne avec une visite préalable gratuite pour préparer votre déménagement dans les meilleures conditions. Devis personnalisé sous 24h, équipe dédiée et assurance RC Professionnelle incluse dans chaque prestation.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Grand-Vitry', 'Plateau-Balzac', 'Raimbouillet', 'Les Ardoines', 'Bords de Seine', 'Moulin de Saquet'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Vitry-sur-Seine (94400)</p>
              <p className="text-xs text-blue-700">Val-de-Marne (94), limitrophe d'Ivry-sur-Seine et Choisy-le-Roi. RER C (gare de Vitry-sur-Seine) et Métro L7 (Villejuif-Louis-Aragon côté Vitry). Secteur des Ardoines en pleine transformation urbaine — nombreux programmes neufs avec accès chantier. Nous sécurisons les interventions en milieu de construction.</p>
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
              <h3 className="font-bold mb-2">Devis Vitry-sur-Seine</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Vitry-sur-Seine" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
