import { OffreCard } from '@/components/ui/Card'

const OFFRES = [
  {
    name:        'Économique',
    tagline:     'Le Coup de Pouce',
    recommended: false,
    href:        '/offres/economique',
    features: [
      'Équipe qualifiée et formée',
      'Protection intégrale du mobilier',
      'Manutention complète',
      'Remise en place du mobilier',
      'Autorisation de stationnement',
      'Assurance RC Pro incluse',
      'Devis gratuit en quelques clics',
    ],
    notIncluded: [
      'Démontage / Remontage mobilier',
      'Emballage des objets fragiles',
    ],
  },
  {
    name:        'Confort',
    tagline:     "L'Essentiel Recommandé",
    recommended: true,
    href:        '/offres/confort',
    features: [
      'Tout ce qui est inclus en Économique',
      'Démontage / Remontage mobilier inclus',
      'Cartons de déménagement fournis',
      'Chef d\'équipe dédié',
      '2-3 déménageurs professionnels',
      'Assurance RC Pro incluse',
      'Devis gratuit en quelques clics',
    ],
    notIncluded: [
      'Emballage non fragiles',
      'Nettoyage fin de bail',
    ],
  },
  {
    name:        'Premium',
    tagline:     'Sérénité Totale',
    recommended: false,
    href:        '/offres/premium',
    features: [
      'Tout ce qui est inclus en Confort',
      'Emballage complet (fragiles + non fragiles)',
      'Déballage à destination inclus',
      'Nettoyage fin de bail inclus',
      'Monte-meuble si nécessaire inclus',
      '3-4 déménageurs expérimentés',
      'Chef d\'équipe senior dédié',
    ],
    notIncluded: [],
  },
]

export function OffresSection() {
  return (
    <section className="py-20 bg-white" aria-label="Nos formules de déménagement">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-grondin-700 text-xs font-semibold uppercase tracking-widest mb-3">
            Formules
          </p>
          <h2 className="text-fluid-4xl font-bold text-neutral-900 mb-4">
            3 formules adaptées à vos besoins
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Que vous soyez étudiant ou famille, chaque déménagement est unique. Choisissez la formule qui correspond à votre situation — votre devis personnalisé est gratuit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {OFFRES.map((offre) => (
            <OffreCard key={offre.name} {...offre} />
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-8">
          Chaque devis est personnalisé selon votre superficie, étage, et besoins spécifiques.{' '}
          <a href="/devis" className="text-grondin-700 hover:underline font-medium">
            Obtenez votre devis gratuit →
          </a>
        </p>
      </div>
    </section>
  )
}
