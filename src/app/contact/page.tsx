import type { Metadata } from 'next'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export const metadata: Metadata = {
  title:      'Contact — Grondin Déménagement Paris',
  description: 'Contactez Grondin Déménagement par téléphone, email ou formulaire. Disponible 7j/7 de 8h30 à 20h pour Paris et Île-de-France.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-grondin-900 py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-fluid-4xl font-extrabold text-white mb-3">Contactez-nous</h1>
          <p className="text-white/70">Notre équipe répond 7j/7 de 8h30 à 20h</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: 'ph:phone',           label: 'Téléphone',  value: '01 85 44 00 50',                  href: 'tel:+33185440050',                         sub: '7j/7 · 8h30–20h' },
            { icon: 'ph:envelope-simple', label: 'Email',      value: 'contact@grondin-demenagement.fr', href: 'mailto:contact@grondin-demenagement.fr',    sub: 'Réponse sous 2h' },
            { icon: 'ph:file-text',       label: 'Devis',      value: 'Devis gratuit en ligne',          href: '/devis',                                    sub: 'En quelques clics' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-neutral-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-grondin-50 rounded-xl flex items-center justify-center">
                <Icon icon={item.icon} width={24} height={24} className="text-grondin-500" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold text-grondin-500 uppercase tracking-wider">{item.label}</p>
                <p className="text-base font-bold text-neutral-900 mt-0.5">{item.value}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mb-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76!2d2.3522!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzIzLjgiTiAywrAyMScwNy45IkU!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zone d'intervention Grondin Déménagement — Paris & Île-de-France"
            aria-label="Carte de la zone d'intervention Grondin Déménagement"
          />
        </div>

        <div className="bg-grondin-50 rounded-2xl p-8 text-center">
          <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-3">
            Vous préférez un devis en ligne ?
          </h2>
          <p className="text-neutral-600 mb-6">
            Remplissez notre formulaire en quelques clics et recevez une estimation personnalisée.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-grondin-500 text-white rounded-xl font-bold shadow-grondin hover:bg-grondin-600 transition-colors"
          >
            <Icon icon="ph:file-text" width={20} height={20} aria-hidden />
            Obtenir mon devis gratuit
          </Link>
        </div>
      </div>
    </div>
  )
}
