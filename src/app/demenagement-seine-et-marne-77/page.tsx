import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Seine-et-Marne (77) — Grondin Déménagement',
  description: 'Déménageur en Seine-et-Marne (77) : Meaux, Melun, Chelles, Marne-la-Vallée, Champs-sur-Marne. Grondin Déménagement intervient 7j/7, devis gratuit sans engagement.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-seine-et-marne-77' },
}

const ZONES = [
  'Marne-la-Vallée (Champs-sur-Marne, Noisiel, Torcy)',
  'Meaux et ses environs',
  'Melun et agglomération',
  'Chelles',
  'Pontault-Combault',
  'Lagny-sur-Marne',
]

const FAQ = [
  { question: 'Grondin Déménagement intervient-il en Seine-et-Marne ?', answer: 'Oui, nous intervenons dans les principales zones de Seine-et-Marne, notamment les secteurs proches de Paris : Marne-la-Vallée, Chelles, Meaux, Melun. Contactez-nous pour confirmer votre zone précise.' },
  { question: 'Le déménagement vers la Seine-et-Marne coûte-t-il plus cher ?', answer: 'Le coût dépend de la distance, du volume et de la formule choisie. Une visite préalable gratuite nous permet d\'établir un devis précis et personnalisé pour votre déménagement depuis ou vers le 77.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Déménagement Seine-et-Marne (77)',
  provider: { '@type': 'LocalBusiness', name: 'Grondin Déménagement', telephone: '+33185440050' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Seine-et-Marne', identifier: '77' },
  url: 'https://grondin-demenagement.fr/demenagement-seine-et-marne-77',
}

export default function DemenagementSeineMarnePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbSchema items={[
        { label: 'Déménagement IDF', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Seine-et-Marne (77)', href: 'https://grondin-demenagement.fr/demenagement-seine-et-marne-77' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Déménagement IDF', href: '/demenagement-ile-de-france' },
            { label: 'Seine-et-Marne (77)' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Seine-et-Marne (77)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Marne-la-Vallée, Meaux, Melun, Chelles — Grondin Déménagement intervient 7j/7 dans les principales villes du département 77.
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
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">Votre déménageur en Seine-et-Marne</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              La Seine-et-Marne est le plus grand département d'Île-de-France. Nous intervenons principalement dans les zones accessibles depuis Paris en moins d'une heure, notamment les secteurs de Marne-la-Vallée, Chelles, Meaux et Melun — des secteurs qui accueillent de nombreuses familles quittant Paris ou la proche banlieue.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Nos équipes s'adaptent aux spécificités du 77 : lotissements, pavillons, accès par autoroute ou nationale. La visite préalable est systématique pour évaluer votre situation précise.
            </p>

            <h3 className="font-bold text-neutral-900 mb-3">Zones couvertes</h3>
            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {ZONES.map((z) => (
                <div key={z} className="flex items-center gap-2 p-3 bg-grondin-50 rounded-xl text-sm text-neutral-700">
                  <Icon icon="ph:check-circle" width={16} height={16} className="text-grondin-500 flex-shrink-0" aria-hidden />
                  {z}
                </div>
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
              <h3 className="font-bold mb-2">Devis gratuit dans le 77</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement en Seine-et-Marne" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
