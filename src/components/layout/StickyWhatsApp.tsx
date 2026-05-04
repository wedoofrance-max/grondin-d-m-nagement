'use client'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { openWhatsApp } from '@/lib/utils/whatsapp'

export function StickyWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => openWhatsApp('Bonjour, je souhaite obtenir un devis pour un déménagement', 'sticky_whatsapp')}
      className="fixed bottom-24 right-4 z-40 w-14 h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 md:bottom-8 md:right-6"
      aria-label="Nous contacter sur WhatsApp"
    >
      <Icon icon="ph:whatsapp-logo" width={28} height={28} aria-hidden />
    </button>
  )
}
