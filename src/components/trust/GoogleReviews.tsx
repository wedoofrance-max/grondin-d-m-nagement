import { Icon } from '@iconify/react'

const REVIEWS = [
  { author: 'Prudence Fiocret',  city: 'Paris',          rating: 5, text: 'Je recommande vivement, ponctuels, rapides et professionnels. Première expérience réussie.',                               date: '2025-01' },
  { author: 'Marianna Rodriguez', city: 'Savigny',       rating: 5, text: 'Super expérience ! Déménagement rapide et sans stress malgré un 4ème étage sans ascenseur.',                               date: '2025-02' },
  { author: 'Alain Tuffery',     city: 'Paris 13ème',    rating: 5, text: "Une belle équipe conviviale et ponctuelle qui m'a aidé lors de mon déménagement dans les Alpes.",                          date: '2025-01' },
  { author: 'Mathieu Terret',    city: 'Paris, Belleville', rating: 5, text: "Accompagnement rassurant, ils savent s'adapter à toutes les situations. Équipe sérieuse et dynamique.",               date: '2024-12' },
  { author: 'Jean-Marie Deltort', city: 'Paris, Bougival', rating: 5, text: "Merci pour votre flexibilité, avec vous je n'ai pas eu une once de stress.",                                            date: '2024-11' },
  { author: 'Sophie Laurent',    city: 'Neuilly-sur-Seine', rating: 5, text: 'Service impeccable du début à la fin. Le monte-meuble a été installé très rapidement. Je recommande sans hésiter.',  date: '2024-10' },
]

function Stars({ count }: { count: number }) {
  return (
    <div role="img" className="flex gap-0.5" aria-label={`Note : ${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          icon={i < count ? 'ph:star-fill' : 'ph:star'}
          width={14}
          height={14}
          className={i < count ? 'text-amber-400' : 'text-neutral-300'}
          aria-hidden
        />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  return (
    <section className="py-20" aria-label="Avis clients Grondin Déménagement">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-grondin-700 text-xs font-semibold uppercase tracking-widest mb-3">
              Recommandations
            </p>
            <h2 className="text-fluid-4xl font-bold text-neutral-900">
              Ils nous font confiance
            </h2>
          </div>
          <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-neutral-900">4,9</p>
              <Stars count={5} />
              <p className="text-xs text-neutral-500 mt-1">34 avis Google</p>
            </div>
            <div className="h-12 w-px bg-neutral-200" aria-hidden />
            <div className="flex items-center gap-1">
              <Icon icon="ph:google-logo" width={24} height={24} className="text-neutral-600" aria-hidden />
              <span className="text-sm font-medium text-neutral-600">Google</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.author}
              className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-neutral-200 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-grondin-100 flex items-center justify-center text-grondin-700 font-bold text-sm flex-shrink-0">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{review.author}</p>
                    <p className="text-xs text-neutral-600">{review.city}</p>
                  </div>
                </div>
                <Stars count={review.rating} />
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/grondin-demenagement/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-grondin-500 text-grondin-600 rounded-xl font-semibold hover:bg-grondin-50 transition-colors"
            aria-label="Laisser un avis Google pour Grondin Déménagement"
          >
            <Icon icon="ph:star" width={18} height={18} aria-hidden />
            Laisser un avis Google
          </a>
        </div>
      </div>
    </section>
  )
}
