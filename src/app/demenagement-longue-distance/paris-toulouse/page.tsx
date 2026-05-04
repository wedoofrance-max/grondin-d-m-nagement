import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris Toulouse — Longue Distance | Grondin',
  description: 'Déménagement Paris vers Toulouse (680 km). Grondin Déménagement : camion dédié, assurance incluse, devis gratuit. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-toulouse' },
}

const FAQ = [
  {
    question: 'Combien de temps dure un déménagement Paris-Toulouse ?',
    answer: 'Le trajet en camion entre Paris et Toulouse est d\'environ 6h15 à 7h via l\'A10 puis l\'A62. Nous partons très tôt le matin de Paris pour arriver à Toulouse en milieu d\'après-midi. Pour les volumes importants, le déchargement s\'effectue le lendemain matin.',
  },
  {
    question: 'Intervenez-vous dans tous les quartiers de Toulouse ?',
    answer: 'Oui, nous livrons dans l\'ensemble de la métropole toulousaine : le Capitole, Saint-Cyprien, Rangueil, les Minimes, Compans-Caffarelli, et les communes périphériques comme Blagnac, Colomiers ou Ramonville-Saint-Agne.',
  },
  {
    question: 'Toulouse est la ville rose — y a-t-il des spécificités pour le déménagement dans le centre historique ?',
    answer: 'Le centre historique de Toulouse a des rues pavées et des accès parfois restreints autour du Capitole et des quartiers historiques. Nous évaluons les conditions d\'accès à votre nouvelle adresse toulousaine en amont et planifions la livraison en tenant compte de ces contraintes.',
  },
  {
    question: 'Faut-il une visite préalable pour un déménagement Paris-Toulouse ?',
    answer: 'Oui, une visite à domicile à Paris est incluse dans notre processus. Elle nous permet d\'établir un inventaire précis et de vous remettre un devis détaillé. Pour les longues distances, cette étape est d\'autant plus importante pour éviter les mauvaises surprises le jour du déménagement.',
  },
]

export default function DemenagementParisToulousePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
        { label: 'Paris → Toulouse', href: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-toulouse' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Longue distance', href: '/demenagement-longue-distance' },
            { label: 'Paris → Toulouse' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris → Toulouse
          </h1>
          <div className="flex items-center gap-4 mb-3 text-grondin-300 text-sm">
            <span>680 km</span>
            <span>·</span>
            <span>~6h15 de trajet</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Toulouse, la ville rose, attire de nombreux Parisiens avec son secteur aéronautique et spatial dynamique, son cadre de vie ensoleillé et ses quartiers historiques. Grondin assure votre déménagement vers le Capitole, Saint-Cyprien ou Rangueil.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Devis longue distance
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
              Votre déménagement Paris → Toulouse avec Grondin
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Toulouse est à 680 km de Paris via l'A10 puis l'A62, soit environ 6h15 de trajet. C'est l'une des destinations longue distance les plus demandées depuis la capitale, notamment pour les professionnels de l'aéronautique et du spatial s'installant à Blagnac ou Colomiers. Grondin Déménagement organise votre transfert de A à Z, avec un camion exclusivement dédié à votre déménagement.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Nous réalisons une visite préalable à Paris pour dresser l'inventaire et établir un devis précis. Le jour J, nous partons tôt le matin depuis Paris et livrons à Toulouse dans la journée. Pour les volumes importants, nous prévoyons deux jours pour garantir un déchargement dans les meilleures conditions. L'assurance RC Professionnelle couvre l'ensemble du trajet.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: 'ph:truck', title: 'Camion dédié', desc: 'Véhicule réservé uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Livraison ponctuelle', desc: 'Respect des créneaux convenus' },
                { icon: 'ph:map-pin', title: '680 km', desc: 'Trajet direct sans rupture de charge' },
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
              <h3 className="font-bold mb-2">Devis Paris → Toulouse</h3>
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
            <Link href="/demenagement-longue-distance" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Toutes les destinations
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement Paris → Toulouse" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
