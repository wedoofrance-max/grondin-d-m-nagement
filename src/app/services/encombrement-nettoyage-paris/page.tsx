import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Débarras & Évacuation Encombrants Paris | Grondin Déménagement',
  description: 'Service de débarras et évacuation d\'encombrants à Paris. Cave, grenier, appartement entier. Tri, évacuation et recyclage responsable. Devis gratuit.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/encombrement-nettoyage-paris' },
}

const FAQ = [
  {
    question: 'Que faites-vous des encombrants récupérés ?',
    answer: 'Nous trions systématiquement : les meubles et objets en bon état sont donnés à des associations partenaires, le reste est acheminé vers des centres de recyclage agréés. Nous vous remettons un bordereau de suivi des déchets.',
  },
  {
    question: 'Peut-on faire appel à vous pour un appartement entier ?',
    answer: 'Oui, nous prenons en charge le débarras complet d\'un appartement, d\'une maison, d\'une cave, d\'un grenier ou d\'un local commercial. Nos équipes vident et nettoient l\'espace en une journée selon le volume.',
  },
  {
    question: 'Intervenez-vous pour les successions ?',
    answer: 'Oui, nous sommes habitués aux débarras dans le cadre de successions. Nous traitons ce type de mission avec discrétion, respect et efficacité. Un inventaire peut être réalisé avant le débarras si vous le souhaitez.',
  },
  {
    question: 'Avez-vous les autorisations pour évacuer les déchets ?',
    answer: 'Oui, nous disposons de toutes les autorisations nécessaires pour collecter et traiter les déchets ménagers et encombrants. Nous respectons la réglementation en vigueur sur le traitement des déchets.',
  },
]

export default function EncombrementNettoyageParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Encombrement & nettoyage Paris', href: 'https://grondin-demenagement.fr/services/encombrement-nettoyage-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Encombrement & nettoyage' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Débarras & évacuation d'encombrants à Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Cave, grenier, appartement ou maison entière : nos équipes vidangent et nettoient votre espace rapidement, avec tri et recyclage responsable.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Nos prestations de débarras</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: 'ph:warehouse', title: 'Débarras de cave ou grenier', desc: 'Vidage complet, tri des objets récupérables, évacuation des encombrants.' },
                { icon: 'ph:house', title: 'Débarras d\'appartement ou maison', desc: 'Débarras partiel ou total, idéal pour les successions ou départs en maison de retraite.' },
                { icon: 'ph:recycle', title: 'Évacuation d\'encombrants', desc: 'Meubles usagés, électroménager, matériaux : nous gérons le transport et le recyclage.' },
                { icon: 'ph:broom', title: 'Nettoyage après débarras', desc: 'Nettoyage complet de l\'espace vidé pour une remise en état complète.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-grondin-50">
                  <div className="w-10 h-10 bg-grondin-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={item.icon} width={20} height={20} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Notre engagement éco-responsable</h2>
              <ul className="space-y-3">
                {['Don aux associations pour les objets récupérables', 'Acheminement vers centres de recyclage agréés', 'Bordereau de suivi des déchets fourni', 'Zéro dépôt sauvage', 'Partenariats avec la Ressourcerie de Paris'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon icon="ph:leaf" width={18} height={18} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-grondin-200 rounded-3xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Devis débarras gratuit</h3>
              <p className="text-sm text-neutral-600 mb-4">Estimation selon volume et accessibilité.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-600 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Demander un devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors text-sm">
                <Icon icon="ph:phone" width={18} height={18} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le débarras" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
