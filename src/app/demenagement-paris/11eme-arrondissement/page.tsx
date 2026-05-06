import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris 11ème — Bastille, Oberkampf, République | Grondin',
  description: 'Déménageur dans le 11ème arrondissement de Paris (Bastille, Oberkampf, République). Grondin Déménagement 7j/7, devis gratuit. 01 85 44 00 50.',
  alternates: { canonical: 'https://grondin-demenagement.fr/demenagement-paris/11eme-arrondissement' },
}

const FAQ = [
  { question: 'Intervenez-vous dans tout le 11ème arrondissement ?', answer: 'Oui, nous couvrons l\'intégralité du 11ème arrondissement (75011). Nos équipes connaissent les spécificités locales.' },
  { question: 'Un monte-meubles est-il disponible dans le 11ème ?', answer: 'Oui. Nous évaluons le besoin lors de la visite préalable selon votre étage et la configuration de l\'immeuble.' },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://grondin-demenagement.fr/demenagement-paris/11eme-arrondissement#service',
  name: 'Déménagement 11ème arrondissement de Paris',
  provider: { '@id': 'https://grondin-demenagement.fr/#business' },
  areaServed: { '@type': 'City', name: 'Paris', addressRegion: 'Île-de-France' },
  url: 'https://grondin-demenagement.fr/demenagement-paris/11eme-arrondissement',
  serviceType: 'Moving Service',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://grondin-demenagement.fr/devis',
    servicePhone: '+33185440050',
  },
}

export default function DemenagementParis11emeArrPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ label: 'Déménagement Paris', href: 'https://grondin-demenagement.fr/demenagement-paris' }, { label: 'Paris 11ème', href: 'https://grondin-demenagement.fr/demenagement-paris/11eme-arrondissement' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Déménagement Paris', href: '/demenagement-paris' }, { label: 'Paris 11ème' }]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">Déménagement dans le 11ème arrondissement de Paris</h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">Bastille, Oberkampf, République — Grondin Déménagement intervient 7j/7 dans le 11ème (75011).</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors"><Icon icon="ph:file-text" width={18} height={18} aria-hidden />Devis gratuit</Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"><Icon icon="ph:phone" width={18} height={18} aria-hidden />01 85 44 00 50</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-4">Votre déménageur dans le 11ème arrondissement</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">Le 11ème arrondissement, autour de la Bastille et d'Oberkampf, est l'un des arrondissements les plus animés de Paris. Il attire de nombreux ménages grâce à ses appartements spacieux et ses nombreux commerces de quartier.</p>
            <p className="text-neutral-600 leading-relaxed mb-6">Dans le 11ème, les grandes artères facilitent l'accès des camions mais les rues secondaires peuvent être étroites. Demandez votre devis gratuit, notre conseiller vous rappelle sous 24h.</p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-grondin-700 uppercase tracking-widest mb-3">Quartiers couverts</h3>
              <div className="flex flex-wrap gap-2">
                {['Bastille', 'Nation', 'Oberkampf', 'Roquette', 'Voltaire', 'Saint-Ambroise', 'Popincourt'].map((q) => (
                  <span key={q} className="px-3 py-1 bg-grondin-50 text-grondin-700 rounded-full text-xs font-medium border border-grondin-100">{q}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-blue-800 mb-1">Paris 11ème — Code postal 75011</p>
              <p className="text-xs text-blue-700">Arrondissement très résidentiel, l'un des plus peuplés de Paris. Forte densité d'appartements avec escaliers étroits. Rues souvent à sens unique avec stationnement difficile — nous organisons un point de dépose-chargement optimisé pour minimiser le temps de portage.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[{ icon: 'ph:clock', title: 'Disponible 7j/7', desc: '8h30 à 20h' }, { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle' }, { icon: 'ph:star-fill', title: '4,9/5 sur Google', desc: '34 avis vérifiés' }, { icon: 'ph:users', title: '1 500+ clients', desc: 'Paris et IDF' }].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-grondin-50 rounded-xl"><Icon icon={item.icon} width={20} height={20} className="text-grondin-500 flex-shrink-0 mt-0.5" aria-hidden /><div><p className="font-semibold text-neutral-900 text-sm">{item.title}</p><p className="text-xs text-neutral-600">{item.desc}</p></div></div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-grondin-900 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Devis gratuit 11ème</h3>
              <p className="text-grondin-200 text-sm mb-4">Réponse sous 24h.</p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors"><Icon icon="ph:file-text" width={18} height={18} aria-hidden />Mon devis</Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm"><Icon icon="ph:phone" width={16} height={16} aria-hidden />01 85 44 00 50</a>
            </div>
            <Link href="/demenagement-paris" className="flex items-center gap-2 p-4 bg-neutral-50 rounded-xl text-sm text-neutral-600 hover:bg-grondin-50 hover:text-grondin-600 transition-colors border border-neutral-200"><Icon icon="ph:arrow-left" width={16} height={16} aria-hidden />Tous les arrondissements</Link>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Arrondissements voisins</p>
              <div className="flex flex-col gap-1">
        <Link href="/demenagement-paris/3eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 3ème arr.</Link>
        <Link href="/demenagement-paris/10eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 10ème arr.</Link>
        <Link href="/demenagement-paris/12eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 12ème arr.</Link>
        <Link href="/demenagement-paris/20eme-arrondissement" className="text-sm text-grondin-600 hover:text-grondin-500 hover:underline">→ 20ème arr.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection items={FAQ} title="Questions sur le déménagement dans le 11ème" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
