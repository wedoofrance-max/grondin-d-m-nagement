'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'
import type { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { label: 'À propos', href: '/a-propos' },
  {
    label: 'Services',
    href:  '/services',
    sub: [
      { label: 'Déménagement Paris',     href: '/services/demenagement-paris',             icon: 'ph:truck' },
      { label: 'Monte-meuble',           href: '/services/monte-meubles-paris',            icon: 'ph:elevator' },
      { label: 'Garde-meubles',          href: '/services/garde-meubles',                  icon: 'ph:warehouse' },
      { label: 'Nettoyage',              href: '/services/nettoyage-demenagement-paris',   icon: 'ph:broom' },
      { label: 'Encombrants',  href: '/services/encombrement-nettoyage-paris', icon: 'ph:trash' },
      { label: 'Express 24h', href: '/services/demenagement-express-paris',    icon: 'ph:lightning' },
    ],
  },
  { label: 'Offres',   href: '/offres' },
  { label: 'Conseils', href: '/conseils' },
  { label: 'Contact',  href: '/contact' },
]

export function Header() {
  const [scrolled,         setScrolled]         = useState(false)
  const [menuOpen,         setMenuOpen]          = useState(false)
  const [activeDropdown,   setActiveDropdown]    = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'bg-white border-b border-neutral-100',
          'transition-all duration-300',
          scrolled ? 'shadow-md' : 'shadow-none'
        )}
      >
        {/* Trust bar — desktop only */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-grondin-900 text-white text-xs">
          <span className="flex items-center gap-2">
            <Icon icon="ph:star-fill" width={12} height={12} className="text-amber-400" aria-hidden />
            4,9/5 · 34 avis Google vérifiés
          </span>
          <span className="flex items-center gap-2">
            <Icon icon="ph:clock" width={12} height={12} aria-hidden />
            Disponible 7j/7 · 8h30–20h
          </span>
          <a
            href="tel:+33185440050"
            className="flex items-center gap-1.5 hover:text-grondin-300 transition-colors"
          >
            <Icon icon="ph:phone" width={12} height={12} aria-hidden />
            01 85 44 00 50
          </a>
        </div>

        {/* Nav principale */}
        <nav
          aria-label="Navigation principale"
          className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between h-16"
        >
          {/* Logo desktop */}
          <Link href="/" aria-label="Grondin Déménagement — Accueil" className="hidden lg:block">
            <Image
              src="/images/logo-grondin.png"
              alt="Grondin Déménagement"
              width={1066}
              height={234}
              style={{ height: '36px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Logo mobile / tablette */}
          <Link href="/" aria-label="Grondin Déménagement — Accueil" className="lg:hidden">
            <Image
              src="/images/symbol-grondin.svg"
              alt="Grondin Déménagement"
              width={36}
              height={36}
              priority
            />
          </Link>

          {/* Nav desktop */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-grondin-600 hover:bg-grondin-50 transition-all duration-200"
                >
                  {link.label}
                  {link.sub && (
                    <Icon
                      icon="ph:caret-down"
                      width={14}
                      height={14}
                      className={cn('transition-transform duration-200', activeDropdown === link.label ? 'rotate-180' : '')}
                      aria-hidden
                    />
                  )}
                </Link>

                {link.sub && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-neutral-100 rounded-2xl shadow-xl p-2 min-w-[260px] animate-slide-down z-50">
                    {link.sub.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-neutral-700 hover:bg-grondin-50 hover:text-grondin-700 transition-colors duration-150"
                      >
                        <Icon icon={item.icon} width={18} height={18} className="text-grondin-400" aria-hidden />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTAs desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+33185440050"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-grondin-600 hover:bg-grondin-50 transition-colors duration-200"
              aria-label="Appeler Grondin Déménagement"
            >
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />
              01 85 44 00 50
            </a>
            <Button href="/devis" variant="primary" size="md" icon="ph:file-text">
              Devis gratuit
            </Button>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={menuOpen}
          >
            <Icon icon="ph:list" width={24} height={24} aria-hidden />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />

      {/* Spacer fixed header */}
      <div className="h-16 lg:h-[104px]" aria-hidden />
    </>
  )
}
