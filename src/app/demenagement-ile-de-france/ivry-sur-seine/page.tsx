import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Ivry-sur-Seine 94200 — Devis Gratuit | Grondin',
  description: 'Déménageur à Ivry-sur-Seine (94200, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/ivry-sur-seine' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans le secteur Ivry-Confluences et le centre-ville d\'Ivry ?',
    answer: 'Oui, nous couvrons l\'ensemble d\'Ivry-sur-Seine : le secteur Ivry-Confluences avec ses nombreux programmes neufs, le centre-ville historique, les quartiers résidentiels comme Gagarine et les zones proches de la Seine. Ivry est une ville très dynamique que nous connaissons bien.',
  },
  {
    question: 'Ivry-sur-Seine est limitrophe de Paris — facilitez-vous les déménagements Paris-Ivry ?',
    answer: 'Absolument. Ivry est directement accessible depuis Paris (13ème arrondissement) par le boulevard Masséna ou l\'avenue de Choisy. Nos camions ZFE-conformes circulent facilement entre les deux villes. Pour un studio ou T2, un aller-retour Paris-Ivry se fait sans difficulté en une journée.',
  },
  {
    question: 'Comment se passe un déménagement dans un immeuble neuf à Ivry-Confluences ?',
    answer: 'Les immeubles neufs du quartier Ivry-Confluences sont généralement bien équipés : monte-charges spacieux, accès livraisons aménagés. Nous prenons contact avec le promoteur ou le gardien pour réserver les créneaux. Ces logements sont souvent plus pratiques à déménager que les anciens immeubles.',
  },
]

export default function DemenagementIvrySeinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Ivry-sur-Seine', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/ivry-sur-seine' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Ivry-sur-Seine' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Ivry-sur-Seine — Val-de-Marne (94200)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Ivry-sur-Seine est une commune du Val-de-Marne limitrophe de Paris (13ème), en pleine mutation urbaine avec le développement du quartier Ivry-Confluences. Un parc immobilier qui allie logements anciens et programmes récents.
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
              Votre déménageur à Ivry-sur-Seine
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Ivry-sur-Seine mêle des quartiers très différents : le secteur ouvrier historique avec ses immeubles d'époque et ses rues en pente, les zones en reconversion du bord de Seine avec de nombreux programmes neufs, et les quartiers résidentiels comme le Petit Ivry. Cette diversité nécessite une bonne connaissance du terrain.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement effectue une visite préalable gratuite dans votre logement à Ivry pour dresser un inventaire complet et identifier les contraintes d'accès. Devis transmis sous 24h, intervention avec équipe et matériel adaptés, assurance RC Professionnelle incluse.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Petit-Ivry', 'Ivry-Port', 'Les Coteaux', 'Confluences', 'Pierre et Marie Curie', 'Bords de Seine'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Ivry-sur-Seine (94200)</p>
              <p className="text-xs text-blue-700">Val-de-Marne (94), limitrophe du 13ème arrondissement de Paris. RER C (gare d'Ivry-sur-Seine) et Métro L7 (Mairie d'Ivry). Nombreux programmes neufs dans le secteur Confluences. Nos équipes gèrent les livraisons en ZAC avec accès sécurisé.</p>
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
              <h3 className="font-bold mb-2">Devis Ivry-sur-Seine</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Ivry-sur-Seine" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
