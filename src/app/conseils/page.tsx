import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Conseils Déménagement Paris — Guide Pratique | Grondin',
  description: 'Conseils pratiques pour réussir votre déménagement à Paris : checklist, délais, emballage, administratif. Guide complet par Grondin Déménagement.',
  alternates: { canonical: 'https://grondin-demenagement.fr/conseils' },
}

const ARTICLES = [
  {
    slug:    'checklist-demenagement-paris',
    title:   'La checklist complète pour réussir votre déménagement à Paris',
    excerpt: 'Tout ce que vous devez faire avant, pendant et après votre déménagement. De la résiliation de votre bail aux formalités administratives.',
    icon:    'ph:list-checks',
    tag:     'Organisation',
    readTime: '8 min',
  },
  {
    slug:    'comment-bien-emballer-ses-affaires',
    title:   'Comment bien emballer ses affaires pour un déménagement ?',
    excerpt: 'Techniques professionnelles pour emballer vos objets fragiles, votre vaisselle, vos vêtements et votre électronique sans risque de casse.',
    icon:    'ph:package',
    tag:     'Emballage',
    readTime: '6 min',
  },
  {
    slug:    'obtenir-autorisation-stationnement-paris',
    title:   'Comment obtenir une autorisation de stationnement pour un déménagement à Paris ?',
    excerpt: 'Guide étape par étape pour réserver une place de stationnement pour votre camion de déménagement dans les rues de Paris.',
    icon:    'ph:map-pin',
    tag:     'Réglementation',
    readTime: '5 min',
  },
  {
    slug:    'demenagement-paris-haussmannien',
    title:   'Déménager dans un immeuble haussmannien parisien : ce qu\'il faut savoir',
    excerpt: 'Escaliers en colimaçon, couloirs étroits, portes cochères : comment anticiper les contraintes des immeubles haussmanniens lors d\'un déménagement.',
    icon:    'ph:building',
    tag:     'Logistique',
    readTime: '7 min',
  },
  {
    slug:    'demenagement-longue-distance-france',
    title:   'Comment organiser un déménagement longue distance depuis Paris ?',
    excerpt: 'Tout ce qu\'il faut anticiper pour un déménagement Paris-Lyon, Paris-Bordeaux ou vers toute autre ville de France.',
    icon:    'ph:truck',
    tag:     'Longue distance',
    readTime: '9 min',
  },
  {
    slug:    'changer-adresse-apres-demenagement',
    title:   'Changer d\'adresse après un déménagement : toutes les démarches',
    excerpt: 'CAF, EDF, banque, Sécurité sociale, impôts, La Poste, employeur... La liste complète des organismes à prévenir et comment le faire facilement.',
    icon:    'ph:envelope-simple',
    tag:     'Administratif',
    readTime: '10 min',
  },
  {
    slug:    'recuperer-caution-apres-demenagement',
    title:   'Comment récupérer sa caution après un déménagement ?',
    excerpt: 'État des lieux de sortie, nettoyage fin de bail, petites réparations : tout ce qui vous permettra de récupérer l\'intégralité de votre dépôt de garantie.',
    icon:    'ph:currency-eur',
    tag:     'Locataire',
    readTime: '7 min',
  },
  {
    slug:    'demenagement-avec-enfants',
    title:   'Déménager avec des enfants : conseils pratiques',
    excerpt: 'Comment impliquer vos enfants dans le déménagement, gérer leur stress et rendre ce moment aussi simple que possible pour toute la famille.',
    icon:    'ph:smiley',
    tag:     'Famille',
    readTime: '6 min',
  },
  {
    slug:    'comment-demenager-paris',
    title:   'Comment déménager à Paris : guide complet étape par étape',
    excerpt: 'De la recherche du bon déménageur à l\'installation dans votre nouveau logement, toutes les étapes d\'un déménagement parisien réussi.',
    icon:    'ph:steps',
    tag:     'Guide',
    readTime: '10 min',
  },
  {
    slug:    'prix-demenagement-guide',
    title:   'Prix d\'un déménagement à Paris : quels facteurs influencent le coût ?',
    excerpt: 'Distance, volume, étage, formule choisie, période de l\'année... Comprendre ce qui détermine le tarif de votre déménagement à Paris.',
    icon:    'ph:scales',
    tag:     'Budget',
    readTime: '7 min',
  },
  {
    slug:    'cartons-demenagement-combien',
    title:   'Combien de cartons faut-il pour déménager ? Estimation par logement',
    excerpt: 'Studio, T2, T3, T4 ou maison : estimation du nombre de cartons nécessaires selon la taille de votre logement et vos habitudes.',
    icon:    'ph:cube',
    tag:     'Emballage',
    readTime: '5 min',
  },
  {
    slug:    'resiliation-abonnements',
    title:   'Résiliation des abonnements avant un déménagement : la liste complète',
    excerpt: 'Internet, électricité, gaz, eau, téléphone fixe, assurance habitation... Tous les contrats à résilier ou transférer lors d\'un déménagement.',
    icon:    'ph:x-circle',
    tag:     'Administratif',
    readTime: '6 min',
  },
  {
    slug:    'aide-financiere-demenagement',
    title:   'Aides financières pour déménager : Action Logement, CAF et autres dispositifs',
    excerpt: 'Découvrez les aides disponibles pour financer votre déménagement : Mobili-Pass Action Logement, aide au déménagement de la CAF, et autres dispositifs.',
    icon:    'ph:hand-coins',
    tag:     'Budget',
    readTime: '8 min',
  },
  {
    slug:    'demenagement-etudiant-paris',
    title:   'Déménagement étudiant à Paris : conseils et astuces pour s\'en sortir',
    excerpt: 'Studio, colocation, résidence universitaire : déménager à Paris avec peu de moyens. Nos conseils pour les étudiants qui s\'installent dans la capitale.',
    icon:    'ph:graduation-cap',
    tag:     'Étudiant',
    readTime: '6 min',
  },
  {
    slug:    'demenagement-senior-paris',
    title:   'Déménagement senior à Paris : comment bien se préparer et se faire aider',
    excerpt: 'Déménager après 60 ans nécessite une organisation particulière. Aides disponibles, formule tout compris, sécurité et logistique : notre guide complet.',
    icon:    'ph:person-simple-walk',
    tag:     'Senior',
    readTime: '7 min',
  },
  {
    slug:    'assurance-demenagement',
    title:   'Assurance déménagement : que couvre-t-elle et comment se protéger ?',
    excerpt: 'RC professionnelle du déménageur, assurance tous risques, franchise, déclaration de dommages : tout ce que vous devez savoir sur les assurances.',
    icon:    'ph:shield-check',
    tag:     'Juridique',
    readTime: '6 min',
  },
  {
    slug:    'demenagement-hiver',
    title:   'Déménager en hiver à Paris : précautions et avantages',
    excerpt: 'Déménager en décembre, janvier ou février présente des avantages (disponibilités, planning) mais aussi des contraintes spécifiques. Nos conseils.',
    icon:    'ph:snowflake',
    tag:     'Saisonnier',
    readTime: '5 min',
  },
  {
    slug:    'meilleurs-quartiers-paris-2026',
    title:   'Les meilleurs quartiers de Paris où s\'installer en 2026',
    excerpt: 'Marais, Batignolles, Oberkampf, Montmartre, République... Quel quartier parisien vous correspond ? Notre guide pour choisir où vivre à Paris.',
    icon:    'ph:city',
    tag:     'Paris',
    readTime: '8 min',
  },
  {
    slug:    'demenager-paris-petit-budget',
    title:   'Déménager à Paris avec un petit budget : nos astuces pratiques',
    excerpt: 'Réduire le volume, déménager en semaine, louer une camionnette, trouver des cartons gratuits : toutes nos astuces pour déménager moins cher à Paris.',
    icon:    'ph:piggy-bank',
    tag:     'Budget',
    readTime: '7 min',
  },
  {
    slug:    'garde-meubles-paris-comparatif',
    title:   'Garde-meubles à Paris : comment choisir et quand y recourir ?',
    excerpt: 'Entre deux logements, rénovation, retour de l\'étranger : quand le garde-meubles est-il la solution ? Comment choisir le bon prestataire à Paris ?',
    icon:    'ph:warehouse',
    tag:     'Stockage',
    readTime: '6 min',
  },
  {
    slug:    'demenagement-piano-oeuvre-art',
    title:   'Déménager un piano ou une oeuvre d\'art : précautions et méthodes',
    excerpt: 'Piano droit, piano à queue, tableau de valeur, sculpture... Le transport des objets encombrants et précieux nécessite un savoir-faire spécifique.',
    icon:    'ph:music-note',
    tag:     'Objets précieux',
    readTime: '6 min',
  },
  {
    slug:    'emballage-fragiles-conseils',
    title:   'Emballer ses objets fragiles : les techniques des professionnels',
    excerpt: 'Vaisselle fine, miroirs, lampes, bouteilles de vin, appareils photo : les techniques d\'emballage professionnel pour que vos objets arrivent intacts.',
    icon:    'ph:warning-diamond',
    tag:     'Emballage',
    readTime: '5 min',
  },
  {
    slug:    'demenagement-plantes-vertes',
    title:   'Déménager avec des plantes vertes : comment les transporter sans les abîmer',
    excerpt: 'Rempotage, arrosage avant le départ, transport en voiture ou camion, acclimatation au nouveau logement : tout pour que vos plantes survivent.',
    icon:    'ph:plant',
    tag:     'Conseils',
    readTime: '5 min',
  },
  {
    slug:    'demenagement-animaux-paris',
    title:   'Déménager avec des animaux à Paris : conseils et réglementation',
    excerpt: 'Chiens, chats, NAC : comment gérer le stress de votre animal lors d\'un déménagement parisien ? Conseils vétérinaires et réglementation des copropriétés.',
    icon:    'ph:paw-print',
    tag:     'Animaux',
    readTime: '6 min',
  },
  {
    slug:    'demenagement-ecologique-paris',
    title:   'Déménagement écologique à Paris : comment réduire son impact environnemental',
    excerpt: 'Cartons de seconde main, emballages biodégradables, optimisation du chargement, don aux associations : déménager écologique à Paris, c\'est possible.',
    icon:    'ph:leaf',
    tag:     'Écologie',
    readTime: '6 min',
  },
  {
    slug:    'demenagement-week-end-paris',
    title:   'Déménager le week-end à Paris : avantages, inconvénients et précautions',
    excerpt: 'Le week-end est la période la plus demandée pour déménager. Comment s\'organiser, anticiper les contraintes et réserver à temps ?',
    icon:    'ph:calendar',
    tag:     'Organisation',
    readTime: '5 min',
  },
  {
    slug:    'monte-meuble-utilisation',
    title:   'Monte-meubles à Paris : comment ça marche et quand en avoir besoin ?',
    excerpt: 'Principe du monte-meubles, situations où il est indispensable, autorisations nécessaires et déroulement de l\'opération. Tout ce que vous devez savoir.',
    icon:    'ph:elevator',
    tag:     'Équipement',
    readTime: '5 min',
  },
]

