import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { GoogleReviews } from '@/components/trust/GoogleReviews'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Témoignages Clients — Avis Grondin Déménagement Paris',
  description: 'Lisez les avis de nos clients satisfaits. Grondin Déménagement : 4,9/5 sur Google avec 34 avis vérifiés. Découvrez pourquoi nos clients nous recommandent.',
  alternates: { canonical: 'https://grondin-demenagement.fr/temoignages' },
}

const REVIEWS_EXTENDED = [
  {
    name:   'Sophie M.',
    date:   'Mars 2025',
    rating: 5,
    city:   'Paris 11ème',
    text:   'Déménagement parfait du 11ème au 15ème. L\'équipe était ponctuelle, soigneuse avec mes meubles et très sympa. Le monte-meubles était impressionnant à voir ! Rien de cassé, rien d\'abîmé. Je recommande vivement.',
  },
  {
    name:   'Thomas R.',
    date:   'Février 2025',
    rating: 5,
    city:   'Boulogne-Billancourt',
    text:   'Très satisfait de la prestation. Devis clair, équipe efficace, déménagement terminé en 4h pour un T3. Toutes mes affaires sont arrivées en parfait état. Le coordinateur était disponible et à l\'écoute tout au long.',
  },
  {
    name:   'Amélie D.',
    date:   'Janvier 2025',
    rating: 5,
    city:   'Paris 6ème',
    text:   'Formule Premium choisie pour notre déménagement vers Lyon. Tout a été géré de A à Z. L\'emballage était très professionnel, même pour notre vaisselle fragile. L\'équipe à Lyon était aussi sérieuse qu\'à Paris.',
  },
  {
    name:   'Marc L.',
    date:   'Décembre 2024',
    rating: 5,
    city:   'Neuilly-sur-Seine',
    text:   'Deuxième fois que je fais appel à Grondin. Toujours aussi professionnels. Ils ont géré un escalier de service très étroit avec efficacité. Le nettoyage fin de bail était impeccable, j\'ai récupéré ma caution en totalité.',
  },
  {
    name:   'Claire B.',
    date:   'Novembre 2024',
    rating: 5,
    city:   'Paris 18ème',
    text:   'Déménagement en urgence demandé le mercredi pour le vendredi. Grondin a répondu présent ! Tarif correct, équipe de 3 personnes, tout s\'est passé sans accroc malgré le délai très court.',
  },
  {
    name:   'Pierre K.',
    date:   'Octobre 2024',
    rating: 4,
    city:   'Versailles',
    text:   'Bonne prestation globalement. L\'équipe était efficace et soigneuse. Légèrement en retard sur le créneau du matin, mais ils ont rattrapé le temps et tout était terminé comme prévu. Je recommande.',
  },
]

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type':    'LocalBusiness',
  name:       'Grondin Déménagement',
  aggregateRating: {
    '@type':      'AggregateRating',
    ratingValue:  '4.9',
    reviewCount:  '34',
    bestRating:   '5',
    worstRating:  '1',
  },
  review: REVIEWS_EXTENDED.map((r) => ({
    '@type':       'Review',
    author:        { '@type': 'Person', name: r.name },
    datePublished: r.date,
    reviewRating:  { '@type': 'Rating', ratingValue: String(r.rating) },
    reviewBody:    r.text,
  })),
}

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <BreadcrumbSchema items={[{ label: 'Témoignages', href: 'https://grondin-demenagement.fr/temoignages' }]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Témoignages' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Témoignages de nos clients
          </h1>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Icon key={s} icon="ph:star-fill" width={20} height={20} className="text-amber-400" aria-hidden />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4,9/5</span>
            <span className="text-white/60">·</span>
            <span className="text-white/70">34 avis Google vérifiés</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Lisez ce que nos clients disent de leur expérience avec Grondin Déménagement.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden h-64 mb-12">
          <Image
            src="/images/couple-installation.webp"
            alt="Couple satisfait après leur déménagement avec Grondin Déménagement"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grondin-900/70 to-transparent flex items-center px-10">
            <div>
              <p className="text-grondin-300 text-xs font-semibold uppercase tracking-widest mb-2">Ils nous font confiance</p>
              <p className="text-white text-2xl font-bold max-w-xs leading-tight">1 500+ familles déménagées avec succès</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REVIEWS_EXTENDED.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl border border-neutral-100 shadow-card p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Icon key={s} icon="ph:star-fill" width={16} height={16} className="text-amber-400" aria-hidden />
                  ))}
                </div>
                <span className="text-xs text-neutral-400">{review.date}</span>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed flex-1">"{review.text}"</p>
              <div>
                <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                <p className="text-xs text-neutral-500">{review.city}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-grondin-50 rounded-3xl p-10 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <Icon icon="ph:google-logo" width={40} height={40} className="text-grondin-500" aria-hidden />
          </div>
          <h2 className="text-fluid-xl font-bold text-neutral-900 mb-2">
            34 avis sur Google
          </h2>
          <p className="text-neutral-600 mb-6">
            Note moyenne de 4,9/5. Nos clients parlent de nous mieux que nous ne pourrions le faire.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
          >
            <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
            Demander mon devis gratuit
          </Link>
        </div>
      </div>

      <GoogleReviews />
      <CTASection />
    </div>
  )
}
