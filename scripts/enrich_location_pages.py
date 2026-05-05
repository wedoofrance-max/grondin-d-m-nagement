#!/usr/bin/env python3
"""Enrich location pages with quartiers grid + local info block."""
import os, re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── DATA ────────────────────────────────────────────────────────────────────
IDF_DATA = {
    "alfortville": {
        "quartiers": ["Centre-ville", "Alfort", "Le Port", "Bords de Marne", "Maisons-Alfort côté Alfortville", "La Pyramide", "Les Bords de Seine"],
        "info_title": "Infos pratiques — Alfortville (94140)",
        "info_content": "Val-de-Marne (94), limitrophe de Maisons-Alfort et Vitry-sur-Seine. RER D (gare d'Alfortville). Tissu mixte : immeubles collectifs et pavillons en bord de Marne. Nos équipes gèrent les accès riverains et les contraintes de stationnement en voie publique.",
        "color": "blue",
    },
    "asnieres-sur-seine": {
        "quartiers": ["Centre-ville", "Les Grésillons", "Trois Ponts", "Les Hauts d'Asnières", "Quartier des Bourguignons", "Bords de Seine", "Villeneuve-la-Garenne côté Asnières"],
        "info_title": "Infos pratiques — Asnières-sur-Seine (92600)",
        "info_content": "Hauts-de-Seine (92), à 8 km au nord-ouest de Paris. RER C et Transilien J (gare d'Asnières-sur-Seine). Nombreux immeubles récents en bord de Seine. Nos camions accèdent aux quais avec les autorisations de stationnement adaptées.",
        "color": "blue",
    },
    "bagneux": {
        "quartiers": ["Centre-ville", "Les Blagis", "Fontaine-Gueffier", "Les Tertres", "Karl Marx", "Pasteur", "Quartier des Meuniers"],
        "info_title": "Infos pratiques — Bagneux (92220)",
        "info_content": "Hauts-de-Seine (92), limitrophe de Montrouge et Malakoff. Métro L4 (terminus Bagneux-Lucie-Aubrac). Fort renouvellement urbain avec beaucoup de résidences récentes et grands ensembles — nous adaptons le gabarit du camion selon l'accès à chaque résidence.",
        "color": "blue",
    },
    "bondy": {
        "quartiers": ["Centre-ville", "Les Coquetiers", "Bondy Nord", "Quartier de la Gare", "Les Fauvettes", "Cité Paul-Bert", "Bobigny côté Bondy"],
        "info_title": "Infos pratiques — Bondy (93140)",
        "info_content": "Seine-Saint-Denis (93), à 12 km à l'est de Paris. RER E (gare de Bondy) et future ligne 15. Mélange de grands ensembles et de pavillons dans les quartiers résidentiels. Nos équipes connaissent les contraintes de stationnement des résidences fermées avec digicode.",
        "color": "blue",
    },
    "charenton-le-pont": {
        "quartiers": ["Centre-ville", "Bercy Village côté Charenton", "Les Quatre-Chemins", "Plateau de Gravelle", "Bords de Marne", "Alfortville côté Charenton", "Saint-Maurice"],
        "info_title": "Infos pratiques — Charenton-le-Pont (94220)",
        "info_content": "Val-de-Marne (94), limitrophe du 12ème arrondissement de Paris. Métro L8 (Charenton-Écoles, École Vétérinaire). Zone ZFE Grand Paris — nos camions sont conformes Crit'Air pour circuler vers Paris sans restriction.",
        "color": "amber",
    },
    "clamart": {
        "quartiers": ["Centre-ville", "Panorama", "Plaine de Clamart", "Trivaux-Garenne", "Les Petits Bois", "Maison Rouge", "Quartier de la Gare"],
        "info_title": "Infos pratiques — Clamart (92140)",
        "info_content": "Hauts-de-Seine (92), à 10 km au sud-ouest de Paris. Transilien N (gare de Clamart). Topographie vallonnée avec forêt de Clamart — certains accès sont en pente, nous sécurisons le chargement/déchargement avec les équipements adaptés.",
        "color": "blue",
    },
    "courbevoie": {
        "quartiers": ["La Défense côté Courbevoie", "Bécon-les-Bruyères", "Les Bruyères", "Faubourg de l'Arche", "Centre-ville", "La Garenne", "Bords de Seine"],
        "info_title": "Infos pratiques — Courbevoie (92400)",
        "info_content": "Hauts-de-Seine (92), limitrophe de La Défense. RER A (La Défense) et Transilien L. Forte densité de tours résidentielles et d'immeubles de standing — nous gérons les réservations d'ascenseur de service et les créneaux imposés par les régies.",
        "color": "amber",
    },
    "creteil": {
        "quartiers": ["Centre-ville", "Les Bleuets", "Le Palais", "Mont-Mesly", "La Habette", "Bords de Marne", "Les Sarrazins", "Préfecture"],
        "info_title": "Infos pratiques — Créteil (94000)",
        "info_content": "Préfecture du Val-de-Marne (94). Métro L8 (terminus Créteil-Pointe du Lac, Créteil-Préfecture, Créteil-L'Échat). Nombreuses tours résidentielles du quartier du Palais — nos équipes travaillent avec les régies de copropriété pour planifier les interventions.",
        "color": "blue",
    },
    "fontenay-sous-bois": {
        "quartiers": ["Centre-ville", "Val-de-Fontenay", "Les Larris", "Alouettes", "Les Roseaux", "Rigollots", "Bois de Vincennes côté Fontenay"],
        "info_title": "Infos pratiques — Fontenay-sous-Bois (94120)",
        "info_content": "Val-de-Marne (94), à l'est de Paris. RER A (Val-de-Fontenay, Fontenay-sous-Bois). Tissu pavillonnaire important dans les quartiers hauts — accès parfois en pente et rues étroites. Nos équipes évaluent l'accessibilité lors de la visite préalable.",
        "color": "blue",
    },
    "issy-les-moulineaux": {
        "quartiers": ["Centre-ville", "Quartier des Épinettes", "Fort d'Issy", "Hauts d'Issy", "Bords de Seine", "Corentin Celton", "Quartier du Moulin"],
        "info_title": "Infos pratiques — Issy-les-Moulineaux (92130)",
        "info_content": "Hauts-de-Seine (92), limitrophe du 15ème arrondissement de Paris. Métro L12 (Mairie d'Issy, Corentin Celton) et Tramway T2. ZFE Grand Paris — nos camions sont homologués. Fort développement de bureaux convertis en logements dans le secteur Fort d'Issy.",
        "color": "amber",
    },
    "ivry-sur-seine": {
        "quartiers": ["Centre-ville", "Petit-Ivry", "Ivry-Port", "Les Coteaux", "Confluences", "Pierre et Marie Curie", "Bords de Seine"],
        "info_title": "Infos pratiques — Ivry-sur-Seine (94200)",
        "info_content": "Val-de-Marne (94), limitrophe du 13ème arrondissement de Paris. RER C (gare d'Ivry-sur-Seine) et Métro L7 (Mairie d'Ivry). Nombreux programmes neufs dans le secteur Confluences. Nos équipes gèrent les livraisons en ZAC avec accès sécurisé.",
        "color": "blue",
    },
    "levallois-perret": {
        "quartiers": ["Centre-ville", "Front de Seine", "Bords de Seine", "Les Champerret", "Louise Michel", "Trézel", "République"],
        "info_title": "Infos pratiques — Levallois-Perret (92300)",
        "info_content": "Hauts-de-Seine (92), limitrophe du 17ème arrondissement de Paris. Métro L3 (Anatole France, Louise Michel, Pont de Levallois-Bécon). L'une des communes les plus denses de France — immeubles compacts avec halls souvent étroits. Nous utilisons le monte-meubles extérieur en priorité.",
        "color": "amber",
    },
    "maisons-alfort": {
        "quartiers": ["Centre-ville", "Alfort", "École Vétérinaire", "Les Juilliottes", "Bords de Marne", "La Bourdonnais", "Charentonneau"],
        "info_title": "Infos pratiques — Maisons-Alfort (94700)",
        "info_content": "Val-de-Marne (94), limitrophe d'Alfortville et Charenton. Métro L8 (École Vétérinaire de Maisons-Alfort, Les Juilliottes) et RER D. Tissu mixte avec quartiers pavillonnaires calmes et résidences collectives. Nos équipes adaptent le camion au gabarit de chaque rue.",
        "color": "blue",
    },
    "malakoff": {
        "quartiers": ["Centre-ville", "Les Vaches", "Quartier de la Gare", "Rue du Moulin", "Plateau", "Quartier Carnot", "Montrouge côté Malakoff"],
        "info_title": "Infos pratiques — Malakoff (92240)",
        "info_content": "Hauts-de-Seine (92), limitrophe du 14ème arrondissement de Paris. Métro L13 (Malakoff-Plateau de Vanves, Malakoff-Rue Étienne Dolet). Nombreuses rues résidentielles avec stationnement réglementé — nous obtenons les arrêtés de stationnement nécessaires auprès de la mairie.",
        "color": "blue",
    },
    "meudon": {
        "quartiers": ["Meudon-la-Forêt", "Bellevue", "Centre-ville", "Val Fleury", "Trivaux", "Hauts de Meudon", "Bords de Seine"],
        "info_title": "Infos pratiques — Meudon (92190)",
        "info_content": "Hauts-de-Seine (92), à 10 km au sud-ouest de Paris. Transilien N (gare de Meudon-Val-Fleury) et Transilien C (gare de Meudon). Topographie accidentée avec de nombreuses rues en pente — certains accès nécessitent un monte-meubles ou un camion de gabarit réduit.",
        "color": "blue",
    },
    "montrouge": {
        "quartiers": ["Centre-ville", "Rouchouse", "Bagneux côté Montrouge", "Châtillon côté Montrouge", "Moulin de la Vierge", "Les Ormeaux", "Quartier de la Mairie"],
        "info_title": "Infos pratiques — Montrouge (92120)",
        "info_content": "Hauts-de-Seine (92), limitrophe du 14ème arrondissement de Paris. Métro L4 (Montrouge, Bagneux). Forte densité résidentielle avec beaucoup d'immeubles des années 70-80 et programmes récents. Stationnement réglementé en centre-ville — arrêtés obtenus à l'avance.",
        "color": "blue",
    },
    "nanterre": {
        "quartiers": ["Université", "Centre-ville", "Les Provinces Françaises", "Chemin de l'Île", "Parc Municipale des Sports", "La Boule", "Préfecture"],
        "info_title": "Infos pratiques — Nanterre (92000)",
        "info_content": "Préfecture des Hauts-de-Seine (92). RER A (Nanterre-Préfecture, Nanterre-Université, Nanterre-Ville) et Transilien L. Proche de La Défense — certains immeubles imposent des créneaux de déménagement stricts le week-end. Nos équipes coordonnent avec les régies en amont.",
        "color": "amber",
    },
    "noisy-le-grand": {
        "quartiers": ["Mont d'Est", "Champy", "Les Richardets", "Pavé Neuf", "Brou-sur-Chantereine", "Les Fontenelles", "Centre Ancien"],
        "info_title": "Infos pratiques — Noisy-le-Grand (93160)",
        "info_content": "Seine-Saint-Denis (93), à 17 km à l'est de Paris. RER A (Noisy-le-Grand-Mont d'Est) et RER E (Noisy-le-Grand-Mont d'Est). Grands ensembles architecturaux emblématiques (Abraxas, Arènes de Picasso) — nos équipes maîtrisent les contraintes d'accès de ces résidences complexes.",
        "color": "blue",
    },
    "saint-denis": {
        "quartiers": ["Centre-ville", "Basilique", "Franc-Moisin", "Pleyel", "La Plaine Saint-Denis", "Stade de France", "Floréal-Saussaie-Allende"],
        "info_title": "Infos pratiques — Saint-Denis (93200)",
        "info_content": "Seine-Saint-Denis (93), à 9 km au nord de Paris. Métro L13 (Saint-Denis-Porte de Paris) et RER B/D (Saint-Denis). Fort renouvellement urbain dans le secteur Pleyel (future Cité musicale) et La Plaine. Nos camions sont conformes ZFE pour accéder aux nouvelles résidences du secteur.",
        "color": "blue",
    },
    "saint-maur-des-fosses": {
        "quartiers": ["La Varenne-Saint-Hilaire", "Saint-Maur-des-Fossés centre", "Le Parc Saint-Maur", "Adamville", "Bonneuil côté Saint-Maur", "Chennevières côté Saint-Maur", "Bords de Marne"],
        "info_title": "Infos pratiques — Saint-Maur-des-Fossés (94100)",
        "info_content": "Val-de-Marne (94), en boucle de la Marne à 14 km de Paris. RER A (La Varenne-Chennevières, Le Parc Saint-Maur, Saint-Maur-Créteil). Nombreuses maisons bourgeoises et pavillons avec jardin — déménagements souvent plus volumineux nécessitant un grand camion et une équipe renforcée.",
        "color": "blue",
    },
    "vitry-sur-seine": {
        "quartiers": ["Centre-ville", "Grand-Vitry", "Plateau-Balzac", "Raimbouillet", "Les Ardoines", "Bords de Seine", "Moulin de Saquet"],
        "info_title": "Infos pratiques — Vitry-sur-Seine (94400)",
        "info_content": "Val-de-Marne (94), limitrophe d'Ivry-sur-Seine et Choisy-le-Roi. RER C (gare de Vitry-sur-Seine) et Métro L7 (Villejuif-Louis-Aragon côté Vitry). Secteur des Ardoines en pleine transformation urbaine — nombreux programmes neufs avec accès chantier. Nous sécurisons les interventions en milieu de construction.",
        "color": "blue",
    },
}

