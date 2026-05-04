import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Val-de-Marne (94) — Grondin Déménagement',
  description: 'Déménageur dans le Val-de-Marne (94) : Créteil, Vincennes, Maisons-Alfort, Fontenay-sous-Bois, Ivry, Alfortville. Grondin Déménagement 7j/7, devis gratuit.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-val-de-marne-94' },
}

const VILLES = [
  { name: 'Créteil',             slug: 'creteil',             cp: '94000' },
  { name: 'Vincennes',           slug: 'vincennes',           cp: '94300' },
  { name: 'Maisons-Alfort',      slug: 'maisons-alfort',      cp: '94700' },
  { name: 'Fontenay-sous-Bois',  slug: 'fontenay-sous-bois',  cp: '94120' },
  { name: 'Ivry-sur-Seine',      slug: 'ivry-sur-seine',      cp: '94200' },
  { name: 'Alfortville',         slug: 'alfortville',         cp: '94140' },
  { name: 'Charenton-le-Pont',   slug: 'charenton-le-pont',   cp: '94220' },
  { name: 'Saint-Maur-des-Fossés', slug: 'saint-maur-des-fosses', cp: '94100' },
]

const FAQ = [
  { question: 'Grondin intervient-il dans tout le Val-de-Marne ?', answer: 'Oui, nous couvrons l\'ensemble du Val-de-Marne (94), de Vincennes à Créteil en passant par Maisons-Alfort et Saint-Maur-des-Fossés.' },
  { question: 'Proposez-vous le monte-meubles dans le 94 ?', answer: 'Oui, notre service de monte-meubles est disponible partout dans le Val-de-Marne. Il est particulièrement utile dans les résidences de grande hauteur de Créteil ou de Fontenay-sous-Bois.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Déménagement Val-de-Marne (94)',
  provider: { '@type': 'LocalBusiness', name: 'Grondin Déménagement', telephone: '+33185440050' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Val-de-Marne', identifier: '94' },
  url: 'https://grondin-demenagement.fr/demenagement-val-de-marne-94',
}

export default function DemenagementValDeMArnePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbSchema items={[
        { label: 'Déménagement IDF', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Val-de-Marne (94)', href: 'https://grondin-demenagement.fr/demenagement-val-de-marne-94' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Déménagement IDF', href: '/demenagement-ile-de-france' },
            { label: 'Val-de-Marne (94)' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Val-de-Marne (94)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Créteil, Vincennes, Maisons-Alfort, Fontenay-sous-Bois — Grondin Déménagement intervient 7j/7 dans tout le département 94.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />Devis gratuit
            </Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />01 85 44 00 50
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">Votre déménageur dans le Val-de-Marne</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Le Val-de-Marne borde Paris au sud-est et regroupe des villes très variées : Vincennes, au charme résidentiel prisé, Créteil avec ses grandes copropriétés des années 70-80, Maisons-Alfort et ses pavillons en bord de Marne, et des communes comme Fontenay-sous-Bois en plein renouveau.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement intervient dans tout le 94 avec un service professionnel et des équipes rodées aux spécificités de chaque ville.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {VILLES.map((v) => (
                <Link key={v.slug} href={`/demenagement-ile-de-france/${v.slug}`}
                  className="flex items-center gap-2 p-3 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-grondin-50 hover:border-grondin-200 hover:text-grondin-600 transition-colors text-sm font-medium text-neutral-700">
                  <Icon icon="ph:map-pin" width={14} height={14} className="flex-shrink-0 text-grondin-400" aria-hidden />
                  <span>{v.name}</span>
                  <span className="ml-auto text-xs text-neutral-400">{v.cp}</span>
                </Link>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:users', title: '1 500+ clients', desc: 'Paris et IDF' },
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
              <h3 className="font-bold mb-2">Devis gratuit dans le 94</h3>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />Mon devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                <Icon icon="ph:phone" width={16} height={16} aria-hidden />01 85 44 00 50
              </a>
            </div>
            <Link href="/demenagement-ile-de-france" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />Toute l'Île-de-France
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement dans le Val-de-Marne" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
