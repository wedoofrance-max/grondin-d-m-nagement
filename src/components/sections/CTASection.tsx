import Link from 'next/link'
import { Icon } from '@iconify/react'

export function CTASection() {
  return (
    <section
      className="py-20 bg-grondin-900"
      aria-label="Obtenir un devis de déménagement"
      style={{ background: 'linear-gradient(135deg, #071A2E 0%, #0B3B76 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
        <p className="text-grondin-300 text-xs font-semibold uppercase tracking-widest mb-4">
          Prêt à déménager ?
        </p>
        <h2 className="text-fluid-4xl font-bold text-white mb-4">
          Obtenez votre devis gratuit en quelques clics
        </h2>
        <p className="text-white/70 text-fluid-lg mb-10 max-w-xl mx-auto">
          Sans engagement · Réponse rapide · Assurance incluse · Disponible 7j/7
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/devis"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-grondin-500 text-white rounded-xl font-bold text-lg shadow-grondin hover:bg-grondin-400 transition-all duration-200 hover:scale-[1.02]"
          >
            <Icon icon="ph:file-text" width={22} height={22} aria-hidden />
            Devis gratuit en quelques clics
          </Link>
          <a
            href="tel:+33185440050"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            <Icon icon="ph:phone" width={20} height={20} aria-hidden />
            01 85 44 00 50
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
          {[
            { icon: 'ph:check-circle-fill', text: 'Devis 100% gratuit' },
            { icon: 'ph:check-circle-fill', text: 'Aucun engagement' },
            { icon: 'ph:check-circle-fill', text: 'Réponse en quelques heures' },
          ].map((item) => (
            <span key={item.text} className="flex items-center gap-2">
              <Icon icon={item.icon} width={16} height={16} className="text-grondin-400" aria-hidden />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
