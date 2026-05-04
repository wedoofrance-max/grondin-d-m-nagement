import Link from 'next/link'
import { Icon } from '@iconify/react'

export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-2 p-3 bg-white border-t border-neutral-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] lg:hidden"
      role="region"
      aria-label="Actions rapides"
    >
      <a
        href="tel:+33185440050"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-base bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
        aria-label="Appeler Grondin Déménagement au 01 85 44 00 50"
      >
        <Icon icon="ph:phone" width={20} height={20} aria-hidden />
        Appeler
      </a>
      <Link
        href="/devis"
        className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-base bg-grondin-500 text-white shadow-grondin hover:bg-grondin-600 transition-colors"
      >
        <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
        Devis gratuit
      </Link>
    </div>
  )
}
