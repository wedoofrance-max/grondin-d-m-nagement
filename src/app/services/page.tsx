import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Nos Services de Déménagement à Paris — Grondin',
  description: 'Déménagement Paris, monte-meubles, garde-meubles, nettoyage, débarras et transport marchandises. Grondin Déménagement intervient 7j/7 en Île-de-France.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services' },
}

const SERVICES = [
  {
    icon:        'ph:house-line',
    title:       'Déménagement Paris',
    description: 'Déménagement résidentiel dans tous les arrondissements de Paris. Équipes expérimentées, véhicules adaptés, assurance incluse.',
    href:        '/services/demenagement-paris',
  },
  {
    icon:        'ph:elevator',
    title:       'Monte-meubles Paris',
    description: 'Location et utilisation de monte-meubles pour les étages inaccessibles par escalier. Intervention rapide sur tout Paris.',
    href:        '/services/monte-meubles-paris',
  },
  {
    icon:        'ph:warehouse',
    title:       'Garde-meubles',
    description: 'Box de stockage sécurisés disponibles à la semaine ou au mois. Solution idéale entre deux déménagements.',
    href:        '/services/garde-meubles',
  },
  {
    icon:        'ph:broom',
    title:       'Nettoyage déménagement',
    description: 'Service de nettoyage fin de bail professionnel. Restitution de votre logement en parfait état pour récupérer votre caution.',
    href:        '/services/nettoyage-demenagement-paris',
  },
  {
    icon:        'ph:recycle',
    title:       'Encombrement & nettoyage',
    description: 'Évacuation des encombrants, débarras de cave, grenier ou appartement. Collecte et traitement responsable des déchets.',
    href:        '/services/encombrement-nettoyage-paris',
  },
  {
    icon:        'ph:lightning',
    title:       'Déménagement express',
    description: 'Vous déménagez en urgence ? Nos équipes interviennent sous 24 à 48h sur Paris et l\'Île-de-France.',
    href:        '/services/demenagement-express-paris',
  },
  {
    icon:        'ph:van',
    title:       'Transport marchandises',
    description: 'Transport de colis, matériel ou marchandises dans toute l\'Île-de-France. Livraison adaptée à votre volume.',
    href:        '/services/transport-marchandises-paris',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Nos services' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Nos services à Paris et en Île-de-France
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            De votre déménagement à la remise en état de votre logement, Grondin prend en charge chaque étape de votre projet.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-grondin-50 rounded-xl group-hover:bg-grondin-500 transition-colors duration-300">
                <Icon icon={service.icon} width={24} height={24} className="text-grondin-500 group-hover:text-white transition-colors duration-300" aria-hidden />
              </div>
              <div>
                <h2 className="text-fluid-lg font-bold text-neutral-900 group-hover:text-grondin-600 transition-colors mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-grondin-500 font-medium text-sm">
                <span>En savoir plus</span>
                <Icon icon="ph:arrow-right" width={16} height={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden />
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-grondin-50 rounded-3xl p-10 text-center max-w-2xl mx-auto">
          <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-3">
            Un projet spécifique ?
          </h2>
          <p className="text-neutral-600 mb-6">
            Décrivez-nous votre besoin dans notre formulaire. Nous vous proposons une solution sur mesure et un devis gratuit sans engagement.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
          >
            <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
            Demander un devis gratuit
          </Link>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
