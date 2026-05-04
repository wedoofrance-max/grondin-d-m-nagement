'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
type ButtonSize    = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  icon?:      string
  iconPos?:   'left' | 'right'
  loading?:   boolean
  fullWidth?: boolean
  href?:      string
  external?:  boolean
  className?: string
  children:   React.ReactNode
  onClick?:   () => void
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
  ariaLabel?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:   'bg-grondin-500 text-white hover:bg-grondin-600 active:bg-grondin-700 shadow-grondin hover:shadow-lg',
  secondary: 'bg-brand-amber text-white hover:bg-amber-600 active:bg-amber-700 shadow-md hover:shadow-lg',
  outline:   'bg-transparent text-grondin-500 border-2 border-grondin-500 hover:bg-grondin-50',
  ghost:     'bg-transparent text-grondin-500 hover:bg-grondin-50 hover:text-grondin-600',
  white:     'bg-white text-grondin-500 hover:bg-grondin-50 shadow-md hover:shadow-lg',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5 rounded-md',
  md: 'px-5 py-2.5 text-base gap-2 rounded-lg',
  lg: 'px-6 py-3 text-lg gap-2 rounded-lg',
  xl: 'px-8 py-4 text-xl gap-2.5 rounded-xl',
}

export function Button({
  variant   = 'primary',
  size      = 'md',
  icon,
  iconPos   = 'right',
  loading   = false,
  fullWidth = false,
  href,
  external  = false,
  className,
  children,
  onClick,
  type      = 'button',
  disabled  = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-grondin-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'select-none',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  )

  const content = (
    <>
      {loading && (
        <Icon icon="ph:circle-notch" className="animate-spin" width={16} height={16} aria-hidden />
      )}
      {!loading && icon && iconPos === 'left' && (
        <Icon icon={icon} width={20} height={20} aria-hidden />
      )}
      <span>{children}</span>
      {!loading && icon && iconPos === 'right' && (
        <Icon icon={icon} width={20} height={20} aria-hidden />
      )}
    </>
  )

  if (href) {
    return external ? (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {content}
      </a>
    ) : (
      <Link href={href} className={baseClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
