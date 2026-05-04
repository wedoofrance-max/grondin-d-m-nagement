import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris Lyon — Longue Distance | Grondin',
  description: 'Déménagement Paris vers Lyon (465 km). Grondin Déménagement : camion dédié, assurance incluse, devis gratuit. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-lyon' },
}

const FAQ = [
  {
    question: 'Combien de temps dure un déménagement Paris-Lyon ?',
    answer: 'Le trajet en camion de déménagement entre Paris et Lyon est d\'environ 4h30 à 5h en dehors des heures de pointe, via l\'A6. Nous partons généralement tôt le matin de Paris pour arriver à Lyon en début d\'après-midi et procéder au déchargement dans la foulée. Pour les volumes importants, le déchargement peut s\'effectuer le lendemain matin.',
  },
  {
    question: 'Le camion est-il dédié uniquement à notre déménagement Paris-Lyon ?',
    answer: 'Oui. Nous n\'effectuons pas de groupage : votre camion est exclusivement réservé à votre déménagement. Cela garantit que vos affaires ne sont pas mélangées avec celles d\'autres clients et que la livraison est directe, sans rupture de charge.',
  },
  {
    question: 'Intervenez-vous dans tous les arrondissements de Lyon ?',
    answer: 'Oui, nous intervenons dans toute l\'agglomération lyonnaise : Lyon intra-muros (1er au 9ème arrondissement), la Presqu\'île, Confluence, la Part-Dieu, ainsi que les communes proches comme Villeurbanne, Caluire-et-Cuire, Bron ou Vénissieux.',
  },
  {
    question: 'Faut-il prévoir une visite avant un déménagement longue distance Paris-Lyon ?',
    answer: 'Oui, une visite sur place à Paris est incluse dans notre processus pour les déménagements longue distance. Elle nous permet d\'évaluer précisément le volume, d\'identifier les contraintes d\'accès et de vous remettre un devis détaillé. Nous pouvons également faire une évaluation visio si vous n\'êtes pas disponible en personne.',
  },
]

export default function DemenagementParisLyonPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
        { label: 'Paris → Lyon', href: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-lyon' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Longue distance', href: '/demenagement-longue-distance' },
            { label: 'Paris → Lyon' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris → Lyon
          </h1>
          <div className="flex items-center gap-4 mb-3 text-grondin-300 text-sm">
            <span>465 km</span>
            <span>·</span>
            <span>~4h30 de trajet</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Paris et Lyon sont les deux premières métropoles françaises. Que vous déménagiez vers la Part-Dieu, la Presqu'île ou Confluence, Grondin Déménagement assure votre transport en camion dédié, de A à Z.
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
              Votre déménagement Paris → Lyon avec Grondin
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Le trajet Paris-Lyon représente 465 km via l'autoroute A6, soit environ 4h30 de route pour nos camions. C'est l'une des liaisons longue distance les plus fréquentes en France. Que vous déménagiez dans le centre historique de Lyon (Vieux-Lyon, Presqu'île), dans les quartiers modernes de la Part-Dieu ou dans le secteur Confluence en plein développement, nous organisons votre déménagement de bout en bout.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement réalise une visite préalable à votre domicile parisien pour dresser l'inventaire complet et vous remettre un devis détaillé. Le jour J, votre camion est exclusivement dédié à votre déménagement — pas de groupage. Nous chargeons à Paris le matin et livrons à Lyon dans la journée, ou le lendemain pour les volumes importants. L'assurance RC Professionnelle couvre l'ensemble du trajet.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: 'ph:truck', title: 'Camion dédié', desc: 'Véhicule réservé uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Livraison ponctuelle', desc: 'Respect des créneaux convenus' },
                { icon: 'ph:map-pin', title: '465 km', desc: 'Trajet direct sans rupture de charge' },
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
              <h3 className="font-bold mb-2">Devis Paris → Lyon</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement Paris → Lyon" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
