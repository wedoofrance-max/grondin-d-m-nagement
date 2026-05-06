import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Levallois-Perret 92300 — Devis Gratuit | Grondin',
  description: 'Déménageur à Levallois-Perret (92300, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/levallois-perret' },
}

const FAQ = [
  {
    question: 'Levallois-Perret est une ville dense — comment gérez-vous le stationnement ?',
    answer: 'Levallois-Perret est effectivement très dense avec peu de places de stationnement disponibles. Nous anticipons cette contrainte en demandant si nécessaire une autorisation de stationnement en voie publique auprès de la mairie, ou en planifiant l\'intervention très tôt le matin pour profiter des places disponibles.',
  },
  {
    question: 'Intervenez-vous aussi dans les bureaux à Levallois-Perret ?',
    answer: 'Oui, nous réalisons des déménagements de bureaux et locaux professionnels à Levallois-Perret, notamment dans le quartier d\'affaires proche du pont de Levallois. Nous travaillons en dehors des heures de bureau si nécessaire pour ne pas perturber votre activité.',
  },
  {
    question: 'Pouvez-vous déménager depuis Levallois-Perret vers Paris en une journée ?',
    answer: 'Pour un volume standard (T2 ou T3), un déménagement Levallois-Paris se réalise facilement en une journée. Levallois-Perret est directement accessible depuis Paris par le pont de Clichy et le boulevard périphérique, ce qui limite les temps de trajet.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/levallois-perret#service',
  name: 'Déménagement Levallois-Perret',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Levallois-Perret', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/levallois-perret',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementLevalloisPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Levallois-Perret', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/levallois-perret' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Levallois-Perret' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Levallois-Perret — Hauts-de-Seine (92300)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Levallois-Perret est une commune très urbanisée, limitrophe de Paris et de Neuilly-sur-Seine, avec de nombreux immeubles modernes, résidences d'entreprises reconverties et copropriétés récentes. La densité de la ville impose une logistique soignée.
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
              Votre déménageur à Levallois-Perret
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              À Levallois-Perret, les logements sont majoritairement des appartements en immeuble collectif, souvent construits dans les années 1970-2000. Les parkings souterrains, couloirs étroits et accès restreints aux monte-charges sont courants. Certaines résidences imposent des horaires d'intervention et exigent la protection des parties communes avant tout déménagement.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Grondin Déménagement prend rendez-vous pour une visite gratuite à votre domicile afin d'identifier toutes ces contraintes avant le jour J. Nous préparons le matériel adapté — protections de sol, couvertures, sangles — et vous informons des démarches à effectuer auprès de votre syndic si nécessaire.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Levallois-Perret est l'une des communes les plus denses de France — plus de 26 000 habitants au km², soit une densité supérieure à Paris intra-muros. Cette pression se traduit par une concurrence permanente pour le stationnement : les couloirs de livraison en surface sont rares et les opérations de déménagement nécessitent impérativement une autorisation délivrée par la mairie de Levallois. Nos équipes gèrent ces démarches administratives et s'organisent pour intervenir tôt le matin, avant le pic de circulation, afin de sécuriser les emplacements nécessaires au bon déroulement du déménagement.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Front de Seine', 'Bords de Seine', 'Les Champerret', 'Louise Michel', 'Trézel', 'République'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Infos pratiques — Levallois-Perret (92300)</p>
              <p className="text-xs text-amber-700">Hauts-de-Seine (92), limitrophe du 17ème arrondissement de Paris. Métro L3 (Anatole France, Louise Michel, Pont de Levallois-Bécon). L'une des communes les plus denses de France — immeubles compacts avec halls souvent étroits. Nous utilisons le monte-meubles extérieur en priorité.</p>
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
              <h3 className="font-bold mb-2">Devis Levallois-Perret</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Levallois-Perret" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
