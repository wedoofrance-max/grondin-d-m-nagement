import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Formule Premium — Déménagement Tout-Inclus Paris | Grondin',
  description: 'Formule Premium Grondin : déménagement tout-inclus à Paris. Emballage, déballage, installation, nettoyage fin de bail. Devis gratuit et personnalisé.',
  alternates: { canonical: 'https://grondin-demenagement.fr/offres/premium' },
}

const FAQ = [
  {
    question: 'Qu\'est-ce qui est inclus dans la formule Premium ?',
    answer: 'La formule Premium est notre offre tout-inclus : équipe professionnelle, camion, démontage/remontage des meubles, emballage intégral de tous vos biens, déballage et installation à destination, nettoyage fin de bail, et monte-meubles si nécessaire.',
  },
  {
    question: 'Le nettoyage fin de bail est-il certifié ?',
    answer: 'Oui, notre nettoyage fin de bail est réalisé par une équipe spécialisée selon les standards professionnels. Nous vous remettons une attestation de nettoyage pour votre propriétaire.',
  },
  {
    question: 'Le monte-meubles est-il toujours inclus ?',
    answer: 'Nous évaluons la nécessité d\'un monte-meubles lors de la visite préalable. S\'il est nécessaire (accès difficile, étage élevé, escalier trop étroit), il est inclus dans la formule Premium sans supplément.',
  },
  {
    question: 'Combien de temps dure un déménagement avec la formule Premium ?',
    answer: 'La durée dépend du volume de votre logement. Pour un appartement T3-T4, comptez généralement 1 à 2 jours. Pour une grande maison, 2 à 3 jours. Votre conseiller vous donnera une estimation précise lors de la visite.',
  },
]

export default function FormulaPremiumPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Nos formules', href: 'https://grondin-demenagement.fr/offres' },
        { label: 'Formule Premium', href: 'https://grondin-demenagement.fr/offres/premium' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos formules', href: '/offres' },
            { label: 'Formule Premium' },
          ]} />
          <div className="flex items-center gap-4 mt-4 mb-3">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon icon="ph:crown-simple" width={28} height={28} className="text-amber-400" aria-hidden />
            </div>
            <div>
              <p className="text-grondin-300 text-sm font-semibold uppercase tracking-widest mb-1">Le Tout-Inclus</p>
              <h1 className="text-fluid-4xl font-extrabold text-white">Formule Premium</h1>
            </div>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Notre offre la plus complète. Vous posez vos clés et nous gérons tout — de l'emballage dans votre ancien logement au déballage dans le nouveau.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Tout ce qui est inclus</h2>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                { icon: 'ph:users', title: 'Équipe dédiée et coordinateur', desc: 'Une équipe de déménageurs expérimentés avec un coordinateur dédié tout au long de la prestation.' },
                { icon: 'ph:truck', title: 'Camion professionnel adapté', desc: 'Véhicule dimensionné pour votre volume, équipé de tout le matériel de manutention nécessaire.' },
                { icon: 'ph:wrench', title: 'Démontage et remontage des meubles', desc: 'Tous vos meubles sont démontés chez vous, transportés en sécurité et remontés à destination.' },
                { icon: 'ph:gift', title: 'Emballage intégral de tous vos biens', desc: 'Chaque objet — vaisselle, vêtements, livres, électronique, objets fragiles — est emballé par nos soins.' },
                { icon: 'ph:package-open', title: 'Déballage et installation à destination', desc: 'À l\'arrivée, nous déballons et installons vos affaires selon vos instructions. Vous êtes chez vous dès le premier soir.' },
                { icon: 'ph:broom', title: 'Nettoyage fin de bail', desc: 'Service de nettoyage complet dans votre ancien logement, avec attestation remise à votre propriétaire.' },
                { icon: 'ph:elevator', title: 'Monte-meubles si nécessaire', desc: 'Inclus sans supplément en cas d\'accès difficile, d\'étage élevé ou de couloir trop étroit.' },
                { icon: 'ph:shield-check', title: 'Assurance RC Professionnelle', desc: 'Couverture assurance complète pour tous vos biens pendant toute la durée du déménagement.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 p-4 bg-grondin-50 rounded-2xl">
                  <div className="w-10 h-10 bg-grondin-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon icon={item.icon} width={20} height={20} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Idéale pour</h2>
              <ul className="flex flex-col gap-3">
                {['Grandes maisons (150 m² et plus)', 'Déménagements avec collections ou objets de valeur', 'Familles avec enfants en bas âge', 'Personnes âgées ou à mobilité réduite', 'Expatriés et mutations professionnelles', 'Personnes souhaitant zéro contrainte'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Icon icon="ph:check-circle-fill" width={18} height={18} className="text-grondin-300 flex-shrink-0" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border-2 border-grondin-200 p-8">
              <h2 className="text-fluid-xl font-bold text-neutral-900 mb-2">Devis sur mesure</h2>
              <p className="text-neutral-600 text-sm mb-6">
                La formule Premium est entièrement personnalisée. Notre conseiller passe chez vous pour établir un inventaire précis.
              </p>
              <Link
                href="/devis"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
              >
                <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
                Demander mon devis Premium
              </Link>
              <a
                href="tel:+33185440050"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 mt-3 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Icon icon="ph:phone" width={18} height={18} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur la formule Premium" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
