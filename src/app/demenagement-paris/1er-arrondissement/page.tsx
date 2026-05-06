import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris 1er — Louvre, Châtelet | Grondin',
  description: 'Déménageur dans le 1er arrondissement de Paris (Louvre, Châtelet, Les Halles). Grondin Déménagement : équipes expertes 7j/7, devis gratuit et personnalisé.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-paris/1er-arrondissement' },
}

const FAQ = [
  {
    question: 'Le 1er arrondissement est très central — y a-t-il des contraintes particulières pour le stationnement ?',
    answer: 'Oui, le 1er arrondissement est l\'un des plus contraignants de Paris pour le stationnement. Les rues piétonnes autour des Halles, la zone Châtelet et les quais de Seine imposent une planification rigoureuse. Nous obtenons si nécessaire les autorisations de stationnement en voie publique auprès de la Ville de Paris et intervenons souvent tôt le matin pour profiter des accès disponibles.',
  },
  {
    question: 'Les immeubles haussmanniens du 1er sont-ils difficiles à déménager ?',
    answer: 'Les immeubles haussmanniens ont des escaliers souvent étroits et des hauteurs sous plafond importantes qui compliquent le passage des pièces volumineuses. Nous évaluons ces contraintes lors de la visite préalable et utilisons le monte-meubles extérieur lorsque c\'est nécessaire.',
  },
  {
    question: 'Peut-on déménager dans le 1er arrondissement le week-end ?',
    answer: 'Oui, nous intervenons 7j/7 de 8h30 à 20h. Le week-end peut même être préférable dans certains secteurs du 1er, notamment autour des Halles et de Châtelet, où la circulation est parfois moins dense le samedi matin.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-paris/1er-arrondissement#service',
  name: 'Déménagement 1er arrondissement de Paris',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Paris', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-paris/1er-arrondissement',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementParis1Page() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Paris', href: 'https://grondin-demenagement.fr/demenagement-paris' },
        { label: 'Paris 1er', href: 'https://grondin-demenagement.fr/demenagement-paris/1er-arrondissement' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Déménagement Paris', href: '/demenagement-paris' },
            { label: 'Paris 1er' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement dans le 1er arrondissement de Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Le 1er arrondissement (75001) regroupe le Louvre, Châtelet, Les Halles et les quais de Seine. Un secteur très central avec des immeubles haussmanniens, des rues piétonnes et des contraintes d'accès spécifiques que nous maîtrisons.
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
              Votre déménageur dans le 1er arrondissement
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Le 1er arrondissement de Paris est l'un des plus touristiques et des plus contraints pour les déménagements. Les rues autour du Louvre, de la place du Palais-Royal et des quais de la Seine sont soumises à des restrictions de circulation permanentes ou temporaires. Les immeubles haussmanniens typiques du quartier ont des escaliers en pierre de taille avec de faibles largeurs de passage, ce qui exige souvent l'utilisation d'un monte-meubles extérieur pour les pièces volumineuses.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement anticipe ces spécificités lors de la visite préalable gratuite. Nous évaluons chaque logement, identifions les contraintes d'accès et planifions l'intervention avec soin. Votre devis vous est remis sous 24h, et nous gérons les autorisations de stationnement nécessaires. Le jour J, nos équipes protègent systématiquement les parties communes.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Louvre', 'Châtelet', 'Les Halles', 'Palais-Royal', 'Tuileries', 'Sainte-Opportune', 'La Cité'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Paris 1er — Code postal 75001</p>
              <p className="text-xs text-amber-700">Secteur ultra-central avec forte réglementation de stationnement. Rues piétonnes autour des Halles, quais de Seine soumis à restrictions. Nous obtenons les arrêtés de stationnement en amont et intervenons souvent dès 7h30 pour profiter des créneaux disponibles.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:users', title: '1 500+ clients', desc: 'Satisfaits à Paris et IDF' },
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
              <h3 className="font-bold mb-2">Devis gratuit 1er</h3>
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
            <Link href="/demenagement-paris" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Tous les arrondissements
            </Link>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Arrondissements voisins</p>
              <div className="flex flex-col gap-1">
                <Link href="/demenagement-paris/2eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 2ème arr.</Link>
                <Link href="/demenagement-paris/4eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 4ème arr.</Link>
                <Link href="/demenagement-paris/8eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 8ème arr.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement dans le 1er" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
