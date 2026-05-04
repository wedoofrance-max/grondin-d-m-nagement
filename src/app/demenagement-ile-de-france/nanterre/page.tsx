import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Nanterre 92000 — Devis Gratuit | Grondin',
  description: 'Déménageur à Nanterre (92000, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/nanterre' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans le quartier de La Défense et ses abords à Nanterre ?',
    answer: 'Oui, nous couvrons les quartiers résidentiels de Nanterre proches de La Défense, ainsi que le centre-ville, le secteur de l\'université Paris Nanterre et les zones pavillonnaires. Les accès peuvent être complexes dans certains secteurs proches des axes autoroutiers, ce que nous anticipons lors de la visite.',
  },
  {
    question: 'Pouvez-vous déménager de Nanterre vers La Défense ou Paris ?',
    answer: 'Absolument. Nanterre est directement reliée à La Défense et à Paris par l\'A14 et le RER A. Nos camions sont conformes aux réglementations en vigueur pour circuler dans toute la zone, y compris les tunnels de La Défense lorsque cela est autorisé.',
  },
  {
    question: 'Y a-t-il des spécificités pour les grands ensembles de Nanterre ?',
    answer: 'Les grands ensembles de Nanterre (Petit Nanterre, Chemin de l\'Île) nécessitent parfois l\'intervention d\'un monte-meubles extérieur en raison des étages élevés et des ascenseurs exigus. Nous évaluons cela lors de la visite et prévoyons le matériel adapté.',
  },
]

export default function DemenagementNanterrePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Nanterre', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/nanterre' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Nanterre' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Nanterre — Hauts-de-Seine (92000)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Nanterre est une grande commune des Hauts-de-Seine, porte de La Défense, avec un parc immobilier très varié : résidences universitaires, grands ensembles, maisons individuelles et nouveaux programmes dans les secteurs en rénovation.
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
              Votre déménageur à Nanterre
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Nanterre présente une grande hétérogénéité de logements : appartements dans des tours des années 1970, maisons de ville dans les quartiers résidentiels du Mont-Valérien, et résidences plus récentes dans les secteurs rénovés. Cette diversité implique des besoins très différents en termes d'équipement et d'organisation.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement vous propose une visite gratuite à domicile pour évaluer votre situation précise. Nous établissons un devis détaillé sous 24h et intervenons avec une équipe et un véhicule dimensionnés à votre volume. La protection des parties communes est systématique.
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
              <h3 className="font-bold mb-2">Devis Nanterre</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Nanterre" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
