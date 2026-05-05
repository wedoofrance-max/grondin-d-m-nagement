import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Clamart 92140 — Devis Gratuit | Grondin',
  description: 'Déménageur à Clamart (92140, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/clamart' },
}

const FAQ = [
  {
    question: 'Clamart est une ville vallonnée — y a-t-il des difficultés pour les camions ?',
    answer: 'Clamart est effectivement construite sur un relief vallonné avec des rues en pente dans certains quartiers, notamment autour de la forêt de Clamart. Nous évaluons les accès lors de la visite préalable et planifions l\'intervention en conséquence, en choisissant le véhicule adapté au profil de votre rue.',
  },
  {
    question: 'Intervenez-vous dans les quartiers proches de la forêt de Clamart ?',
    answer: 'Oui, nous couvrons tous les secteurs de Clamart, y compris les quartiers résidentiels proches de la forêt comme Trivaux, Les Garennes et le Petit-Clamart. Ces zones sont généralement plus pavillonnaires avec des rues plus étroites, ce que nous anticipons lors de la visite.',
  },
  {
    question: 'Peut-on déménager de Clamart vers Paris intra-muros ?',
    answer: 'Oui, Clamart est à environ 10 km du centre de Paris, accessible via l\'A86, l\'avenue de la République ou par Issy-les-Moulineaux. Un déménagement Clamart-Paris se réalise facilement en une journée pour des volumes standards.',
  },
]

export default function DemenagementClamartPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Clamart', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/clamart' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Clamart' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Clamart — Hauts-de-Seine (92140)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Clamart est une commune résidentielle des Hauts-de-Seine, réputée pour son cadre verdoyant à l'orée de la forêt de Clamart. Son habitat comprend pavillons, maisons de ville et quelques résidences collectiveset se caractérise par un relief marqué.
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
              Votre déménageur à Clamart
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Clamart se distingue par son cadre de vie agréable avec de nombreuses maisons individuelles et pavillons dans les rues arborées proches de la forêt, et des immeubles collectifs dans le secteur plus urbanisé du Petit-Clamart. Le relief de la ville demande une planification soignée pour les véhicules de déménagement.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement effectue une visite préalable gratuite à Clamart pour évaluer les accès et établir un devis précis. Nous adaptons notre matériel aux contraintes spécifiques de votre rue et de votre logement. Devis transmis sous 24h, assurance RC Professionnelle incluse.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Panorama', 'Plaine de Clamart', 'Trivaux-Garenne', 'Les Petits Bois', 'Maison Rouge', 'Quartier de la Gare'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Clamart (92140)</p>
              <p className="text-xs text-blue-700">Hauts-de-Seine (92), à 10 km au sud-ouest de Paris. Transilien N (gare de Clamart). Topographie vallonnée avec forêt de Clamart — certains accès sont en pente, nous sécurisons le chargement/déchargement avec les équipements adaptés.</p>
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
              <h3 className="font-bold mb-2">Devis Clamart</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Clamart" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
