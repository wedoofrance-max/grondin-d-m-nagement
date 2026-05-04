import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { CTASection } from '@/components/sections/CTASection'
import { GoogleReviews } from '@/components/trust/GoogleReviews'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'À Propos — Grondin Déménagement Paris',
  description: 'Découvrez Grondin Déménagement : votre partenaire de confiance pour tous vos déménagements à Paris et en Île-de-France. Équipes professionnelles, disponibles 7j/7.',
  alternates: { canonical: 'https://grondin-demenagement.fr/a-propos' },
}

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'À propos', href: 'https://grondin-demenagement.fr/a-propos' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'À propos' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            À propos de Grondin Déménagement
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Votre déménageur de confiance à Paris et en Île-de-France. Disponible 7j/7, engagé pour votre satisfaction.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Grondin Déménagement est une société spécialisée dans le déménagement résidentiel à Paris et en Île-de-France. Nous accompagnons les particuliers dans leurs projets de déménagement, qu'il s'agisse d'un studio en plein cœur de Paris ou d'une maison en grande couronne.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Notre équipe est constituée de déménageurs professionnels formés aux techniques de manutention, à la protection des biens et à la gestion des contraintes spécifiques à Paris : escaliers étroits, rues piétonnes, zones à faibles émissions, immeubles sans ascenseur.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Nous proposons trois formules adaptées à tous les besoins et tous les budgets — Économique, Confort, Premium — ainsi qu'une gamme de services complémentaires : monte-meubles, garde-meubles, nettoyage fin de bail et évacuation d'encombrants.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
            >
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Obtenir un devis gratuit
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <Image
              src="/images/equipe-grondin.webp"
              alt="Équipe Grondin Déménagement devant le camion, prêts à intervenir"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: 'ph:clock', title: 'Disponibilité 7j/7', desc: 'Nous intervenons du lundi au dimanche de 8h30 à 20h, y compris les jours fériés.' },
            { icon: 'ph:map-pin', title: 'Paris & Île-de-France', desc: 'Nous couvrons les 20 arrondissements de Paris et l\'ensemble des communes d\'Île-de-France.' },
            { icon: 'ph:shield-check', title: 'Assurance professionnelle', desc: 'Tous nos déménagements sont couverts par une assurance Responsabilité Civile Professionnelle.' },
            { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis clients vérifiés. La satisfaction de nos clients est notre priorité absolue.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 bg-grondin-50 rounded-2xl">
              <div className="w-12 h-12 bg-grondin-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon icon={item.icon} width={22} height={22} className="text-white" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-grondin-900 rounded-3xl p-10 mb-16">
          <h2 className="text-fluid-2xl font-bold text-white mb-8 text-center">Nos engagements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ph:hand-waving', title: 'Accueil personnalisé', desc: 'Un conseiller dédié de la première demande jusqu\'à la remise des clés.' },
              { icon: 'ph:check-circle', title: 'Ponctualité', desc: 'Nous respectons les horaires convenus. En cas d\'imprévu, nous vous prévenons.' },
              { icon: 'ph:trophy', title: 'Qualité de service', desc: 'Protections des meubles, manutention soigneuse, résultat garanti.' },
              { icon: 'ph:arrow-clockwise', title: 'Réactivité', desc: 'Devis sous 24h, interventions express possibles selon disponibilité.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon icon={item.icon} width={28} height={28} className="text-grondin-300" aria-hidden />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-grondin-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: 'ph:phone', label: 'Téléphone', value: '01 85 44 00 50', href: 'tel:+33185440050', sub: '7j/7 · 8h30–20h' },
            { icon: 'ph:envelope-simple', label: 'Email', value: 'contact@grondin-demenagement.fr', href: 'mailto:contact@grondin-demenagement.fr', sub: 'Réponse sous 2h' },
            { icon: 'ph:file-text', label: 'Devis en ligne', value: 'Formulaire gratuit', href: '/devis', sub: 'Résultat sous 24h' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-grondin-50 rounded-xl flex items-center justify-center">
                <Icon icon={item.icon} width={24} height={24} className="text-grondin-500" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold text-grondin-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-bold text-neutral-900 mt-0.5">{item.value}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <GoogleReviews />
      <CTASection />
    </div>
  )
}
