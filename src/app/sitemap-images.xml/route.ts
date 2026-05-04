const BASE = 'https://grondin-demenagement.fr'

const IMAGES = [
  {
    pageUrl: `${BASE}/`,
    images: [
      {
        loc: `${BASE}/images/famille-demenagement.webp`,
        title: 'Famille déménagement Paris — Grondin Déménagement',
        caption: 'Famille accompagnée par les déménageurs professionnels Grondin à Paris',
      },
      {
        loc: `${BASE}/images/emballage-professionnel.webp`,
        title: 'Emballage professionnel déménagement Paris',
        caption: 'Emballage soigneux de cartons par les équipes Grondin Déménagement',
      },
      {
        loc: `${BASE}/images/nouveau-logement.webp`,
        title: 'Nouveau logement installation après déménagement Paris',
        caption: 'Emménagement dans un nouveau logement à Paris avec Grondin',
      },
    ],
  },
  {
    pageUrl: `${BASE}/demenagement-paris`,
    images: [
      {
        loc: `${BASE}/images/camion-demenagement.webp`,
        title: 'Camion déménagement Paris — Grondin',
        caption: 'Camion de déménagement professionnel Grondin dans Paris',
      },
      {
        loc: `${BASE}/images/demenageurs-escalier.webp`,
        title: 'Déménageurs escalier Paris — Grondin Déménagement',
        caption: 'Équipe Grondin portant des cartons dans un escalier parisien',
      },
    ],
  },
  {
    pageUrl: `${BASE}/a-propos`,
    images: [
      {
        loc: `${BASE}/images/demenageurs-cartons.webp`,
        title: 'Équipe Grondin Déménagement Paris — professionnels',
        caption: 'Déménageurs professionnels Grondin avec cartons prêts à charger',
      },
    ],
  },
  {
    pageUrl: `${BASE}/services/demenagement-paris`,
    images: [
      {
        loc: `${BASE}/images/demenageurs-escalier.webp`,
        title: 'Service déménagement Paris — escalier parisien',
        caption: 'Intervention Grondin dans un immeuble parisien avec escaliers étroits',
      },
    ],
  },
  {
    pageUrl: `${BASE}/services/garde-meubles`,
    images: [
      {
        loc: `${BASE}/images/garde-meubles.webp`,
        title: 'Garde-meubles sécurisé Paris — Grondin',
        caption: 'Entrepôt garde-meubles sécurisé avec box individuels à Paris',
      },
    ],
  },
  {
    pageUrl: `${BASE}/services/monte-meubles-paris`,
    images: [
      {
        loc: `${BASE}/images/immeuble-paris.webp`,
        title: 'Immeuble haussmannien Paris — monte-meubles nécessaire',
        caption: 'Immeuble haussmannien parisien où le monte-meubles est indispensable',
      },
    ],
  },
  {
    pageUrl: `${BASE}/services/nettoyage-demenagement-paris`,
    images: [
      {
        loc: `${BASE}/images/nettoyage-appartement.webp`,
        title: 'Nettoyage appartement fin de bail Paris — Grondin',
        caption: 'Nettoyage professionnel d\'appartement après déménagement à Paris',
      },
    ],
  },
  {
    pageUrl: `${BASE}/temoignages`,
    images: [
      {
        loc: `${BASE}/images/couple-installation.webp`,
        title: 'Clients Grondin Déménagement — famille satisfaite Paris',
        caption: 'Couple installé dans leur nouveau logement à Paris après déménagement Grondin',
      },
    ],
  },
]

export async function GET() {
  const urlEntries = IMAGES.map(({ pageUrl, images }) => {
    const imageTags = images
      .map(
        (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      <image:geo_location>Paris, France</image:geo_location>
    </image:image>`
      )
      .join('')

    return `  <url>
    <loc>${pageUrl}</loc>${imageTags}
  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
