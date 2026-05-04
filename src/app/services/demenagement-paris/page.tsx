import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { GoogleReviews } from '@/components/trust/GoogleReviews'
import { Breadcrumb, BreadcrumbSchema } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Déménagement Paris — Déménageur Expert 7j/7 | Grondin',
  description: 'Grondin Déménagement : votre déménageur à Paris. Équipes expérimentées disponibles 7j/7 de 8h30 à 20h. Devis gratuit et personnalisé pour tous les arrondissements.',
  alternates: { canonical: 'https://grondin-demenagement.fr/services/demenagement-paris' },
}

const ARRONDISSEMENTS = [
  { num: '1er', href: '/demenagement-paris/1er-arrondissement' },
  { num: '2ème', href: '/demenagement-paris/2eme-arrondissement' },
  { num: '3ème', href: '/demenagement-paris/3eme-arrondissement' },
  { num: '4ème', href: '/demenagement-paris/4eme-arrondissement' },
  { num: '5ème', href: '/demenagement-paris/5eme-arrondissement' },
  { num: '6ème', href: '/demenagement-paris/6eme-arrondissement' },
  { num: '7ème', href: '/demenagement-paris/7eme-arrondissement' },
  { num: '8ème', href: '/demenagement-paris/8eme-arrondissement' },
  { num: '9ème', href: '/demenagement-paris/9eme-arrondissement' },
  { num: '10ème', href: '/demenagement-paris/10eme-arrondissement' },
  { num: '11ème', href: '/demenagement-paris/11eme-arrondissement' },
  { num: '12ème', href: '/demenagement-paris/12eme-arrondissement' },
  { num: '13ème', href: '/demenagement-paris/13eme-arrondissement' },
  { num: '14ème', href: '/demenagement-paris/14eme-arrondissement' },
  { num: '15ème', href: '/demenagement-paris/15eme-arrondissement' },
  { num: '16ème', href: '/demenagement-paris/16eme-arrondissement' },
  { num: '17ème', href: '/demenagement-paris/17eme-arrondissement' },
  { num: '18ème', href: '/demenagement-paris/18eme-arrondissement' },
  { num: '19ème', href: '/demenagement-paris/19eme-arrondissement' },
  { num: '20ème', href: '/demenagement-paris/20eme-arrondissement' },
]

const FAQ = [
  {
    question: 'Comment se déroule un déménagement à Paris avec Grondin ?',
    answer: 'Après votre demande de devis, un conseiller Grondin vous contacte sous 24h pour affiner les détails. Nous organisons une visite sur place pour établir un inventaire précis. Le jour J, notre équipe arrive à l\'heure convenue, protège vos meubles, charge le camion et dépose tout dans votre nouveau logement.',
  },
  {
    question: 'Grondin Déménagement intervient-il dans tous les arrondissements de Paris ?',
    answer: 'Oui, nous intervenons dans les 20 arrondissements de Paris sans exception. Nos équipes connaissent parfaitement les spécificités de chaque quartier : rues étroites, zones piétonnes, contraintes de stationnement.',
  },
  {
    question: 'Pouvez-vous déménager un appartement haussmannien au 6ème étage sans ascenseur ?',
    answer: 'Absolument. Nos déménageurs sont formés aux montées d\'escaliers difficiles. Pour les appartements aux étages élevés sans ascenseur, nous pouvons également déployer un monte-meubles depuis l\'extérieur.',
  },
  {
    question: 'Comment gérez-vous les difficultés de stationnement à Paris ?',
    answer: 'Nous sommes habitués aux contraintes parisiennes. Nous vous conseillons sur les démarches pour obtenir une autorisation de stationnement auprès de votre mairie d\'arrondissement. Nos camions sont dimensionnés pour s\'adapter aux rues parisiennes.',
  },
]

