'use client'
import { motion, type Variants } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
}

export function HeroSection() {
  const router = useRouter()
  const [villeDepart,   setVilleDepart]   = useState('')
  const [villeArrivee,  setVilleArrivee]  = useState('')
  const [dateSouhaitee, setDateSouhaitee] = useState('')

  const handleQuickDevis = (e: React.FormEvent) => {
    e.preventDefault()
    const p = new URLSearchParams()
    if (villeDepart)   p.set('depart',  villeDepart)
    if (villeArrivee)  p.set('arrivee', villeArrivee)
    if (dateSouhaitee) p.set('date',    dateSouhaitee)
    router.push(`/devis?${p.toString()}`)
  }

  return (
    <section className="relative overflow-hidden" aria-label="Section principale">

      {/* ── Full-bleed photo area ── */}
      <div className="relative flex flex-col min-h-[600px] lg:min-h-[680px]">
        {/* LCP image — loaded eagerly with priority */}
        <Image
          src="/images/hero-demenagement-paris.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          style={{ zIndex: 0 }}
          aria-hidden
        />

        {/* Blurred decorative layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:    "url('/images/hero-demenagement-paris.webp')",
            backgroundSize:     'cover',
            backgroundPosition: 'center',
            filter:             'blur(6px)',
            transform:          'scale(1.06)',
            zIndex:             1,
          }}
          aria-hidden
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ zIndex: 2, background: 'linear-gradient(to top, rgba(7,26,46,0.72) 0%, rgba(7,26,46,0.38) 50%, rgba(7,26,46,0.18) 100%)' }}
          aria-hidden
        />

        {/* Floating social proof — top right, z-[3] */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-6 right-6 lg:right-10"
          style={{ zIndex: 3 }}
        >
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} icon="ph:star-fill" width={13} height={13} className="text-amber-400" aria-hidden />
              ))}
            </div>
            <div className="border-l border-neutral-200 pl-3">
              <p className="text-xs font-bold text-neutral-900 leading-none">4,9 / 5</p>
              <p className="text-xs text-neutral-500 mt-0.5">34 avis Google</p>
            </div>
          </div>
        </motion.div>

        {/* Main content — centered over photo, z-[3] */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-8"
          style={{ zIndex: 3 }}
        >
          {/* Live badge */}
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden />
              Disponible 7j/7 · 8h30–20h · Paris & Île-de-France
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-fluid-5xl font-extrabold text-white leading-[1.06] tracking-tight max-w-3xl"
          >
            Déménageur Paris{' '}
            & Île-de-France
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-fluid-lg text-white/70 max-w-lg leading-relaxed"
          >
            Mieux organisé. Mieux protégé. Mieux déménagé.
            <br className="hidden sm:block" />
            Assurance incluse · Réponse sous 24h
          </motion.p>

          {/* Trust row */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-5">
            {[
              { icon: 'ph:users-three',  text: '1 500+ clients accompagnés', color: 'text-grondin-400' },
              { icon: 'ph:shield-check', text: 'RC Pro incluse',              color: 'text-grondin-400' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5 text-sm text-white/70">
                <Icon icon={item.icon} width={15} height={15} className={item.color} aria-hidden />
                {item.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Inline quick-devis form — pinned to bottom of photo, z-[3] ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.65, ease: 'easeOut' }}
          className="relative px-4 pb-0"
          style={{ zIndex: 3 }}
        >
          <form
            onSubmit={handleQuickDevis}
            className="max-w-4xl mx-auto bg-white rounded-2xl lg:rounded-[20px] shadow-2xl overflow-hidden"
            aria-label="Démarrer votre demande de devis"
          >
            <div className="flex flex-col lg:flex-row">

              {/* Ville départ */}
              <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b lg:border-b-0 lg:border-r border-neutral-100 hover:bg-grondin-50/40 transition-colors">
                <Icon icon="ph:map-pin" width={20} height={20} className="text-grondin-400 flex-shrink-0" aria-hidden />
                <div className="flex-1 min-w-0">
                  <label htmlFor="hero-depart" className="block text-xs font-bold text-neutral-500 uppercase tracking-wide mb-0.5">
                    Ville de départ
                  </label>
                  <input
                    id="hero-depart"
                    type="text"
                    placeholder="Paris, Versailles…"
                    value={villeDepart}
                    onChange={(e) => setVilleDepart(e.target.value)}
                    className="w-full text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none placeholder:font-normal placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* Ville arrivée */}
              <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b lg:border-b-0 lg:border-r border-neutral-100 hover:bg-grondin-50/40 transition-colors">
                <Icon icon="ph:map-pin-fill" width={20} height={20} className="text-grondin-500 flex-shrink-0" aria-hidden />
                <div className="flex-1 min-w-0">
                  <label htmlFor="hero-arrivee" className="block text-xs font-bold text-neutral-500 uppercase tracking-wide mb-0.5">
                    Ville d&apos;arrivée
                  </label>
                  <input
                    id="hero-arrivee"
                    type="text"
                    placeholder="Boulogne, Montreuil…"
                    value={villeArrivee}
                    onChange={(e) => setVilleArrivee(e.target.value)}
                    className="w-full text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none placeholder:font-normal placeholder:text-neutral-400"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 px-5 py-4 border-b lg:border-b-0 lg:border-r border-neutral-100 hover:bg-grondin-50/40 transition-colors lg:min-w-[200px]">
                <Icon icon="ph:calendar-blank" width={20} height={20} className="text-grondin-400 flex-shrink-0" aria-hidden />
                <div className="flex-1 min-w-0">
                  <label htmlFor="hero-date" className="block text-xs font-bold text-neutral-500 uppercase tracking-wide mb-0.5">
                    Date souhaitée
                  </label>
                  <input
                    id="hero-date"
                    type="date"
                    value={dateSouhaitee}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDateSouhaitee(e.target.value)}
                    className="w-full text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* CTA button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2.5 px-8 py-5 bg-grondin-500 text-white font-bold text-base hover:bg-grondin-600 transition-colors flex-shrink-0"
                aria-label="Obtenir mon devis gratuit"
              >
                <Icon icon="ph:arrow-right-bold" width={20} height={20} aria-hidden />
                <span>Devis gratuit</span>
              </button>

            </div>
          </form>
        </motion.div>

        {/* Breathing space under form */}
        <div className="h-10" style={{ zIndex: 3, position: 'relative' }} aria-hidden />
      </div>

    </section>
  )
}
