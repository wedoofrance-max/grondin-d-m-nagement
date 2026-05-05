import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Issy-les-Moulineaux 92130 — Devis Gratuit | Grondin',
  description: 'Déménageur à Issy-les-Moulineaux (92130, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/issy-les-moulineaux' },
}

const FAQ = [
  {
    question: 'Intervenez-vous dans le quartier de Val-de-Seine à Issy-les-Moulineaux ?',
    answer: 'Oui, nous couvrons tous les quartiers d\'Issy-les-Moulineaux, y compris le secteur Val-de-Seine avec ses tours résidentielles modernes, le centre-ville et les zones pavillonnaires plus calmes proches de Meudon. Chaque secteur présente des accès différents que nous évaluons lors de la visite préalable.',
  },
  {
    question: 'Comment déménagez-vous dans les immeubles en bordure de Seine à Issy ?',
    answer: 'Les résidences en bord de Seine à Issy ont souvent des accès par quai avec restrictions de circulation. Nous planifions l\'intervention en tenant compte de ces contraintes et obtenons si nécessaire les autorisations auprès des gestionnaires de résidence.',
  },
  {
    question: 'Issy-les-Moulineaux est-elle desservie rapidement depuis Paris ?',
    answer: 'Oui, Issy-les-Moulineaux est accessible en 15-20 minutes depuis Paris (15ème arrondissement) via le pont d\'Issy ou le RER C. Nos camions sont basés en Île-de-France et nos équipes s\'y rendent sans délai, y compris tôt le matin.',
  },
]

export default function DemenagementIssyPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Issy-les-Moulineaux', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/issy-les-moulineaux' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Issy-les-Moulineaux' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Issy-les-Moulineaux — Hauts-de-Seine (92130)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Issy-les-Moulineaux conjugue quartiers résidentiels anciens, tours modernes en bord de Seine et zones pavillonnaires. Une ville en pleine transformation, avec un parc immobilier très varié qui nécessite une approche sur-mesure.
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
              Votre déménageur à Issy-les-Moulineaux
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Issy-les-Moulineaux présente une variété de typologies de logements : appartements dans des immeubles des années 1960-70 côté Fort d'Issy, résidences récentes avec hall sécurisé dans le Val-de-Seine, maisons individuelles dans les rues calmes de la Croix de Pierre. Notre équipe s'adapte à chacune de ces configurations.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Nous proposons une visite gratuite à domicile pour évaluer le volume, les accès (ascenseur, escaliers, cour) et vous remettre un devis détaillé sous 24h. Le jour du déménagement, nous protégeons les parties communes et assurons un déménagement propre et organisé.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Quartier des Épinettes', 'Fort d\'Issy', 'Hauts d\'Issy', 'Bords de Seine', 'Corentin Celton', 'Quartier du Moulin'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Infos pratiques — Issy-les-Moulineaux (92130)</p>
              <p className="text-xs text-amber-700">Hauts-de-Seine (92), limitrophe du 15ème arrondissement de Paris. Métro L12 (Mairie d'Issy, Corentin Celton) et Tramway T2. ZFE Grand Paris — nos camions sont homologués. Fort développement de bureaux convertis en logements dans le secteur Fort d'Issy.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:map-pin', title: 'Intervention locale', desc: 'Équipes basées en Île-de-France' },
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
              <h3 className="font-bold mb-2">Devis Issy-les-Moulineaux</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Issy-les-Moulineaux" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
