import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Neuilly-sur-Seine 92200 — Devis Gratuit | Grondin',
  description: 'Déménageur à Neuilly-sur-Seine (92200, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/neuilly-sur-seine' },
}

const FAQ = [
  {
    question: 'Comment gérez-vous les déménagements dans les immeubles de standing de Neuilly ?',
    answer: 'Nos équipes sont formées pour intervenir dans les résidences de prestige : protection des sols et murs des parties communes, respect des horaires imposés par les gardiens, utilisation de charriots professionnels pour protéger les parquets et les halls d\'entrée. Nous prenons contact avec la garderie ou la régie en amont si nécessaire.',
  },
  {
    question: 'Pouvez-vous déménager un grand appartement familial à Neuilly-sur-Seine ?',
    answer: 'Oui. Nous intervenons pour tous les volumes, des studios aux appartements de plusieurs pièces avec cave et parking. Une visite sur place nous permet d\'évaluer précisément le matériel nécessaire et de constituer une équipe adaptée.',
  },
  {
    question: 'Neuilly-sur-Seine est proche de Paris — est-ce que cela facilite les déménagements ?',
    answer: 'La proximité avec Paris (17ème arrondissement) simplifie effectivement la logistique pour les déménagements Paris-Neuilly ou inversement. Nos camions sont homologués ZFE et Crit\'Air, ce qui nous permet de circuler sans restriction dans les deux sens.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/neuilly-sur-seine#service',
  name: 'Déménagement Neuilly-sur-Seine',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Neuilly-sur-Seine', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/neuilly-sur-seine',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementNeuillyPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Neuilly-sur-Seine', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/neuilly-sur-seine' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Neuilly-sur-Seine' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Neuilly-sur-Seine — Hauts-de-Seine (92200)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Neuilly-sur-Seine se distingue par son parc immobilier haut de gamme : grands appartements haussmanniens, résidences sécurisées avec gardien et immeubles modernes proches du bois de Boulogne. Un environnement qui demande soin et discrétion.
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
              Votre déménageur à Neuilly-sur-Seine
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              À Neuilly-sur-Seine, les logements sont souvent spacieux et bien équipés : double parking souterrain, ascenseurs de grande dimension, couloirs larges. Mais certaines résidences imposent des créneaux horaires stricts, un accès restreint aux monte-charges, ou la présence obligatoire d'un protège-ascenseur fourni par le déménageur. Grondin Déménagement prend en compte toutes ces contraintes dès la phase de devis.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Nous effectuons une visite à domicile pour dresser l'inventaire complet, identifier le mobilier nécessitant un emballage spécifique (œuvres d'art, objets fragiles, meubles anciens) et vous proposer la formule la mieux adaptée. Chaque intervention est couverte par notre assurance RC Professionnelle.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Beaucoup de résidences de Neuilly fonctionnent avec des règlements intérieurs très stricts encadrant les déménagements : obligation de fournir une attestation RC Professionnelle du déménageur, caution de garantie versée au gardien avant intervention, protection obligatoire des ascenseurs avec des tapis fournis par le prestataire, et créneaux horaires restreints (souvent 9h–12h et 14h–17h uniquement). Grondin Déménagement transmet systématiquement l'ensemble des documents nécessaires à votre gestionnaire de copropriété dès la confirmation du devis, afin d'éviter tout blocage le jour J.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts à Neuilly-sur-Seine</h3>
              <div className="flex flex-wrap gap-2">
                {['Bagatelle', 'Anatole France', 'Les Sablons', 'Maillot', 'Pont de Neuilly', 'Roule', 'Centre-ville', 'Bois de Boulogne'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Résidences de prestige — protocole gardien</p>
              <p className="text-xs text-amber-700">Limitrophe du 17ème arrondissement de Paris. Métro L1 (Pont de Neuilly, Les Sablons). Nos équipes prennent contact avec les garderies en amont pour respecter les créneaux de livraison et les exigences de protection des parties communes.</p>
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
              <h3 className="font-bold mb-2">Devis Neuilly-sur-Seine</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Neuilly-sur-Seine" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