PARIS_DATA = {
    "1er-arrondissement": {
        "quartiers": ["Louvre", "Châtelet", "Les Halles", "Palais-Royal", "Tuileries", "Sainte-Opportune", "La Cité"],
        "info_title": "Paris 1er — Code postal 75001",
        "info_content": "Secteur ultra-central avec forte réglementation de stationnement. Rues piétonnes autour des Halles, quais de Seine soumis à restrictions. Nous obtenons les arrêtés de stationnement en amont et intervenons souvent dès 7h30 pour profiter des créneaux disponibles.",
        "color": "amber",
    },
    "2eme-arrondissement": {
        "quartiers": ["Bonne-Nouvelle", "Bourse", "Sentier", "Vivienne-Gaillon", "Palais-Royal", "Rue Montorgueil"],
        "info_title": "Paris 2ème — Code postal 75002",
        "info_content": "Arrondissement le moins peuplé de Paris. Rues étroites du Sentier et tissu haussmannien dense. Nombreux immeubles sans ascenseur — notre monte-meubles extérieur est disponible pour les étages supérieurs et les pièces volumineuses.",
        "color": "amber",
    },
    "3eme-arrondissement": {
        "quartiers": ["Arts-et-Métiers", "Temple", "Enfants-Rouges", "Archives", "Sainte-Avoie", "Beaubourg", "Haut-Marais"],
        "info_title": "Paris 3ème — Code postal 75003",
        "info_content": "Cœur du Haut-Marais avec hôtels particuliers et immeubles anciens. Cours intérieures souvent étroites, accès limités. Nos équipes évaluent l'accès en cour lors de la visite préalable et planifient l'utilisation du monte-meubles ou du portage en escalier.",
        "color": "amber",
    },
    "4eme-arrondissement": {
        "quartiers": ["Saint-Merri", "Saint-Gervais", "Arsenal", "Notre-Dame", "Île Saint-Louis", "Marais historique", "Place des Vosges"],
        "info_title": "Paris 4ème — Code postal 75004",
        "info_content": "Marais historique et Île Saint-Louis avec fort flux touristique. Circulation très réglementée, zones piétonnes étendues. Déménagements planifiés tôt le matin ou en dehors des pics touristiques. Immeubles classés : précautions renforcées pour les parties communes.",
        "color": "amber",
    },
    "5eme-arrondissement": {
        "quartiers": ["Panthéon", "Sorbonne", "Jardin des Plantes", "Val-de-Grâce", "Luxembourg", "Mouffetard", "Contrescarpe"],
        "info_title": "Paris 5ème — Code postal 75005",
        "info_content": "Quartier Latin avec forte densité étudiante (nombreux studios et petits appartements). Rues médiévales très étroites autour de Mouffetard — accès camion parfois impossible, nous utilisons un véhicule relais de petite taille si nécessaire.",
        "color": "amber",
    },
    "6eme-arrondissement": {
        "quartiers": ["Monnaie", "Odéon", "Notre-Dame-des-Champs", "Saint-Germain-des-Prés", "Luxembourg", "Mabillon"],
        "info_title": "Paris 6ème — Code postal 75006",
        "info_content": "Saint-Germain-des-Prés avec immeubles bourgeois et appartements de standing. Nombreux gardiens stricts sur les horaires et protections de parties communes. Nos équipes apportent systématiquement les protections de couloir et d'ascenseur exigées par les copropriétés.",
        "color": "amber",
    },
    "7eme-arrondissement": {
        "quartiers": ["Saint-Thomas-d'Aquin", "Invalides", "École Militaire", "Gros-Caillou", "Palais-Bourbon", "Champ-de-Mars", "Tour Eiffel"],
        "info_title": "Paris 7ème — Code postal 75007",
        "info_content": "Arrondissement résidentiel et diplomatique avec immeubles haussmanniens de haut standing. Restrictions de stationnement importantes autour des Invalides et du Champ-de-Mars. Nos équipes gèrent les autorisations de la Préfecture et respectent les exigences strictes des garderies.",
        "color": "amber",
    },
    "8eme-arrondissement": {
        "quartiers": ["Champs-Élysées", "Madeleine", "Europe", "Faubourg-du-Roule", "Miroir", "Plaine de Monceau"],
        "info_title": "Paris 8ème — Code postal 75008",
        "info_content": "Triangle d'or avec résidences de prestige. Axe Champs-Élysées très réglementé — autorisation de stationnement obligatoire, intervention souvent le week-end matin. Nos déménageurs sont équipés pour manipuler meubles de luxe et objets d'art avec toutes les précautions requises.",
        "color": "amber",
    },
    "9eme-arrondissement": {
        "quartiers": ["Saint-Georges", "Opéra", "Rochechouart", "Chaussée-d'Antin", "Pigalle", "Lorette", "La Trinité"],
        "info_title": "Paris 9ème — Code postal 75009",
        "info_content": "Mixte bureau/résidentiel autour de l'Opéra. Nombreux immeubles haussmanniens avec caves et greniers accessibles uniquement par escaliers étroits. Nos équipes sont formées au portage vertical en escalier sans monte-meubles pour les objets que la réglementation de l'immeuble l'impose.",
        "color": "amber",
    },
    "10eme-arrondissement": {
        "quartiers": ["Canal Saint-Martin", "Gare du Nord", "Gare de l'Est", "Bonne-Nouvelle", "Louis-Blanc", "Hopital Saint-Louis", "Château d'Eau"],
        "info_title": "Paris 10ème — Code postal 75010",
        "info_content": "En pleine gentrification avec nombreux lofts et appartements rénovés autour du Canal Saint-Martin. Rues souvent encombrées le week-end — stationnement à planifier en avance. Zone ZFE : nos camions sont homologués Crit'Air.",
        "color": "blue",
    },
    "11eme-arrondissement": {
        "quartiers": ["Bastille", "Nation", "Oberkampf", "Roquette", "Voltaire", "Saint-Ambroise", "Popincourt"],
        "info_title": "Paris 11ème — Code postal 75011",
        "info_content": "Arrondissement très résidentiel, l'un des plus peuplés de Paris. Forte densité d'appartements avec escaliers étroits. Rues souvent à sens unique avec stationnement difficile — nous organisons un point de dépose-chargement optimisé pour minimiser le temps de portage.",
        "color": "blue",
    },
    "12eme-arrondissement": {
        "quartiers": ["Bercy", "Gare de Lyon", "Reuilly", "Picpus", "Bel-Air", "Charenton côté Paris", "Daumesnil"],
        "info_title": "Paris 12ème — Code postal 75012",
        "info_content": "Arrondissement de taille importante avec tissu varié : logements sociaux, pavillons dans le quartier Bel-Air, immeubles récents autour de Bercy. RER A (Gare de Lyon, Nation). Accès au Bois de Vincennes depuis la Porte Dorée.",
        "color": "blue",
    },
    "13eme-arrondissement": {
        "quartiers": ["Butte-aux-Cailles", "Gobelins", "Place d'Italie", "Olympiades", "Tolbiac", "Bibliothèque François-Mitterrand", "Massena"],
        "info_title": "Paris 13ème — Code postal 75013",
        "info_content": "Mixte entre tours résidentielles des Olympiades (ascenseurs de grande dimension) et maisons de la Butte-aux-Cailles (accès étroits). RER C (gare d'Austerlitz) et Métro L5/L6/L7. Nos équipes s'adaptent aux deux typologies en une même journée si besoin.",
        "color": "blue",
    },
    "14eme-arrondissement": {
        "quartiers": ["Montparnasse", "Pernety", "Plaisance", "Alésia", "Denfert-Rochereau", "Mouton-Duvernet", "Brune"],
        "info_title": "Paris 14ème — Code postal 75014",
        "info_content": "Quartiers résidentiels calmes autour de Pernety et Plaisance avec nombreux immeubles des années 1930-60. Métro L4/L6 (Montparnasse-Bienvenüe, Denfert-Rochereau). Accès souvent facilité en semaine — stationnement plus simple que dans les arrondissements centraux.",
        "color": "blue",
    },
    "15eme-arrondissement": {
        "quartiers": ["Javel", "Grenelle", "Beaugrenelle", "Convention", "Vaugirard", "Saint-Lambert", "Necker"],
        "info_title": "Paris 15ème — Code postal 75015",
        "info_content": "Arrondissement le plus peuplé de Paris. Fort taux de propriétaires avec appartements familiaux et volumes importants. Métro L8/L10/L12. Tours Beaugrenelle avec gestionnaires stricts — nous contactons les régies en amont pour coordonner les créneaux de déménagement.",
        "color": "blue",
    },
    "16eme-arrondissement": {
        "quartiers": ["Auteuil", "Passy", "La Muette", "Trocadéro", "Chaillot", "Porte Maillot", "Ranelagh"],
        "info_title": "Paris 16ème — Code postal 75016",
        "info_content": "Arrondissement résidentiel aisé avec immeubles haussmanniens et art-déco de grande qualité. Gardiens très présents avec protocoles stricts. Nos équipes portent des tenues professionnelles, utilisent des protections de qualité et coordonnent avec la loge avant toute intervention.",
        "color": "amber",
    },
    "17eme-arrondissement": {
        "quartiers": ["Batignolles", "Épinettes", "Ternes", "Plaine de Monceau", "Villiers", "Navier", "Porte de Clichy"],
        "info_title": "Paris 17ème — Code postal 75017",
        "info_content": "Contrastes entre le quartier chic des Ternes et les Batignolles/Épinettes plus populaires. Tramway T3b (Porte de Clichy). Métro L2/L3/L13. Le nouveau quartier Clichy-Batignolles a des règles de stationnement spécifiques que nous gérons avec les services municipaux.",
        "color": "blue",
    },
    "18eme-arrondissement": {
        "quartiers": ["Montmartre", "Pigalle", "Clignancourt", "Goutte-d'Or", "La Chapelle", "Jules-Joffrin", "Simplon"],
        "info_title": "Paris 18ème — Code postal 75018",
        "info_content": "Topographie très accidentée autour de la Butte Montmartre — certaines rues sont inaccessibles aux camions. Accès Montmartre uniquement à pied ou en camionnette relais. Nos équipes utilisent des diables professionnels pour les rues en pente et planifient les itinéraires optimaux.",
        "color": "amber",
    },
    "19eme-arrondissement": {
        "quartiers": ["La Villette", "Buttes-Chaumont", "Belleville", "Combat", "Amérique", "Danube", "Pré-Saint-Gervais côté Paris"],
        "info_title": "Paris 19ème — Code postal 75019",
        "info_content": "Quartiers en plein renouveau avec nombreux programmes neufs autour du bassin de la Villette et de Crimée. Métro L5/L7bis. Mélange de grands ensembles et de nouvelles résidences — nos équipes s'adaptent à chaque configuration avec le matériel approprié.",
        "color": "blue",
    },
    "20eme-arrondissement": {
        "quartiers": ["Père-Lachaise", "Belleville", "Gambetta", "Charonne", "Ménilmontant", "Réunion", "Saint-Fargeau"],
        "info_title": "Paris 20ème — Code postal 75020",
        "info_content": "Arrondissement populaire et multiculturel en forte transformation. Topographie vallonnée autour de Ménilmontant et Belleville. Nombreux immeubles anciens sans ascenseur — notre monte-meubles extérieur est régulièrement déployé dans les rues de la butte.",
        "color": "blue",
    },
}

