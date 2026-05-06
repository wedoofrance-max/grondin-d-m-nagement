import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Monte-Meubles Paris — Location & Prestation 7j/7 | Grondin',
  description: 'Monte-meubles à Paris pour tous les étages inaccessibles. Grondin Déménagement intervient rapidement dans les 20 arrondissements. Devis gratuit.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/monte-meubles-paris' },
}

const FAQ = [
  {
    question: 'Quand faut-il utiliser un monte-meubles à Paris ?',
    answer: 'Le monte-meubles est indispensable quand l\'escalier est trop étroit pour faire passer les gros meubles (canapé, armoire, réfrigérateur), quand l\'étage est trop élevé pour porter sans risque, ou quand la configuration des couloirs rend le déménagement classique impossible.',
  },
  {
    question: 'À partir de quel étage recommandez-vous un monte-meubles ?',
    answer: 'En général, à partir du 4ème étage sans ascenseur ou lorsque les escaliers sont trop étroits. Mais cela dépend aussi du volume des meubles et de la configuration de l\'immeuble. Notre conseiller évalue cela lors de la visite.',
  },
  {
    question: 'Faut-il une autorisation pour installer un monte-meubles dans la rue ?',
    answer: 'Oui, il faut généralement une autorisation de la mairie d\'arrondissement pour immobiliser une partie du trottoir ou de la chaussée. Grondin Déménagement vous accompagne dans ces démarches.',
  },
  {
    question: 'Le monte-meubles est-il inclus dans les formules Grondin ?',
    answer: 'Le monte-meubles est inclus dans la formule Premium si nécessaire. Pour les formules Économique et Confort, il peut être ajouté en option selon votre configuration. Nous évaluons le besoin lors de la visite.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/services/monte-meubles-paris#service',
  name: 'Monte-meubles Paris',
  description: 'Location et prestation monte-meubles à Paris pour tous les étages inaccessibles. Intervention rapide dans les 20 arrondissements, 7j/7.',
  url: 'https://grondin-demenagement.fr/services/monte-meubles-paris',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Paris', sameAs: 'https://www.wikidata.org/wiki/Q90' },
  serviceType: 'Furniture Lift Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function MonteMeublesParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Monte-meubles Paris', href: 'https://grondin-demenagement.fr/services/monte-meubles-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Monte-meubles Paris' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Monte-meubles à Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Solution professionnelle pour les étages élevés et escaliers étroits. Intervention rapide dans tous les arrondissements de Paris.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">
              Quand utiliser un monte-meubles ?
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Les immeubles parisiens ont souvent des escaliers en colimaçon, des couloirs étroits et des portes d'entrée trop petites pour faire passer les grands meubles. Le monte-meubles est la solution professionnelle qui évite les risques pour vos biens et vos déménageurs.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'ph:stairs', title: 'Escaliers étroits ou raides', desc: 'Impraticables pour les armoires, canapés, pianos ou gros appareils électroménagers.' },
                { icon: 'ph:building', title: 'Appartements en étage élevé', desc: 'À partir du 4ème étage sans ascenseur, le monte-meubles sécurise le déménagement.' },
                { icon: 'ph:door', title: 'Couloirs et portes trop petits', desc: 'Quand la configuration de l\'immeuble rend le passage des gros meubles impossible.' },
                { icon: 'ph:couch', title: 'Meubles volumineux', desc: 'Piano, canapé d\'angle, armoire normande, mobilier de jardin lourd.' },
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
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/immeuble-paris.webp"
                alt="Immeuble haussmannien parisien où le monte-meubles est indispensable"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-grondin-900 rounded-3xl p-8 text-white">
              <h2 className="text-fluid-xl font-bold mb-4">Notre matériel</h2>
              <ul className="space-y-3">
                {[
                  'Monte-meubles électrique jusqu\'à 12 mètres de hauteur',
                  'Capacité de charge jusqu\'à 350 kg',
                  'Sangles et protections anti-glissement',
                  'Opérateurs certifiés',
                  'Conforme aux normes CE',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon icon="ph:check-circle-fill" width={18} height={18} className="text-grondin-300 flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-grondin-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-grondin-200 rounded-3xl p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Besoin d'un monte-meubles ?</h3>
              <p className="text-sm text-neutral-600 mb-4">Devis gratuit, réponse sous 24h.</p>
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

      <FAQSection items={FAQ} title="Questions sur le monte-meubles" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
