import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Garde-Meubles Paris — Stockage Sécurisé | Grondin Déménagement',
  description: 'Garde-meubles sécurisé à Paris. Box de stockage à la semaine ou au mois, accessible 7j/7. Solution idéale entre deux déménagements. Devis gratuit.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/garde-meubles' },
}

const FAQ = [
  {
    question: 'Combien de temps puis-je stocker mes meubles ?',
    answer: 'Nous proposons des solutions de garde-meubles à la semaine, au mois ou pour des durées plus longues. Pas de durée minimale imposée. Vous récupérez vos affaires quand vous le souhaitez.',
  },
  {
    question: 'Mes affaires sont-elles sécurisées dans votre garde-meubles ?',
    answer: 'Oui, nos entrepôts sont équipés d\'une surveillance vidéo 24h/24, d\'alarmes anti-intrusion et d\'un accès sécurisé par badge. Vos affaires sont stockées dans des box individuels fermés à clé.',
  },
  {
    question: 'Puis-je accéder à mes affaires pendant le stockage ?',
    answer: 'Oui, l\'accès est possible sur rendez-vous avec notre équipe. Nous vous accompagnons si vous devez récupérer des affaires spécifiques dans votre box.',
  },
  {
    question: 'Le garde-meubles est-il assuré ?',
    answer: 'Oui, vos biens sont couverts par notre assurance pendant toute la durée du stockage. Pour les objets de grande valeur, nous vous recommandons une assurance complémentaire.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/services/garde-meubles#service',
  name: 'Garde-meubles Île-de-France',
  description: 'Box de stockage sécurisé à Paris et Île-de-France. Solutions de garde-meubles à la semaine ou au mois, accessibles 7j/7.',
  url: 'https://grondin-demenagement.fr/services/garde-meubles',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  serviceType: 'Storage Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function GardeMeublesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Garde-meubles', href: 'https://grondin-demenagement.fr/services/garde-meubles' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Garde-meubles' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Garde-meubles sécurisé à Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Des box de stockage sécurisés et adaptés à votre volume. Idéal entre deux déménagements, lors d'une rénovation ou pour libérer de l'espace.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Pourquoi choisir notre garde-meubles ?</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: 'ph:lock', title: 'Sécurité maximale', desc: 'Surveillance vidéo 24h/24, alarme anti-intrusion, accès badge, box fermé à clé.' },
                { icon: 'ph:thermometer', title: 'Conditions optimales', desc: 'Entrepôts secs, ventilés et hors gel pour préserver vos meubles et objets.' },
                { icon: 'ph:calendar', title: 'Durée flexible', desc: 'À la semaine ou au mois, sans engagement longue durée. Résiliez quand vous voulez.' },
                { icon: 'ph:truck', title: 'Transfert direct', desc: 'Vos meubles peuvent être stockés directement après votre déménagement, sans rupture de charge.' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'Vos biens sont assurés pendant toute la durée du stockage.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-grondin-50">
                  <div className="w-10 h-10 bg-grondin-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={item.icon} width={20} height={20} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-4">Quand utiliser le garde-meubles ?</h3>
            <ul className="space-y-2">
              {[
                'Entre deux déménagements (attente de logement)',
                'Pendant une rénovation de votre appartement',
                'Pour libérer de l\'espace dans votre domicile',
                'Lors d\'une mutation professionnelle temporaire',
                'Pour conserver des meubles hérités',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-neutral-700 text-sm">
                  <Icon icon="ph:check-circle-fill" width={16} height={16} className="text-grondin-500 flex-shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/garde-meubles-grondin.jpg"
                alt="Entrepôt Grondin : box de garde-meubles individuels numérotés à Paris"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-2">Tailles de box disponibles</h2>
              <p className="text-grondin-200 text-sm mb-4">Adaptées à votre volume, de la chambre à la maison entière.</p>
              <ul className="space-y-3">
                {['Box S — Studio ou chambre (5–10 m³)', 'Box M — T2–T3 (15–25 m³)', 'Box L — T4–T5 (30–40 m³)', 'Box XL — Maison complète (50+ m³)'].map((box) => (
                  <li key={box} className="flex items-center gap-2.5">
                    <Icon icon="ph:package" width={18} height={18} className="text-grondin-300" aria-hidden />
                    <span className="text-grondin-100 text-sm">{box}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-grondin-200 rounded-3xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Réserver un box</h3>
              <p className="text-sm text-neutral-600 mb-4">Devis gratuit, disponibilité immédiate.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-600 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Demander un devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors text-sm">
                <Icon icon="ph:phone" width={18} height={18} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le garde-meubles" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
