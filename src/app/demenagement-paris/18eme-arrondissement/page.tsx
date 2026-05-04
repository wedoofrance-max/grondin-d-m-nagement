import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: "Déménagement Paris 18ème — Montmartre, Goutte-d'Or, La Chapelle | Grondin",
  description: "Déménageur dans le 18ème arrondissement de Paris (Montmartre, Goutte-d'Or, La Chapelle). Grondin Déménagement 7j/7, devis gratuit. 01 85 44 00 50.",
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-paris/18eme-arrondissement' },
}

const FAQ = [
  { question: 'Intervenez-vous dans tout le 18ème arrondissement ?', answer: 'Oui, nous couvrons l\'intégralité du 18ème arrondissement (75018). Nos équipes connaissent les spécificités locales.' },
  { question: 'Un monte-meubles est-il disponible dans le 18ème ?', answer: 'Oui. Nous évaluons le besoin lors de la visite préalable selon votre étage et la configuration de l\'immeuble.' },
]

export default function DemenagementParis18emeArrPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ label: 'Déménagement Paris', href: 'https://grondin-demenagement.fr/demenagement-paris' }, { label: 'Paris 18ème', href: 'https://grondin-demenagement.fr/demenagement-paris/18eme-arrondissement' }]} />
      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Déménagement Paris', href: '/demenagement-paris' }, { label: 'Paris 18ème' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">Déménagement dans le 18ème arrondissement de Paris</h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">Montmartre, Goutte-d'Or, La Chapelle — Grondin Déménagement intervient 7j/7 dans le 18ème (75018).</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors"><Icon icon="ph:file-text" width={18} height={18} aria-hidden />Devis gratuit</Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"><Icon icon="ph:phone" width={18} height={18} aria-hidden />01 85 44 00 50</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">Votre déménageur dans le 18ème arrondissement</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">Le 18ème arrondissement, dominé par la Butte Montmartre, est l'un des plus emblématiques de Paris. Ses rues escarpées, ses escaliers et ses ruelles représentent un défi logistique particulier.</p>
            <p className="text-neutral-600 leading-relaxed mb-8">La Butte Montmartre est l'un des accès les plus complexes à Paris. Pas de camion dans certaines rues, escaliers raides, passages étroits. Le monte-meubles est souvent indispensable dans ce secteur.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[{ icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h' }, { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' }, { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' }, { icon: 'ph:users', title: '1 500+ clients', desc: 'Paris et IDF' }].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-grondin-50 rounded-xl"><Icon icon={item.icon} width={20} height={20} className="text-grondin-500 flex-shrink-0 mt-0.5" aria-hidden /><div><p className="font-semibold text-neutral-900 text-sm">{item.title}</p><p className="text-xs text-neutral-600">{item.desc}</p></div></div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Devis gratuit 18ème</h3>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors"><Icon icon="ph:file-text" width={18} height={18} aria-hidden />Mon devis</Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm"><Icon icon="ph:phone" width={16} height={16} aria-hidden />01 85 44 00 50</a>
            </div>
            <Link href="/demenagement-paris" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200"><Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />Tous les arrondissements</Link>
          </div>
        </div>
      </div>
      <FAQSection items={FAQ} title="Questions sur le déménagement dans le 18ème" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
