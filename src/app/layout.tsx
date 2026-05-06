import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import { StickyWhatsApp } from '@/components/layout/StickyWhatsApp'
import { ToastProvider } from '@/components/layout/ToastContainer'
import { IconifyProvider } from '@/components/layout/IconifyProvider'
import './globals.css'

const inter = Inter({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display:  'swap',
  preload:  true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://grondin-demenagement.fr'),
  title: {
    default:  'Grondin Déménagement — Déménageur Paris & Île-de-France',
    template: '%s | Grondin Déménagement',
  },
  description: 'Expert du déménagement à Paris et en Île-de-France. Disponible 7j/7 de 8h30 à 20h. Devis gratuit en quelques clics. 3 formules adaptées à tous les budgets. 1 500+ clients satisfaits.',
  keywords:    ['déménageur Paris', 'déménagement Paris', 'déménagement Île-de-France', 'devis déménagement Paris'],
  authors:     [{ name: 'Grondin Déménagement' }],
  creator:     'Grondin Déménagement',
  publisher:   'Grondin Déménagement',
  robots: {
    index:               true,
    follow:              true,
    'max-image-preview': 'large',
    'max-snippet':       -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type:        'website',
    locale:      'fr_FR',
    url:         'https://grondin-demenagement.fr',
    siteName:    'Grondin Déménagement',
    title:       'Grondin Déménagement — Déménageur Paris & Île-de-France',
    description: 'Expert du déménagement à Paris et en Île-de-France. 7j/7, devis en quelques clics.',
    images: [{ url: '/images/og-grondin-demenagement.webp', width: 1200, height: 630, alt: 'Grondin Déménagement' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Grondin Déménagement — Déménageur Paris & IDF',
    description: 'Expert du déménagement à Paris et en Île-de-France. 7j/7, devis en quelques clics.',
    images:      ['/images/og-grondin-demenagement.webp'],
  },
  alternates: {
    canonical: 'https://grondin-demenagement.fr',
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': 'https://grondin-demenagement.fr/#business',
  name: 'Grondin Déménagement',
  url: 'https://grondin-demenagement.fr',
  telephone: '+33185440050',
  email: 'contact@grondin-demenagement.fr',
  image: 'https://grondin-demenagement.fr/images/og-grondin-demenagement.webp',
  description: 'Expert du déménagement à Paris et en Île-de-France. Disponible 7j/7 de 8h30 à 20h. Devis gratuit. 4,9/5 sur Google.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    postalCode: '75011',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:30',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Paris', sameAs: 'https://www.wikidata.org/wiki/Q90' },
    { '@type': 'City', name: 'Boulogne-Billancourt' },
    { '@type': 'City', name: 'Versailles' },
    { '@type': 'City', name: 'Neuilly-sur-Seine' },
    { '@type': 'City', name: 'Vincennes' },
    { '@type': 'City', name: 'Nanterre' },
    { '@type': 'City', name: 'Montreuil' },
    { '@type': 'City', name: 'Saint-Denis' },
    { '@type': 'City', name: 'Créteil' },
    { '@type': 'City', name: 'Asnières-sur-Seine' },
    { '@type': 'City', name: 'Colombes' },
    { '@type': 'City', name: 'Levallois-Perret' },
    { '@type': 'City', name: 'Courbevoie' },
    { '@type': 'City', name: 'Issy-les-Moulineaux' },
    { '@type': 'City', name: 'Ivry-sur-Seine' },
    { '@type': 'City', name: 'Vitry-sur-Seine' },
    { '@type': 'City', name: 'Alfortville' },
    { '@type': 'City', name: 'Maisons-Alfort' },
    { '@type': 'City', name: 'Charenton-le-Pont' },
    { '@type': 'City', name: 'Saint-Maur-des-Fossés' },
    { '@type': 'City', name: 'Fontenay-sous-Bois' },
    { '@type': 'City', name: 'Noisy-le-Grand' },
    { '@type': 'City', name: 'Bondy' },
    { '@type': 'City', name: 'Clamart' },
    { '@type': 'City', name: 'Meudon' },
    { '@type': 'City', name: 'Montrouge' },
    { '@type': 'City', name: 'Malakoff' },
    { '@type': 'City', name: 'Bagneux' },
    { '@type': 'AdministrativeArea', name: 'Île-de-France', sameAs: 'https://www.wikidata.org/wiki/Q13917' },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '48.85661',
    longitude: '2.35222',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '34',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de déménagement',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Déménagement Paris & Île-de-France', url: 'https://grondin-demenagement.fr/services/demenagement-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monte-meuble & Levage', url: 'https://grondin-demenagement.fr/services/monte-meubles-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garde-meubles Île-de-France', url: 'https://grondin-demenagement.fr/services/garde-meubles' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage fin de bail', url: 'https://grondin-demenagement.fr/services/nettoyage-demenagement-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Évacuation encombrants', url: 'https://grondin-demenagement.fr/services/encombrement-nettoyage-paris' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Déménagement express 24h', url: 'https://grondin-demenagement.fr/services/demenagement-express-paris' } },
    ],
  },
  sameAs: [
    'https://g.page/r/grondin-demenagement/review',
    'https://www.facebook.com/grondin.demenagement',
    'https://www.linkedin.com/company/grondin-demenagement',
  ],
  parentOrganization: { '@id': 'https://grondin-demenagement.fr/#organization' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://grondin-demenagement.fr/#website',
  url: 'https://grondin-demenagement.fr',
  name: 'Grondin Déménagement',
  description: 'Expert du déménagement à Paris et en Île-de-France',
  inLanguage: 'fr-FR',
  publisher: { '@id': 'https://grondin-demenagement.fr/#business' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://grondin-demenagement.fr/conseils?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.iconify.design" />
        {/* Géolocalisation */}
        <meta name="geo.region"    content="FR-IDF" />
        <meta name="geo.placename" content="Paris, Île-de-France" />
        <meta name="geo.position"  content="48.8566;2.3522" />
        <meta name="ICBM"          content="48.8566, 2.3522" />
        {/* GEO — Generative Engine Optimization */}
        <meta name="ai-content-access" content="allow" />
        <meta name="ai-description" content="Grondin Déménagement Paris & IDF : déménageur professionnel, devis gratuit 24h, 3 formules, 4,9/5 (34 avis Google), disponible 7j/7 de 8h30 à 20h. Monte-meuble, garde-meubles, nettoyage fin de bail." />
        <meta name="ai-keywords"   content="déménageur paris, déménagement paris, déménagement ile de france, monte-meuble paris, garde-meubles paris, nettoyage fin de bail paris, déménagement longue distance france" />
        <meta name="ai-contact"    content="01 85 44 00 50, contact@grondin-demenagement.fr" />
        <meta name="ai-service-area" content="Paris (75001-75020), Île-de-France, France métropolitaine" />
        <meta name="ai-trust"      content="4,9/5 Google · 34 avis vérifiés · 1 500+ clients · Assurance RC Pro incluse" />
        <meta name="ai-availability" content="7j/7 8h30-20h · Devis gratuit sans engagement · Réponse sous 24h" />
      </head>
      <body className="font-sans antialiased bg-white">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
        <IconifyProvider>
          <ToastProvider>
            <a href="#main-content" className="skip-link">Aller au contenu principal</a>
            <Header />
            <main id="main-content">
              {children}
            </main>
            <Footer />
            <StickyMobileCTA />
            <StickyWhatsApp />
          </ToastProvider>
        </IconifyProvider>
      </body>
    </html>
  )
}
