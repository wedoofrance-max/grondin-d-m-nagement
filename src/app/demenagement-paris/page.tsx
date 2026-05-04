import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { GoogleReviews } from '@/components/trust/GoogleReviews'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris — Tous Arrondissements 7j/7 | Grondin',
  description: 'Déménagement dans tous les arrondissements de Paris. Grondin Déménagement : expert local 7j/7, devis gratuit, 1 500+ déménagements réalisés. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-paris' },
}

const ARRONDISSEMENTS = [
  { num: 1,  label: '1er — Louvre',         slug: '1er-arrondissement',  cp: '75001' },
  { num: 2,  label: '2ème — Bourse',         slug: '2eme-arrondissement',  cp: '75002' },
  { num: 3,  label: '3ème — Temple',         slug: '3eme-arrondissement',  cp: '75003' },
  { num: 4,  label: '4ème — Hôtel-de-Ville', slug: '4eme-arrondissement',  cp: '75004' },
  { num: 5,  label: '5ème — Panthéon',       slug: '5eme-arrondissement',  cp: '75005' },
  { num: 6,  label: '6ème — Luxembourg',     slug: '6eme-arrondissement',  cp: '75006' },
  { num: 7,  label: '7ème — Palais-Bourbon', slug: '7eme-arrondissement',  cp: '75007' },
  { num: 8,  label: '8ème — Élysée',         slug: '8eme-arrondissement',  cp: '75008' },
  { num: 9,  label: '9ème — Opéra',          slug: '9eme-arrondissement',  cp: '75009' },
  { num: 10, label: '10ème — Entrepôt',      slug: '10eme-arrondissement', cp: '75010' },
  { num: 11, label: '11ème — Popincourt',    slug: '11eme-arrondissement', cp: '75011' },
  { num: 12, label: '12ème — Reuilly',       slug: '12eme-arrondissement', cp: '75012' },
  { num: 13, label: '13ème — Gobelins',      slug: '13eme-arrondissement', cp: '75013' },
  { num: 14, label: '14ème — Observatoire',  slug: '14eme-arrondissement', cp: '75014' },
  { num: 15, label: '15ème — Vaugirard',     slug: '15eme-arrondissement', cp: '75015' },
  { num: 16, label: '16ème — Passy',         slug: '16eme-arrondissement', cp: '75016' },
  { num: 17, label: '17ème — Batignolles',   slug: '17eme-arrondissement', cp: '75017' },
  { num: 18, label: '18ème — Butte-Montmartre', slug: '18eme-arrondissement', cp: '75018' },
  { num: 19, label: '19ème — Buttes-Chaumont', slug: '19eme-arrondissement', cp: '75019' },
  { num: 20, label: '20ème — Ménilmontant',  slug: '20eme-arrondissement', cp: '75020' },
]

const FAQ = [
  {
    question: 'Grondin intervient-il vraiment dans tous les arrondissements de Paris ?',
    answer: 'Oui, sans exception. Nos équipes connaissent les spécificités de chaque arrondissement : les rues piétonnes du Marais, les montées du 18ème, les grands couloirs haussmanniens du 8ème ou les quartiers populaires du 13ème.',
  },
  {
    question: 'Y a-t-il un supplément pour certains arrondissements ?',
    answer: 'Non. Nous n\'appliquons pas de supplément selon l\'arrondissement. Le devis est établi selon votre volume, votre étage, l\'accès et la distance entre les deux logements.',
  },
  {
    question: 'Comment gérez-vous les zones à faibles émissions à Paris ?',
    answer: 'Nos véhicules sont conformes aux normes Euro 6 et aux critères Crit\'Air de la Zone à Faibles Émissions (ZFE) de Paris. Nous circulons librement dans toute la capitale sans restriction.',
  },
  {
    question: 'Pouvez-vous intervenir tôt le matin ou le week-end à Paris ?',
    answer: 'Oui, nous intervenons de 8h30 à 20h, 7 jours sur 7. Pour des raisons de voisinage, nous recommandons de débuter les déménagements après 8h du matin.',
  },
]

export default function DemenagementParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Paris', href: 'https://grondin-demenagement.fr/demenagement-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Déménagement Paris' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris — Expert 20 arrondissements
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Grondin Déménagement intervient dans tous les arrondissements de Paris. Équipes expérimentées, disponibles 7j/7 de 8h30 à 20h.
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-3">
              Déménagez dans n'importe quel arrondissement de Paris
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Chaque arrondissement de Paris a ses contraintes : escaliers en colimaçon dans les immeubles haussmanniens, rues piétonnes, parkings limités, zones à faibles émissions, hauteurs sous plafond variables. Grondin Déménagement anticipe ces spécificités pour que votre déménagement se passe sans accroc.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
              {ARRONDISSEMENTS.map((arr) => (
                <Link
                  key={arr.slug}
                  href={`/demenagement-paris/${arr.slug}`}
                  className="group p-3 bg-neutral-50 hover:bg-grondin-50 border border-neutral-200 hover:border-grondin-300 rounded-xl transition-all duration-200"
                >
                  <p className="font-bold text-neutral-900 group-hover:text-grondin-600 text-sm transition-colors">
                    Paris {arr.num < 10 ? `${arr.num}er` : `${arr.num}ème`}
                  </p>
                  <p className="text-xs text-neutral-500">{arr.cp}</p>
                </Link>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur chaque déménagement' },
                { icon: 'ph:users', title: '1 500+ déménagements', desc: 'Note 4,9/5 sur Google' },
                { icon: 'ph:map-pin', title: 'Zone ZFE conforme', desc: 'Camions Crit\'Air autorisés à Paris' },
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

          <div className="space-y-6">
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-2">Devis gratuit Paris</h2>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h, visite sur place incluse.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Obtenir mon devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                <Icon icon="ph:phone" width={16} height={16} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
          </div>
        </div>
      </div>

      <GoogleReviews />
      <FAQSection items={FAQ} title="Questions sur le déménagement à Paris" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
