import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export const metadata: Metadata = {
  title: 'Page non trouvée — Grondin Déménagement',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 bg-grondin-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon icon="ph:map-trifold" width={32} height={32} className="text-grondin-500" aria-hidden />
        </div>

        <p className="text-xs font-semibold text-grondin-500 uppercase tracking-widest mb-3">Erreur 404</p>
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-3">
          Page introuvable
        </h1>
        <p className="text-neutral-500 mb-8 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée. Utilisez les liens ci-dessous pour retrouver votre chemin.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            { href: '/',                    icon: 'ph:house',         label: 'Accueil' },
            { href: '/services',            icon: 'ph:truck',         label: 'Nos services' },
            { href: '/demenagement-paris',  icon: 'ph:map-pin',       label: 'Déménagement Paris' },
            { href: '/devis',               icon: 'ph:file-text',     label: 'Devis gratuit' },
            { href: '/conseils',            icon: 'ph:book-open',     label: 'Conseils déménagement' },
            { href: '/contact',             icon: 'ph:chat-circle',   label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-grondin-50 hover:bg-grondin-100 text-neutral-700 hover:text-grondin-700 font-medium text-sm transition-colors"
            >
              <Icon icon={item.icon} width={18} height={18} className="text-grondin-500 flex-shrink-0" aria-hidden />
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:+33185440050"
          className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-600 transition-colors"
        >
          <Icon icon="ph:phone" width={18} height={18} aria-hidden />
          Nous appeler : 01 85 44 00 50
        </a>
      </div>
    </div>
  )
}
