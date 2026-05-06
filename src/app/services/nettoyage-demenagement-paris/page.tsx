import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Nettoyage Déménagement Paris — Fin de Bail | Grondin',
  description: 'Nettoyage professionnel fin de bail à Paris. Récupérez votre caution grâce à une remise en état impeccable. Devis gratuit, intervention rapide.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/nettoyage-demenagement-paris' },
}

const FAQ = [
  {
    question: 'Le nettoyage fin de bail permet-il de récupérer ma caution ?',
    answer: 'Un nettoyage professionnel conforme aux attentes des propriétaires maximise vos chances de récupérer votre caution intégralement. Nous vous remettons une attestation de nettoyage à présenter à votre bailleur.',
  },
  {
    question: 'Que comprend le nettoyage fin de bail Grondin ?',
    answer: 'Le nettoyage comprend l\'intégralité des pièces (cuisine, salle de bain, WC, chambres, salon), les sols, vitres, appareils électroménagers (four, réfrigérateur, plaques), les placards, les murs et plafonds si nécessaire.',
  },
  {
    question: 'Puis-je coupler le déménagement et le nettoyage le même jour ?',
    answer: 'Oui, nous pouvons organiser le déménagement le matin et le nettoyage l\'après-midi, ou sur deux jours consécutifs. Notre coordinateur planifie tout pour minimiser vos déplacements.',
  },
  {
    question: 'Intervenez-vous aussi pour le nettoyage du nouveau logement ?',
    answer: 'Absolument. Nous pouvons réaliser un nettoyage de bienvenue dans votre nouveau logement avant votre emménagement, pour que tout soit impeccable dès votre arrivée.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/services/nettoyage-demenagement-paris#service',
  name: 'Nettoyage fin de bail Paris',
  description: 'Nettoyage professionnel fin de bail à Paris. Remise en état complète pour récupérer votre caution. Intervention rapide dans les 20 arrondissements.',
  url: 'https://grondin-demenagement.fr/services/nettoyage-demenagement-paris',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Paris', sameAs: 'https://www.wikidata.org/wiki/Q90' },
  serviceType: 'Cleaning Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function NettoyageDemenagementParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Nettoyage déménagement Paris', href: 'https://grondin-demenagement.fr/services/nettoyage-demenagement-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Nettoyage déménagement' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Nettoyage fin de bail à Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Récupérez votre caution grâce à une remise en état professionnelle. Nos équipes interviennent après votre déménagement pour laisser le logement impeccable.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Ce qui est inclus dans notre nettoyage</h2>
            <div className="space-y-3 mb-8">
              {[
                { room: 'Cuisine', items: ['Nettoyage four et plaques', 'Dégraissage hotte et carrelage', 'Vidange et nettoyage réfrigérateur', 'Placards et tiroirs'] },
                { room: 'Salle de bain & WC', items: ['Détartrage robinetterie et céramiques', 'Nettoyage cabine de douche/baignoire', 'Désinfection WC', 'Miroirs et surfaces'] },
                { room: 'Pièces de vie', items: ['Sols (carrelage, parquet, moquette)', 'Vitres intérieures et extérieures', 'Boiseries et plinthes', 'Interrupteurs et prises'] },
                { room: 'Général', items: ['Toiles d\'araignées', 'Plafonds et murs si tachés', 'Cave et annexes', 'Attestation de nettoyage remise'] },
              ].map((section) => (
                <div key={section.room} className="bg-grondin-50 rounded-xl p-4">
                  <h3 className="font-bold text-neutral-900 mb-2">{section.room}</h3>
                  <ul className="grid grid-cols-2 gap-1">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-neutral-600">
                        <Icon icon="ph:check" width={12} height={12} className="text-grondin-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/nettoyage-appartement.webp"
                alt="Nettoyage professionnel d'appartement après déménagement à Paris"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Nos engagements</h2>
              <ul className="space-y-3">
                {['Résultat garanti ou reprise sans frais', 'Produits professionnels agréés', 'Attestation de nettoyage remise', 'Intervention après déménagement possible', 'Respect strict de votre logement'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon icon="ph:check-circle-fill" width={18} height={18} className="text-grondin-300 flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-grondin-200 rounded-3xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Devis nettoyage gratuit</h3>
              <p className="text-sm text-neutral-600 mb-4">Tarif selon surface et état du logement.</p>
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

      <FAQSection items={FAQ} title="Questions sur le nettoyage fin de bail" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