export default function ConseilsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ label: 'Conseils', href: 'https://grondin-demenagement.fr/conseils' }]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Conseils' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Conseils & guides pour votre déménagement
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Nos experts partagent leurs meilleures astuces pour organiser votre déménagement à Paris sans stress.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">

        {/* Featured resource — checklist download */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative bg-white border-2 border-grondin-100 rounded-3xl p-8 sm:p-10 text-center shadow-card">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-grondin-500 rounded-2xl shadow-grondin">
              <Icon icon="ph:list-checks" width={20} height={20} className="text-white" aria-hidden />
            </div>
            <p className="text-xs font-semibold text-grondin-500 uppercase tracking-widest mb-3 mt-2">
              Ressource gratuite
            </p>
            <h2 className="text-fluid-xl font-bold text-neutral-900 mb-2">
              La checklist complète du déménagement
            </h2>
            <p className="text-neutral-500 text-sm italic mb-6">
              Tout ce que vous devez faire avant, pendant et après votre déménagement — organisé étape par étape
            </p>
            <a
              href="/checklist-demenagement-grondin.pdf"
              download
              className="inline-flex items-center justify-center gap-2 w-full py-4 border-2 border-grondin-500 text-grondin-600 rounded-xl font-bold hover:bg-grondin-500 hover:text-white transition-all duration-200"
            >
              <Icon icon="ph:download-simple" width={20} height={20} aria-hidden />
              Télécharger la checklist PDF
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/conseils/${article.slug}`}
              className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center bg-grondin-50 rounded-xl group-hover:bg-grondin-500 transition-colors duration-300">
                  <Icon icon={article.icon} width={24} height={24} className="text-grondin-500 group-hover:text-white transition-colors duration-300" aria-hidden />
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Icon icon="ph:clock" width={12} height={12} aria-hidden />
                  {article.readTime}
                </div>
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-grondin-50 text-grondin-600 text-xs font-semibold rounded-full mb-2">
                  {article.tag}
                </span>
                <h2 className="text-fluid-base font-bold text-neutral-900 group-hover:text-grondin-600 transition-colors leading-snug mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-grondin-500 font-medium text-sm">
                <span>Lire l'article</span>
                <Icon icon="ph:arrow-right" width={16} height={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  )
}
