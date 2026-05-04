import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Formule Confort — Déménagement Paris Tout Compris | Grondin',
  description: 'Formule Confort Grondin : déménagement complet à Paris avec démontage meubles, fourniture cartons et emballage objets fragiles. Devis gratuit sans engagement.',
  alternates: { canonical: 'https://grondin-demenagement.fr/offres/confort' },
}

const FAQ = [
  {
    question: 'Qu\'est-ce qui est inclus dans la formule Confort ?',
    answer: 'La formule Confort inclut tout ce qui est dans la formule Économique, plus le démontage et remontage des meubles, la fourniture de cartons, l\'emballage des objets fragiles et une protection renforcée de tous vos biens.',
  },
  {
    question: 'Pourquoi la formule Confort est-elle la plus choisie ?',
    answer: 'Elle offre le meilleur équilibre entre prestations et tranquillité d\'esprit. Vous n\'avez plus à vous occuper de démonter vos meubles ou d\'emballer vos objets fragiles — tout est géré par nos professionnels.',
  },
  {
    question: 'Combien de cartons fournissez-vous avec la formule Confort ?',
    answer: 'Le nombre de cartons est adapté à votre surface et votre volume. Lors de la visite sur place de notre conseiller, nous établissons la quantité exacte nécessaire pour votre déménagement.',
  },
  {
    question: 'Quelle est la différence avec la formule Premium ?',
    answer: 'La formule Premium ajoute le déballage intégral à destination, l\'installation de vos affaires dans la nouvelle maison, le nettoyage fin de bail et un monte-meubles si nécessaire.',
  },
]

export default function FormulaConfortPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Nos formules', href: 'https://grondin-demenagement.fr/offres' },
        { label: 'Formule Confort', href: 'https://grondin-demenagement.fr/offres/confort' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos formules', href: '/offres' },
            { label: 'Formule Confort' },
          ]} />
          <div className="flex items-center gap-4 mt-4 mb-3">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon icon="ph:star" width={28} height={28} className="text-amber-400" aria-hidden />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="text-grondin-300 text-sm font-semibold uppercase tracking-widest">La Solution Complète</p>
                <span className="px-3 py-0.5 bg-amber-400 text-white text-xs font-bold rounded-full">Plus populaire</span>
              </div>
              <h1 className="text-fluid-4xl font-extrabold text-white">Formule Confort</h1>
            </div>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            La formule la plus choisie. Nos professionnels gèrent tout : démontage, emballage, transport et remontage dans votre nouveau logement.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Ce qui est inclus</h2>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                { icon: 'ph:users', title: 'Équipe de déménageurs professionnels', desc: 'Des déménageurs expérimentés, coordonnés par un chef d\'équipe dédié à votre déménagement.' },
                { icon: 'ph:truck', title: 'Camion adapté à votre volume', desc: 'Véhicule dimensionné selon la surface de votre logement, de 30 m² à plus de 150 m².' },
                { icon: 'ph:wrench', title: 'Démontage et remontage des meubles', desc: 'Tous vos meubles (armoires, lits, bibliothèques, etc.) sont démontés chez vous et remontés dans votre nouveau logement.' },
                { icon: 'ph:package', title: 'Fourniture de cartons', desc: 'Cartons de déménagement professionnels adaptés à vos volumes. Quantité ajustée lors de la visite.' },
                { icon: 'ph:gift', title: 'Emballage des objets fragiles', desc: 'Nos techniciens emballent vos objets fragiles (vaisselle, tableaux, électronique) avec les protections adaptées.' },
                { icon: 'ph:shield-check', title: 'Assurance RC Professionnelle', desc: 'Vos biens sont couverts par notre assurance Responsabilité Civile Professionnelle.' },
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

            <h3 className="text-lg font-bold text-neutral-700 mb-4">Non inclus dans cette formule</h3>
            <ul className="flex flex-col gap-2">
              {['Déballage et installation à destination', 'Nettoyage fin de bail'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-neutral-500 text-sm">
                  <Icon icon="ph:x-circle" width={16} height={16} className="text-neutral-300 flex-shrink-0" aria-hidden />
                  {item}
                  <Link href="/offres/premium" className="ml-1 text-grondin-500 hover:underline text-xs">(inclus en Premium)</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Idéale pour</h2>
              <ul className="flex flex-col gap-3">
                {['Appartements T2 à T5', 'Maisons 80 m² à 150 m²', 'Familles avec enfants', 'Personnes actives sans temps de préparer', 'Déménagements avec beaucoup de meubles'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Icon icon="ph:check-circle-fill" width={18} height={18} className="text-grondin-300 flex-shrink-0" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border-2 border-grondin-200 p-8">
              <h2 className="text-fluid-xl font-bold text-neutral-900 mb-2">Obtenir un devis gratuit</h2>
              <p className="text-neutral-600 text-sm mb-6">
                Formulaire 4 étapes, résultat sous 24h. Notre conseiller passe chez vous pour un inventaire précis.
              </p>
              <Link
                href="/devis"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
              >
                <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
                Demander mon devis
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

      <FAQSection items={FAQ} title="Questions sur la formule Confort" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
