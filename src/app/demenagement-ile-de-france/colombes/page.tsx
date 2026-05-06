import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Colombes 92700 — Devis Gratuit | Grondin',
  description: 'Déménageur à Colombes (92700, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/colombes' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans tous les quartiers de Colombes ?',
    answer: 'Oui, nous couvrons l\'ensemble de Colombes : le Petit-Colombes, le centre-ville, le Fossé-Jean, le secteur proche de la Seine et les zones pavillonnaires. Nos équipes connaissent les spécificités d\'accès dans chaque quartier.',
  },
  {
    question: 'Colombes a beaucoup de maisons individuelles — êtes-vous équipés pour ce type de déménagement ?',
    answer: 'Absolument. Colombes possède un tissu important de maisons individuelles et pavillons, souvent avec jardin, cave et garage. Ce type de logement demande une organisation différente des appartements, avec souvent un plus grand volume et des accès plus larges. Nous adaptons le camion et l\'équipe en conséquence.',
  },
  {
    question: 'Quel est le délai pour obtenir un devis à Colombes ?',
    answer: 'Après la visite à domicile, vous recevez votre devis dans les 24 heures. Si vous souhaitez une estimation préliminaire par téléphone, nous pouvons vous en donner une indication après quelques questions sur votre logement.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/colombes#service',
  name: 'Déménagement Colombes',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Colombes', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/colombes',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementColombesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Colombes', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/colombes' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Colombes' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Colombes — Hauts-de-Seine (92700)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Colombes est une commune résidentielle des Hauts-de-Seine avec un parc immobilier mixte : pavillons, maisons de ville, immeubles collectifs anciens et résidences récentes. Une ville bien desservie, à seulement 15 km au nord-ouest de Paris.
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
              Votre déménageur à Colombes
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Colombes propose une variété de logements allant des appartements dans des immeubles collectifs des années 1960-80 aux maisons individuelles et pavillons avec jardins. Les déménagements de maison demandent généralement un volume plus important et une organisation plus poussée que les appartements, avec souvent des caves ou garages à vider en plus des pièces à vivre.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Grondin Déménagement vous accompagne avec une visite préalable gratuite pour estimer le volume exact, identifier les contraintes d'accès et vous proposer le matériel adapté. Nous gérons l'ensemble du déménagement de A à Z, couvert par notre assurance RC Professionnelle.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Colombes est une ville à dominante résidentielle, avec une majorité de maisons individuelles et de petits collectifs dans les quartiers du Petit-Colombes et des Fossés-Jean. Cette configuration favorise les déménagements de maisons ou de T4-T5, souvent plus volumineux, nécessitant de grands camions et des équipes dimensionnées en conséquence. La ville est bien desservie par la N192 et l'A86, ce qui facilite l'accès depuis Paris et les villes de la première couronne nord-ouest. Nos équipes connaissent les itinéraires alternatifs permettant d'éviter les congestions de l'A86 aux heures de pointe.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts à Colombes</h3>
              <div className="flex flex-wrap gap-2">
                {['Petit-Colombes', 'Centre-ville', 'Fossé-Jean', 'La Garenne', 'Zone des Vallons', 'Le Plateau', 'Bord-de-Seine', 'Les Fossés-Jean'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Colombes (92700)</p>
              <p className="text-xs text-blue-700">À 15 km au nord-ouest de Paris, desserte RER C (gare de Colombes) et Transilien L. Nombreuses maisons pavillonnaires avec accès direct sur rue — nous adaptons la taille du camion et l'équipe au volume.</p>
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
              <h3 className="font-bold mb-2">Devis Colombes</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Colombes" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
