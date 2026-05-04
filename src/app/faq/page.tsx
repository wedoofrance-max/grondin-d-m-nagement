import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'FAQ — Questions Fréquentes sur le Déménagement | Grondin',
  description: 'Toutes les réponses à vos questions sur le déménagement avec Grondin : tarifs, délais, assurance, formules, monte-meubles, garde-meubles et plus.',
  alternates: { canonical: 'https://grondin-demenagement.fr/faq' },
}

const FAQ_SECTIONS = [
  {
    title: 'Devis et tarifs',
    icon: 'ph:file-text',
    questions: [
      {
        q: 'Comment obtenir un devis de déménagement chez Grondin ?',
        a: 'Remplissez notre formulaire en ligne en 4 étapes (volume, adresses, date, coordonnées). Notre équipe vous rappelle sous 24h et organise une visite sur place pour établir un inventaire précis et vous remettre un devis personnalisé.',
      },
      {
        q: 'Le devis est-il vraiment gratuit et sans engagement ?',
        a: 'Oui, absolument. Le devis est entièrement gratuit et sans engagement. La visite sur place est également offerte. Vous êtes libre d\'accepter ou de refuser notre proposition sans aucun frais.',
      },
      {
        q: 'Pourquoi Grondin ne donne-t-il pas de prix en ligne ?',
        a: 'Chaque déménagement est unique : volume, étages, accès, distance, options choisies. Seule une visite sur place permet d\'établir un devis juste. Une estimation en ligne serait approximative et risquerait de ne pas correspondre à la réalité.',
      },
      {
        q: 'Quels éléments influencent le prix d\'un déménagement ?',
        a: 'Le volume de vos affaires (surface du logement, nombre de pièces), la distance entre les deux adresses, les étages et accès (escalier, ascenseur, monte-meubles nécessaire), la date souhaitée et la formule choisie (Économique, Confort ou Premium).',
      },
    ],
  },
  {
    title: 'Nos formules',
    icon: 'ph:star',
    questions: [
      {
        q: 'Quelle est la différence entre les formules Économique, Confort et Premium ?',
        a: 'La formule Économique inclut le transport, le personnel et la protection des meubles. La formule Confort y ajoute le démontage/remontage des meubles et la fourniture de cartons. La formule Premium est tout-inclus : emballage intégral, déballage à destination, nettoyage fin de bail et monte-meubles si nécessaire.',
      },
      {
        q: 'Puis-je personnaliser ma formule ?',
        a: 'Oui. Lors de votre entretien avec notre conseiller, vous pouvez ajouter des services à la carte (monte-meubles, garde-meubles, nettoyage) à n\'importe quelle formule selon vos besoins.',
      },
    ],
  },
  {
    title: 'Organisation et logistique',
    icon: 'ph:calendar-check',
    questions: [
      {
        q: 'Combien de temps à l\'avance faut-il réserver ?',
        a: 'Pour un déménagement local à Paris, nous recommandons de réserver 2 à 4 semaines à l\'avance. Pour un déménagement longue distance, prévoyez 3 à 6 semaines. Pour les urgences, contactez-nous directement au 01 85 44 00 50.',
      },
      {
        q: 'Travaillez-vous le week-end ?',
        a: 'Oui, nous intervenons 7 jours sur 7, y compris le samedi et le dimanche, de 8h30 à 20h.',
      },
      {
        q: 'Comment gérez-vous les contraintes de stationnement à Paris ?',
        a: 'Nous vous conseillons sur les démarches pour obtenir une autorisation de stationnement auprès de votre mairie d\'arrondissement. Nos camions sont dimensionnés pour s\'adapter aux rues parisiennes.',
      },
      {
        q: 'Que se passe-t-il si ma date de déménagement change ?',
        a: 'Contactez-nous dès que possible. Nous ferons notre possible pour nous adapter à votre nouvelle date selon nos disponibilités.',
      },
    ],
  },
  {
    title: 'Assurance et sécurité',
    icon: 'ph:shield-check',
    questions: [
      {
        q: 'Grondin Déménagement est-il assuré ?',
        a: 'Oui, tous nos déménagements sont couverts par une assurance Responsabilité Civile Professionnelle. Pour les objets de grande valeur (tableaux, collections, antiquités), une assurance complémentaire est recommandée.',
      },
      {
        q: 'Que se passe-t-il en cas de casse ou de dommage ?',
        a: 'En cas de dommage avéré, nous prenons en charge le remplacement ou la réparation conformément à nos conditions d\'assurance. Nous vous recommandons de signaler tout problème lors de la livraison.',
      },
    ],
  },
  {
    title: 'Services complémentaires',
    icon: 'ph:plus-circle',
    questions: [
      {
        q: 'Proposez-vous un service de garde-meubles ?',
        a: 'Oui, nous disposons de box de stockage sécurisés, disponibles à la semaine ou au mois. C\'est la solution idéale entre deux déménagements ou pendant des travaux.',
      },
      {
        q: 'Proposez-vous un service de nettoyage fin de bail ?',
        a: 'Oui, notre service de nettoyage professionnel vous permet de récupérer votre caution. Nous vous remettons une attestation de nettoyage après intervention.',
      },
      {
        q: 'Faites-vous des déménagements longue distance ?',
        a: 'Oui, nous assurons les déménagements longue distance vers les principales villes de France métropolitaine : Lyon, Bordeaux, Marseille, Toulouse, Nantes, Lille, Strasbourg. Nous n\'effectuons pas de déménagements à l\'international.',
      },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = FAQ_SECTIONS.flatMap((s) => s.questions)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[{ label: 'FAQ', href: 'https://grondin-demenagement.fr/faq' }]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Questions fréquentes
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Toutes les réponses à vos questions sur nos services de déménagement à Paris et en Île-de-France.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-grondin-50 rounded-xl flex items-center justify-center">
                  <Icon icon={section.icon} width={20} height={20} className="text-grondin-500" aria-hidden />
                </div>
                <h2 className="text-fluid-xl font-bold text-neutral-900">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.questions.map((faq, i) => (
                  <details key={i} className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden">
                    <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none font-semibold text-neutral-900 hover:text-grondin-600 transition-colors">
                      <span>{faq.q}</span>
                      <Icon icon="ph:plus" width={20} height={20} className="flex-shrink-0 mt-0.5 group-open:rotate-45 transition-transform duration-200 text-grondin-500" aria-hidden />
                    </summary>
                    <div className="px-5 pb-5 text-neutral-600 leading-relaxed text-sm border-t border-neutral-100 pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-grondin-50 rounded-3xl p-10 text-center max-w-2xl mx-auto">
          <h2 className="text-fluid-xl font-bold text-neutral-900 mb-3">
            Votre question n'est pas listée ?
          </h2>
          <p className="text-neutral-600 mb-6">
            Contactez-nous directement par téléphone ou via notre formulaire de devis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Demander un devis
            </Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl font-semibold hover:border-grondin-400 hover:text-grondin-600 transition-colors">
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />
              01 85 44 00 50
            </a>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
