import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris Bordeaux — Longue Distance | Grondin',
  description: 'Déménagement Paris vers Bordeaux (585 km). Grondin Déménagement : camion dédié, assurance incluse, devis gratuit. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-bordeaux' },
}

const FAQ = [
  {
    question: 'Combien de temps dure un déménagement Paris-Bordeaux ?',
    answer: 'Le trajet en camion de déménagement entre Paris et Bordeaux est d\'environ 5h30 à 6h via l\'A10, selon les conditions de circulation. Nous partons généralement tôt le matin de Paris pour arriver à Bordeaux en début ou milieu d\'après-midi. Pour les grands volumes, le déchargement peut se faire le lendemain matin.',
  },
  {
    question: 'Intervenez-vous dans tous les quartiers de Bordeaux ?',
    answer: 'Oui, nous intervenons dans toute l\'agglomération bordelaise : les Chartrons, Saint-Michel, Mériadeck, Bastide, Saint-Pierre, et les communes de la métropole comme Mérignac, Pessac ou Talence. La visite préalable à Paris nous permet de calibrer le déménagement, et nous prenons contact avec votre future résidence à Bordeaux en amont.',
  },
  {
    question: 'La LGV Paris-Bordeaux prend 2h — est-ce une raison de choisir le déménagement en camion ?',
    answer: 'Le TGV est rapide pour voyager, mais vos meubles, cartons et affaires personnelles ne peuvent pas prendre le train ! Le déménagement en camion reste la seule option pour transporter l\'ensemble de votre mobilier. Nous nous occupons de tout pendant que vous organisez votre arrivée à Bordeaux.',
  },
  {
    question: 'Que se passe-t-il si la livraison à Bordeaux ne peut pas se faire le jour J ?',
    answer: 'Si votre logement bordelais n\'est pas disponible le jour prévu (retard de travaux, remise de clés décalée), nous disposons de solutions de stockage temporaire sécurisé. Contactez-nous le plus tôt possible pour organiser cette option si nécessaire.',
  },
]

export default function DemenagementParisBordeauxPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
        { label: 'Paris → Bordeaux', href: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-bordeaux' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Longue distance', href: '/demenagement-longue-distance' },
            { label: 'Paris → Bordeaux' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris → Bordeaux
          </h1>
          <div className="flex items-center gap-4 mb-3 text-grondin-300 text-sm">
            <span>585 km</span>
            <span>·</span>
            <span>~5h30 de trajet</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Bordeaux attire de nombreux Parisiens grâce à sa qualité de vie, son architecture Art Déco et son dynamisme économique. Grondin Déménagement organise votre transfert depuis Paris vers les Chartrons, Saint-Michel ou Mériadeck en camion dédié.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Devis longue distance
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
              Votre déménagement Paris → Bordeaux avec Grondin
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              La route Paris-Bordeaux via l'A10 représente 585 km, soit environ 5h30 de trajet pour nos camions. C'est l'une des destinations longue distance les plus demandées depuis Paris, portée par l'attractivité de la métropole bordelaise. Que vous vous installiez dans les appartements haussmanniens du quartier des Chartrons, dans les maisons girondines de Saint-Michel ou dans les logements modernes de Mériadeck, nous organisons l'ensemble du déménagement.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement réalise une visite préalable à votre domicile parisien pour établir un inventaire précis et vous remettre un devis sous 24h. Le jour du déménagement, votre camion est exclusivement dédié à votre transfert. Nous chargeons à Paris le matin, livrons à Bordeaux l'après-midi ou le lendemain selon le volume. L'assurance RC Professionnelle couvre l'ensemble du déménagement.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: 'ph:truck', title: 'Camion dédié', desc: 'Véhicule réservé uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Livraison ponctuelle', desc: 'Respect des créneaux convenus' },
                { icon: 'ph:map-pin', title: '585 km', desc: 'Trajet direct sans rupture de charge' },
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
              <h3 className="font-bold mb-2">Devis Paris → Bordeaux</h3>
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
            <Link href="/demenagement-longue-distance" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Toutes les destinations
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement Paris → Bordeaux" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
