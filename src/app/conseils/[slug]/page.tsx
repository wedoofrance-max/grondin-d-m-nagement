import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { notFound } from 'next/navigation'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

const ARTICLES: Record<string, {
  title: string
  description: string
  content: { heading: string; body: string }[]
  tag: string
  readTime: string
  datePublished: string
  dateModified: string
}> = {
  'checklist-demenagement-paris': {
    title:         'La checklist complète pour réussir votre déménagement à Paris',
    description:   'Tout ce que vous devez faire avant, pendant et après votre déménagement à Paris. Checklist complète par Grondin Déménagement.',
    tag:           'Organisation',
    readTime:      '8 min',
    datePublished: '2024-09-15',
    dateModified:  '2026-05-01',
    content: [
      {
        heading: '2 mois avant le déménagement',
        body: 'Commencez par prévenir votre propriétaire en respectant le préavis légal. Pour un logement non-meublé à Paris — classé en zone tendue — le préavis est ramené à 1 mois, quelle que soit la raison du départ. Pour un logement meublé, le préavis est également d\'1 mois. En dehors des zones tendues, le préavis standard reste de 3 mois. Vérifiez la clause exacte de votre contrat et envoyez votre lettre de congé en recommandé avec accusé de réception.\n\nContactez au moins deux ou trois déménageurs professionnels pour obtenir des devis comparatifs. Exigez une visite préalable gratuite à domicile — c\'est la condition d\'un devis précis, surtout dans les immeubles parisiens où les escaliers étroits et l\'absence d\'ascenseur changent tout au plan logistique. Vérifiez que le déménageur dispose bien d\'une assurance RC Professionnelle.\n\nCommencez votre grand tri : ce que vous gardez, ce que vous vendez (Leboncoin, Vinted), ce que vous donnez (Emmaüs, La Croix-Rouge), ce que vous jetez en déchetterie. Réduire votre volume maintenant, c\'est réduire directement le coût de votre déménagement. Si vous déménagez en juin, juillet ou août — les mois les plus demandés — réservez dès 8 à 12 semaines à l\'avance.',
      },
      {
        heading: '1 mois avant le déménagement',
        body: 'Déposez votre demande d\'autorisation de stationnement auprès de la mairie de votre arrondissement actuel. Si vous arrivez dans un autre arrondissement parisien, faites la même démarche pour l\'adresse d\'arrivée. La demande est gratuite et se fait en ligne sur paris.fr. Prévoyez un délai minimum de 5 à 10 jours ouvrés avant votre déménagement. Cet arrêté de voirie est indispensable pour éviter que votre camion soit verbalisé ou refoulé le jour J.\n\nCommencez à emballer les affaires non essentielles : livres, décorations, vêtements hors saison, objets de collection, vaisselle rarement utilisée. Utilisez des cartons de déménagement neufs ou en bon état pour les objets fragiles — les cartons de supermarché usagés manquent souvent de solidité et de fond. Étiquetez chaque carton avec son contenu et sa pièce de destination.\n\nSouscrivez une assurance habitation pour votre nouveau logement avant d\'y emménager — certains contrats couvrent les deux adresses pendant la période de transition. Prévenez votre employeur de votre changement d\'adresse, ainsi que les établissements scolaires de vos enfants si nécessaire.',
      },
      {
        heading: '2 semaines avant',
        body: 'Contactez vos fournisseurs d\'énergie (EDF, Engie ou fournisseur alternatif) pour programmer le transfert ou la résiliation de votre contrat d\'électricité et de gaz. Même démarche pour internet et téléphone fixe — signalez votre déménagement avec 15 à 21 jours de préavis selon les opérateurs, et demandez si la portabilité de la box est possible dans votre nouveau logement.\n\nSouscrivez au service de réexpédition de courrier de La Poste. Ce service existe en version 6 mois ou 12 mois, en recommandé ou non. C\'est le filet de sécurité indispensable pendant la période de transition, notamment pour les courriers administratifs qui arrivent avec du retard.\n\nPrévenez les organismes prioritaires de votre changement d\'adresse : banque, CAF, CPAM (Sécurité sociale), administration fiscale (impôts.gouv.fr), mutuelle. Le portail service-public.fr propose un service de changement d\'adresse centralisé qui notifie simultanément plusieurs administrations.\n\nEmballez la majorité de vos affaires et préparez un carton "première nuit" : pyjamas, trousse de toilette, médicaments essentiels, chargeurs, café, tasses et une casserole. Ce carton voyage dans votre voiture, pas dans le camion.',
      },
      {
        heading: 'La veille et le jour du déménagement',
        body: 'La veille au soir, installez vos cônes de signalisation ou votre signalétique à l\'emplacement réservé par l\'arrêté de voirie, pour éviter que des véhicules l\'occupent pendant la nuit. Préparez une copie papier de l\'arrêté à remettre à votre équipe de déménageurs.\n\nLe jour J, soyez présent dès le début du chargement. Vérifiez que vos meubles sont protégés par des couvertures de déménagement ou de la cellophane étirable avant d\'être chargés. Signalez à l\'équipe tous les objets fragiles ou de valeur. Indiquez l\'ordre de chargement si vous avez des préférences (ce qui sera déchargé en premier doit être chargé en dernier).\n\nFaites l\'état des lieux de sortie de votre ancien logement en présence du propriétaire ou de son mandataire, avant que le camion parte. Photographiez chaque pièce sous plusieurs angles. À l\'arrivée dans votre nouveau logement, vérifiez l\'état de vos affaires avant de signer le bon de livraison — notez par écrit tout dommage directement sur le document. Vous disposez ensuite de 10 jours pour envoyer des réserves complémentaires par lettre recommandée avec accusé de réception.',
      },
      {
        heading: 'Après le déménagement',
        body: 'Déballez en priorité la cuisine et les chambres pour retrouver rapidement un cadre de vie fonctionnel. Installez les lits dès le premier soir — la fatigue du déménagement mérite une bonne nuit de sommeil. Les cartons moins urgents (décorations, livres) peuvent attendre.\n\nFinalisez les démarches administratives encore en suspens : mise à jour de la carte grise (obligatoire sous 30 jours après le déménagement, sous peine d\'amende de 135 €), inscription sur les listes électorales de votre nouvelle mairie, mise à jour de votre carte Vitale auprès de la CPAM.\n\nSi vous avez choisi la formule Premium de Grondin Déménagement, notre équipe s\'occupe du déballage, de l\'installation des meubles et de l\'évacuation des cartons vides. Cela vous libère plusieurs heures de travail et vous permet de vous concentrer sur les démarches administratives.\n\nRemettez vos clés à votre ancien propriétaire dans les délais convenus. La restitution du dépôt de garantie doit intervenir dans un délai d\'1 mois si l\'état des lieux de sortie est conforme, ou de 2 mois en cas de dégradations constatées.',
      },
      {
        heading: 'Les spécificités d\'un déménagement parisien',
        body: 'Paris cumule des contraintes logistiques uniques que les déménageurs de province ne rencontrent pas. Les principales : immeubles sans ascenseur dans les arrondissements centraux (1er au 11ème en particulier), escaliers haussmanniens étroits (90 cm en moyenne), obligation légale d\'autorisation de stationnement, zones piétonnes et couloirs de bus à éviter lors de la planification des itinéraires.\n\nDans de nombreuses résidences parisiennes (copropriétés et immeubles de standing), le règlement intérieur impose des créneaux horaires stricts pour les déménagements — généralement 9h-12h et 14h-17h en semaine. Certains syndics exigent également une caution versée au gardien pour couvrir d\'éventuelles dégradations des parties communes. Renseignez-vous auprès de votre gestionnaire plusieurs semaines à l\'avance.\n\nEnfin, si votre futur logement est situé dans la zone à faibles émissions (ZFE) métropolitaine du Grand Paris, vérifiez que le camion de votre déménageur est conforme aux normes Crit\'Air en vigueur. Les véhicules Crit\'Air 3 et plus sont soumis à des restrictions de circulation. Grondin Déménagement dispose de véhicules conformes ZFE pour l\'ensemble de ses missions en Île-de-France.',
      },
    ],
  },
  'comment-bien-emballer-ses-affaires': {
    title:         'Comment bien emballer ses affaires pour un déménagement ?',
    description:   'Techniques professionnelles pour emballer vos objets fragiles, vaisselle, vêtements et électronique. Guide par Grondin Déménagement.',
    tag:           'Emballage',
    readTime:      '6 min',
    datePublished: '2024-10-01',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Le matériel indispensable',
        body: 'Prévoyez des cartons de déménagement en bon état, du papier bulle, du papier de soie, du scotch de déménagement (large), des marqueurs. Évitez les cartons de supermarché trop petits ou trop abîmés.',
      },
      {
        heading: 'La vaisselle et les objets fragiles',
        body: 'Emballez chaque assiette individuellement dans du papier bulle. Placez-les debout dans les cartons, jamais à plat. Remplissez les espaces vides avec du papier froissé pour éviter les déplacements. Étiquetez les cartons "FRAGILE" bien visiblement.',
      },
      {
        heading: 'Les livres et objets lourds',
        body: 'Utilisez des cartons petits ou moyens pour les livres. Les cartons trop remplis de livres deviennent impossibles à porter et risquent de se déchirer. Ajoutez des affaires légères pour compléter.',
      },
      {
        heading: 'Les vêtements',
        body: 'Les vêtements sur cintres peuvent rester sur cintres dans des cartons penderie spéciaux. Pour les pull-overs et vêtements pliés, de grands cartons ou des sacs de voyage font l\'affaire.',
      },
      {
        heading: 'L\'électronique',
        body: 'Si vous avez les boîtes d\'origine, réutilisez-les. Sinon, emballez les appareils dans plusieurs couches de papier bulle et placez-les dans un carton avec du calage. N\'oubliez pas de débrancher et d\'emballer séparément les câbles.',
      },
    ],
  },
  'obtenir-autorisation-stationnement-paris': {
    title:       'Comment obtenir une autorisation de stationnement pour un déménagement à Paris ?',
    description: 'Guide pratique pour réserver une place de stationnement pour votre camion de déménagement à Paris.',
    tag:         'Réglementation',
    readTime:    '5 min',
    datePublished: '2024-10-15',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Pourquoi est-ce nécessaire ?',
        body: 'À Paris, il est interdit d\'immobiliser un camion de déménagement sans autorisation sur le domaine public. Sans arrêté de voirie, vous risquez une amende et le refoulement de votre camion.',
      },
      {
        heading: 'Comment faire la demande ?',
        body: 'Rendez-vous à la mairie de votre arrondissement (actuel et futur) ou faites la demande en ligne sur le site Paris.fr. Prévoyez un délai de 5 à 10 jours ouvrés avant votre déménagement. La demande est gratuite.',
      },
      {
        heading: 'Que faut-il fournir ?',
        body: 'La date et les horaires souhaités, l\'adresse exacte, le nombre de places nécessaires, la plaque d\'immatriculation ou la société de déménagement. Grondin Déménagement peut vous accompagner dans cette démarche.',
      },
      {
        heading: 'Après l\'obtention',
        body: 'Vous recevrez un arrêté de voirie que vous devrez afficher la veille au soir sur les emplacements réservés. Des cônes de signalisation peuvent aussi être nécessaires.',
      },
    ],
  },
  'demenagement-paris-haussmannien': {
    title:       'Déménager dans un immeuble haussmannien parisien : ce qu\'il faut savoir',
    description: 'Comment gérer les contraintes des immeubles haussmanniens lors d\'un déménagement à Paris : escaliers, couloirs, monte-meubles.',
    tag:         'Logistique',
    readTime:    '7 min',
    datePublished: '2024-11-01',
    dateModified:  '2026-04-20',
    content: [
      {
        heading: 'Les spécificités des immeubles haussmanniens',
        body: 'Construits entre 1853 et 1870 sous l\'impulsion du baron Haussmann, les immeubles haussmanniens constituent l\'ossature du bâti parisien dans les 1er, 2ème, 4ème, 7ème, 8ème, 9ème, 10ème, 11ème et 16ème arrondissements principalement. On les reconnaît à leurs façades en pierre de taille beige, leurs balcons filants au 2ème et au 5ème étage, leurs moulures intérieures, leurs parquets à points de Hongrie et leurs fenêtres françaises en bois peint.\n\nCes immeubles ont en commun des caractéristiques qui compliquent systématiquement les déménagements : des plafonds hauts entre 2,80 et 3,50 m (ce qui est un atout esthétique mais complique la manipulation des meubles de grande taille), des couloirs d\'entrée étroits, des escaliers en pierre ou en bois avec des virages serrés, et des portes d\'appartement de dimensions standards de l\'époque — souvent plus étroites que les standards actuels. Les portes de cave sont encore plus petites, avec des seuils surélevés qui compliquent le passage des meubles.',
      },
      {
        heading: 'Le problème des escaliers haussmanniens',
        body: 'C\'est la contrainte numéro un que nos équipes rencontrent à Paris. Les escaliers haussmanniens ont en moyenne 90 cm à 1 mètre de largeur utile. Ce gabarit permet de monter des cartons, des chaises, de petits meubles — mais il est insuffisant pour les pièces de mobilier volumineuses : armoire normande, canapé d\'angle, lit double avec cadre, réfrigérateur américain, piano droit.\n\nLe problème s\'aggrave aux virages de palier. Même un couloir de 90 cm peut devenir infranchissable lorsque la cage d\'escalier tourne à 90° ou à 180°, ce qui est le cas dans la majorité des immeubles haussmanniens. Dans ces configurations, tenter de forcer le passage endommage les meubles, les murs et les escaliers — les déménageurs expérimentés ne le font pas.\n\nIl existe aussi dans beaucoup d\'immeubles haussmanniens un escalier de service, plus étroit encore (souvent 60-70 cm), qui desservait à l\'origine les chambres de bonnes au 7ème étage. Aujourd\'hui transformés en studios ou en appartements, ces niveaux posent des problèmes d\'accès encore plus aigus.',
      },
      {
        heading: 'Quand utiliser le monte-meubles ?',
        body: 'Le monte-meubles (ou monte-charges élévateur) est la solution incontournable pour tous les appartements haussmanniens aux étages élevés sans ascenseur, ou pour toute pièce de mobilier qui ne passe pas dans l\'escalier. Le principe : une nacelle ou une plateforme hydraulique est installée contre la façade de l\'immeuble, et le mobilier est hissé depuis la rue jusqu\'à l\'étage par la fenêtre ou le balcon.\n\nÀ partir du 3ème étage sans ascenseur, le monte-meubles est généralement nécessaire pour les pièces volumineuses. Mais l\'étage n\'est pas le seul critère : même au 1er étage, un canapé d\'angle de 3 mètres ou une armoire de 2 mètres de haut ne passera pas dans un escalier standard. Grondin Déménagement évalue systématiquement la nécessité du monte-meubles lors de la visite préalable, en mesurant les accès et en vérifiant les dimensions des meubles concernés.\n\nAttention : positionner un monte-meubles sur le domaine public (trottoir) nécessite une autorisation de voirie spécifique auprès de la mairie d\'arrondissement, distincte de l\'autorisation de stationnement du camion. Grondin Déménagement gère ces démarches pour vous.',
      },
      {
        heading: 'Les ascenseurs haussmanniens : petits mais précieux',
        body: 'Beaucoup d\'immeubles haussmanniens ont été équipés d\'ascenseurs a posteriori, souvent dans les années 1970-1990. Ces ascenseurs ont été ajoutés dans la cage d\'escalier existante, ce qui a réduit la largeur utile de l\'escalier d\'autant. Résultat : l\'ascenseur lui-même est souvent très exigu (cabine de 60 × 80 cm, seuil de 20 cm), utile pour les personnes mais inutilisable pour les meubles.\n\nAvant votre visite préalable, il est utile de noter les dimensions de votre ascenseur si vous en avez un : largeur, profondeur et hauteur de la cabine. Ces informations permettent à notre équipe de déterminer dès la visite quels meubles peuvent passer en ascenseur, lesquels devront monter par l\'escalier, et lesquels nécessiteront obligatoirement le monte-meubles extérieur. Une bonne anticipation évite les mauvaises surprises le jour du déménagement.',
      },
      {
        heading: 'La porte cochère et la cour intérieure',
        body: 'Les portes cochères haussmanniennes sont en général suffisamment hautes (3,5 à 4 mètres) pour laisser passer un camion standard. En revanche, leur largeur peut être limitante : certaines cours mesurent moins de 3 mètres de passage utile, ce qui interdit l\'accès aux grandes remorques. Nos véhicules sont sélectionnés pour pouvoir accéder à la plupart des cours parisiennes.\n\nLa configuration de la cour intérieure détermine aussi l\'emplacement optimal du monte-meubles. Lorsque la cour est accessible et suffisamment large, le monte-meubles peut être positionné en cour, ce qui évite l\'encombrement de la voie publique et simplifie l\'organisation. Dans le cas contraire, il s\'installe en façade côté rue.\n\nCertains immeubles très anciens n\'ont pas de cour (portes palières directement sur la rue) — dans ce cas, toute la logistique se gère depuis le trottoir, avec l\'autorisation de stationnement correspondante.',
      },
      {
        heading: 'Nos conseils pour préparer votre déménagement haussmannien',
        body: 'La visite préalable est absolument indispensable pour un appartement haussmannien. Elle ne dure que 20 à 30 minutes mais conditionne toute la préparation : identification des meubles qui ne passeront pas dans les escaliers, mesure des accès (largeur de la porte, virage du palier, hauteur des fenêtres), évaluation du besoin en monte-meubles et calcul du nombre de déménageurs.\n\nAvant cette visite, préparez les informations suivantes : dimensions de votre ascenseur (si disponible), largeur du couloir d\'entrée, dimensions de vos meubles les plus volumineux. Si vous avez des meubles que vous souhaitez absolument conserver mais dont vous doutez qu\'ils passent, signalez-les lors de la visite — nos équipes ont vu des situations bien plus complexes et trouvent toujours une solution.\n\nContactez également votre syndic ou votre gardien pour connaître les créneaux autorisés dans l\'immeuble et les éventuelles conditions de protection des parties communes (pose de plaques de protection sur les murs et les sols, caution parfois demandée). Grondin Déménagement protège systématiquement les couloirs et escaliers lors de chaque déménagement, conformément aux usages professionnels.',
      },
    ],
  },
  'demenagement-longue-distance-france': {
    title:       'Comment organiser un déménagement longue distance depuis Paris ?',
    description: 'Guide complet pour organiser un déménagement longue distance Paris-Lyon, Paris-Bordeaux ou vers toute autre ville de France.',
    tag:         'Longue distance',
    readTime:    '9 min',
    datePublished: '2024-11-15',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Planifier plus tôt que pour un déménagement local',
        body: 'Pour un déménagement longue distance, réservez 4 à 8 semaines à l\'avance. La coordination entre deux villes nécessite plus d\'anticipation : disponibilité du camion, équipes aux deux extrémités, créneaux de livraison.',
      },
      {
        heading: 'Le choix du déménageur',
        body: 'Vérifiez que le déménageur propose bien des missions longue distance. Grondin Déménagement couvre les principales villes françaises (Lyon, Bordeaux, Marseille, Toulouse, Nantes, Lille, Strasbourg). Nous n\'effectuons pas de déménagements à l\'international.',
      },
      {
        heading: 'Camion dédié ou groupage ?',
        body: 'Avec un camion dédié (exclusif), votre déménagement est le seul sur le camion. Avec un groupage, votre mobilier est regroupé avec celui d\'autres clients. Grondin propose des camions dédiés pour chaque mission longue distance.',
      },
      {
        heading: 'Gérer les deux logements simultanément',
        body: 'Coordonnez l\'état des lieux de sortie avec l\'état des lieux d\'entrée dans votre nouveau logement. Si les dates ne coïncident pas, notre service de garde-meubles peut accueillir vos affaires temporairement.',
      },
      {
        heading: 'Formalités administratives',
        body: 'Pensez à enregistrer votre changement d\'adresse auprès de tous les organismes (CAF, Sécurité sociale, impôts, banque, La Poste). Le service de changement d\'adresse en ligne du gouvernement (service-public.fr) vous permet de prévenir plusieurs organismes en même temps.',
      },
    ],
  },
  'changer-adresse-apres-demenagement': {
    title:       'Changer d\'adresse après un déménagement : toutes les démarches',
    description: 'Liste complète de tous les organismes à prévenir après un déménagement et comment le faire facilement.',
    tag:         'Administratif',
    readTime:    '10 min',
    datePublished: '2024-12-01',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Utiliser le service en ligne',
        body: 'Le site service-public.fr propose un service de changement d\'adresse qui permet de prévenir simultanément la CAF, Pôle Emploi, les impôts, l\'assurance retraite et plusieurs autres organismes. C\'est gratuit et simple.',
      },
      {
        heading: 'Les organismes prioritaires',
        body: 'En premier lieu : votre employeur (pour votre fiche de paie), votre banque (cartes, relevés), La Poste (service de réexpédition à 26€ pour 6 mois), la Sécurité sociale, la CAF si vous touchez des aides, l\'assurance (habitation, voiture, santé).',
      },
      {
        heading: 'Les services publics',
        body: 'Les impôts (impots.gouv.fr), la CPAM (ameli.fr), la CARSAT (retraite), Pôle Emploi si applicable, le Trésor Public, la carte grise (vous avez 1 mois pour la mettre à jour).',
      },
      {
        heading: 'Les abonnements et services',
        body: 'EDF/Engie/eau, opérateur téléphonique et internet, médecin traitant, sécurité sociale complémentaire, Amazon/Leboncoin/sites e-commerce, services de streaming, magazines et abonnements postaux.',
      },
      {
        heading: 'La carte d\'électeur',
        body: 'Pensez à vous inscrire sur les listes électorales de votre nouvelle commune avant le 31 décembre pour pouvoir voter l\'année suivante. C\'est possible en ligne sur service-public.fr.',
      },
    ],
  },
  'recuperer-caution-apres-demenagement': {
    title:       'Comment récupérer sa caution après un déménagement ?',
    description: 'État des lieux de sortie, nettoyage fin de bail, petites réparations : tout pour récupérer votre dépôt de garantie.',
    tag:         'Locataire',
    readTime:    '7 min',
    datePublished: '2024-12-15',
    dateModified:  '2026-04-20',
    content: [
      {
        heading: 'Comprendre le dépôt de garantie',
        body: 'Le dépôt de garantie est d\'1 mois de loyer hors charges pour un logement nu, et 2 mois pour un logement meublé. Le propriétaire dispose d\'1 mois pour le rendre si l\'état des lieux de sortie est conforme à l\'état des lieux d\'entrée, et de 2 mois si des dégradations sont constatées.',
      },
      {
        heading: 'L\'état des lieux de sortie',
        body: 'Faites l\'état des lieux de sortie en présence de votre propriétaire ou de son représentant. Vérifiez chaque pièce méticuleusement et contestez immédiatement tout état signalé comme dégradé s\'il était déjà présent à votre entrée (vérifiez l\'état des lieux d\'entrée).',
      },
      {
        heading: 'Le nettoyage',
        body: 'Un logement rendu sale est la première cause de retenue sur caution. Un nettoyage professionnel fin de bail garantit une remise en état impeccable. Grondin Déménagement propose ce service avec attestation de nettoyage remise au propriétaire.',
      },
      {
        heading: 'Les petites réparations',
        body: 'Réparez les petits trous dans les murs (bouche-pores), remplacez les ampoules manquantes, nettoyez ou remplacez les joints de salle de bain noircis. Ces petits détails peuvent faire la différence.',
      },
      {
        heading: 'En cas de litige',
        body: 'Si votre propriétaire retient abusivement tout ou partie de la caution, vous pouvez saisir la Commission Départementale de Conciliation (gratuit), puis si nécessaire, le tribunal judiciaire.',
      },
    ],
  },
  'demenagement-avec-enfants': {
    title:       'Déménager avec des enfants : conseils pratiques',
    description: 'Comment impliquer vos enfants dans le déménagement et gérer ce changement pour toute la famille.',
    tag:         'Famille',
    readTime:    '6 min',
    datePublished: '2025-01-10',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Annoncer le déménagement',
        body: 'Parlez du déménagement à vos enfants dès que la décision est prise. Expliquez pourquoi vous déménagez et valorisez les aspects positifs : nouveau quartier, nouvelle chambre, nouvelles activités. Plus l\'annonce est précoce, plus les enfants ont le temps de s\'adapter.',
      },
      {
        heading: 'Impliquer les enfants',
        body: 'Laissez-les choisir la couleur de leur future chambre, participer à l\'emballage de leurs jouets, mettre des étiquettes sur leurs cartons. Un enfant impliqué dans le processus vit mieux le changement.',
      },
      {
        heading: 'Le jour du déménagement',
        body: 'Si possible, confiez les jeunes enfants à un proche le jour J. Le déménagement est une journée stressante et dangereuse avec des cartons, des escaliers et des professionnels qui vont et viennent. Les enfants plus grands peuvent aider.',
      },
      {
        heading: 'S\'installer dans le nouveau logement',
        body: 'Installez la chambre des enfants en priorité pour qu\'ils aient leur espace habituel rapidement. Gardez les rituels (heure du dîner, histoires du soir) pour maintenir une routine rassurante.',
      },
      {
        heading: 'Changer d\'école',
        body: 'Contactez l\'école actuelle et la future école dès que possible. Obtenez un certificat de radiation pour vous inscrire dans la nouvelle école. Rencontrez l\'instituteur ou le professeur principal pour qu\'il soit attentif à la transition.',
      },
    ],
  },
  'comment-demenager-paris': {
    title:       'Comment déménager à Paris : guide complet étape par étape',
    description: 'Toutes les étapes d\'un déménagement parisien réussi : trouver le bon déménageur, organiser la logistique, gérer les formalités.',
    tag:         'Guide',
    readTime:    '10 min',
    datePublished: '2025-01-20',
    dateModified:  '2026-05-01',
    content: [
      {
        heading: 'Étape 1 : évaluer son volume et ses besoins',
        body: 'Avant de contacter un déménageur, faites le tour de votre logement pièce par pièce et estimez votre volume de mobilier et de cartons. À titre indicatif : un studio (20-35 m²) représente 15 à 25 m³, un T2 entre 20 et 35 m³, un T3 entre 30 et 45 m³. Ces volumes sont des moyennes — un studio très meublé peut peser autant qu\'un T2 dépouillé.\n\nIdentifiez les objets encombrants qui poseront des difficultés : canapé d\'angle, armoire normande, piano droit, réfrigérateur américain, vélo cargo. À Paris, la principale contrainte n\'est pas la distance mais les accès : un escalier haussmannien de 90 cm de large, un ascenseur de 60 × 80 cm, une porte cochère de 2,50 m de passage. Ces éléments déterminent si un monte-meubles extérieur sera nécessaire et combien de déménageurs sont requis. Listez aussi les objets de valeur qui bénéficieront d\'un emballage particulier.',
      },
      {
        heading: 'Étape 2 : choisir son déménageur parisien',
        body: 'Demandez des devis à deux ou trois déménageurs au minimum. Méfiez-vous des devis anormalement bas transmis par email sans visite préalable — ils sont souvent incomplets et cachent des frais supplémentaires. Un devis sérieux doit être établi après visite physique à domicile.\n\nVérifiez que votre déménageur dispose d\'une assurance RC Professionnelle (Responsabilité Civile) et que ses véhicules sont adaptés aux gabarits parisiens (camions conformes ZFE). Consultez les avis clients sur Google Maps — regardez la note globale mais surtout lisez les avis les plus récents et les réponses du déménageur aux insatisfactions.\n\nPosez des questions concrètes : combien de déménageurs seront présents ? Le monte-meubles est-il inclus dans le devis si nécessaire ? L\'équipe qui fait la visite est-elle la même que celle qui intervient le jour J ? Une bonne relation de confiance avec votre déménageur commence dès le premier contact.',
      },
      {
        heading: 'Étape 3 : obtenir les autorisations nécessaires',
        body: 'À Paris, il est obligatoire d\'obtenir un arrêté de voirie (autorisation de stationnement) pour immobiliser un camion de déménagement sur la voie publique. Sans cette autorisation, le camion risque une verbalisation ou un refoulement par la police municipale, ce qui peut bloquer toute l\'opération.\n\nLa démarche est gratuite et se fait en ligne sur paris.fr (section "Autorisation de voirie") ou directement à la mairie de votre arrondissement. Elle doit être déposée au moins 5 à 10 jours ouvrés avant la date souhaitée. Vous devrez préciser l\'adresse exacte, les dates et horaires, et le nombre de places nécessaires.\n\nSi vous emménagez dans une résidence privée (copropriété, résidence fermée), renseignez-vous en parallèle auprès du gardien ou du syndic sur les créneaux autorisés pour les déménagements — certains immeubles n\'autorisent les opérations que du lundi au vendredi, en dehors des heures de pointe.',
      },
      {
        heading: 'Étape 4 : emballer méthodiquement',
        body: 'Commencez à emballer les objets non essentiels 2 à 3 semaines avant votre déménagement pour répartir la charge de travail. Procédez pièce par pièce pour ne pas tout mélanger.\n\nPour chaque carton, respectez deux règles fondamentales : les objets lourds (livres, vaisselle, outillage) dans les petits cartons, les objets légers (linge, jouets, coussins) dans les grands cartons. Un grand carton de livres peut peser 40 kg et se déchirer au fond — c\'est l\'un des accidents les plus courants. Étiquetez lisiblement chaque carton : son contenu et sa pièce de destination dans le nouveau logement.\n\nConservez les boîtes d\'origine de vos équipements électroniques si vous les avez — elles offrent le meilleur calage. Sinon, emballez les appareils dans plusieurs épaisseurs de papier bulle. Préparez un carton "première nuit" avec tout ce dont vous aurez besoin dès l\'arrivée : pyjamas, trousse de toilette, café, quelques ustensiles et les médicaments du quotidien. Ce carton voyage dans votre voiture.',
      },
      {
        heading: 'Étape 5 : le jour J',
        body: 'Soyez présent sur les deux sites (départ et arrivée) lors des opérations de chargement et de déchargement. Votre présence permet de guider l\'équipe, de signaler les objets particulièrement fragiles et de vérifier que rien n\'est oublié.\n\nFaites l\'état des lieux de sortie de votre ancien logement en présence du propriétaire ou de son représentant, de préférence avant que le camion parte pour que les deux parties puissent vérifier chaque pièce. Photographiez l\'ensemble — photos datées et géolocalisées si possible.\n\nÀ l\'arrivée dans votre nouveau logement, faites l\'inventaire des meubles déchargés avant de signer le bon de livraison. Notez par écrit sur le bon tout dommage constaté (rayure, fissure, choc) en présence du chef d\'équipe. Vous disposez ensuite de 10 jours pour envoyer par lettre recommandée des réserves complémentaires à votre déménageur.',
      },
      {
        heading: 'Étape 6 : les démarches post-déménagement',
        body: 'Dans les jours qui suivent votre déménagement, mettez à jour votre adresse auprès des organismes prioritaires. Commencez par les plus importants : votre banque (carte bancaire avec nouvelle adresse à commander), votre employeur, La Poste (service de réexpédition si ce n\'est pas encore fait), la CAF, la CPAM (Sécurité sociale) et l\'administration fiscale.\n\nLe portail service-public.fr propose un service de changement d\'adresse centralisé qui notifie simultanément plusieurs administrations en une seule démarche — un vrai gain de temps.\n\nN\'oubliez pas deux obligations légales souvent négligées : mettre à jour votre carte grise (certificat d\'immatriculation) dans les 30 jours suivant le déménagement (via ants.gouv.fr), et vous inscrire sur les listes électorales de votre nouvelle commune ou mairie d\'arrondissement. L\'inscription peut se faire en ligne sur service-public.fr jusqu\'au 6ème vendredi avant une élection.',
      },
    ],
  },
  'prix-demenagement-guide': {
    title:       'Prix d\'un déménagement à Paris : quels facteurs influencent le coût ?',
    description: 'Distance, volume, étage, formule, période : comprendre les facteurs qui déterminent le coût d\'un déménagement à Paris pour mieux budgéter.',
    tag:         'Budget',
    readTime:    '7 min',
    datePublished: '2025-02-01',
    dateModified:  '2026-05-01',
    content: [
      {
        heading: 'Le volume à transporter',
        body: 'C\'est le premier critère — et de loin le plus important. Plus vous avez de mobilier, de cartons et d\'objets volumineux, plus le déménagement prend de temps et mobilise de ressources humaines et matérielles. Le volume détermine directement la taille du camion nécessaire et le nombre de déménageurs.\n\nÀ titre indicatif : un studio bien meublé représente 15 à 25 m³, un T2 entre 25 et 35 m³, un T3 entre 35 et 50 m³, un T4 ou une maison entre 50 et 80 m³ et plus. Ces estimations supposent un ameublement standard — un collectionneur de livres ou une famille avec beaucoup de jouets et d\'équipements spéciaux peut facilement dépasser ces moyennes.\n\nTrier et vendre ou donner avant le déménagement est la meilleure façon de réduire le volume — et donc le coût. Chaque m³ éliminé avant le déménagement représente une économie réelle sur le tarif final.',
      },
      {
        heading: 'La distance',
        body: 'Un déménagement dans le même arrondissement parisien n\'est pas comparable à un déménagement Paris-Boulogne-Billancourt, et encore moins à un Paris-Lyon. La distance influe directement sur le temps de transport, la consommation de carburant et, pour les longues distances, sur les frais de péage et de nuitée des chauffeurs.\n\nPour un déménagement intra-Paris (d\'un arrondissement à un autre), la distance kilométrique est rarement supérieure à 10-15 km. Mais les embouteillages parisiens, les contraintes de circulation (zones piétonnes, couloirs de bus, ZFE) et la complexité des accès peuvent allonger les temps de trajet.\n\nPour un déménagement longue distance (plus de 100 km), le tarif intègre le trajet aller, le retour du camion à vide, et éventuellement le découché si la mission dépasse 10 heures de conduite. Ces missions se planifient généralement sur 1 à 2 jours.',
      },
      {
        heading: 'Les conditions d\'accès',
        body: 'À Paris, les conditions d\'accès sont souvent le facteur le plus discriminant dans la formation du tarif. Chaque contrainte logistique allonge la durée de la mission : un étage sans ascenseur, un escalier haussmannien étroit (90 cm de largeur utile), une cour intérieure avec passage difficile, une absence de stationnement proche, une rue en sens unique qui impose un long trajet à pied.\n\nUn appartement au 4ème étage sans ascenseur dans un immeuble haussmannien nécessite un monte-meubles extérieur pour les pièces volumineuses — et ce monte-meubles représente un coût supplémentaire (généralement 150 à 300 € selon la durée d\'utilisation et l\'étage). À l\'inverse, un appartement au 1er étage avec monte-charge dans une résidence récente se déménage beaucoup plus rapidement.\n\nLors de votre demande de devis, communiquez toujours les informations d\'accès précises : étage, présence ou non d\'un ascenseur (et ses dimensions), largeur du couloir, distance entre l\'entrée et le logement, accès parking ou rue.',
      },
      {
        heading: 'La formule choisie',
        body: 'Grondin Déménagement propose 3 formules qui correspondent à 3 niveaux d\'implication du client et de prise en charge. La Formule Économique couvre la manutention et le transport : l\'équipe charge, transporte et décharge, mais c\'est vous qui emballez et désemballez. C\'est la formule la plus économique, idéale si vous disposez du temps nécessaire pour emballer.\n\nLa Formule Confort ajoute le démontage et remontage des meubles, ainsi que la fourniture des cartons. C\'est la formule la plus choisie par nos clients — elle représente un bon équilibre entre coût et confort. La Formule Premium est la prise en charge intégrale : emballage professionnel de tous vos effets, déménagement, déballage et installation dans le nouveau logement, évacuation des cartons. C\'est le service clés en main.\n\nLe surcoût de la Formule Confort par rapport à l\'Économique est généralement de 30 à 50 % ; la Formule Premium peut représenter un surcoût de 60 à 100 % par rapport à l\'Économique pour un même volume.',
      },
      {
        heading: 'La période de l\'année',
        body: 'Les mois de juin, juillet et août concentrent plus de 40 % des déménagements en France — les disponibilités des déménageurs se réduisent et les délais de réservation s\'allongent considérablement. En été, il est recommandé de réserver au minimum 8 à 12 semaines à l\'avance pour obtenir la date souhaitée.\n\nÀ l\'inverse, déménager entre novembre et mars offre généralement plus de flexibilité et parfois de meilleures disponibilités tarifaires. Janvier et février sont les mois les plus calmes — idéaux pour négocier si votre calendrier le permet.\n\nLes fins de mois (du 25 au 31) sont également plus chargées que les débuts de mois, en raison des fins de bail qui coïncident souvent avec la fin du mois. Un déménagement le 8 du mois sera souvent plus facile à planifier qu\'un déménagement le 30.',
      },
      {
        heading: 'Fourchettes de prix indicatives par type de logement',
        body: 'Pour un déménagement intra-Paris ou vers la proche banlieue en Formule Économique (manutention et transport), les fourchettes constatées sur le marché sont les suivantes : studio ou T1 (400 à 800 €), T2 (600 à 1 200 €), T3 (900 à 1 700 €), T4 et plus (1 500 à 3 000 €). Ces fourchettes supposent un accès standard (pas de monte-meubles, étage accessible).\n\nLa Formule Confort, qui inclut le démontage, remontage et la fourniture des cartons, représente généralement un surcoût de 30 à 50 % par rapport à la Formule Économique. La Formule Premium (prise en charge complète avec emballage et déballage) peut représenter 60 à 100 % de surcoût supplémentaire.\n\nPour un déménagement longue distance — Paris-Lyon, Paris-Bordeaux, Paris-Marseille — comptez environ 1 800 à 3 500 € pour un T2 et 3 000 à 5 500 € pour un T4 avec prestations complètes. Ces fourchettes sont données à titre indicatif et varient selon les conditions d\'accès, l\'étage, la période et la formule retenue. Seule la visite préalable gratuite permet d\'établir un devis exact adapté à votre situation.',
      },
      {
        heading: 'Quelles aides financières pour réduire le coût de votre déménagement ?',
        body: 'Plusieurs dispositifs peuvent vous aider à financer tout ou partie de votre déménagement. Action Logement (anciennement 1 % logement) propose une aide au déménagement pouvant aller jusqu\'à 1 500 € pour les salariés du secteur privé qui déménagent pour se rapprocher de leur lieu de travail. La demande se fait en ligne sur actionlogement.fr.\n\nLa CAF peut également attribuer une prime de déménagement aux familles nombreuses (3 enfants ou plus) dont les revenus ne dépassent pas certains plafonds. Cette prime est calculée sur la base du nombre d\'enfants et du montant de la facture de déménagement.\n\nEnfin, certaines mutuelles et complémentaires santé proposent des remboursements partiels sur les frais de déménagement. Consultez votre contrat ou contactez votre mutuelle avant votre déménagement pour vérifier si vous bénéficiez de cette couverture.',
      },
      {
        heading: 'Comment obtenir un devis précis ?',
        body: 'La visite préalable gratuite est la meilleure — et la seule — façon d\'obtenir un devis juste et sans mauvaise surprise. Elle permet d\'évaluer le volume réel de mobilier et de cartons, d\'identifier les contraintes d\'accès (escalier, ascenseur, stationnement), et d\'adapter les moyens (taille du camion, nombre de déménageurs, besoin d\'un monte-meubles).\n\nGrondin Déménagement propose cette visite systématiquement, sans engagement, pour tout déménagement d\'appartement ou de maison. Elle dure entre 20 et 45 minutes selon la taille du logement. À l\'issue de la visite, le devis vous est transmis dans les 24 heures.\n\nPour demander votre visite et votre devis gratuit, rendez-vous sur notre formulaire en ligne ou appelez-nous directement au 01 85 44 00 50. Nos équipes sont disponibles 7 jours sur 7 de 8h30 à 20h.',
      },
    ],
  },
  'cartons-demenagement-combien': {
    title:       'Combien de cartons faut-il pour déménager ? Estimation par logement',
    description: 'Estimation du nombre de cartons nécessaires pour déménager selon la taille du logement : studio, T2, T3, T4 et maison.',
    tag:         'Emballage',
    readTime:    '5 min',
    datePublished: '2025-02-15',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Studio ou T1 (20 à 35 m²)',
        body: 'Comptez entre 15 et 25 cartons pour un studio, selon vos habitudes d\'accumulation. Prévoyez un mix de petits cartons (livres, vaisselle) et de cartons moyens (cuisine, vêtements). Si vous avez beaucoup de livres, prévoyez davantage de petits cartons — ne les mettez jamais dans des grands.',
      },
      {
        heading: 'T2 (35 à 55 m²)',
        body: 'Entre 25 et 40 cartons en général. La cuisine est souvent l\'espace qui en consomme le plus. Pensez à récupérer des cartons de vin ou d\'eau chez les commerçants pour emballer les bouteilles — ils sont compartimentés et solides.',
      },
      {
        heading: 'T3 (55 à 80 m²)',
        body: 'De 40 à 60 cartons selon le contenu. Avec deux chambres et un salon meublé, le volume monte vite. Commencez à emballer tôt (3 semaines avant) pour étaler le travail et identifier ce que vous souhaitez donner ou vendre.',
      },
      {
        heading: 'T4 et plus (80 m² et plus)',
        body: 'Au-delà de 60 cartons, pouvant aller jusqu\'à 100 ou plus pour une grande maison. La formule Confort ou Premium de Grondin Déménagement inclut la fourniture des cartons et l\'emballage professionnel — une option à considérer sérieusement pour ces volumes.',
      },
      {
        heading: 'Où trouver des cartons gratuitement ?',
        body: 'Supermarchés et librairies donnent souvent leurs cartons en fin de journée. Les sites comme Leboncoin ont des sections dédiées aux cartons de déménagement gratuits. Entre voisins ou dans des groupes Facebook locaux, les cartons circulent facilement autour des périodes de déménagement.',
      },
    ],
  },
  'resiliation-abonnements': {
    title:       'Résiliation des abonnements avant un déménagement : la liste complète',
    description: 'Tous les contrats à résilier ou transférer lors d\'un déménagement : internet, énergie, eau, assurance, téléphonie.',
    tag:         'Administratif',
    readTime:    '6 min',
    datePublished: '2025-03-01',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Énergie : électricité et gaz',
        body: 'Contactez votre fournisseur (EDF, Engie, TotalEnergies...) au moins 15 jours avant votre déménagement pour clôturer le contrat dans votre logement actuel et éventuellement en ouvrir un dans le nouveau. Relevez les compteurs le jour du déménagement pour éviter de payer la consommation du locataire suivant.',
      },
      {
        heading: 'Internet et téléphonie fixe',
        body: 'Free, Orange, SFR, Bouygues... Signalez votre déménagement à votre opérateur internet au moins 2 semaines à l\'avance. Certains permettent un transfert de contrat, d\'autres imposent une résiliation. Si vous changez d\'opérateur, conservez votre numéro de téléphone fixe (portabilité gratuite).',
      },
      {
        heading: 'Assurance habitation',
        body: 'L\'assurance habitation ne se transfère pas automatiquement. Signalez votre déménagement à votre assureur sous 15 jours. Vous pouvez soit adapter votre contrat actuel au nouveau logement, soit le résilier pour en souscrire un autre. La résiliation pour déménagement est un motif légal (loi Châtel).',
      },
      {
        heading: 'Eau',
        body: 'Le contrat d\'eau est souvent géré par le bailleur ou la copropriété dans les appartements. Renseignez-vous auprès de votre propriétaire. Pour une maison individuelle, contactez le gestionnaire du réseau local (Veolia, Suez...) pour fermer le contrat.',
      },
      {
        heading: 'Abonnements divers',
        body: 'N\'oubliez pas : la salle de sport locale, les magazines en version papier, les associations ou clubs sportifs, les services de livraison récurrents (paniers bio, etc.), les abonnements de stationnement. Faites la liste complète de vos prélèvements mensuels pour ne rien oublier.',
      },
    ],
  },
  'aide-financiere-demenagement': {
    title:       'Aides financières pour déménager : Action Logement, CAF et autres dispositifs',
    description: 'Les aides disponibles pour financer votre déménagement : Mobili-Pass, aide CAF, aides régionales et dispositifs pour les salariés.',
    tag:         'Budget',
    readTime:    '8 min',
    datePublished: '2025-03-15',
    dateModified:  '2026-04-20',
    content: [
      {
        heading: 'L\'aide Mobili-Pass d\'Action Logement',
        body: 'Si vous êtes salarié d\'une entreprise privée de 10 salariés ou plus, vous pouvez bénéficier du Mobili-Pass d\'Action Logement. Cette aide finance en partie les dépenses liées à la mobilité professionnelle : déménagement, frais d\'agence, caution. La demande se fait sur le site actionlogement.fr avant de déménager.',
      },
      {
        heading: 'L\'aide au déménagement de la CAF',
        body: 'La CAF propose une Aide à l\'Installation (AIP) pour les personnes qui entrent dans un logement autonome pour la première fois ou après une séparation. Elle couvre une partie des frais d\'installation. Les conditions varient selon la situation familiale et les ressources — renseignez-vous directement sur caf.fr.',
      },
      {
        heading: 'Les aides Pôle Emploi',
        body: 'Si vous déménagez pour prendre un emploi ou reprendre une formation, Pôle Emploi (France Travail) peut financer une partie de vos frais de déménagement dans le cadre de l\'aide à la mobilité. Cette aide est soumise à conditions de ressources et de situation.',
      },
      {
        heading: 'Les aides des collectivités locales',
        body: 'Certains départements et communes proposent des aides au déménagement, notamment pour les familles nombreuses, les personnes en situation de handicap ou les seniors. Renseignez-vous auprès du CCAS (Centre Communal d\'Action Sociale) de votre commune.',
      },
      {
        heading: 'Déduction fiscale pour raisons professionnelles',
        body: 'Les frais de déménagement liés à un changement de lieu de travail peuvent être déduits des impôts en optant pour les frais réels. Conservez toutes les factures de votre déménagement. Cette déduction s\'applique si vous renoncez à la déduction forfaitaire automatique de 10 %.',
      },
    ],
  },
  'demenagement-etudiant-paris': {
    title:       'Déménagement étudiant à Paris : conseils et astuces pour s\'en sortir',
    description: 'Tous les conseils pour déménager à Paris en tant qu\'étudiant : trouver un logement, optimiser son budget et s\'organiser.',
    tag:         'Étudiant',
    readTime:    '6 min',
    datePublished: '2025-04-01',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Anticiper la recherche de logement',
        body: 'Le marché locatif parisien est tendu, surtout pour les étudiants. Commencez vos recherches 2 à 3 mois avant la rentrée pour les résidences universitaires (CROUS), et 1 à 2 mois pour les appartements en colocation. Les sites SeLoger, Leboncoin et les groupes Facebook de votre université sont de bons points de départ.',
      },
      {
        heading: 'Réduire son volume pour réduire les coûts',
        body: 'Un étudiant qui déménage en studio n\'a souvent besoin que de quelques meubles essentiels. Ne transportez que l\'indispensable. Les meubles Ikea peuvent être achetés sur place une fois installé — cela revient souvent moins cher que de transporter de vieux meubles encombrants.',
      },
      {
        heading: 'Options économiques pour le transport',
        body: 'Pour un studio avec peu de mobilier, la location d\'une camionnette et l\'aide d\'amis peut suffire. Pour un volume plus important ou si vous arrivez seul de province, Grondin Déménagement propose des solutions adaptées aux étudiants avec un service personnalisé et un devis sans engagement.',
      },
      {
        heading: 'Les aides spécifiques aux étudiants',
        body: 'La LOCA-PASS d\'Action Logement peut avancer votre dépôt de garantie sous forme de prêt gratuit. La garantie Visale remplace le garant pour les moins de 30 ans. Le CROUS propose des logements meublés à tarifs sociaux. Renseignez-vous bien avant de signer votre bail.',
      },
      {
        heading: 'S\'installer efficacement',
        body: 'À votre arrivée, inscrivez-vous sur les listes électorales, ouvrez un compte bancaire local si nécessaire, souscrivez une assurance habitation étudiant (souvent à tarif très réduit via votre mutuelle étudiante) et mettez à jour votre adresse à la Sécurité sociale.',
      },
    ],
  },
  'demenagement-senior-paris': {
    title:       'Déménagement senior à Paris : comment bien se préparer et se faire aider',
    description: 'Guide du déménagement pour les seniors : aides disponibles, formule tout compris, organisation et sécurité.',
    tag:         'Senior',
    readTime:    '7 min',
    datePublished: '2025-04-15',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Pourquoi déménager après 60 ans nécessite plus de préparation',
        body: 'Un déménagement senior implique souvent plusieurs décennies d\'objets accumulés, un attachement fort au logement que l\'on quitte et des besoins spécifiques en termes de logistique et de sécurité. Une préparation en amont — idéalement 2 à 3 mois — permet d\'aborder le déménagement sereinement.',
      },
      {
        heading: 'Faire le tri progressivement',
        body: 'Commencez le tri bien avant le déménagement. Procédez pièce par pièce, en impliquant vos proches si besoin. Ce que vous ne souhaitez pas emporter peut être donné à des associations (Emmaüs, La Croix-Rouge), vendu ou légué à vos enfants. Ce tri allège le déménagement et l\'installation dans le nouveau logement.',
      },
      {
        heading: 'La formule Premium : tout compris pour ne rien gérer',
        body: 'Grondin Déménagement propose une formule Premium qui comprend l\'emballage de toutes vos affaires, le transport, le déballage et l\'installation dans le nouveau logement. Pour un senior, cette formule est souvent la plus adaptée : vous n\'avez à vous occuper de rien sur le plan physique.',
      },
      {
        heading: 'Les aides financières pour les seniors',
        body: 'L\'ANAH (Agence Nationale de l\'Habitat) peut financer des travaux d\'adaptation du nouveau logement. Certaines caisses de retraite proposent des aides au déménagement. Renseignez-vous auprès du CCAS de votre commune pour connaître les dispositifs locaux disponibles.',
      },
      {
        heading: 'Choisir un logement adapté',
        body: 'Si vous déménagez pour un logement plus adapté à votre âge (résidence seniors, appartement de plain-pied, logement avec ascenseur), vérifiez l\'accessibilité, la proximité des commerces et des transports en commun, et la présence de services à la personne à proximité.',
      },
    ],
  },
  'assurance-demenagement': {
    title:       'Assurance déménagement : que couvre-t-elle et comment se protéger ?',
    description: 'RC professionnelle, assurance tous risques, franchise et déclaration de dommages : tout savoir sur les assurances lors d\'un déménagement.',
    tag:         'Juridique',
    readTime:    '6 min',
    datePublished: '2025-05-01',
    dateModified:  '2026-04-20',
    content: [
      {
        heading: 'La RC Professionnelle du déménageur',
        body: 'Tout déménageur professionnel doit être couvert par une Responsabilité Civile Professionnelle (RC Pro). Elle couvre les dommages causés à vos biens pendant le transport — casse, rayures, détérioration. Vérifiez systématiquement que votre déménageur dispose bien de cette assurance avant de signer. Grondin Déménagement inclut la RC Pro dans toutes ses prestations.',
      },
      {
        heading: 'Ce que ne couvre pas la RC Pro',
        body: 'La RC Pro couvre les dommages causés par la faute du déménageur. Elle ne couvre pas les objets de valeur (bijoux, espèces, documents) ni les dommages causés par des événements extérieurs (intempéries, accident de la route). Pour une protection maximale, vous pouvez souscrire une assurance tous risques complémentaire.',
      },
      {
        heading: 'L\'assurance tous risques',
        body: 'Certains déménageurs proposent en option une assurance tous risques qui couvre davantage de situations. Elle est particulièrement recommandée pour les objets de grande valeur, les antiquités ou les équipements électroniques haut de gamme. Vérifiez les plafonds et les exclusions avant de souscrire.',
      },
      {
        heading: 'Comment déclarer un dommage',
        body: 'En cas de dommage constaté à la livraison, notez immédiatement vos réserves sur le bon de livraison avant de signer. Vous avez ensuite 10 jours (délai légal) pour envoyer vos réclamations par lettre recommandée avec accusé de réception au déménageur. Conservez des photos des dommages.',
      },
      {
        heading: 'Votre assurance habitation',
        body: 'Votre assurance habitation actuelle peut couvrir vos biens en transit pendant le déménagement. Consultez votre contrat ou appelez votre assureur pour vérifier. Pensez aussi à souscrire votre assurance habitation pour le nouveau logement dès la signature du bail.',
      },
    ],
  },
  'demenagement-hiver': {
    title:       'Déménager en hiver à Paris : précautions et avantages',
    description: 'Conseils pour déménager en hiver à Paris : avantages pratiques, précautions à prendre et organisation.',
    tag:         'Saisonnier',
    readTime:    '5 min',
    datePublished: '2025-05-15',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Les avantages d\'un déménagement en hiver',
        body: 'Décembre, janvier et février sont les mois les moins chargés pour les déménageurs. Les disponibilités sont plus nombreuses, les délais de réservation plus courts et la prise de rendez-vous plus flexible. C\'est aussi souvent plus facile de trouver un stationnement pour le camion.',
      },
      {
        heading: 'Les précautions climatiques',
        body: 'Le gel, la pluie et le vent compliquent la manutention. Prévoyez des bâches imperméables pour protéger les meubles pendant leur transport entre l\'immeuble et le camion. Les surfaces glissantes (trottoirs, escaliers mouillés) imposent une vigilance accrue. Grondin Déménagement adapte son matériel de protection aux conditions hivernales.',
      },
      {
        heading: 'Protéger vos biens du froid',
        body: 'Certains appareils électroniques et les instruments de musique sont sensibles aux variations de température. Évitez de les laisser dans un camion non chauffé trop longtemps. Pour un piano, prévenez votre accordeur — il sera probablement nécessaire de le réaccorder après le déménagement hivernal.',
      },
      {
        heading: 'Chauffage et installation dans le nouveau logement',
        body: 'Assurez-vous que le chauffage de votre nouveau logement fonctionne avant le déménagement. Rien de plus désagréable que d\'installer ses meubles dans un appartement glacial. Si vous avez un chauffage central collectif, vérifiez la mise en route auprès du gestionnaire.',
      },
    ],
  },
  'meilleurs-quartiers-paris-2026': {
    title:       'Les meilleurs quartiers de Paris où s\'installer en 2026',
    description: 'Guide des quartiers parisiens : Le Marais, Batignolles, Oberkampf, Montmartre, République — quel quartier correspond à votre style de vie ?',
    tag:         'Paris',
    readTime:    '8 min',
    datePublished: '2025-06-01',
    dateModified:  '2026-05-01',
    content: [
      {
        heading: 'Le Marais (3ème et 4ème) : culture et vie nocturne',
        body: 'Le Marais est l\'un des quartiers les plus prisés de Paris pour son mélange unique de patrimoine historique, de galeries d\'art, de restaurants branchés et de vie nocturne. Il attire les profils jeunes actifs et artistes. La forte demande le rend tendu en termes de logement.',
      },
      {
        heading: 'Les Batignolles (17ème) : le quartier village en plein Paris',
        body: 'Les Batignolles offrent une atmosphère de village avec leurs marchés, leur parc et leurs petits commerces de quartier. Très apprécié des familles et des télétravailleurs, ce secteur du 17ème a vu ses loyers augmenter ces dernières années mais reste plus abordable que Neuilly ou les 6ème et 7ème.',
      },
      {
        heading: 'Oberkampf / République (10ème, 11ème) : dynamisme et mixité',
        body: 'Le secteur Oberkampf-République est idéal pour les jeunes actifs et les créatifs. Bars, restaurants, coworking, salles de concert — la vie culturelle y est dense. Les appartements sont souvent des haussmanniens avec de beaux volumes, et les prix restent compétitifs pour Paris.',
      },
      {
        heading: 'Montmartre (18ème) : charme et authenticité',
        body: 'La Butte Montmartre avec ses ruelles pavées, ses escaliers et son Sacré-Cœur reste un des quartiers les plus pittoresques de Paris. La vie de quartier y est forte. En revanche, les contraintes logistiques d\'un déménagement y sont importantes : rues étroites, escaliers, monte-meubles souvent nécessaire.',
      },
      {
        heading: 'Le 13ème : modernité et commodités',
        body: 'Le 13ème arrondissement, avec ses grandes artères, la Bibliothèque nationale et le quartier asiatique de la Porte de Choisy, propose de nombreux grands appartements à des tarifs plus raisonnables que le centre. Bien desservi par le métro, il convient aux familles et aux actifs cherchant de l\'espace.',
      },
    ],
  },
  'demenager-paris-petit-budget': {
    title:       'Déménager à Paris avec un petit budget : nos astuces pratiques',
    description: 'Astuces pour réduire le coût de son déménagement parisien : volume, timing, cartons gratuits et alternatives économiques.',
    tag:         'Budget',
    readTime:    '7 min',
    datePublished: '2025-06-15',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Réduire le volume avant de déménager',
        body: 'La façon la plus efficace de réduire le coût d\'un déménagement est de réduire ce qu\'on transporte. Vendez sur Leboncoin ou Vinted les meubles que vous n\'utiliserez pas, donnez à Emmaüs ou La Croix-Rouge, débarrassez les objets inutiles. Moins il y a à transporter, moins ça coûte.',
      },
      {
        heading: 'Déménager en semaine, hors périodes chargées',
        body: 'Les week-ends et les fins de mois sont les créneaux les plus demandés. Opter pour un déménagement en milieu de semaine ou en dehors des périodes de pointe (septembre, janvier, fin de mois) peut permettre d\'obtenir plus facilement un rendez-vous et de meilleures conditions.',
      },
      {
        heading: 'Trouver des cartons gratuitement',
        body: 'Ne dépensez pas d\'argent pour des cartons neufs. Les supermarchés (surtout les rayons vins et boissons), les librairies et les pharmacies ont souvent des cartons solides à donner. Consultez Leboncoin (section Gratuit) et les groupes Facebook de votre quartier pour récupérer des cartons de déménagement d\'occasion.',
      },
      {
        heading: 'Emballer soi-même avec la formule Économique',
        body: 'Si vous avez du temps et de l\'énergie, la formule Économique de Grondin Déménagement vous permet d\'emballer vous-même vos affaires. L\'équipe s\'occupe uniquement du transport. C\'est la formule la plus abordable pour les petits volumes ou les personnes organisées.',
      },
      {
        heading: 'Comparer plusieurs devis',
        body: 'N\'acceptez jamais le premier devis. Contactez deux ou trois déménageurs et comparez non seulement les tarifs mais aussi ce qui est inclus (assurance, matériel de protection, nombre de déménageurs). Un devis moins cher peut cacher des prestations incomplètes — lisez les détails.',
      },
    ],
  },
  'garde-meubles-paris-comparatif': {
    title:       'Garde-meubles à Paris : comment choisir et quand y recourir ?',
    description: 'Guide du garde-meubles parisien : quand en avoir besoin, comment choisir, et conseils pour une utilisation optimale.',
    tag:         'Stockage',
    readTime:    '6 min',
    datePublished: '2025-07-01',
    dateModified:  '2026-04-20',
    content: [
      {
        heading: 'Quand le garde-meubles est-il utile ?',
        body: 'Le garde-meubles est la solution idéale quand les dates de sortie et d\'entrée dans les logements ne coïncident pas, lors de travaux de rénovation qui durent plusieurs semaines, lors d\'un retour d\'expatriation où le prochain logement n\'est pas encore trouvé, ou pour stocker temporairement des meubles qui ne rentrent pas dans le nouveau logement.',
      },
      {
        heading: 'Les critères de choix',
        body: 'Évaluez la superficie nécessaire (en m²) selon votre volume. Vérifiez les conditions de sécurité : surveillance, alarme, contrôle d\'accès. Renseignez-vous sur les conditions d\'accès (7j/7 ? horaires restreints ?). Comparez les tarifs en incluant les assurances obligatoires et les éventuels frais d\'entrée ou de sortie.',
      },
      {
        heading: 'Le service de Grondin Déménagement',
        body: 'Grondin Déménagement propose un service de garde-meubles intégré à ses prestations de déménagement. Vos affaires peuvent être stockées temporairement entre la sortie de votre ancien logement et l\'entrée dans le nouveau, sans avoir à gérer deux prestataires distincts.',
      },
      {
        heading: 'Durée et organisation du stockage',
        body: 'Pour un stockage court (moins de 2 semaines), préparez des cartons bien étiquetés et organisez les meubles pour un accès facile. Pour un stockage long, protégez les canapés et matelas avec des housses. Faites un inventaire écrit et photographique de tout ce que vous stockez.',
      },
      {
        heading: 'Assurance des biens stockés',
        body: 'Vos biens en garde-meubles doivent être assurés. Vérifiez si votre assurance habitation les couvre en dehors du domicile. Sinon, souscrivez une assurance spécifique au moment de la signature du contrat de stockage — c\'est souvent proposé directement par le prestataire.',
      },
    ],
  },
  'demenagement-piano-oeuvre-art': {
    title:       'Déménager un piano ou une oeuvre d\'art : précautions et méthodes',
    description: 'Comment transporter un piano droit, un piano à queue ou une oeuvre d\'art lors d\'un déménagement : méthodes professionnelles et précautions.',
    tag:         'Objets précieux',
    readTime:    '6 min',
    datePublished: '2025-07-15',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Le piano droit : lourd et fragile à la fois',
        body: 'Un piano droit pèse entre 150 et 250 kg. Son transport nécessite des sangles spécifiques, une protection complète des surfaces en bois et au minimum 3 à 4 déménageurs. Les escaliers étroits haussmanniens imposent presque toujours l\'utilisation d\'un monte-meubles. Ne tentez jamais de déplacer un piano sans professionnels.',
      },
      {
        heading: 'Le piano à queue : un cas particulier',
        body: 'Le piano à queue doit être partiellement démonté (jambes, pédalier, clavier) avant le transport. Il faut une protection renforcée de la table d\'harmonie et du clavier. Il est conseillé d\'informer Grondin Déménagement dès le premier contact si vous avez un piano à queue — la logistique est différente et doit être anticipée.',
      },
      {
        heading: 'Les tableaux et oeuvres d\'art',
        body: 'Un tableau de valeur doit être emballé dans du papier cristal (non acide), puis dans du carton alvéolaire et enfin dans un carton sur mesure. Il doit voyager à la verticale, jamais à plat. Pour une collection ou des oeuvres de grande valeur, un transport dédié et une assurance spécifique sont recommandés.',
      },
      {
        heading: 'Les sculptures et objets encombrants',
        body: 'Les sculptures nécessitent un emballage sur mesure. Chaque saillie et partie fragile doit être protégée individuellement. Les socles en marbre ou en pierre doivent être désolidarisés de la sculpture pour le transport. Grondin Déménagement évalue ces besoins lors de la visite préalable.',
      },
      {
        heading: 'L\'assurance pour les objets de valeur',
        body: 'Pour les objets dont la valeur dépasse les plafonds standards de la RC Pro, souscrivez une assurance tous risques spécifique. Faites établir un certificat d\'estimation par un expert avant le déménagement. Conservez des photos de haute qualité de chaque oeuvre.',
      },
    ],
  },
  'emballage-fragiles-conseils': {
    title:       'Emballer ses objets fragiles : les techniques des professionnels',
    description: 'Techniques d\'emballage professionnel pour vaisselle fine, miroirs, lampes et appareils électroniques lors d\'un déménagement.',
    tag:         'Emballage',
    readTime:    '5 min',
    datePublished: '2025-08-01',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'La vaisselle fine',
        body: 'Enveloppez chaque pièce individuellement dans du papier de soie ou du papier cristal avant de la couvrir de papier bulle. Placez les assiettes debout dans des cartons renforcés, jamais à plat. Remplissez chaque espace vide avec du papier froissé ou des serviettes. Les verres à pied méritent une attention particulière : emballez le pied séparément du verre.',
      },
      {
        heading: 'Les miroirs et vitres',
        body: 'Collez du ruban adhésif en croix sur la surface du miroir avant de l\'emballer — en cas de bris, les éclats restent retenus. Enveloppez dans plusieurs couches de papier bulle, puis dans des couvertures de déménagement. Les miroirs voyagent toujours debout, calés pour ne pas bouger.',
      },
      {
        heading: 'Les lampes et abat-jours',
        body: 'Démontez les abat-jours des pieds de lampe. Emballez les abat-jours dans du papier de soie et placez-les dans des cartons légèrement surdimensionnés avec du calage. Les pieds de lampe peuvent être emballés avec leurs câbles dans des couvertures de protection.',
      },
      {
        heading: 'L\'électronique',
        body: 'Les boîtes d\'origine sont idéales. À défaut, enveloppez chaque appareil dans plusieurs couches de papier bulle. Retirez les piles des télécommandes et des horloges. Pour les appareils à disque dur (ordinateurs, consoles), évitez les chocs et les vibrations prolongées.',
      },
      {
        heading: 'Les bouteilles de vin et spiritueux',
        body: 'Utilisez des cartons diviseurs spéciaux (cartons à vin) pour que chaque bouteille soit maintenue verticalement et séparée des autres. Ne couchez pas les bouteilles non bouchonnées. Un carton à vin plein est lourd — limitez à 12 bouteilles maximum par carton.',
      },
    ],
  },
  'demenagement-plantes-vertes': {
    title:       'Déménager avec des plantes vertes : comment les transporter sans les abîmer',
    description: 'Comment préparer, transporter et réacclimater ses plantes lors d\'un déménagement à Paris.',
    tag:         'Conseils',
    readTime:    '5 min',
    datePublished: '2025-08-15',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Préparer les plantes avant le déménagement',
        body: 'N\'arrosez pas vos plantes dans les 2 jours précédant le déménagement — la terre humide est plus lourde et les risques de moisissures augmentent. Taillez légèrement les plantes volumineuses pour les rendre plus maniables. Pour les plantes en pot de grande taille, rempotez dans un pot en plastique temporaire si le pot en céramique est lourd ou fragile.',
      },
      {
        heading: 'Le transport',
        body: 'Les plantes fragiles voyagent mieux dans votre voiture personnelle que dans le camion de déménagement. Si elles doivent être dans le camion, placez-les dans des cartons ouverts avec calage et isolez-les des objets lourds. Évitez de les exposer au froid (température inférieure à 10°C pour la plupart des plantes d\'intérieur) ou à la chaleur directe.',
      },
      {
        heading: 'En hiver : protéger du froid',
        body: 'En période hivernale, le trajet entre l\'immeuble et le camion peut suffire à endommager des plantes tropicales sensibles. Emballez-les dans du papier journal ou une taie d\'oreiller pour les isoler du froid lors du transport entre les logements.',
      },
      {
        heading: 'Réacclimater les plantes dans le nouveau logement',
        body: 'Après le déménagement, arrosez modérément et laissez les plantes s\'adapter à leur nouvel environnement lumineux pendant 2 à 3 semaines avant de changer leurs habitudes d\'arrosage. Ne les mettez pas immédiatement en plein soleil si elles n\'y étaient pas habituées.',
      },
    ],
  },
  'demenagement-animaux-paris': {
    title:       'Déménager avec des animaux à Paris : conseils et réglementation',
    description: 'Conseils pour gérer le stress de votre animal lors d\'un déménagement parisien et vérifier la réglementation des copropriétés.',
    tag:         'Animaux',
    readTime:    '6 min',
    datePublished: '2025-09-01',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Les chats : isoler et rassurer',
        body: 'Les chats sont particulièrement stressés par les déménagements. Le jour J, enfermez votre chat dans une pièce calme (chambre, salle de bain) avec sa litière, de l\'eau et un peu de nourriture, et fermez la porte à clé pour éviter les fugues pendant les allées et venues des déménageurs. Transportez-le dans sa cage de transport habituelle.',
      },
      {
        heading: 'Les chiens : les confier si possible',
        body: 'Le déménagement est une journée stressante pour un chien. Si possible, confiez-le à un ami ou à une famille le jour J. Sinon, maintenez ses habituelles promenades et gardez son panier et ses jouets familiers accessibles dès l\'arrivée dans le nouveau logement.',
      },
      {
        heading: 'Les NAC (nouveaux animaux de compagnie)',
        body: 'Les rongeurs, reptiles et oiseaux sont sensibles aux variations de température et aux vibrations. Transportez-les dans leur cage habituelle, couverte pour limiter le stress visuel, dans un endroit à l\'abri des chocs. Évitez les longs transits dans un camion non tempéré.',
      },
      {
        heading: 'La réglementation en copropriété',
        body: 'Avant de signer votre bail, vérifiez le règlement de copropriété concernant les animaux. Certains immeubles parisiens interdisent les chiens de grandes races ou imposent des conditions (laisse dans les parties communes, etc.). Un bail ne peut pas interdire les animaux domestiques en général, mais peut encadrer leur présence.',
      },
      {
        heading: 'Faire connaître votre animal au voisinage',
        body: 'Dans un appartement parisien, un chien qui aboie ou un chat qui griffe les portes peut créer des tensions avec les voisins. Présentez-vous rapidement après le déménagement et mentionnez votre animal. Une bonne relation de voisinage facilite la vie de tout le monde.',
      },
    ],
  },
  'demenagement-ecologique-paris': {
    title:       'Déménagement écologique à Paris : comment réduire son impact environnemental',
    description: 'Conseils pour déménager de manière écologique à Paris : cartons recyclés, emballages durables, dons et optimisation du transport.',
    tag:         'Écologie',
    readTime:    '6 min',
    datePublished: '2025-09-15',
    dateModified:  '2026-04-20',
    content: [
      {
        heading: 'Privilégier les cartons de seconde main',
        body: 'Des millions de cartons neufs sont utilisés pour les déménagements chaque année en France. Récupérez des cartons usagés auprès de supermarchés, librairies ou pharmacies. Des plateformes comme Emballage-gratuit.com ou Leboncoin permettent d\'en trouver gratuitement entre particuliers. Redonnez-les après votre déménagement.',
      },
      {
        heading: 'Remplacer le papier bulle par des textiles',
        body: 'Pour emballer vos objets fragiles, utilisez serviettes, torchons, pulls, chaussettes et taies d\'oreiller. Ces matériaux protègent aussi bien que le papier bulle pour la plupart des objets, ne génèrent aucun déchet supplémentaire et font office de deux tâches à la fois (emballage + transport des vêtements).',
      },
      {
        heading: 'Donner plutôt que jeter',
        body: 'Avant de déménager, faites le tour de vos affaires et donnez ce que vous n\'emportez pas. Emmaüs, La Croix-Rouge, les Restos du Coeur et de nombreuses associations collectent les meubles, vêtements, livres et appareils fonctionnels. Certaines associations viennent directement chercher les gros meubles.',
      },
      {
        heading: 'Optimiser le chargement du camion',
        body: 'Un camion bien chargé est plus écologique qu\'un camion à moitié vide. Grondin Déménagement optimise le chargement de chaque mission pour réduire le nombre de trajets et la consommation de carburant. La visite préalable permet d\'estimer précisément le volume et de choisir le bon véhicule.',
      },
      {
        heading: 'La fin de vie des emballages',
        body: 'Après votre déménagement, ne jetez pas les cartons à la poubelle. Aplatissez-les et déposez-les aux points de collecte carton de votre ville ou donnez-les sur Leboncoin. Les couvertures de déménagement sont réutilisées par Grondin Déménagement à chaque mission — un des avantages du service professionnel.',
      },
    ],
  },
  'demenagement-week-end-paris': {
    title:       'Déménager le week-end à Paris : avantages, inconvénients et précautions',
    description: 'Tout ce qu\'il faut savoir pour bien organiser un déménagement le week-end à Paris : disponibilités, autorisation de stationnement et logistique.',
    tag:         'Organisation',
    readTime:    '5 min',
    datePublished: '2025-10-01',
    dateModified:  '2026-04-10',
    content: [
      {
        heading: 'Pourquoi le week-end est le créneau le plus demandé',
        body: 'La majorité des Parisiens travaillent en semaine et ne peuvent pas facilement déménager un mardi matin. Le samedi concentre donc une forte demande — parfois plus de 60 % des déménagements en Île-de-France. Conséquence : les déménageurs sont sollicités et les délais de réservation s\'allongent.',
      },
      {
        heading: 'Réserver suffisamment à l\'avance',
        body: 'Pour un déménagement le week-end, prévoyez de réserver 3 à 6 semaines à l\'avance, surtout de juin à septembre. En haute saison (juillet-août), certains créneaux de samedi sont complets plusieurs mois à l\'avance. Grondin Déménagement conseille de contacter dès que la date est fixée.',
      },
      {
        heading: 'L\'autorisation de stationnement le week-end',
        body: 'L\'arrêté de voirie pour réserver une place de stationnement s\'obtient auprès de la mairie de l\'arrondissement. La mairie est fermée le week-end, mais l\'arrêté s\'affiche la veille au soir sur les emplacements concernés. Faites votre demande au moins une semaine avant le déménagement.',
      },
      {
        heading: 'Les avantages logistiques du week-end',
        body: 'Moins de circulation que les jours de semaine, notamment les dimanches matin. Les commerçants sont souvent moins présents, libérant des espaces de chargement. Moins de bruit et d\'agitation dans les parties communes des immeubles, ce qui facilite le travail des déménageurs.',
      },
    ],
  },
  'monte-meuble-utilisation': {
    title:       'Monte-meubles à Paris : comment ça marche et quand en avoir besoin ?',
    description: 'Fonctionnement du monte-meubles, situations où il est indispensable et déroulement de l\'opération lors d\'un déménagement parisien.',
    tag:         'Équipement',
    readTime:    '5 min',
    datePublished: '2025-10-15',
    dateModified:  '2026-04-15',
    content: [
      {
        heading: 'Qu\'est-ce qu\'un monte-meubles ?',
        body: 'Le monte-meubles (ou monte-charge extérieur) est un équipement installé temporairement sur la façade d\'un immeuble. Il permet de hisser les meubles et cartons directement depuis la rue jusqu\'à la fenêtre ou au balcon de l\'appartement, en évitant les escaliers. Il est monté et démonté par les déménageurs le jour de la prestation.',
      },
      {
        heading: 'Quand est-il indispensable ?',
        body: 'Le monte-meubles est nécessaire quand les escaliers sont trop étroits pour faire passer les gros meubles (canapé d\'angle, armoire normande, lit 160 cm), quand l\'appartement est au 3ème étage ou plus sans ascenseur, ou quand la présence d\'un ascenseur ne suffit pas (ascenseur trop petit). Dans les immeubles haussmanniens parisiens, c\'est souvent le seul moyen.',
      },
      {
        heading: 'Comment l\'opération se déroule-t-elle ?',
        body: 'Les déménageurs installent la machine au pied de l\'immeuble. Les meubles sont chargés sur la plateforme depuis le trottoir et montés jusqu\'à la fenêtre ou au balcon, où d\'autres membres de l\'équipe les récupèrent et les installent. La procédure est sécurisée par des harnais et des câbles de sécurité.',
      },
      {
        heading: 'Autorisation et stationnement',
        body: 'L\'installation d\'un monte-meubles nécessite de réserver une zone de stationnement suffisamment large pour accueillir le camion et la machine. Cela s\'intègre dans la demande d\'autorisation de stationnement standard auprès de la mairie de l\'arrondissement. Grondin Déménagement vous accompagne dans ces démarches.',
      },
      {
        heading: 'Est-ce inclus dans le devis ?',
        body: 'Le monte-meubles est évalué lors de la visite préalable. Si les conditions d\'accès l\'imposent, il est intégré dans le devis. Il est inclus dans les formules Confort et Premium. Lors de la visite, l\'équipe évalue précisément si le monte-meubles est nécessaire et dimensionne la machine en conséquence.',
      },
    ],
  },
}

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = ARTICLES[params.slug]
  if (!article) return {}
  return {
    title:       `${article.title} | Grondin Déménagement`,
    description: article.description,
    alternates:  { canonical: `https://grondin-demenagement.fr/conseils/${params.slug}` },
  }
}

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }))
}

