import type { MetadataRoute } from 'next'

const BASE = 'https://grondin-demenagement.fr'

const CONSEIL_SLUGS = [
  'checklist-demenagement-paris',
  'comment-bien-emballer-ses-affaires',
  'obtenir-autorisation-stationnement-paris',
  'demenagement-paris-haussmannien',
  'demenagement-longue-distance-france',
  'changer-adresse-apres-demenagement',
  'recuperer-caution-apres-demenagement',
  'demenagement-avec-enfants',
  'comment-demenager-paris',
  'prix-demenagement-guide',
  'cartons-demenagement-combien',
  'resiliation-abonnements',
  'aide-financiere-demenagement',
  'demenagement-etudiant-paris',
  'demenagement-senior-paris',
  'assurance-demenagement',
  'demenagement-hiver',
  'meilleurs-quartiers-paris-2026',
  'demenager-paris-petit-budget',
  'garde-meubles-paris-comparatif',
  'demenagement-piano-oeuvre-art',
  'emballage-fragiles-conseils',
  'demenagement-plantes-vertes',
  'demenagement-animaux-paris',
  'demenagement-ecologique-paris',
  'demenagement-week-end-paris',
  'monte-meuble-utilisation',
]

const PARIS_ARRONDISSEMENTS = [
  '1er-arrondissement',
  '2eme-arrondissement',
  '3eme-arrondissement',
  '4eme-arrondissement',
  '5eme-arrondissement',
  '6eme-arrondissement',
  '7eme-arrondissement',
  '8eme-arrondissement',
  '9eme-arrondissement',
  '10eme-arrondissement',
  '11eme-arrondissement',
  '12eme-arrondissement',
  '13eme-arrondissement',
  '14eme-arrondissement',
  '15eme-arrondissement',
  '16eme-arrondissement',
  '17eme-arrondissement',
  '18eme-arrondissement',
  '19eme-arrondissement',
  '20eme-arrondissement',
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
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/devis`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/offres`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/demenagement-paris`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/demenagement-ile-de-france`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/demenagement-hauts-de-seine-92`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/demenagement-val-de-marne-94`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/demenagement-seine-saint-denis-93`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/demenagement-seine-et-marne-77`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/demenagement-longue-distance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/temoignages`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/conseils`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/a-propos`,                lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/offres/economique`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/offres/confort`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/offres/premium`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const arrondissementRoutes: MetadataRoute.Sitemap = PARIS_ARRONDISSEMENTS.map((slug) => ({
    url: `${BASE}/demenagement-paris/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const idfRoutes: MetadataRoute.Sitemap = IDF_CITIES.map((slug) => ({
    url: `${BASE}/demenagement-ile-de-france/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const longueDistanceRoutes: MetadataRoute.Sitemap = LONGUE_DISTANCE.map((slug) => ({
    url: `${BASE}/demenagement-longue-distance/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const conseilRoutes: MetadataRoute.Sitemap = CONSEIL_SLUGS.map((slug) => ({
    url: `${BASE}/conseils/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.65,
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
