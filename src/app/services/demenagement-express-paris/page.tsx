import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Express Paris — Urgence 24h | Grondin',
  description: 'Déménagement express à Paris en urgence sous 24 à 48h. Grondin Déménagement intervient rapidement pour les déménagements de dernière minute. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/demenagement-express-paris' },
}

const FAQ = [
  {
    question: 'Quel est le délai minimum pour un déménagement express ?',
    answer: 'Nous pouvons intervenir dans les 24 à 48 heures selon notre disponibilité et votre volume. Pour les urgences absolues, appelez-nous directement au 01 85 44 00 50.',
  },
  {
    question: 'Le déménagement express est-il plus cher qu\'un déménagement classique ?',
    answer: 'Un délai très court peut impliquer une disponibilité limitée et une organisation rapide. Notre conseiller vous donnera un devis précis en fonction de vos dates et de votre volume.',
  },
  {
    question: 'Qu\'est-ce qui peut justifier un déménagement express ?',
    answer: 'Une rupture de bail urgente, une mutation professionnelle de dernière minute, un achat immobilier qui se conclut plus tôt que prévu, ou tout imprévu nécessitant de déménager rapidement.',
  },
  {
    question: 'Puis-je avoir un devis en urgence ?',
    answer: 'Oui, appelez-nous directement au 01 85 44 00 50. Nous évaluons la faisabilité immédiatement par téléphone et vous rappelons avec un devis dans les 2 heures.',
  },
]

export default function DemenagementExpressParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Déménagement express Paris', href: 'https://grondin-demenagement.fr/services/demenagement-express-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Déménagement express' },
          ]} />
          <div className="flex items-center gap-3 mt-4 mb-3">
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">Urgence</span>
            <h1 className="text-fluid-4xl font-extrabold text-white">Déménagement express à Paris</h1>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Vous devez déménager dans les 24 à 48 heures ? Nos équipes se mobilisent pour répondre à votre urgence dans toute l'Île-de-France.
          </p>
          <a href="tel:+33185440050" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors">
            <Icon icon="ph:phone" width={18} height={18} aria-hidden />
            Appeler maintenant : 01 85 44 00 50
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Comment fonctionne le déménagement express ?</h2>
            <ol className="space-y-4">
              {[
                { num: '1', title: 'Appelez-nous', desc: 'Décrivez votre situation en quelques minutes. Nous évaluons la faisabilité immédiatement.' },
                { num: '2', title: 'Devis rapide', desc: 'Vous recevez un devis par téléphone ou email dans les 2 heures. Visite sur place si possible.' },
                { num: '3', title: 'Mobilisation de l\'équipe', desc: 'Nous affectons une équipe disponible et le véhicule adapté à votre volume.' },
                { num: '4', title: 'Intervention', desc: 'Nos déménageurs arrivent à la date convenue — parfois le lendemain — et réalisent votre déménagement.' },
              ].map((step) => (
                <li key={step.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-grondin-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                    {step.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-neutral-900">{step.title}</h3>
                    <p className="text-sm text-neutral-600">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/emballage-porte.png"
                alt="Déménageur Grondin portant un carton à l'entrée d'un logement parisien"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <h2 className="text-fluid-xl font-bold text-red-800 mb-2">Urgence déménagement ?</h2>
              <p className="text-red-700 text-sm mb-4">Appelez-nous directement. Nous répondons 7j/7 de 8h30 à 20h.</p>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-4 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors text-lg">
                <Icon icon="ph:phone" width={22} height={22} aria-hidden />
                01 85 44 00 50
              </a>
            </div>

            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Ce qui est possible en express</h2>
              <ul className="space-y-2">
                {['Studio et T1 : intervention le lendemain', 'T2–T3 : 24 à 48h selon disponibilité', 'T4 et plus : délai à étudier ensemble', 'Monte-meubles si besoin', 'Assurance et protection incluses'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Icon icon="ph:lightning" width={16} height={16} className="text-amber-400 flex-shrink-0" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-grondin-200 rounded-3xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Pas d'urgence absolue ?</h3>
              <p className="text-sm text-neutral-600 mb-4">Planifiez à l'avance pour plus de flexibilité.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-600 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Devis en ligne
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement express" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
