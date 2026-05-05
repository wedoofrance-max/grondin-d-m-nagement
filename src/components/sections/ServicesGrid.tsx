import { ServiceCard } from '@/components/ui/Card'

const SERVICES = [
  {
    icon:        'ph:truck',
    title:       'Déménagement Paris & IDF',
    description: 'Particuliers et entreprises à Paris et en Île-de-France. Équipe qualifiée, protection mobilier, 7j/7.',
    href:        '/services/demenagement-paris',
  },
  {
    icon:        'ph:elevator',
    title:       'Monte-meuble & Levage',
    description: "Location de monte-meuble pour les étages sans ascenseur ou le transport d'objets encombrants.",
    href:        '/services/monte-meubles-paris',
    badge:       'Populaire',
  },
  {
    icon:        'ph:warehouse',
    title:       'Garde-meubles IDF',
    description: 'Stockage sécurisé de vos meubles et affaires en Île-de-France. Courts et longs séjours.',
    href:        '/services/garde-meubles',
  },
  {
    icon:        'ph:broom',
    title:       'Nettoyage après déménagement',
    description: 'Nettoyage complet fin de bail ou remise en état de votre logement après le déménagement.',
    href:        '/services/nettoyage-demenagement-paris',
  },
  {
    icon:        'ph:trash',
    title:       'Évacuation encombrants',
    description: "Évacuation et tri de vos encombrants à Paris et en IDF. Rapide, discret et responsable.",
    href:        '/services/encombrement-nettoyage-paris',
  },
  {
    icon:        'ph:lightning',
    title:       'Déménagement express',
    description: 'Besoin de déménager rapidement ? Notre service express intervient en 24-48h sur Paris.',
    href:        '/services/demenagement-express-paris',
    badge:       'NOUVEAU',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-neutral-50" aria-label="Nos services de déménagement">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-grondin-700 text-xs font-semibold uppercase tracking-widest mb-3">
            Ce que nous faisons
          </p>
          <h2 className="text-fluid-4xl font-bold text-neutral-900 mb-4">
            Tous vos besoins de déménagement
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            De la simple boîte à l&apos;appartement entier, nous proposons une gamme complète de services pour particuliers et professionnels à Paris et en Île-de-France.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
