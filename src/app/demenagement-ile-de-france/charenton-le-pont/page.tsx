import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Charenton-le-Pont 94220 — Devis Gratuit | Grondin',
  description: 'Déménageur à Charenton-le-Pont (94220, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/charenton-le-pont' },
}

const FAQ = [
  {
    question: 'Charenton-le-Pont est directement adjacent à Paris — comment se passent les déménagements ?',
    answer: 'Charenton-le-Pont est limitrophe de Paris (12ème arrondissement), ce qui facilite les déménagements entre les deux communes. Nos camions ZFE-conformes circulent sans restriction dans les deux sens. Le passage par le pont de Charenton ou par l\'A4 permet des temps de trajet très courts.',
  },
  {
    question: 'Intervenez-vous dans les résidences haut de gamme de Charenton ?',
    answer: 'Oui, Charenton-le-Pont dispose de nombreuses résidences de qualité, notamment dans les secteurs proches des berges de la Marne et du quai de Bercy. Nos équipes sont formées pour intervenir dans ces environnements avec le soin et la discrétion requis.',
  },
  {
    question: 'Proposez-vous un service de stockage temporaire pour les déménagements à Charenton ?',
    answer: 'Nous pouvons orienter vers des solutions de stockage temporaire si vous avez un délai entre votre départ et votre arrivée dans votre nouveau logement. Contactez-nous pour étudier cette option selon votre planning.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/charenton-le-pont#service',
  name: 'Déménagement Charenton-le-Pont',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Charenton-le-Pont', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/charenton-le-pont',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementCharentonPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Charenton-le-Pont', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/charenton-le-pont' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Charenton-le-Pont' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Charenton-le-Pont — Val-de-Marne (94220)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Charenton-le-Pont est une commune très bien placée, directement adjacent au 12ème arrondissement de Paris, avec un parc immobilier de qualité combinant immeubles anciens, résidences modernes et quelques maisons de ville en bord de Marne.
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
              Votre déménageur à Charenton-le-Pont
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Charenton-le-Pont est une commune résidentielle appréciée pour sa proximité immédiate avec Paris et ses berges de la Marne. Le parc immobilier comprend des appartements haussmanniens dans le vieux Charenton, des résidences récentes dans le secteur de la Gare et des maisons en bordure de rivière dans les rues calmes.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement intervient à Charenton-le-Pont avec la même rigueur qu'à Paris : visite préalable gratuite, devis sous 24h, équipe adaptée et protection des parties communes. La proximité avec Paris nous permet d'intervenir avec des délais réduits et une grande flexibilité horaire.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Bercy Village côté Charenton', 'Les Quatre-Chemins', 'Plateau de Gravelle', 'Bords de Marne', 'Alfortville côté Charenton', 'Saint-Maurice'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Infos pratiques — Charenton-le-Pont (94220)</p>
              <p className="text-xs text-amber-700">Val-de-Marne (94), limitrophe du 12ème arrondissement de Paris. Métro L8 (Charenton-Écoles, École Vétérinaire). Zone ZFE Grand Paris — nos camions sont conformes Crit'Air pour circuler vers Paris sans restriction.</p>
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
              <h3 className="font-bold mb-2">Devis Charenton-le-Pont</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Charenton-le-Pont" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
