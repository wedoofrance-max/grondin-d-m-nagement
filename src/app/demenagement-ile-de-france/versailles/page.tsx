import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Versailles 78000 — Devis Gratuit | Grondin',
  description: 'Déménageur à Versailles (78000, Yvelines). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/versailles' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans tous les quartiers de Versailles ?',
    answer: 'Oui, nos équipes couvrent l\'ensemble de Versailles : le quartier Saint-Louis, Notre-Dame, Montreuil, le Chesnay-Rocquencourt et les zones pavillonnaires autour du domaine royal. Nous connaissons les contraintes de circulation liées aux axes touristiques et aux rues du centre historique.',
  },
  {
    question: 'Comment se déroule un déménagement depuis Versailles vers Paris ?',
    answer: 'Versailles est à environ 25 km de Paris. Nous organisons le transport en camion dédié, avec un chargement matinal pour éviter les heures de pointe sur l\'autoroute A13 ou la N118. La visite préalable à domicile nous permet de calibrer le bon véhicule et le nombre de déménageurs.',
  },
  {
    question: 'Acceptez-vous les déménagements dans les appartements haussmanniens du centre de Versailles ?',
    answer: 'Oui. Nous avons l\'habitude des immeubles anciens du centre de Versailles avec leurs escaliers en pierre, leurs étages élevés et leurs cours intérieures. Le monte-meubles est disponible pour les accès difficiles.',
  },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-ile-de-france/versailles#service',
  name: 'Déménagement Versailles',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Versailles', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-ile-de-france/versailles',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementVersaillesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Versailles', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/versailles' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Versailles' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Versailles — Yvelines (78000)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Versailles mêle immeubles bourgeois du centre historique, résidences récentes dans les quartiers périphériques et maisons de ville dans le secteur de Montreuil. Une ville qui nécessite une logistique soignée, notamment pour les accès en centre-ville.
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
              Votre déménageur à Versailles
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              La ville de Versailles propose un habitat diversifié : appartements avec hauts plafonds dans les immeubles classés du quartier Notre-Dame, pavillons avec sous-sol et garage dans les zones résidentielles de Porchefontaine ou Jussieu, et résidences plus récentes autour de la gare Versailles-Chantiers. Chaque logement demande une approche spécifique pour protéger meubles et parquets.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Grondin Déménagement intervient à Versailles avec une visite gratuite préalable pour établir un devis précis. Nous gérons les autorisations de stationnement si nécessaire et adaptons nos horaires pour limiter l'impact sur votre voisinage. Notre assurance RC Professionnelle couvre l'intégralité du déménagement.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Le centre historique de Versailles est partiellement soumis à des restrictions de circulation pour les véhicules de fort tonnage sur certains axes proches du château et du quartier Notre-Dame. Nos chauffeurs connaissent les itinéraires autorisés et les créneaux adaptés pour éviter les pics de circulation touristique, particulièrement marqués entre mars et octobre. Les jours de grande affluence, nous planifions les interventions tôt le matin ou en semaine afin de garantir des conditions optimales de chargement et de déchargement.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts à Versailles</h3>
              <div className="flex flex-wrap gap-2">
                {['Saint-Louis', 'Notre-Dame', 'Montreuil', 'Porchefontaine', 'Jussieu', 'Chesnay-Rocquencourt', 'Clagny-Glatigny', 'Le Plateau'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Versailles (78000)</p>
              <p className="text-xs text-blue-700">À 25 km de Paris. Accès par A13 ou N118. Desserte RER C (Versailles-Chantiers, Versailles-Rive-Droite, Versailles-Rive-Gauche). Centre historique avec axes touristiques : nous planifions les horaires d'intervention pour éviter les pics de circulation.</p>
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
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/villa-versailles.jpg"
                alt="Villa bourgeoise à Versailles — déménagement de maison avec jardin"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Devis Versailles</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Versailles" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
