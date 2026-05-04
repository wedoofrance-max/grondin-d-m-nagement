import { Icon } from '@iconify/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon:        string
  title:       string
  description: string
  href:        string
  badge?:      string
  className?:  string
}

export function ServiceCard({ icon, title, description, href, badge, className }: ServiceCardProps) {
  return (
    <Link href={href} className={cn(
      'group relative flex flex-col gap-4 p-6',
      'bg-white rounded-xl border border-neutral-100',
      'shadow-card hover:shadow-card-hover',
      'transition-all duration-300 ease-in-out',
      'hover:-translate-y-1',
      className
    )}>
      {badge && (
        <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-semibold text-white bg-grondin-500 rounded-full">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 flex items-center justify-center bg-grondin-50 rounded-xl group-hover:bg-grondin-500 transition-colors duration-300">
        <Icon
          icon={icon}
          width={24}
          height={24}
          className="text-grondin-500 group-hover:text-white transition-colors duration-300"
          aria-hidden
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-fluid-xl font-semibold text-neutral-900 group-hover:text-grondin-600 transition-colors">
          {title}
        </h3>
        <p className="text-fluid-base text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-grondin-500 font-medium text-sm">
        <span>En savoir plus</span>
        <Icon
          icon="ph:arrow-right"
          width={16}
          height={16}
          className="group-hover:translate-x-1 transition-transform duration-200"
          aria-hidden
        />
      </div>
    </Link>
  )
}

interface OffreCardProps {
  name:         string
  tagline:      string
  recommended?: boolean
  features:     string[]
  notIncluded?: string[]
  href:         string
}

export function OffreCard({ name, tagline, recommended, features, notIncluded, href }: OffreCardProps) {
  return (
    <div className={cn(
      'relative flex flex-col gap-6 p-8 rounded-3xl transition-all duration-300',
      recommended
        ? 'bg-grondin-900 text-white shadow-2xl scale-[1.02]'
        : 'bg-white border border-neutral-200 shadow-card hover:shadow-card-hover'
    )}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-amber text-white text-sm font-bold rounded-full shadow-md">
          Recommandée
        </div>
      )}

      <div className="flex flex-col gap-1">
        <p className={cn(
          'text-xs font-semibold tracking-widest uppercase',
          recommended ? 'text-grondin-300' : 'text-grondin-500'
        )}>
          {tagline}
        </p>
        <h3 className={cn(
          'text-fluid-2xl font-bold',
          recommended ? 'text-white' : 'text-neutral-900'
        )}>
          {name}
        </h3>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Icon
              icon="ph:check-circle-fill"
              width={20}
              height={20}
              className={cn('mt-0.5', recommended ? 'text-grondin-300' : 'text-grondin-500')}
              aria-hidden
            />
            <span className={cn('text-sm leading-relaxed', recommended ? 'text-grondin-100' : 'text-neutral-700')}>
              {feature}
            </span>
          </li>
        ))}
        {notIncluded?.map((item, i) => (
          <li key={`no-${i}`} className="flex items-start gap-2.5 opacity-50">
            <Icon icon="ph:x-circle" width={20} height={20} className="text-neutral-400 mt-0.5" aria-hidden />
            <span className="text-sm text-neutral-500">{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          'mt-auto w-full flex items-center justify-center gap-2',
          'py-3 rounded-xl font-semibold text-base',
          'transition-all duration-200',
          recommended
            ? 'bg-grondin-500 text-white hover:bg-grondin-400 shadow-grondin'
            : 'bg-grondin-50 text-grondin-600 hover:bg-grondin-100'
        )}
      >
        Choisir cette formule
        <Icon icon="ph:arrow-right" width={18} height={18} aria-hidden />
      </Link>
    </div>
  )
}