export default function DemenagementParisServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[
        { label: 'Nos services', href: 'https://grondin-demenagement.fr/services' },
        { label: 'Déménagement Paris', href: 'https://grondin-demenagement.fr/services/demenagement-paris' },
      ]} />

      <div className="bg-grondin-900 py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Nos services', href: '/services' },
            { label: 'Déménagement Paris' },
          ]} />
          <h1 className="text-fluid-4xl font-extrabold text-white mt-4 mb-3">
            Déménageur à Paris — Expert 7j/7
          </h1>
          <p className="text-white/70 text-fluid-lg max-w-2xl">
            Grondin Déménagement intervient dans tous les 20 arrondissements de Paris. Équipes professionnelles, devis gratuit, disponibles dès demain.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/devis" className="inline-flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-400 transition-colors">
              <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
              Devis gratuit
            </Link>
            <a href="tel:+33185440050" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
              <Icon icon="ph:phone" width={18} height={18} aria-hidden />
              01 85 44 00 50
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-fluid-2xl font-bold text-neutral-900 mb-6">
              Votre déménagement à Paris, pris en charge de A à Z
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Déménager à Paris est un défi : rues étroites, escaliers sans ascenseur, zones de stationnement réglementées, immeubles haussmanniens aux couloirs exigus. Grondin Déménagement connaît parfaitement ces contraintes et les anticipe pour vous.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Nos équipes sont formées aux spécificités parisiennes : manutention en espace réduit, monte-meubles, gestion des autorisations de stationnement, escaliers sans ascenseur et couloirs étroits des immeubles haussmanniens.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'ph:clock', title: 'Disponible 7j/7', desc: 'De 8h30 à 20h, y compris week-end et jours fériés' },
                { icon: 'ph:map-pin', title: '20 arrondissements', desc: 'Intervention dans tout Paris sans supplément de zone' },
                { icon: 'ph:shield-check', title: 'Assurance incluse', desc: 'RC Professionnelle sur tous nos déménagements' },
                { icon: 'ph:users', title: '+1 500 clients', desc: 'Note 4,9/5 sur Google — 34 avis vérifiés' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-grondin-50 rounded-xl">
                  <div className="w-10 h-10 bg-grondin-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={item.icon} width={18} height={18} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{item.title}</p>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-fluid-xl font-bold text-neutral-900 mb-4">
              Déménagement par arrondissement
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {ARRONDISSEMENTS.map((arr) => (
                <Link
                  key={arr.num}
                  href={arr.href}
                  className="flex items-center justify-center p-2.5 bg-neutral-50 hover:bg-grondin-50 hover:text-grondin-600 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 transition-colors text-center"
                >
                  Paris {arr.num}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/grondin-immeuble-paris.webp"
                alt="Déménageur Grondin entrant dans un immeuble parisien avec les affaires"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white rounded-3xl border-2 border-grondin-200 p-6">
              <h3 className="font-bold text-neutral-900 mb-2">Devis gratuit en 2 minutes</h3>
              <p className="text-sm text-neutral-600 mb-4">
                Réponse sous 24h. Visite sur place incluse.
              </p>
              <Link href="/devis" className="flex items-center justify-center gap-2 w-full py-3 bg-grondin-500 text-white rounded-xl font-bold hover:bg-grondin-600 transition-colors">
                <Icon icon="ph:file-text" width={18} height={18} aria-hidden />
                Obtenir mon devis
              </Link>
              <a href="tel:+33185440050" className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors text-sm">
                <Icon icon="ph:phone" width={18} height={18} aria-hidden />
                01 85 44 00 50
              </a>
            </div>
            <div className="bg-grondin-900 rounded-2xl p-5 text-white text-sm">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="ph:star-fill" width={16} height={16} className="text-amber-400" aria-hidden />
                <span className="font-bold">4,9/5 — 34 avis Google</span>
              </div>
              <p className="text-grondin-200 text-xs">Plus de 1 500 déménagements réalisés avec succès à Paris et en Île-de-France.</p>
            </div>
          </div>
        </div>
      </div>

      <GoogleReviews />
      <FAQSection items={FAQ} title="Questions sur le déménagement à Paris" eyebrow="FAQ" />
      <CTASection />
    </div>
  )
}
