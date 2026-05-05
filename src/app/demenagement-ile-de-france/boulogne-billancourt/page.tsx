import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Boulogne-Billancourt 92100 — Devis Gratuit | Grondin',
  description: 'Déménageur à Boulogne-Billancourt (92100, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/boulogne-billancourt' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans tous les quartiers de Boulogne-Billancourt ?',
    answer: 'Oui, nous couvrons l\'ensemble de Boulogne-Billancourt : le quartier du centre-ville, les Pins, Silly-Gallieni, le Point du Jour et les résidences proches du bois de Boulogne. Nos équipes connaissent les contraintes de stationnement et les copropriétés à gardien de la ville.',
  },
  {
    question: 'Comment se déroule une visite pour un déménagement à Boulogne-Billancourt ?',
    answer: 'Nous prenons rendez-vous à votre domicile pour évaluer le volume, les conditions d\'accès (ascenseur, monte-meubles, largeur des portes) et les éventuelles contraintes de stationnement sur voie publique. La visite est gratuite et le devis vous est remis sous 24h.',
  },
  {
    question: 'Pouvez-vous déménager depuis Boulogne-Billancourt vers Paris intra-muros ?',
    answer: 'Absolument. Boulogne-Billancourt étant limitrophe de Paris (16ème arrondissement), nous effectuons régulièrement des déménagements entre les deux villes. Nos camions sont conformes aux normes ZFE et Crit\'Air pour circuler librement dans Paris.',
  },
]

export default function DemenagementBoulogneBillancourtPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Boulogne-Billancourt', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/boulogne-billancourt' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Boulogne-Billancourt' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Boulogne-Billancourt — Hauts-de-Seine (92100)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Boulogne-Billancourt est l'une des communes les plus denses de France, avec un parc immobilier varié allant des grandes tours résidentielles aux hôtels particuliers du quartier du Point du Jour. Nos équipes s'adaptent à chaque configuration.
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
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">
              Votre déménageur à Boulogne-Billancourt
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Boulogne-Billancourt concentre une grande diversité de logements : immeubles modernes avec accès digicode et monte-charge, résidences de standing aux halls étroits, maisons de ville et pavillons dans les rues calmes autour du Parc de Saint-Cloud. Chaque déménagement nécessite une organisation précise pour garantir la protection des meubles et le respect des parties communes.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement réalise une visite gratuite à votre domicile pour dresser un inventaire complet et identifier les contraintes d'accès. Le devis vous est transmis sous 24h, sans engagement. Le jour J, nos équipes arrivent avec le matériel de protection adapté : couvertures de déménagement, sangles, monte-meubles si nécessaire.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts à Boulogne-Billancourt</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Point du Jour', 'Silly-Gallieni', 'Les Pins', 'Escuyer', 'Marcel Sembat', 'Reine', 'Billancourt', 'Trapèze'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Zone à Faibles Émissions (ZFE)</p>
              <p className="text-xs text-amber-700">Boulogne-Billancourt est en ZFE Grand Paris. Nos camions sont conformes Crit'Air 1 et 2 pour circuler sans restriction dans la commune et vers Paris intra-muros.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:users', title: '1 500+ clients', desc: 'Satisfaits à Paris et IDF' },
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

          <div className="space-y-4">
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Devis Boulogne-Billancourt</h3>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Mon devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                <Icon icon="ph:phone" width={16} height={16} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
            <Link href="/demenagement-ile-de-france" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Toutes les villes IDF
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement à Boulogne-Billancourt" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
