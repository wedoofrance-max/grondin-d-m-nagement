import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris Strasbourg — Longue Distance | Grondin',
  description: 'Déménagement Paris vers Strasbourg (490 km). Grondin Déménagement : camion dédié, assurance incluse, devis gratuit. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-strasbourg' },
}

const FAQ = [
  {
    question: 'Combien de temps dure un déménagement Paris-Strasbourg ?',
    answer: 'Le trajet en camion entre Paris et Strasbourg est d\'environ 4h à 4h30 via l\'A4 (Autoroute de l\'Est). Nous partons tôt le matin de Paris pour arriver à Strasbourg en début d\'après-midi, ce qui permet généralement de réaliser le déchargement dans la journée. Pour les grands volumes, le déchargement peut être prévu le lendemain matin.',
  },
  {
    question: 'Intervenez-vous dans tous les quartiers de Strasbourg ?',
    answer: 'Oui, nous livrons dans l\'ensemble de la métropole strasbourgeoise : la Grande Île et le quartier de la Petite-France classés au patrimoine mondial, le Krutenau et ses rues animées, le Neudorf, l\'Orangerie, la Robertsau, l\'Elsau, et les communes périphériques comme Illkirch-Graffenstaden, Schiltigheim ou Bischheim.',
  },
  {
    question: 'Y a-t-il des difficultés pour déménager dans la Petite-France ou la Grande Île ?',
    answer: 'La Grande Île de Strasbourg est en grande partie classée patrimoine mondial et comporte de nombreuses zones piétonnes, des rues médiévales étroites et des accès restreints aux véhicules lourds, notamment autour de la Petite-France. Nous reconnaissons les conditions d\'accès à votre adresse en amont et planifions le stationnement du camion dans le périmètre autorisé, avec si nécessaire un véhicule de navette.',
  },
  {
    question: 'Faut-il une visite préalable pour un déménagement Paris-Strasbourg ?',
    answer: 'Oui, une visite à domicile à Paris est systématiquement incluse dans notre processus pour les déménagements longue distance. Elle permet d\'évaluer le volume exact, d\'identifier les contraintes de votre logement parisien (étage, ascenseur, accès) et d\'établir un devis précis. Pour un déménagement vers Strasbourg, cette étape est essentielle pour éviter toute mauvaise surprise.',
  },
]

export default function DemenagementParisStrasbourgPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Longue distance', href: 'https://grondin-demenagement.fr/demenagement-longue-distance' },
        { label: 'Paris → Strasbourg', href: 'https://grondin-demenagement.fr/demenagement-longue-distance/paris-strasbourg' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Longue distance', href: '/demenagement-longue-distance' },
            { label: 'Paris → Strasbourg' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement Paris → Strasbourg
          </h1>
          <div className="flex items-center gap-4 mb-3 text-grondin-300 text-sm">
            <span>490 km</span>
            <span>·</span>
            <span>~4h de trajet</span>
          </div>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Strasbourg, capitale européenne et ville d'exception, attire les professionnels des institutions européennes et les amoureux de son patrimoine alsacien exceptionnel. De la Petite-France au Krutenau, Grondin Déménagement assure votre transfert vers la capitale de l'Alsace en camion dédié.
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
              Votre déménagement Paris → Strasbourg avec Grondin
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Strasbourg est à 490 km de Paris via l'A4 (l'Autoroute de l'Est), soit environ 4h de trajet en camion. La capitale alsacienne accueille de nombreux fonctionnaires européens, des professionnels du droit et des chercheurs attirés par ses universités et institutions de premier plan. La Grande Île, classée au patrimoine mondial de l'UNESCO, et les quartiers du Krutenau et du Neudorf figurent parmi les secteurs les plus demandés.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Grondin Déménagement gère votre déménagement Paris-Strasbourg dans son intégralité : visite préalable à Paris, devis détaillé, camion exclusivement dédié à votre transfert sans groupage, et assurance RC Professionnelle couvrant l'ensemble du trajet. Nous connaissons les contraintes d'accès spécifiques du centre historique strasbourgeois et planifions la livraison en conséquence.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: 'ph:truck', title: 'Camion dédié', desc: 'Véhicule réservé uniquement à votre déménagement' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tout le trajet' },
                { icon: 'ph:clock', title: 'Livraison ponctuelle', desc: 'Respect des créneaux convenus' },
                { icon: 'ph:map-pin', title: '490 km', desc: 'Trajet direct sans rupture de charge' },
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
              <h3 className="font-bold mb-2">Devis Paris → Strasbourg</h3>
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

      <FAQSection items={FAQ} title="Questions sur le déménagement Paris → Strasbourg" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
