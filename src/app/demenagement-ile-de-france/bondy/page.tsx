import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Bondy 93140 — Devis Gratuit | Grondin',
  description: 'Déménageur à Bondy (93140, Seine-Saint-Denis). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/bondy' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans tous les quartiers de Bondy ?',
    answer: 'Oui, nous couvrons l\'ensemble de Bondy, y compris les quartiers résidentiels autour du canal de l\'Ourcq, les zones plus denses du centre-ville et les secteurs pavillonnaires. Bondy est une ville que nos équipes connaissent bien.',
  },
  {
    question: 'Comment organisez-vous un déménagement depuis Paris vers Bondy ?',
    answer: 'Bondy est accessible depuis Paris par l\'A3 ou la RN3. Le trajet en camion depuis Paris prend 20-30 minutes selon le trafic. Nous planifions le départ en matinée pour éviter les heures de pointe sur ces axes. Un déménagement Paris-Bondy se réalise généralement en une journée pour des volumes standards.',
  },
  {
    question: 'Bondy se développe — gérez-vous les déménagements dans les nouveaux programmes ?',
    answer: 'Oui, Bondy bénéficie de nouveaux programmes résidentiels liés au développement du Grand Paris Express (ligne 15). Ces immeubles neufs sont généralement bien équipés pour les déménagements. Nous coordonnons avec le gestionnaire pour les créneaux d\'accès.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/bondy#service',
  name: 'Déménagement Bondy',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Bondy', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/bondy',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementBondyPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Bondy', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/bondy' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Bondy' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Bondy — Seine-Saint-Denis (93140)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Bondy est une commune de la Seine-Saint-Denis bien desservie par le RER E et le tramway T4, avec un habitat mixte allant des immeubles collectifs aux quartiers pavillonnaires en bord du canal de l'Ourcq.
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
              Votre déménageur à Bondy
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Bondy présente des logements variés : grands ensembles réhabilités dans les quartiers nord, pavillons et maisons de ville dans les secteurs résidentiels, et résidences récentes dans les secteurs en développement autour des nouvelles gares du Grand Paris Express. La ville est en pleine évolution urbaine.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement vous accompagne avec une visite préalable gratuite pour préparer votre déménagement dans les meilleures conditions. Devis personnalisé sous 24h, équipe adaptée à votre volume et assurance RC Professionnelle incluse.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Les Coquetiers', 'Bondy Nord', 'Quartier de la Gare', 'Les Fauvettes', 'Cité Paul-Bert', 'Bobigny côté Bondy'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Bondy (93140)</p>
              <p className="text-xs text-blue-700">Seine-Saint-Denis (93), à 12 km à l'est de Paris. RER E (gare de Bondy) et future ligne 15. Mélange de grands ensembles et de pavillons dans les quartiers résidentiels. Nos équipes connaissent les contraintes de stationnement des résidences fermées avec digicode.</p>
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
              <h3 className="font-bold mb-2">Devis Bondy</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Bondy" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
