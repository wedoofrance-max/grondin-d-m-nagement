import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import { StickyWhatsApp } from '@/components/layout/StickyWhatsApp'
import { ToastProvider } from '@/components/layout/ToastContainer'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.iconify.design" />
        <link
          rel="preload"
          as="image"
          href="/images/hero-demenagement-paris.webp"
          fetchPriority="high"
        />
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
      </body>
    </html>
  )
}