# ── TEMPLATE ────────────────────────────────────────────────────────────────
def make_block(data: dict) -> str:
    quartiers_jsx = ", ".join(f"'{q.replace(chr(39), chr(92)+chr(39))}'" for q in data["quartiers"])
    color = data["color"]
    return f"""            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {{[{quartiers_jsx}].map((q) => (
                  <span key={{q}} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{{q}}</span>
                ))}}
              </div>
            </div>

            <div className="bg-{color}-50 border border-{color}-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-{color}-800 mb-1">{data["info_title"]}</p>
              <p className="text-xs text-{color}-700">{data["info_content"]}</p>
            </div>"""

# ── PROCESSOR ───────────────────────────────────────────────────────────────
def patch_file(path: str, data: dict) -> bool:
    with open(path, encoding="utf-8") as f:
        content = f.read()

    # Skip if already enriched
    if "Quartiers couverts" in content:
        print(f"  SKIP (already enriched): {path}")
        return False

    # Pattern: second paragraph ending with mb-8, followed by trust badges grid
    old = re.search(
        r'(<p className="text-neutral-600 leading-relaxed mb-8">.*?</p>\n)',
        content, re.DOTALL
    )
    if not old:
        print(f"  WARN (pattern not found): {path}")
        return False

    new_para = old.group(0).replace('mb-8">', 'mb-6">', 1)
    block = make_block(data)
    replacement = new_para + "\n" + block + "\n"
    new_content = content.replace(old.group(0), replacement, 1)

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"  OK: {path}")
    return True

# ── MAIN ────────────────────────────────────────────────────────────────────
def main():
    updated = 0

    # IDF cities
    idf_base = os.path.join(BASE, "src/app/demenagement-ile-de-france")
    for slug, data in IDF_DATA.items():
        path = os.path.join(idf_base, slug, "page.tsx")
        if os.path.exists(path):
            if patch_file(path, data):
                updated += 1
        else:
            print(f"  MISSING: {path}")

    # Paris arrondissements
    paris_base = os.path.join(BASE, "src/app/demenagement-paris")
    for slug, data in PARIS_DATA.items():
        path = os.path.join(paris_base, slug, "page.tsx")
        if os.path.exists(path):
            if patch_file(path, data):
                updated += 1
        else:
            print(f"  MISSING: {path}")

    print(f"\nDone — {updated} files updated.")

if __name__ == "__main__":
    main()
