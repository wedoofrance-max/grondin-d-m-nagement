import type { MetadataRoute } from 'next'

const BASE = 'https://grondin-demenagement.fr'

const d = (s: string) => new Date(s)

const CONSEIL_DATES: Record<string, Date> = {
  'checklist-demenagement-paris':               d('2025-11-10'),
  'comment-bien-emballer-ses-affaires':         d('2025-11-12'),
  'obtenir-autorisation-stationnement-paris':   d('2025-11-14'),
  'demenagement-paris-haussmannien':            d('2025-11-17'),
  'comment-demenager-paris':                    d('2025-11-19'),
  'cartons-demenagement-combien':               d('2025-11-22'),
  'changer-adresse-apres-demenagement':         d('2025-11-25'),
  'resiliation-abonnements':                    d('2025-11-27'),
  'aide-financiere-demenagement':               d('2025-12-01'),
  'assurance-demenagement':                     d('2025-12-03'),
  'recuperer-caution-apres-demenagement':       d('2025-12-05'),
  'demenagement-longue-distance-france':        d('2025-12-08'),
  'demenagement-avec-enfants':                  d('2025-12-10'),
  'demenagement-etudiant-paris':                d('2025-12-12'),
  'demenagement-senior-paris':                  d('2025-12-15'),
  'meilleurs-quartiers-paris-2026':             d('2025-12-18'),
  'demenagement-hiver':                         d('2025-12-20'),
  'demenager-paris-petit-budget':               d('2025-12-22'),
  'garde-meubles-paris-comparatif':             d('2025-12-24'),
  'demenagement-piano-oeuvre-art':              d('2026-01-08'),
  'emballage-fragiles-conseils':                d('2026-01-12'),
  'demenagement-plantes-vertes':                d('2026-01-15'),
  'demenagement-animaux-paris':                 d('2026-01-18'),
  'demenagement-ecologique-paris':              d('2026-01-22'),
  'demenagement-week-end-paris':                d('2026-01-25'),
  'monte-meuble-utilisation':                   d('2026-02-01'),
  'prix-demenagement-guide':                    d('2026-05-06'),
}

const PARIS_ARRONDISSEMENTS = [
  '1er-arrondissement',  '2eme-arrondissement',  '3eme-arrondissement',
  '4eme-arrondissement',  '5eme-arrondissement',  '6eme-arrondissement',
  '7eme-arrondissement',  '8eme-arrondissement',  '9eme-arrondissement',
  '10eme-arrondissement', '11eme-arrondissement', '12eme-arrondissement',
  '13eme-arrondissement', '14eme-arrondissement', '15eme-arrondissement',
  '16eme-arrondissement', '17eme-arrondissement', '18eme-arrondissement',
  '19eme-arrondissement', '20eme-arrondissement',
]

const IDF_CITIES = [
  'alfortville', 'asnieres-sur-seine', 'bagneux', 'bondy',
  'boulogne-billancourt', 'charenton-le-pont', 'clamart', 'colombes',
  'courbevoie', 'creteil', 'fontenay-sous-bois', 'issy-les-moulineaux',
  'ivry-sur-seine', 'levallois-perret', 'maisons-alfort', 'malakoff',
  'meudon', 'montreuil', 'montrouge', 'nanterre', 'neuilly-sur-seine',
  'noisy-le-grand', 'saint-denis', 'saint-maur-des-fosses', 'versailles',
  'vincennes', 'vitry-sur-seine',
]

const LONGUE_DISTANCE = [
  'paris-lyon', 'paris-bordeaux', 'paris-marseille', 'paris-toulouse',
  'paris-nantes', 'paris-lille', 'paris-strasbourg',
]

const SERVICES = [
  'demenagement-paris',
  'monte-meubles-paris',
  'garde-meubles',
  'nettoyage-demenagement-paris',
  'encombrement-nettoyage-paris',
  'demenagement-express-paris',
  'transport-marchandises-paris',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const launch = d('2025-11-01')
  const recent = d('2026-05-06')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                           lastModified: recent  },
    { url: `${BASE}/devis`,                                lastModified: launch  },
    { url: `${BASE}/services`,                             lastModified: launch  },
    { url: `${BASE}/offres`,                               lastModified: launch  },
    { url: `${BASE}/offres/economique`,                    lastModified: launch  },
    { url: `${BASE}/offres/confort`,                       lastModified: launch  },
    { url: `${BASE}/offres/premium`,                       lastModified: launch  },
    { url: `${BASE}/demenagement-paris`,                   lastModified: recent  },
    { url: `${BASE}/demenagement-ile-de-france`,           lastModified: recent  },
    { url: `${BASE}/demenagement-hauts-de-seine-92`,       lastModified: launch  },
    { url: `${BASE}/demenagement-val-de-marne-94`,         lastModified: launch  },
    { url: `${BASE}/demenagement-seine-saint-denis-93`,    lastModified: launch  },
    { url: `${BASE}/demenagement-seine-et-marne-77`,       lastModified: launch  },
    { url: `${BASE}/demenagement-longue-distance`,         lastModified: launch  },
    { url: `${BASE}/faq`,                                  lastModified: launch  },
    { url: `${BASE}/temoignages`,                          lastModified: launch  },
    { url: `${BASE}/conseils`,                             lastModified: recent  },
    { url: `${BASE}/a-propos`,                             lastModified: launch  },
    { url: `${BASE}/contact`,                              lastModified: launch  },
    { url: `${BASE}/legal/mentions-legales`,               lastModified: launch  },
    { url: `${BASE}/legal/politique-de-confidentialite`,   lastModified: launch  },
    { url: `${BASE}/legal/cgv`,                            lastModified: launch  },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: launch,
  }))

  const arrondissementRoutes: MetadataRoute.Sitemap = PARIS_ARRONDISSEMENTS.map((slug) => ({
    url: `${BASE}/demenagement-paris/${slug}`,
    lastModified: launch,
  }))

  const idfRoutes: MetadataRoute.Sitemap = IDF_CITIES.map((slug) => ({
    url: `${BASE}/demenagement-ile-de-france/${slug}`,
    lastModified: recent,
  }))

  const longueDistanceRoutes: MetadataRoute.Sitemap = LONGUE_DISTANCE.map((slug) => ({
    url: `${BASE}/demenagement-longue-distance/${slug}`,
    lastModified: launch,
  }))

  const conseilRoutes: MetadataRoute.Sitemap = Object.entries(CONSEIL_DATES).map(([slug, date]) => ({
    url: `${BASE}/conseils/${slug}`,
    lastModified: date,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...arrondissementRoutes,
    ...idfRoutes,
    ...longueDistanceRoutes,
    ...conseilRoutes,
  ]
}
