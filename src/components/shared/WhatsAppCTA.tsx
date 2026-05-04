'use client'
import { Icon } from '@iconify/react'
import { openWhatsApp } from '@/lib/utils/whatsapp'
import { cn } from '@/lib/utils'

interface Props {
  message?: string
  source?:  string
  variant?: 'primary' | 'outline' | 'ghost'
  size?:    'sm' | 'md' | 'lg'
  className?: string
}

const variants = {
  primary: 'bg-[#25D366] text-white hover:bg-[#1DAA54]',
  outline: 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10',
  ghost:   'text-[#25D366] hover:bg-[#25D366]/10',
}
const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5 rounded-lg',
  md: 'px-5 py-2.5 text-base gap-2 rounded-xl',
  lg: 'px-6 py-3 text-lg gap-2 rounded-xl',
}

export function WhatsAppCTA({
  message = 'Bonjour, je souhaite obtenir un devis pour un déménagement',
  source  = 'cta',
  variant = 'outline',
  size    = 'md',
  className,
}: Props) {
  return (
    <button
      onClick={() => openWhatsApp(message, source)}
      className={cn('inline-flex items-center justify-center font-semibold transition-all duration-200', variants[variant], sizes[size], className)}
      aria-label="Nous contacter sur WhatsApp"
    >
      <Icon icon="ph:whatsapp-logo" width={20} height={20} aria-hidden />
      Nous contacter sur WhatsApp
    </button>
  )
}
