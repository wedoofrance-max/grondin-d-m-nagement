import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Île-de-France — Toutes les Villes | Grondin',
  description: 'Déménageur en Île-de-France : Paris, Hauts-de-Seine, Val-de-Marne, Seine-Saint-Denis. Grondin Déménagement : équipes 7j/7, devis gratuit sous 24h. Appelez le 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
}

const CITIES = [
  { label: 'Boulogne-Billancourt', slug: 'boulogne-billancourt', cp: '92100', dept: 'Hauts-de-Seine' },
  { label: 'Versailles', slug: 'versailles', cp: '78000', dept: 'Yvelines' },
  { label: 'Neuilly-sur-Seine', slug: 'neuilly-sur-seine', cp: '92200', dept: 'Hauts-de-Seine' },
  { label: 'Levallois-Perret', slug: 'levallois-perret', cp: '92300', dept: 'Hauts-de-Seine' },
  { label: 'Issy-les-Moulineaux', slug: 'issy-les-moulineaux', cp: '92130', dept: 'Hauts-de-Seine' },
  { label: 'Montreuil', slug: 'montreuil', cp: '93100', dept: 'Seine-Saint-Denis' },
  { label: 'Vincennes', slug: 'vincennes', cp: '94300', dept: 'Val-de-Marne' },
  { label: 'Saint-Denis', slug: 'saint-denis', cp: '93200', dept: 'Seine-Saint-Denis' },
  { label: 'Nanterre', slug: 'nanterre', cp: '92000', dept: 'Hauts-de-Seine' },
  { label: 'Colombes', slug: 'colombes', cp: '92700', dept: 'Hauts-de-Seine' },
  { label: 'Asnières-sur-Seine', slug: 'asnieres-sur-seine', cp: '92600', dept: 'Hauts-de-Seine' },
  { label: 'Courbevoie', slug: 'courbevoie', cp: '92400', dept: 'Hauts-de-Seine' },
  { label: 'Créteil', slug: 'creteil', cp: '94000', dept: 'Val-de-Marne' },
  { label: 'Vitry-sur-Seine', slug: 'vitry-sur-seine', cp: '94400', dept: 'Val-de-Marne' },
  { label: 'Ivry-sur-Seine', slug: 'ivry-sur-seine', cp: '94200', dept: 'Val-de-Marne' },
  { label: 'Alfortville', slug: 'alfortville', cp: '94140', dept: 'Val-de-Marne' },
  { label: 'Maisons-Alfort', slug: 'maisons-alfort', cp: '94700', dept: 'Val-de-Marne' },
  { label: 'Charenton-le-Pont', slug: 'charenton-le-pont', cp: '94220', dept: 'Val-de-Marne' },
  { label: 'Saint-Maur-des-Fossés', slug: 'saint-maur-des-fosses', cp: '94100', dept: 'Val-de-Marne' },
  { label: 'Fontenay-sous-Bois', slug: 'fontenay-sous-bois', cp: '94120', dept: 'Val-de-Marne' },
  { label: 'Noisy-le-Grand', slug: 'noisy-le-grand', cp: '93160', dept: 'Seine-Saint-Denis' },
  { label: 'Bondy', slug: 'bondy', cp: '93140', dept: 'Seine-Saint-Denis' },
  { label: 'Clamart', slug: 'clamart', cp: '92140', dept: 'Hauts-de-Seine' },
  { label: 'Meudon', slug: 'meudon', cp: '92190', dept: 'Hauts-de-Seine' },
  { label: 'Montrouge', slug: 'montrouge', cp: '92120', dept: 'Hauts-de-Seine' },
  { label: 'Malakoff', slug: 'malakoff', cp: '92240', dept: 'Hauts-de-Seine' },
  { label: 'Bagneux', slug: 'bagneux', cp: '92220', dept: 'Hauts-de-Seine' },
]