export default function ConseilArticlePage({ params }: Props) {
  const article = ARTICLES[params.slug]
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `https://grondin-demenagement.fr/conseils/${params.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: 'https://grondin-demenagement.fr/images/og-grondin-demenagement.webp',
    author: {
      '@type': 'Organization',
      name: 'Grondin Déménagement',
      url: 'https://grondin-demenagement.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Grondin Déménagement',
      url: 'https://grondin-demenagement.fr',
      logo: { '@type': 'ImageObject', url: 'https://grondin-demenagement.fr/images/logo-grondin.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://grondin-demenagement.fr/conseils/${params.slug}` },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { label: 'Conseils', href: 'https://grondin-demenagement.fr/conseils' },
        { label: article.title, href: `https://grondin-demenagement.fr/conseils/${params.slug}` },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Conseils', href: '/conseils' },
            { label: article.tag },
          ]} />
          <div className="flex flex-wrap items-center gap-3 mt-4 mb-3">
            <span className="px-3 py-1 bg-grondin-700 text-grondin-200 text-xs font-semibold rounded-full">
              {article.tag}
            </span>
            <span className="text-white/50 text-sm flex items-center gap-1">
              <Icon icon="ph:clock" width={14} height={14} aria-hidden />
              {article.readTime} de lecture
            </span>
            <span className="text-white/50 text-sm flex items-center gap-1">
              <Icon icon="ph:pencil-simple" width={14} height={14} aria-hidden />
              Équipe Grondin Déménagement
            </span>
            <time dateTime={article.dateModified} className="text-white/40 text-xs">
              Mis à jour le {new Date(article.dateModified).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
          <h1 className="text-fluid-3xl font-extrabold text-white max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-neutral max-w-none">
            {article.content.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-fluid-xl font-bold text-neutral-900 mb-3">{section.heading}</h2>
                <p className="text-neutral-600 leading-relaxed">{section.body}</p>
                {i === 0 && params.slug === 'garde-meubles-paris-comparatif' && (
                  <div className="not-prose my-8 rounded-2xl overflow-hidden aspect-[16/9] relative shadow-md">
                    <Image
                      src="/images/garde-meubles-grondin.jpg"
                      alt="Box de garde-meubles individuels numérotés dans l'entrepôt Grondin à Paris"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {i === 1 && params.slug === 'checklist-demenagement-paris' && (
                  <div className="not-prose my-10 border-2 border-grondin-100 rounded-3xl p-8 text-center bg-grondin-50/40">
                    <div className="w-10 h-10 flex items-center justify-center bg-grondin-500 rounded-2xl mx-auto mb-4">
                      <Icon icon="ph:list-checks" width={20} height={20} className="text-white" aria-hidden />
                    </div>
                    <p className="font-bold text-neutral-900 text-lg mb-1">La checklist complète</p>
                    <p className="text-neutral-500 text-sm italic mb-6">
                      Consultez la liste de tout ce que vous devez faire avant, pendant et après votre déménagement
                    </p>
                    <a
                      href="/checklist-demenagement-grondin.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 w-full max-w-sm py-4 border-2 border-grondin-500 text-grondin-600 rounded-xl font-bold hover:bg-grondin-500 hover:text-white transition-all duration-200"
                    >
                      <Icon icon="ph:download-simple" width={18} height={18} aria-hidden />
                      Télécharger la checklist PDF
                    </a>
                  </div>
                )}
              </div>
            ))}
          </article>

          <aside className="space-y-4 sticky top-24 self-start">
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Prêt à déménager ?</h3>
              <p className="text-grondin-200 text-sm mb-4">
                Demandez votre devis gratuit. Réponse sous 24h.
              </p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Devis gratuit
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                <Icon icon="ph:phone" width={16} height={16} aria-hidden />
                01 85 44 00 50
              </a>
            </div>

            {/* Catalogue particuliers */}
            <div className="bg-grondin-50 border-2 border-grondin-100 rounded-3xl p-6 text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-grondin-500 rounded-xl mx-auto mb-3">
                <Icon icon="ph:book-open" width={20} height={20} className="text-white" aria-hidden />
              </div>
              <p className="font-bold text-neutral-900 text-sm mb-1">Catalogue Particuliers</p>
              <p className="text-neutral-500 text-xs mb-4 leading-relaxed">
                Toutes nos formules, services et conseils réunis en un seul document.
              </p>
              <a
                href="/catalogue-particuliers-grondin.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold text-sm hover:bg-grondin-400 transition-colors"
              >
                <Icon icon="ph:download-simple" width={16} height={16} aria-hidden />
                Télécharger
              </a>
            </div>

            <Link href="/conseils" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />
              Tous les conseils
            </Link>
          </aside>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
