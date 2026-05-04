import { track } from '@/lib/analytics/events'

export function openWhatsApp(message: string, source = 'site') {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? ''
  track.whatsappClicked(source)
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
}