const FAQ = [
  {
    question: 'Grondin intervient-il dans toute l\'Île-de-France ?',
    answer: 'Oui. Nos équipes couvrent Paris et l\'ensemble de la petite couronne — Hauts-de-Seine (92), Val-de-Marne (94), Seine-Saint-Denis (93) — ainsi que les principales villes des Yvelines (78). Consultez la liste des villes ci-dessus ou appelez-nous pour confirmer votre adresse.',
  },
  {
    question: 'Puis-je déménager depuis ou vers Paris intra-muros et une ville de banlieue ?',
    answer: 'Absolument. Nous réalisons régulièrement des déménagements entre Paris et sa banlieue, que ce soit vers Boulogne-Billancourt, Vincennes, Neuilly-sur-Seine, Créteil ou toute autre commune d\'IDF. Le devis est calculé selon le volume, la distance et les conditions d\'accès.',
  },
  {
    question: 'Combien de temps à l\'avance dois-je réserver ?',
    answer: 'Nous recommandons de nous contacter au minimum deux à trois semaines avant votre date souhaitée, particulièrement en période estivale (juin-août) et en début de mois. Nous pouvons toutefois étudier des demandes de dernière minute selon notre disponibilité.',
  },
  {
    question: 'Est-ce que vous proposez une visite avant le déménagement ?',
    answer: 'Oui, une visite sur place est proposée pour tout déménagement d\'appartement ou de maison. Elle nous permet d\'évaluer précisément le volume, les difficultés d\'accès et les besoins en matériel. La visite est gratuite et sans engagement.',
  },
]

export default function DemenagementIdFPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Île-de-France', href: 'https://grondin-demenagement.fr/demenagement-ile-de-france' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Déménagement Île-de-France' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement en Île-de-France
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Grondin Déménagement intervient dans tout le Grand Paris — Paris intra-muros et les communes du 92, 93, 94 et 78. Disponible 7j/7 de 8h30 à 20h.
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
              Votre déménageur dans tout le Grand Paris
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              L'Île-de-France est une région dense où chaque commune a ses propres contraintes : tours d'immeubles en Seine-Saint-Denis, pavillons avec jardin dans les Yvelines, résidences fermées du Val-de-Marne ou copropriétés des Hauts-de-Seine. Grondin Déménagement connaît ces environnements et adapte ses équipements (monte-meubles, camions de différentes tailles, matériel de protection) à chaque situation.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Que vous déménagiez d'un studio en banlieue vers Paris, d'une maison en petite couronne vers la grande, ou entre deux villes d'Île-de-France, nous prenons en charge l'ensemble de l'opération : devis gratuit, visite sur place, emballage, transport et livraison. Chaque déménagement bénéficie de notre assurance RC Professionnelle.
            </p>

            <h3 className="text-fluid-xl font-bold text-neutral-900 mb-4">Nos villes d'intervention</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/demenagement-ile-de-france/${city.slug}`}
                  className="group p-3 bg-neutral-50 hover:bg-grondin-50 border border-neutral-200 hover:border-grondin-300 rounded-xl transition-all duration-200"
                >
                  <p className="font-bold text-neutral-900 group-hover:text-grondin-600 text-sm transition-colors">
                    {city.label}
                  </p>
                  <p className="text-xs text-neutral-500">{city.cp} · {city.dept}</p>
                </Link>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:map-pin', title: 'Tout le Grand Paris', desc: 'Petite et grande couronne' },
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
              <h3 className="font-bold mb-2">Devis gratuit IDF</h3>
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
            <Link href="/demenagement-paris" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:map-pin" width={16} height={16} aria-hidden />
              Arrondissements de Paris
            </Link>
            <Link href="/demenagement-hauts-de-seine-92" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:map-trifold" width={16} height={16} aria-hidden />
              Hauts-de-Seine (92)
            </Link>
            <Link href="/demenagement-val-de-marne-94" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:map-trifold" width={16} height={16} aria-hidden />
              Val-de-Marne (94)
            </Link>
            <Link href="/demenagement-seine-saint-denis-93" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:map-trifold" width={16} height={16} aria-hidden />
              Seine-Saint-Denis (93)
            </Link>
            <Link href="/demenagement-seine-et-marne-77" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:map-trifold" width={16} height={16} aria-hidden />
              Seine-et-Marne (77)
            </Link>
            <Link href="/demenagement-longue-distance" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:truck" width={16} height={16} aria-hidden />
              Déménagement longue distance
            </Link>
          </div>
        </div>
      </div>

      <FAQSection items={FAQ} title="Questions sur le déménagement en IDF" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
