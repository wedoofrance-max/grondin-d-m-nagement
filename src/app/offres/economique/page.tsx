import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Formule Économique — Déménagement Paris | Grondin',
  description: 'La formule Économique Grondin : déménagement à Paris avec personnel, camion, protection des meubles et assurance. Devis gratuit et personnalisé sans engagement.',
  alternates: { canonical: 'https://grondin-demenagement.fr/offres/economique' },
}

const FAQ = [
  {
    question: 'Qu\'est-ce qui est inclus dans la formule Économique ?',
    answer: 'La formule Économique inclut une équipe de déménageurs professionnels, un camion adapté à votre volume, la protection de vos meubles avec des couvertures, le chargement et déchargement, et l\'assurance Responsabilité Civile Professionnelle.',
  },
  {
    question: 'La formule Économique est-elle suffisante pour mon appartement ?',
    answer: 'La formule Économique convient parfaitement si vous souhaitez gérer vous-même l\'emballage de vos affaires et n\'avez pas besoin du démontage/remontage de vos meubles. Idéale pour les studios, T1 et petits T2.',
  },
  {
    question: 'Puis-je passer à la formule Confort ou Premium après avoir choisi Économique ?',
    answer: 'Oui, lors de notre entretien téléphonique, vous pouvez tout à fait ajuster votre formule selon vos besoins. Notre équipe vous guidera vers la solution la plus adaptée.',
  },
  {
    question: 'Dois-je fournir les cartons avec la formule Économique ?',
    answer: 'Avec la formule Économique, vous gérez votre propre emballage et fournissez vos cartons. Si vous souhaitez que nous vous fournissions les cartons et emballions vos affaires, la formule Confort ou Premium est plus adaptée.',
  },
]

export default function FormulaEconomiquePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Nos formules', href: 'https://grondin-demenagement.fr/offres' },
        { label: 'Formule Économique', href: 'https://grondin-demenagement.fr/offres/economique' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos formules', href: '/offres' },
            { label: 'Formule Économique' },
          ]} />
          <div className="flex items-center gap-4 mt-4 mb-3">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon icon="ph:hand" width={28} height={28} className="text-grondin-300" aria-hidden />
            </div>
            <div>
              <p className="text-grondin-300 text-sm font-semibold uppercase tracking-widest">Le Coup de Pouce</p>
              <h1 className="text-fluid-4xl font-extrabold text-white">Formule Économique</h1>
            </div>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            L'essentiel pour déménager sereinement à Paris et en Île-de-France. Nos professionnels s'occupent de l'intégralité du transport.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Ce qui est inclus</h2>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                { icon: 'ph:users', title: 'Équipe de déménageurs professionnels', desc: 'Des déménageurs expérimentés, formés aux techniques de manutention et au respect de vos biens.' },
                { icon: 'ph:truck', title: 'Camion adapté à votre volume', desc: 'Véhicule dimensionné selon la surface de votre logement, de 20 m² à plus de 150 m².' },
                { icon: 'ph:shield-check', title: 'Protection des meubles', desc: 'Couvertures professionnelles et protections d\'angles pour vos meubles pendant le transport.' },
                { icon: 'ph:file-shield', title: 'Assurance RC Professionnelle', desc: 'Vos biens sont couverts par notre assurance Responsabilité Civile Professionnelle.' },
                { icon: 'ph:arrows-down-up', title: 'Chargement et déchargement', desc: 'Nos équipes gèrent entièrement le chargement chez vous et le déchargement dans votre nouveau logement.' },
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
              {['Démontage et remontage des meubles', 'Fourniture de cartons', 'Emballage des objets fragiles', 'Déballage à destination', 'Nettoyage fin de bail'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-neutral-500 text-sm">
                  <Icon icon="ph:x-circle" width={16} height={16} className="text-neutral-300 flex-shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Idéale pour</h2>
              <ul className="flex flex-col gap-3">
                {['Studio ou T1 (moins de 30 m²)', 'T2 avec peu de meubles', 'Personnes qui font leur propre emballage', 'Déménagements planifiés à l\'avance'].map((item) => (
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
                Remplissez notre formulaire en quelques minutes. Notre équipe vous rappelle sous 24h avec un devis personnalisé.
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

            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
              <Icon icon="ph:lightbulb" width={20} height={20} className="text-amber-500 flex-shrink-0 mt-0.5" aria-hidden />
              <p className="text-sm text-amber-800">
                <strong>Conseil :</strong> Si vous avez des meubles à démonter ou des objets fragiles, la formule Confort vous facilitera la vie.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur la formule Économique" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
