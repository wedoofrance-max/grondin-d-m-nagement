import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Créteil 94000 — Devis Gratuit | Grondin',
  description: 'Déménageur à Créteil (94000, Val-de-Marne). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/creteil' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans les quartiers du lac de Créteil et du centre-ville ?',
    answer: 'Oui, nous couvrons l\'ensemble de Créteil, y compris le secteur du lac avec ses immeubles des années 1970-80, le centre-ville administratif et commercial, et les quartiers résidentiels plus pavillonnaires au sud. Chaque secteur présente des configurations d\'accès différentes que nous évaluons lors de la visite.',
  },
  {
    question: 'Comment gérez-vous les déménagements dans les tours du quartier du lac de Créteil ?',
    answer: 'Les tours du quartier du lac sont des immeubles de grande hauteur avec ascenseurs de taille variable. Nous coordonnons en amont avec le gardien ou le syndic pour réserver les créneaux de monte-charge. La protection des parties communes est systématique.',
  },
  {
    question: 'Créteil est le chef-lieu du Val-de-Marne — est-il facile d\'accès pour vos camions ?',
    answer: 'Oui, Créteil est bien desservie par le réseau routier : N19, A86, avenue de Paris. L\'accès depuis Paris (12ème arrondissement) est direct via le RER D ou la N19. Nos camions s\'y rendent sans difficulté, y compris les week-ends où le trafic est plus fluide.',
  },
]

export default function DemenagementCreteilPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Créteil', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/creteil' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Créteil' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Créteil — Val-de-Marne (94000)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Créteil, chef-lieu du Val-de-Marne, est une ville importante avec des quartiers très contrastés : le célèbre quartier du lac avec ses tours iconiques, les secteurs pavillonnaires au sud, et les zones commerciales et administratives du centre.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Devis gratuit
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
              Votre déménageur à Créteil
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Créteil concentre une grande variété de logements. Les tours du quartier du lac (Soleil, Lune, Étoile) sont des immeubles de grande hauteur nécessitant une organisation précise pour l'utilisation des monte-charges. Le centre-ville propose des copropriétés plus récentes avec ascenseurs standard, et les quartiers sud disposent de maisons individuelles plus faciles d'accès.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement réalise une visite gratuite pour adapter notre intervention à votre logement spécifique. Nous établissons un devis personnalisé et gérons les contraintes logistiques propres à votre quartier. Notre équipe s'occupe de tout, de l'emballage jusqu'au placement dans votre nouveau logement.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:map-pin', title: 'Intervention locale', desc: 'Équipes basées en Île-de-France' },
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
              <h3 className="font-bold mb-2">Devis Créteil</h3>
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
            <Link href="/demenagement-ile-de-france" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Toutes les villes IDF
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement à Créteil" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
