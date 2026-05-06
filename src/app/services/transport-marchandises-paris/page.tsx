import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Transport Marchandises Paris & Île-de-France | Grondin',
  description: 'Transport de colis, matériel et marchandises à Paris et en Île-de-France. Véhicules adaptés, intervention rapide. Devis gratuit sans engagement.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/transport-marchandises-paris' },
}

const FAQ = [
  {
    question: 'Quels types de marchandises transportez-vous ?',
    answer: 'Nous transportons tous types de marchandises : colis volumineux, mobilier, matériel, équipements, palettes légères. Nous ne transportons pas les matières dangereuses ou les produits nécessitant une chaîne du froid.',
  },
  {
    question: 'Dans quelle zone intervenez-vous pour le transport ?',
    answer: 'Nous intervenons dans toute l\'Île-de-France : Paris et les 8 départements (92, 93, 94, 91, 78, 95, 77). Pour des livraisons plus lointaines, contactez-nous pour étudier la faisabilité.',
  },
  {
    question: 'Proposez-vous des enlèvements et livraisons le jour même ?',
    answer: 'Selon nos disponibilités, un enlèvement et une livraison le jour même sont possibles. Appelez-nous directement au 01 85 44 00 50 pour les demandes urgentes.',
  },
  {
    question: 'Les marchandises sont-elles assurées pendant le transport ?',
    answer: 'Oui, toutes les marchandises que nous transportons sont couvertes par notre assurance Responsabilité Civile Professionnelle. Pour les marchandises de grande valeur, une assurance complémentaire est recommandée.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/services/transport-marchandises-paris#service',
  name: 'Transport de marchandises Paris & Île-de-France',
  description: 'Transport de colis, matériel et marchandises à Paris et en Île-de-France. Véhicules adaptés, intervention rapide, devis gratuit.',
  url: 'https://grondin-demenagement.fr/services/transport-marchandises-paris',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  serviceType: 'Freight Transport Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function TransportMarchandisesParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Transport marchandises Paris', href: 'https://grondin-demenagement.fr/services/transport-marchandises-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Transport marchandises' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Transport de marchandises à Paris et en Île-de-France
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Livraison de colis volumineux, matériel ou mobilier dans toute l'Île-de-France. Nos véhicules sont adaptés à tous les volumes.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">Nos services de transport</h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: 'ph:package', title: 'Colis et mobilier volumineux', desc: 'Livraison de canapés, électroménager, vélos cargo, équipements sportifs.' },
                { icon: 'ph:van', title: 'Transport sur mesure', desc: 'Véhicule adapté à votre volume : fourgon, camionnette 3,5T ou grand volume.' },
                { icon: 'ph:map-pin', title: 'Toute l\'Île-de-France', desc: 'Paris et tous les départements 77, 78, 91, 92, 93, 94, 95.' },
                { icon: 'ph:clock', title: 'Enlèvement et livraison rapides', desc: 'Intervention dans la journée ou sous 24h selon disponibilité.' },
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
              <h2 className="text-fluid-xl font-bold mb-4">Nos véhicules</h2>
              <ul className="space-y-3">
                {['Fourgon 6–10 m³ (petits colis)', 'Camionnette 12–20 m³ (mobilier)', 'Camion 20–30 m³ (gros volumes)', 'Hayon élévateur disponible', 'Équipement de manutention à bord'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon icon="ph:truck" width={18} height={18} className="text-grondin-300 flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-grondin-200 rounded-3xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Demander un devis transport</h3>
              <p className="text-sm text-neutral-600 mb-4">Précisez la nature, le volume et les adresses.</p>
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

      <FAQSection items={FAQ} title="Questions sur le transport de marchandises" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
