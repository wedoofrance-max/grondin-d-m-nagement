import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Meudon 92190 — Devis Gratuit | Grondin',
  description: 'Déménageur à Meudon (92190, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/meudon' },
}

const FAQ = [
  {
    question: 'Meudon est une ville avec beaucoup de dénivelé — comment gérez-vous cela ?',
    answer: 'Meudon est en effet construite sur des coteaux avec un dénivelé marqué entre Meudon-la-Forêt en haut et Meudon en bas. Certaines rues sont en forte pente. Nous évaluons systématiquement les accès lors de la visite préalable et choisissons le véhicule et l\'équipe adaptés. Le monte-meubles peut être nécessaire pour certains logements.',
  },
  {
    question: 'Intervenez-vous dans les quartiers de Meudon-la-Forêt et Bellevue ?',
    answer: 'Oui, nous couvrons tous les quartiers de Meudon : Meudon-la-Forêt avec ses barres des années 1960, le plateau de Bellevue avec ses maisons de caractère et sa vue sur Paris, et le bas-Meudon plus urbanisé en bord de Seine. Chaque secteur a ses spécificités.',
  },
  {
    question: 'Meudon est connue pour ses maisons cossues — avez-vous l\'expérience de ces déménagements ?',
    answer: 'Oui, Meudon abrite de belles propriétés avec jardins, souvent avec du mobilier précieux. Nos équipes sont formées pour manipuler avec soin les objets fragiles et le mobilier de valeur. Un emballage spécialisé est disponible sur demande.',
  },
]

export default function DemenagementMeudonPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Meudon', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/meudon' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Meudon' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Meudon — Hauts-de-Seine (92190)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Meudon est une commune des Hauts-de-Seine réputée pour son cadre de vie exceptionnel, dominant Paris depuis les coteaux. Elle conjugue maisons bourgeoises, résidences avec jardin et grands ensembles, dans un environnement fortement boisé.
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
              Votre déménageur à Meudon
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Meudon présente une grande variété de logements : villas avec jardins sur les coteaux boisés, grands ensembles dans le quartier de Meudon-la-Forêt avec ses rues en pente, et appartements dans les immeubles du bas-Meudon en bord de Seine. Les accès sont souvent contraints par la topographie.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement réalise une visite préalable gratuite à Meudon pour évaluer les accès et les spécificités de votre logement. Nous sélectionnons le véhicule adapté au gabarit de votre rue et dimensionnons l'équipe à votre volume. Devis transmis sous 24h, assurance incluse.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Meudon-la-Forêt', 'Bellevue', 'Centre-ville', 'Val Fleury', 'Trivaux', 'Hauts de Meudon', 'Bords de Seine'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Meudon (92190)</p>
              <p className="text-xs text-blue-700">Hauts-de-Seine (92), à 10 km au sud-ouest de Paris. Transilien N (gare de Meudon-Val-Fleury) et Transilien C (gare de Meudon). Topographie accidentée avec de nombreuses rues en pente — certains accès nécessitent un monte-meubles ou un camion de gabarit réduit.</p>
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
              <h3 className="font-bold mb-2">Devis Meudon</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Meudon" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
