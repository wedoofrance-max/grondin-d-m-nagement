import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Longue Distance depuis Paris — France | Grondin',
  description: 'Grondin Déménagement assure vos déménagements longue distance depuis Paris vers Lyon, Bordeaux, Marseille, Toulouse, Nantes, Lille et Strasbourg. Devis gratuit.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
}

const DESTINATIONS = [
  { city: 'Lyon', slug: 'paris-lyon', distance: '465 km', time: '4h30', icon: 'ph:map-pin' },
  { city: 'Bordeaux', slug: 'paris-bordeaux', distance: '585 km', time: '5h30', icon: 'ph:map-pin' },
  { city: 'Marseille', slug: 'paris-marseille', distance: '775 km', time: '7h', icon: 'ph:map-pin' },
  { city: 'Toulouse', slug: 'paris-toulouse', distance: '680 km', time: '6h15', icon: 'ph:map-pin' },
  { city: 'Nantes', slug: 'paris-nantes', distance: '385 km', time: '3h45', icon: 'ph:map-pin' },
  { city: 'Lille', slug: 'paris-lille', distance: '225 km', time: '2h30', icon: 'ph:map-pin' },
  { city: 'Strasbourg', slug: 'paris-strasbourg', distance: '490 km', time: '4h', icon: 'ph:map-pin' },
]

const FAQ = [
  {
    question: 'Grondin fait-il des déménagements à l\'international ?',
    answer: 'Non, Grondin Déménagement intervient exclusivement en France métropolitaine. Nous couvrons Paris, l\'Île-de-France et les grandes villes françaises comme Lyon, Bordeaux, Marseille, Toulouse, Nantes, Lille et Strasbourg.',
  },
  {
    question: 'Comment fonctionne un déménagement longue distance avec Grondin ?',
    answer: 'Le processus est identique à un déménagement local : devis gratuit, visite sur place, jour du déménagement avec notre équipe. La différence principale est la distance : nos camions roulent de nuit ou le même jour selon le volume et la destination.',
  },
  {
    question: 'Combien de temps à l\'avance doit-on réserver pour un déménagement longue distance ?',
    answer: 'Nous recommandons de réserver 3 à 6 semaines à l\'avance pour les déménagements longue distance, pour garantir la disponibilité des équipes et du véhicule adapté. Les demandes urgentes sont étudiées au cas par cas.',
  },
  {
    question: 'Le garde-meubles est-il possible pour les déménagements longue distance ?',
    answer: 'Oui, si votre nouveau logement n\'est pas encore disponible à l\'arrivée, nous pouvons stocker vos affaires temporairement dans notre garde-meubles à Paris avant de les acheminer à destination.',
  },
]

export default function DemenagementLongueDistancePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Longue distance' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement longue distance depuis Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Vous quittez Paris pour une autre ville française ? Grondin Déménagement assure votre transfert vers les principales destinations de France métropolitaine.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="mb-14">
          <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-2">
            Nos destinations longue distance
          </h2>
          <p className="text-neutral-600 mb-8">Cliquez sur votre destination pour en savoir plus.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.slug}
                href={`/demenagement-longue-distance/${dest.slug}`}
                className="group flex flex-col gap-3 p-5 bg-white rounded-2xl border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-grondin-50 rounded-xl flex items-center justify-center group-hover:bg-grondin-500 transition-colors">
                    <Icon icon="ph:map-pin" width={20} height={20} className="text-grondin-500 group-hover:text-white transition-colors" aria-hidden />
                  </div>
                  <span className="text-xs text-neutral-400">{dest.distance}</span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 group-hover:text-grondin-600 transition-colors">
                    Paris → {dest.city}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">Durée trajet : {dest.time}</p>
                </div>
                <div className="flex items-center gap-1 text-grondin-500 text-sm font-medium mt-auto">
                  <span>En savoir plus</span>
                  <Icon icon="ph:arrow-right" width={14} height={14} className="group-hover:translate-x-1 transition-transform" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">
              Pourquoi choisir Grondin pour votre déménagement longue distance ?
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Déménager sur une longue distance nécessite une organisation rigoureuse : chargement optimisé, transport sécurisé, respect des horaires à l'arrivée. Grondin Déménagement maîtrise cette logistique pour les grandes destinations de France.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Nos camions sont équipés pour les longs trajets : sangles de sécurité, couvertures de protection, parois capitonnées. Vos meubles arrivent dans le même état que vous les avez laissés.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:truck', title: 'Camions dédiés', desc: 'Véhicule attribué uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Ponctualité garantie', desc: 'Respect des créneaux d\'arrivée' },
                { icon: 'ph:phone', title: 'Suivi en temps réel', desc: 'Votre coordinateur disponible tout au long' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 bg-grondin-50 rounded-xl">
                  <Icon icon={item.icon} width={18} height={18} className="text-grondin-500 flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{item.title}</p>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-grondin-900 rounded-3xl p-8 text-white">
            <h2 className="text-fluid-xl font-bold mb-4">Obtenir un devis longue distance</h2>
            <p className="text-grondin-200 text-sm mb-6">
              Remplissez notre formulaire et précisez votre destination. Notre équipe vous rappelle sous 24h avec un devis personnalisé.
            </p>
            <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-4 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
              Devis gratuit longue distance
            </Link>
            <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />
              01 85 44 00 50
            </a>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement longue distance" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
