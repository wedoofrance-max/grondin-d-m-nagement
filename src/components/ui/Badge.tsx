import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'success' | 'warning' | 'outline' | 'dark'

interface BadgeProps {
  variant?:   BadgeVariant
  icon?:      string
  children:   React.ReactNode
  className?: string
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'bg-grondin-50 text-grondin-700 border border-grondin-200',
  success: 'bg-success-50 text-success-600 border border-success-100',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  outline: 'bg-transparent text-grondin-600 border border-grondin-400',
  dark:    'bg-grondin-900 text-white border border-grondin-800',
}

export function Badge({ variant = 'default', icon, children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-1',
      'text-xs font-semibold rounded-full',
      badgeVariants[variant],
      className
    )}>
      {icon && <Icon icon={icon} width={12} height={12} aria-hidden />}
      {children}
    </span>
  )
}

interface TrustBadgeProps {
  icon:   string
  label:  string
  sub?:   string
}

export function TrustBadge({ icon, label, sub }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-grondin-50 flex-shrink-0">
        <Icon icon={icon} width={20} height={20} className="text-grondin-500" aria-hidden />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-neutral-900">{label}</span>
        {sub && <span className="text-xs text-neutral-500">{sub}</span>}
      </div>
    </div>
  )
}
