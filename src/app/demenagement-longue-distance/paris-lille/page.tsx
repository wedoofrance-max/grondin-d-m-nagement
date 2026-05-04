import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris Lille — Longue Distance | Grondin',
  description: 'Déménagement Paris vers Lille (225 km). Grondin Déménagement : camion dédié, assurance incluse, devis gratuit. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-lille' },
}

const FAQ = [
  {
    question: 'Combien de temps dure un déménagement Paris-Lille ?',
    answer: 'Le trajet en camion entre Paris et Lille est d\'environ 2h30 à 3h via l\'A1. C\'est notre destination longue distance la plus proche. Nous pouvons partir de Paris en milieu de matinée et être à Lille pour le déchargement en début d\'après-midi, rendant le déménagement particulièrement confortable à organiser.',
  },
  {
    question: 'Intervenez-vous dans tous les quartiers de Lille ?',
    answer: 'Oui, nous livrons dans l\'ensemble de la métropole lilloise : le Vieux-Lille et ses maisons flamandes, Wazemmes et son marché, Euralille, Fives, Moulins, Hellemmes, et les communes périphériques comme Roubaix, Tourcoing, Villeneuve-d\'Ascq ou Lomme.',
  },
  {
    question: 'Y a-t-il des contraintes pour déménager dans le Vieux-Lille ?',
    answer: 'Le Vieux-Lille est caractérisé par des rues pavées, des passages étroits et des accès parfois difficiles pour les grands camions, notamment autour de la rue de la Monnaie et des secteurs piétonniers. Nous évaluons les contraintes d\'accès à votre adresse en amont et, si nécessaire, utilisons un véhicule de liaison pour les objets les plus encombrants.',
  },
  {
    question: 'Faut-il réserver longtemps à l\'avance pour un déménagement Paris-Lille ?',
    answer: 'La proximité de Lille avec Paris est un avantage logistique, mais nous recommandons tout de même de nous contacter trois semaines à l\'avance minimum pour bloquer les camions et l\'équipe. En période de forte activité (printemps, été), prévoir quatre à six semaines garantit la disponibilité souhaitée.',
  },
]

export default function DemenagementParisLillePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
        { label: 'Paris → Lille', href: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-lille' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Longue distance', href: '/demenagement-longue-distance' },
            { label: 'Paris → Lille' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris → Lille
          </h1>
          <div className="flex items-center gap-4 mb-3 text-grondin-300 text-sm">
            <span>225 km</span>
            <span>·</span>
            <span>~2h30 de trajet</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Lille, capitale des Flandres et carrefour de l'Europe du Nord, est la destination longue distance la plus proche de Paris. Du Vieux-Lille à Euralille, Grondin Déménagement assure votre transfert vers la métropole lilloise en camion dédié.
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
              Votre déménagement Paris → Lille avec Grondin
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Lille est à 225 km de Paris via l'A1, soit environ 2h30 de trajet en camion. C'est notre destination longue distance la plus courte, ce qui en fait un déménagement particulièrement facile à organiser : chargement le matin à Paris, arrivée à Lille en début d'après-midi. Le Vieux-Lille avec ses magnifiques maisons flamandes, Wazemmes et son ambiance de quartier, ou les nouveaux programmes autour d'Euralille — nous connaissons la métropole lilloise.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement prend en charge votre déménagement Paris-Lille de A à Z : visite préalable à votre domicile parisien, établissement du devis, camion exclusivement dédié à votre transfert, assurance RC Professionnelle sur tout le trajet. Nous gérons également les spécificités d'accès propres aux quartiers lillois, notamment les rues pavées et les zones piétonnes du Vieux-Lille.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: 'ph:truck', title: 'Camion dédié', desc: 'Véhicule réservé uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Livraison ponctuelle', desc: 'Respect des créneaux convenus' },
                { icon: 'ph:map-pin', title: '225 km', desc: 'Trajet direct sans rupture de charge' },
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
              <h3 className="font-bold mb-2">Devis Paris → Lille</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement Paris → Lille" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
