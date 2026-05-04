import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Nos Formules de Déménagement — Économique, Confort, Premium',
  description: 'Découvrez les 3 formules Grondin Déménagement : Économique, Confort et Premium. Chaque formule est adaptée à vos besoins. Devis gratuit et personnalisé sans engagement.',
  alternates: { canonical: 'https://grondin-demenagement.fr/offres' },
}

const OFFRES = [
  {
    slug:      'economique',
    name:      'Formule Économique',
    tagline:   'Le Coup de Pouce',
    icon:      'ph:hand',
    color:     'grondin',
    description: 'L\'essentiel pour déménager sereinement. Nos équipes prennent en charge le transport et la protection de vos meubles.',
    features: [
      'Équipe de déménageurs professionnels',
      'Camion adapté à votre volume',
      'Protection des meubles (couvertures)',
      'Assurance Responsabilité Civile',
      'Chargement et déchargement',
    ],
    excluded: [
      'Démontage / remontage des meubles',
      'Fourniture de cartons',
      'Emballage des objets fragiles',
    ],
  },
  {
    slug:      'confort',
    name:      'Formule Confort',
    tagline:   'La Solution Complète',
    icon:      'ph:star',
    color:     'grondin',
    recommended: true,
    description: 'La formule la plus choisie. Tout ce qu\'il faut pour un déménagement sans stress, du démontage des meubles à la fourniture des cartons.',
    features: [
      'Tout de la formule Économique',
      'Démontage et remontage des meubles',
      'Fourniture de cartons',
      'Emballage des objets fragiles',
      'Protection renforcée des biens',
      'Coordinateur dédié',
    ],
    excluded: [
      'Déballage à destination',
      'Nettoyage fin de bail',
    ],
  },
  {
    slug:      'premium',
    name:      'Formule Premium',
    tagline:   'Le Tout-Inclus',
    icon:      'ph:crown-simple',
    color:     'grondin',
    description: 'La formule tout-inclus pour un déménagement sans aucun effort. De l\'emballage chez vous au déballage dans votre nouveau logement.',
    features: [
      'Tout de la formule Confort',
      'Emballage intégral de tous vos biens',
      'Déballage et installation à destination',
      'Nettoyage fin de bail',
      'Monte-meubles si nécessaire',
      'Service garde-meubles disponible',
      'Suivi prioritaire',
    ],
    excluded: [],
  },
]

export default function OffresPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Nos formules' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Nos formules de déménagement
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Choisissez la formule adaptée à vos besoins. Chaque devis est personnalisé et entièrement gratuit.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          <div>
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {OFFRES.map((offre) => (
            <div
              key={offre.slug}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                offre.recommended
                  ? 'bg-grondin-900 text-white shadow-2xl scale-[1.02]'
                  : 'bg-white border-2 border-neutral-100 shadow-card hover:shadow-card-hover'
              }`}
            >
              {offre.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-400 text-white text-sm font-bold rounded-full shadow-md whitespace-nowrap">
                  Plus populaire
                </div>
              )}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${offre.recommended ? 'bg-white/10' : 'bg-grondin-50'}`}>
                <Icon icon={offre.icon} width={24} height={24} className={offre.recommended ? 'text-grondin-300' : 'text-grondin-500'} aria-hidden />
              </div>
              <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${offre.recommended ? 'text-grondin-300' : 'text-grondin-500'}`}>
                {offre.tagline}
              </p>
              <h2 className={`text-fluid-2xl font-bold mb-3 ${offre.recommended ? 'text-white' : 'text-neutral-900'}`}>
                {offre.name}
              </h2>
              <p className={`text-sm leading-relaxed mb-6 ${offre.recommended ? 'text-grondin-100' : 'text-neutral-600'}`}>
                {offre.description}
              </p>
              <ul className="flex flex-col gap-2.5 mb-6">
                {offre.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Icon icon="ph:check-circle-fill" width={18} height={18} className={`mt-0.5 flex-shrink-0 ${offre.recommended ? 'text-grondin-300' : 'text-grondin-500'}`} aria-hidden />
                    <span className={`text-sm ${offre.recommended ? 'text-grondin-100' : 'text-neutral-700'}`}>{f}</span>
                  </li>
                ))}
                {offre.excluded.map((e, i) => (
                  <li key={`x${i}`} className="flex items-start gap-2.5 opacity-40">
                    <Icon icon="ph:x-circle" width={18} height={18} className="mt-0.5 flex-shrink-0 text-neutral-400" aria-hidden />
                    <span className="text-sm text-neutral-500">{e}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/offres/${offre.slug}`}
                className={`mt-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all ${
                  offre.recommended
                    ? 'bg-grondin-500 text-white hover:bg-grondin-400'
                    : 'bg-grondin-50 text-grondin-600 hover:bg-grondin-100'
                }`}
              >
                En savoir plus
                <Icon icon="ph:arrow-right" width={18} height={18} aria-hidden />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-grondin-50 rounded-3xl p-10 text-center">
          <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-3">
            Vous ne savez pas quelle formule choisir ?
          </h2>
          <p className="text-neutral-600 mb-6">
            Remplissez notre formulaire en quelques minutes. Notre équipe vous conseille et vous propose la formule la mieux adaptée à votre situation.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
          >
            <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
            Demander mon devis gratuit
          </Link>
        </div>
          </div>{/* end main col */}

          {/* Sticky sidebar */}
          <aside className="sticky top-24 self-start space-y-4">
            <div className="bg-grondin-50 border-2 border-grondin-100 rounded-3xl p-6 text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-grondin-500 rounded-xl mx-auto mb-3">
                <Icon icon="ph:book-open" width={20} height={20} className="text-white" aria-hidden />
              </div>
              <p className="font-bold text-neutral-900 text-sm mb-1">Catalogue Particuliers</p>
              <p className="text-neutral-500 text-xs mb-4 leading-relaxed">
                Toutes nos formules, services et conseils réunis en un seul document PDF.
              </p>
              <a
                href="/catalogue-particuliers-grondin.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold text-sm hover:bg-grondin-400 transition-colors"
              >
                <Icon icon="ph:download-simple" width={16} height={16} aria-hidden />
                Télécharger
              </a>
            </div>
          </aside>
        </div>{/* end outer grid */}
      </div>

      <CTASection />
    </div>
  )
}
