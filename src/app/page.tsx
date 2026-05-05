import type { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(
  () => import('@/components/sections/HeroSection').then(m => ({ default: m.HeroSection })),
  { ssr: true }
)
import { TrustBar }       from '@/components/sections/TrustBar'
import { ServicesGrid }   from '@/components/sections/ServicesGrid'
import { OffresSection }  from '@/components/sections/OffresSection'
import { StatsSection }   from '@/components/sections/StatsSection'
import { GoogleReviews }  from '@/components/trust/GoogleReviews'
import { FAQSection }     from '@/components/sections/FAQSection'
import { PartnersSection } from '@/components/sections/PartnersSection'

export const metadata: Metadata = {
  title:       'Déménageur Paris & Île-de-France — Grondin Déménagement',
  description: 'Grondin Déménagement, votre expert du déménagement à Paris et en Île-de-France. Disponible 7j/7 de 8h30 à 20h. Devis gratuit en quelques clics. 1 500+ clients satisfaits.',
  alternates:  { canonical: 'https://grondin-demenagement.fr' },
}

const FAQ_ITEMS = [
  {
    question: 'Comment obtenir un devis de déménagement chez Grondin ?',
    answer:   'Obtenez votre devis gratuit en quelques clics sur notre site. Renseignez votre adresse de départ, d\'arrivée, la surface de votre logement et votre date souhaitée. Notre équipe vous recontacte rapidement avec une estimation personnalisée.',
  },
  {
    question: 'Grondin Déménagement travaille-t-il le week-end ?',
    answer:   'Oui, Grondin Déménagement est disponible 7 jours sur 7, y compris le samedi et le dimanche, de 8h30 à 20h. Nous intervenons sur Paris et toute l\'Île-de-France sans supplément week-end systématique.',
  },
  {
    question: 'Quelle est la différence entre les formules Économique, Confort et Premium ?',
    answer:   'La formule Économique inclut le personnel, la protection du mobilier et le transport. La formule Confort y ajoute le démontage et remontage du mobilier ainsi que les cartons. La formule Premium est tout-inclus : emballage des objets, déballage à destination, nettoyage fin de bail. Toutes les formules incluent l\'assurance responsabilité civile.',
  },
  {
    question: 'Grondin Déménagement est-il assuré ?',
    answer:   'Oui, Grondin Déménagement est couvert par une assurance Responsabilité Civile Professionnelle. Vos biens sont protégés pendant toute la durée du déménagement. Vous pouvez également souscrire une assurance complémentaire pour les objets de grande valeur.',
  },
  {
    question: 'Comment obtenir un devis pour mon déménagement à Paris ?',
    answer:   'Obtenez votre devis personnalisé en quelques clics via notre formulaire en ligne, ou appelez-nous directement au 01 85 44 00 50. Chaque devis est établi selon votre superficie, votre étage, la distance et vos besoins spécifiques. C\'est entièrement gratuit et sans engagement.',
  },
  {
    question: 'Grondin Déménagement intervient-il dans toute l\'Île-de-France ?',
    answer:   'Oui, Grondin Déménagement couvre l\'ensemble de l\'Île-de-France : Paris et ses 20 arrondissements, les Hauts-de-Seine (92), la Seine-Saint-Denis (93), le Val-de-Marne (94), l\'Essonne (91), les Yvelines (78), le Val-d\'Oise (95) et la Seine-et-Marne (77).',
  },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':   'https://grondin-demenagement.fr/#organization',
      name:    'Grondin Déménagement',
      url:     'https://grondin-demenagement.fr',
      logo:    'https://grondin-demenagement.fr/images/logo-grondin.png',
      telephone: '+33185440050',
      email:   'contact@grondin-demenagement.fr',
      sameAs:  [
        'https://www.facebook.com/grondin.demenagement',
        'https://www.linkedin.com/company/grondin-demenagement',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id':   'https://grondin-demenagement.fr/#localbusiness',
      name:    'Grondin Déménagement',
      image:   'https://grondin-demenagement.fr/images/logo-grondin.png',
      telephone: '+33185440050',
      email:   'contact@grondin-demenagement.fr',
      address: {
        '@type':         'PostalAddress',
        addressLocality: 'Paris',
        postalCode:      '75011',
        addressCountry:  'FR',
      },
      geo: {
        '@type':    'GeoCoordinates',
        latitude:   48.8566,
        longitude:  2.3522,
      },
      url:        'https://grondin-demenagement.fr',
      priceRange: '€€',
      openingHoursSpecification: [
        {
          '@type':    'OpeningHoursSpecification',
          dayOfWeek:  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens:      '08:30',
          closes:     '20:00',
        },
      ],
      aggregateRating: {
        '@type':       'AggregateRating',
        ratingValue:   '4.9',
        reviewCount:   '34',
        bestRating:    '5',
        worstRating:   '1',
      },
      areaServed: [
        { '@type': 'City',               name: 'Paris' },
        { '@type': 'AdministrativeArea', name: 'Île-de-France' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:    'Services de déménagement',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Déménagement Paris & IDF' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monte-meuble Paris' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garde-meubles' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage fin de bail' } },
        ],
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <HeroSection />
      <TrustBar />
      <PartnersSection />
      <ServicesGrid />
      <StatsSection />
      <section className="py-16 bg-neutral-50" aria-label="Nos déménagements en images">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <p className="text-xs font-semibold text-grondin-500 uppercase tracking-widest text-center mb-3">Nos déménagements</p>
          <h2 className="text-fluid-2xl font-bold text-neutral-900 text-center mb-10">Des équipes professionnelles à votre service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/equipe-grondin.webp" alt="Équipe Grondin Déménagement en action devant le camion" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:col-span-1">
              <Image src="/images/demenageur-carton.webp" alt="Déménageur Grondin portant un carton lors d'un déménagement à Paris" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/images/grondin-immeuble-paris.webp" alt="Déménageur Grondin à l'entrée d'un immeuble parisien" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <OffresSection />
      <GoogleReviews />
      <FAQSection
        items={FAQ_ITEMS}
        title="Questions fréquentes sur nos déménagements"
        eyebrow="FAQ"
      />
    </>
  )
}
