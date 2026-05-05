import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Courbevoie 92400 — Devis Gratuit | Grondin',
  description: 'Déménageur à Courbevoie (92400, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/courbevoie' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans le secteur de La Défense à Courbevoie ?',
    answer: 'Oui, nous couvrons les secteurs résidentiels de Courbevoie proches de La Défense, notamment le quartier Faubourg de l\'Arche, ainsi que le centre-ville de Courbevoie et les secteurs du Plateau. Les tours résidentielles de La Défense nécessitent une coordination avec les garderies et des créneaux de monte-charge réservés à l\'avance.',
  },
  {
    question: 'Comment gérez-vous les déménagements dans les tours résidentielles de Courbevoie ?',
    answer: 'Dans les tours résidentielles, nous contactons le gestionnaire ou le syndic en amont pour réserver le monte-charge et les accès. Nous protégeons systématiquement les cabines d\'ascenseur et les parties communes. La coordination est la clé d\'un déménagement réussi dans ce type d\'immeuble.',
  },
  {
    question: 'Courbevoie est-elle bien reliée à Paris et au reste de l\'IDF ?',
    answer: 'Très bien reliée, notamment par le RER A (La Défense), le tram T2 et plusieurs lignes de bus. Pour nos camions, l\'accès se fait principalement par l\'A14 ou l\'avenue de la Grande Armée. Nous planifions les trajets pour éviter les heures de pointe.',
  },
]

export default function DemenagementCourbevoiePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Courbevoie', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/courbevoie' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Courbevoie' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Courbevoie — Hauts-de-Seine (92400)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Courbevoie est une ville des Hauts-de-Seine adossée à La Défense, combinant immeubles d'affaires reconvertis, résidences modernes et quartiers résidentiels plus anciens. Un secteur en pleine évolution avec des logements de toutes typologies.
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
              Votre déménageur à Courbevoie
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Courbevoie mêle différents types de logements : appartements dans les tours résidentielles du quartier La Défense, maisons et immeubles anciens dans le centre historique de Courbevoie, et résidences neuves dans les zones en développement. Chaque situation demande une approche spécifique.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement prend en charge votre déménagement à Courbevoie avec sérieux : visite préalable gratuite, devis sous 24h, équipe et véhicule adaptés à votre volume. Nous coordonnons avec votre copropriété ou bailleur pour les créneaux de monte-charge et protégeons parties communes et ascenseurs.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['La Défense côté Courbevoie', 'Bécon-les-Bruyères', 'Les Bruyères', 'Faubourg de l\'Arche', 'Centre-ville', 'La Garenne', 'Bords de Seine'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Infos pratiques — Courbevoie (92400)</p>
              <p className="text-xs text-amber-700">Hauts-de-Seine (92), limitrophe de La Défense. RER A (La Défense) et Transilien L. Forte densité de tours résidentielles et d'immeubles de standing — nous gérons les réservations d'ascenseur de service et les créneaux imposés par les régies.</p>
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
              <h3 className="font-bold mb-2">Devis Courbevoie</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Courbevoie" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
