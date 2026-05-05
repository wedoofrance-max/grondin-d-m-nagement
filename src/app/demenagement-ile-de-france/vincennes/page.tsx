import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Vincennes 94300 — Devis Gratuit | Grondin',
  description: 'Déménageur à Vincennes (94300, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/vincennes' },
}

const FAQ = [
  {
    question: 'Intervenez-vous à proximité du château de Vincennes et du bois ?',
    answer: 'Oui, nous couvrons tout Vincennes y compris les rues proches du château et du bois de Vincennes. La plupart des appartements vincennois sont dans des immeubles haussmanniens ou des copropriétés des années 1960-80, avec des configurations variées que nous évaluons lors de la visite.',
  },
  {
    question: 'Vincennes est-elle desservie facilement pour un déménagement avec camion ?',
    answer: 'Vincennes est accessible via le Cours de Vincennes ou le boulevard de la Bastille depuis Paris. La circulation est généralement fluide hors heures de pointe. Nous planifions l\'heure de départ pour optimiser les déplacements.',
  },
  {
    question: 'Pouvez-vous aider au déménagement d\'un appartement familial à Vincennes ?',
    answer: 'Oui, nous intervenons pour toutes les tailles de logements à Vincennes. Pour les appartements de grande surface ou les maisons, nous mobilisons une équipe de déménageurs adaptée au volume et vous proposons éventuellement un service d\'emballage si vous le souhaitez.',
  },
]

export default function DemenagementVincennesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Vincennes', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/vincennes' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Vincennes' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Vincennes — Val-de-Marne (94300)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Vincennes est une ville résidentielle très prisée, limitrophe du 12ème arrondissement de Paris et du bois de Vincennes. Elle offre un cadre de vie agréable avec un parc immobilier de qualité allant des immeubles anciens du centre aux résidences modernes des quartiers nord.
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
              Votre déménageur à Vincennes
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Les logements vincennois sont principalement des appartements dans des immeubles collectifs de bonne facture, ainsi que quelques maisons individuelles dans les rues calmes à l'est de la ville. Les immeubles du centre historique disposent souvent d'escaliers en pierre et d'ascenseurs plus petits, ce qui demande une planification rigoureuse pour les pièces volumineuses.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement organise une visite gratuite pour évaluer votre situation et vous remettre un devis personnalisé. Nous nous occupons des formalités auprès du syndic si votre immeuble l'exige, et intervenons avec une équipe dimensionnée à votre volume.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts à Vincennes</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Fontenay-sous-Bois côté Vincennes', 'Avenue de Paris', 'Château de Vincennes', 'Bois de Vincennes', 'Saint-Louis', 'Les Lacs'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Vincennes (94300)</p>
              <p className="text-xs text-blue-700">Limitrophe du 12ème arrondissement de Paris. Métro L1 (Château de Vincennes, terminus). Val-de-Marne (94). Nombreux immeubles avec couloirs étroits — notre monte-meubles est systématiquement disponible sur demande.</p>
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
              <h3 className="font-bold mb-2">Devis Vincennes</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Vincennes" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
