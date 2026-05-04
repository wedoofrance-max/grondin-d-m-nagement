import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris Marseille — Longue Distance | Grondin',
  description: 'Déménagement Paris vers Marseille (775 km). Grondin Déménagement : camion dédié, assurance incluse, devis gratuit. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-marseille' },
}

const FAQ = [
  {
    question: 'Combien de temps dure un déménagement Paris-Marseille ?',
    answer: 'Le trajet en camion entre Paris et Marseille est d\'environ 7h à 7h30 via l\'A7 (Autoroute du Soleil). En raison de la distance, nous partons généralement très tôt le matin de Paris (5h-6h) pour arriver à Marseille en début de soirée et décharger le lendemain matin. Cela évite les heures de pointe et assure un déménagement serein.',
  },
  {
    question: 'Le déménagement Paris-Marseille se fait-il en un ou deux jours ?',
    answer: 'Pour un T2 ou T3, le déménagement peut se faire en une longue journée avec un départ très matinal. Pour les plus grands volumes (T4 et au-delà, maisons), nous prévoyons deux jours : chargement à Paris le jour 1, nuit sur la route ou à Marseille, déchargement le jour 2. Cela dépend du volume évalué lors de la visite préalable.',
  },
  {
    question: 'Intervenez-vous dans tous les arrondissements de Marseille ?',
    answer: 'Oui, nous livrons dans l\'ensemble de la ville de Marseille et de la métropole Aix-Marseille. Vieux-Port, Endoume, Prado, Castellane, les quartiers nord, Aix-en-Provence — nous connaissons les accès et les spécificités de chaque secteur.',
  },
  {
    question: 'Faut-il réserver longtemps à l\'avance pour un déménagement Paris-Marseille ?',
    answer: 'Pour les déménagements longue distance, nous recommandons de nous contacter au minimum quatre semaines à l\'avance, six semaines en période estivale. Cela nous permet de bloquer les camions et l\'équipe, et de réaliser la visite préalable dans les meilleures conditions.',
  },
]

export default function DemenagementParisMarseillePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
        { label: 'Paris → Marseille', href: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-marseille' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Longue distance', href: '/demenagement-longue-distance' },
            { label: 'Paris → Marseille' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris → Marseille
          </h1>
          <div className="flex items-center gap-4 mb-3 text-grondin-300 text-sm">
            <span>775 km</span>
            <span>·</span>
            <span>~7h de trajet</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Paris-Marseille est la liaison longue distance la plus emblématique de France. Grondin Déménagement assure votre transfert vers le Vieux-Port, Endoume, le Prado ou les quartiers résidentiels de la deuxième ville de France, en camion dédié.
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
              Votre déménagement Paris → Marseille avec Grondin
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Avec 775 km via l'A7 (l'Autoroute du Soleil), Paris-Marseille est notre trajet longue distance le plus long. Cette distance implique une organisation particulièrement soignée : visite préalable pour calibrer le volume, planification du départ très tôt le matin, coordination avec votre nouveau logement à Marseille pour l'accès et le stationnement à l'arrivée.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement prend en charge votre déménagement de bout en bout. Votre camion est exclusivement dédié à votre transfert, sans groupage. L'assurance RC Professionnelle couvre vos affaires sur tout le trajet. Nous vous tenons informé de l'avancement du transport et convenons d'un créneau précis de livraison à Marseille.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: 'ph:truck', title: 'Camion dédié', desc: 'Véhicule réservé uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Livraison ponctuelle', desc: 'Respect des créneaux convenus' },
                { icon: 'ph:map-pin', title: '775 km', desc: 'Trajet direct sans rupture de charge' },
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
              <h3 className="font-bold mb-2">Devis Paris → Marseille</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement Paris → Marseille" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
