import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris 7ème — Tour Eiffel, Invalides, Palais-Bourbon | Grondin',
  description: 'Déménageur dans le 7ème arrondissement de Paris (Tour Eiffel, Invalides, Palais-Bourbon). Grondin Déménagement 7j/7, devis gratuit. 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-paris/7eme-arrondissement' },
}

const FAQ = [
  { question: 'Intervenez-vous dans tout le 7ème arrondissement ?', answer: 'Oui, nous couvrons l\'intégralité du 7ème arrondissement (75007). Nos équipes connaissent les spécificités locales : accès, stationnement, contraintes des immeubles.' },
  { question: 'Un monte-meubles est-il disponible dans le 7ème ?', answer: 'Oui. Lors de la visite préalable, nous évaluons la nécessité d\'un monte-meubles selon votre étage et la configuration de l\'immeuble. Il est inclus dans la formule Premium.' },
]

export default function DemenagementParis7emeArrPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Déménagement Paris', href: 'https://grondin-demenagement.fr/demenagement-paris' },
        { label: 'Paris 7ème', href: 'https://grondin-demenagement.fr/demenagement-paris/7eme-arrondissement' },
      ]} />
      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Déménagement Paris', href: '/demenagement-paris' },
            { label: 'Paris 7ème' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménagement dans le 7ème arrondissement de Paris
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Tour Eiffel, Invalides, Palais-Bourbon — Grondin Déménagement intervient 7j/7 dans le 7ème arrondissement (75007).
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />Devis gratuit
            </Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />01 85 44 00 50
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">
              Votre déménageur dans le 7ème arrondissement
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">Le 7ème arrondissement est l'un des plus élégants de Paris : la Tour Eiffel, le Musée d'Orsay, les Invalides et de nombreuses ambassades. Les immeubles haussmanniens sont omniprésents avec leurs escaliers majestueux.</p>
            <p className="text-neutral-600 leading-relaxed mb-6">Dans le 7ème, les immeubles de standing ont souvent des exigences particulières. Grondin Déménagement gère votre déménagement avec tout le soin et la discrétion requis.</p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Saint-Thomas-d\'Aquin', 'Invalides', 'École Militaire', 'Gros-Caillou', 'Palais-Bourbon', 'Champ-de-Mars', 'Tour Eiffel'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-amber-800 mb-1">Paris 7ème — Code postal 75007</p>
              <p className="text-xs text-amber-700">Arrondissement résidentiel et diplomatique avec immeubles haussmanniens de haut standing. Restrictions de stationnement importantes autour des Invalides et du Champ-de-Mars. Nos équipes gèrent les autorisations de la Préfecture et respectent les exigences strictes des garderies.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h, week-end inclus' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' },
                { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' },
                { icon: 'ph:users', title: '1 500+ clients', desc: 'Paris et Île-de-France' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-grondin-50 rounded-xl">
                  <Icon icon={item.icon} width={20} height={20} className="text-grondin-500 flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{item.title}</p>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Devis gratuit 7ème</h3>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />Mon devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm">
                <Icon icon="ph:phone" width={16} height={16} aria-hidden />01 85 44 00 50
              </a>
            </div>
            <Link href="/demenagement-paris" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200">
              <Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />Tous les arrondissements
            </Link>
          </div>
        </div>
      </div>
      <FAQSection items={FAQ} title="Questions sur le déménagement dans le 7ème" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
