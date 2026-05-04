import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Bagneux 92220 — Devis Gratuit | Grondin',
  description: 'Déménageur à Bagneux (92220, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/bagneux' },
}

const FAQ = [
  {
    question: 'Bagneux est en pleine transformation urbaine — comment intervenez-vous dans les immeubles récents ?',
    answer: 'Bagneux bénéficie d\'un fort développement résidentiel lié au Grand Paris Express (ligne 4 prolongée). Les nouveaux immeubles sont généralement bien équipés pour les déménagements avec des monte-charges spacieux et des accès livraisons. Nous coordonnons avec le gestionnaire pour les créneaux.',
  },
  {
    question: 'Intervenez-vous dans les grands ensembles de Bagneux ?',
    answer: 'Oui, nous couvrons l\'ensemble de Bagneux, y compris les grandes résidences comme les Blagis, Les Tertres et les secteurs de la Pierre Plate. Ces immeubles ont souvent des monte-charges de grande dimension, ce qui facilite le transport des meubles volumineux.',
  },
  {
    question: 'Bagneux est proche de Montrouge et Malakoff — est-ce facile d\'y accéder ?',
    answer: 'Oui, Bagneux est bien desservie par la N20, l\'A86 et les rues reliant Montrouge et Chatillon. Nos camions s\'y rendent facilement et peuvent enchaîner avec des déménagements dans les communes voisines.',
  },
]

export default function DemenagementBagneuxPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Bagneux', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/bagneux' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Bagneux' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Bagneux — Hauts-de-Seine (92220)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Bagneux est une commune des Hauts-de-Seine en forte mutation, portée par l'extension de la ligne 4 du métro et les projets du Grand Paris Express. Son parc immobilier mêle grands ensembles réhabilités et nouveaux programmes résidentiels.
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
              Votre déménageur à Bagneux
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Bagneux dispose d'un parc immobilier varié : grands ensembles des années 1960-70 en cours de rénovation, programmes neufs livrés ces dernières années, et quelques maisons individuelles dans les rues résidentielles du Bas-Bagneux. L'arrivée du métro ligne 4 a accéléré le développement résidentiel et la demande de déménagements.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement vous propose une visite préalable gratuite pour préparer votre déménagement en tenant compte des spécificités de votre logement et de votre immeuble. Devis personnalisé sous 24h, équipe dédiée et assurance RC Professionnelle incluse.
            </p>

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
              <h3 className="font-bold mb-2">Devis Bagneux</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Bagneux" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
