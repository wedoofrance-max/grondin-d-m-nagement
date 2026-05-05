import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Malakoff 92240 — Devis Gratuit | Grondin',
  description: 'Déménageur à Malakoff (92240, Hauts-de-Seine). Grondin Déménagement : intervention rapide, devis gratuit, 7j/7. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france/malakoff' },
}

const FAQ = [
  {
    question: 'Malakoff est enclavée entre Paris, Montrouge et Vanves — est-ce facile d\'accès pour vos camions ?',
    answer: 'Malakoff est une commune très bien desservie malgré sa petite taille. L\'accès se fait facilement par la rue Boucicaut, l\'avenue Pierre Brossolette ou le boulevard du général de Gaulle. Nos camions transitent sans difficulté, et la commune est ZFE-compatible pour nos véhicules.',
  },
  {
    question: 'Malakoff est une petite commune très dense — comment intervenez-vous ?',
    answer: 'Malakoff est effectivement une des communes les plus denses de France. Le stationnement est une contrainte que nous anticipons lors de la visite préalable. Nous planifions l\'intervention tôt le matin ou demandons les autorisations nécessaires si l\'accès à la voie publique est requis.',
  },
  {
    question: 'Malakoff est adjacente à Paris (14ème) — proposez-vous des déménagements Paris-Malakoff ?',
    answer: 'Oui, les déménagements Paris-Malakoff sont courants et se réalisent très facilement. Malakoff est literalement à quelques centaines de mètres du 14ème arrondissement. Le transit est rapide et nous pouvons enchaîner chargement et déchargement dans la même journée.',
  },
]

export default function DemenagementMalakoffPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
        { label: 'Déménagement Malakoff', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france/malakoff' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Île-de-France', href: '/demenagement-ile-de-france' },
            { label: 'Malakoff' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement à Malakoff — Hauts-de-Seine (92240)
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Malakoff est une petite commune des Hauts-de-Seine encadrée par Paris, Montrouge et Vanves. Sa proximité immédiate avec le 14ème arrondissement de Paris en fait une destination très prisée, avec un parc immobilier dense et varié.
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
              Votre déménageur à Malakoff
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Malakoff est une commune très compacte avec une majorité d'appartements en immeuble collectif, des maisons de ville dans les quelques rues résidentielles, et des programmes récents dans les secteurs rénovés. La densité de la ville rend la question du stationnement particulièrement importante à anticiper.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Grondin Déménagement effectue une visite préalable gratuite pour évaluer votre logement et les conditions d'accès. Nous prenons en charge les formalités de stationnement si nécessaire et établissons un devis précis sous 24h. Chaque déménagement à Malakoff bénéficie de notre assurance RC Professionnelle.
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Centre-ville', 'Les Vaches', 'Quartier de la Gare', 'Rue du Moulin', 'Plateau', 'Quartier Carnot', 'Montrouge côté Malakoff'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Infos pratiques — Malakoff (92240)</p>
              <p className="text-xs text-blue-700">Hauts-de-Seine (92), limitrophe du 14ème arrondissement de Paris. Métro L13 (Malakoff-Plateau de Vanves, Malakoff-Rue Étienne Dolet). Nombreuses rues résidentielles avec stationnement réglementé — nous obtenons les arrêtés de stationnement nécessaires auprès de la mairie.</p>
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
              <h3 className="font-bold mb-2">Devis Malakoff</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement à Malakoff" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
