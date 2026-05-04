import Image from 'next/image'

const PARTNERS = [
  {
    name: 'Agentys Immobilier',
    logo: '/images/partners/agentys.jpg',
    href: 'https://www.agentys.fr',
    width: 120,
    height: 40,
  },
  {
    name: 'ORPI Immobilier',
    logo: '/images/partners/orpi.jpg',
    href: 'https://www.orpi.com',
    width: 80,
    height: 40,
  },
  {
    name: 'IAD Immobilier',
    logo: '/images/partners/iad.png',
    href: 'https://www.iadfrance.fr',
    width: 80,
    height: 40,
  },
  {
    name: 'Allianz Assurances',
    logo: '/images/partners/allianz.png',
    href: 'https://www.allianz.fr',
    width: 110,
    height: 40,
  },
  {
    name: 'La Fenetrière',
    logo: '/images/partners/la-fenetriere.png',
    href: 'https://www.lafenetriere.fr',
    width: 130,
    height: 40,
  },
  {
    name: 'Finger in the Nose',
    logo: '/images/partners/finger-in-the-nose.jpg',
    href: 'https://www.fingerinthenose.com',
    width: 130,
    height: 40,
  },
  {
    name: 'Molteni & C',
    logo: '/images/partners/molteni.png',
    href: 'https://www.molteni.it',
    width: 120,
    height: 40,
  },
]

export function PartnersSection() {
  return (
    <section className="py-14 bg-white border-y border-neutral-100" aria-label="Nos partenaires">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center mb-8">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
