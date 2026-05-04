'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import type { NavLink } from '@/types'

interface MobileMenuProps {
  isOpen:  boolean
  onClose: () => void
  links:   NavLink[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={onClose}
          aria-hidden
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[999]',
          'w-[85vw] max-w-[320px] bg-white',
          'flex flex-col overflow-y-auto',
          'shadow-2xl transition-transform duration-300 ease-out',
          'lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <Link href="/" onClick={onClose} aria-label="Grondin Déménagement — Accueil">
            <Image
              src="/images/symbol-grondin.svg"
              alt="Grondin Déménagement"
              width={36}
              height={36}
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Fermer le menu"
          >
            <Icon icon="ph:x" width={22} height={22} aria-hidden />
          </button>
        </div>

        <div className="px-6 py-3 bg-grondin-50 flex items-center gap-2 text-xs text-grondin-700 font-medium">
          <Icon icon="ph:star-fill" width={12} height={12} className="text-amber-400" aria-hidden />
          4,9/5 · 34 avis · Disponible 7j/7
        </div>

        <nav aria-label="Navigation mobile" className="flex-1 px-4 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-neutral-800 hover:bg-grondin-50 hover:text-grondin-700 transition-colors duration-150"
                >
                  {link.label}
                  <Icon icon="ph:caret-right" width={16} height={16} className="text-neutral-400" aria-hidden />
                </Link>
                {link.sub && (
                  <ul className="ml-4 mt-1 flex flex-col gap-1 mb-1">
                    {link.sub.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={onClose}
                          className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-neutral-600 hover:bg-neutral-50 hover:text-grondin-600 transition-colors"
                        >
                          <Icon icon={sub.icon} width={16} height={16} className="text-grondin-400" aria-hidden />
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 py-6 border-t border-neutral-100 flex flex-col gap-3">
          <Link
            href="/devis"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-grondin-500 text-white font-bold text-base shadow-grondin"
          >
            <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
            Devis gratuit en quelques clics
          </Link>
          <a
            href="tel:+33185440050"
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-neutral-100 text-neutral-800 font-semibold text-base"
          >
            <Icon icon="ph:phone" width={20} height={20} aria-hidden />
            01 85 44 00 50
          </a>
        </div>
      </div>
    </>
  )
}
