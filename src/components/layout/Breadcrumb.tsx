import Link from 'next/link'
import { Icon } from '@iconify/react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-neutral-500 flex-wrap">
      <Link href="/" className="hover:text-grondin-500 transition-colors flex items-center gap-1">
        <Icon icon="ph:house" width={14} height={14} aria-hidden />
        <span>Accueil</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <Icon icon="ph:caret-right" width={12} height={12} aria-hidden />
          {item.href ? (
            <Link href={item.href} className="hover:text-grondin-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-700 font-medium" aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Accueil', href: 'https://grondin-demenagement.fr' }, ...items]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
