import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const footerLinks = {
  services: [
    { label: 'Déménagement Paris',     href: '/services/demenagement-paris' },
    { label: 'Monte-meuble Paris',     href: '/services/monte-meubles-paris' },
    { label: 'Garde-meubles IDF',      href: '/services/garde-meubles' },
    { label: 'Nettoyage déménagement', href: '/services/nettoyage-demenagement-paris' },
    { label: 'Encombrants Paris',      href: '/services/encombrement-nettoyage-paris' },
    { label: 'Déménagement express',   href: '/services/demenagement-express-paris' },
  ],
  zones: [
    { label: 'Déménagement Paris',       href: '/demenagement-paris' },
    { label: 'Déménagement Versailles',  href: '/demenagement-ile-de-france/versailles' },
    { label: 'Déménagement Boulogne',    href: '/demenagement-ile-de-france/boulogne-billancourt' },
    { label: 'Déménagement Neuilly',     href: '/demenagement-ile-de-france/neuilly-sur-seine' },
    { label: 'Déménagement Vincennes',   href: '/demenagement-ile-de-france/vincennes' },
    { label: 'Toutes les zones IDF',     href: '/demenagement-ile-de-france' },
  ],
  company: [
    { label: 'À propos',             href: '/a-propos' },
    { label: 'Nos offres',           href: '/offres' },
    { label: 'Témoignages',         href: '/temoignages' },
    { label: 'FAQ',                  href: '/faq' },
    { label: 'Conseils déménagement', href: '/conseils' },
    { label: 'Contact',              href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-grondin-900 text-white" role="contentinfo" aria-label="Pied de page Grondin Déménagement">
      {/* Footer links */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <Image
            src="/images/symbol-grondin.svg"
            alt="Grondin Déménagement"
            width={44}
            height={44}
          />
          <p className="text-white/60 text-sm leading-relaxed">
            Expert du déménagement à Paris et en Île-de-France. Disponible 7j/7 de 8h30 à 20h.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+33185440050" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Icon icon="ph:phone" width={16} height={16} aria-hidden />
              01 85 44 00 50
            </a>
            <a href="mailto:contact@grondin-demenagement.fr" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Icon icon="ph:envelope-simple" width={16} height={16} aria-hidden />
              contact@grondin-demenagement.fr
            </a>
            <span className="flex items-center gap-2 text-white/70">
              <Icon icon="ph:clock" width={16} height={16} aria-hidden />
              7j/7 · 8h30 – 20h00
            </span>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Navigation services" className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zones */}
        <nav aria-label="Navigation zones" className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Zones</h3>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.zones.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Navigation entreprise" className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Entreprise</h3>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>MustShine France — Tous droits réservés {new Date().getFullYear()}.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal/mentions-legales" className="hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/legal/politique-de-confidentialite" className="hover:text-white/70 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
