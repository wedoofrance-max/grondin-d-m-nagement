'use client'
import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

const STATS = [
  { value: 1500, suffix: '+', label: 'Clients accompagnés',  icon: 'ph:users-three' },
  { value: 20,   suffix: '+', label: 'Partenaires B2B',      icon: 'ph:handshake' },
  { value: 98,   suffix: '%', label: 'Taux de satisfaction', icon: 'ph:star-fill' },
]

function useCountUp(target: number, duration = 1500, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return count
}

function StatItem({ stat }: { stat: typeof STATS[number] }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.value, 1500, triggered)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 py-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-grondin-500/20">
        <Icon icon={stat.icon} width={24} height={24} className="text-grondin-300" aria-hidden />
      </div>
      <div className="text-fluid-4xl font-extrabold text-white text-center" aria-live="polite">
        {count}{stat.suffix}
      </div>
      <p className="text-white/60 text-sm text-center font-medium">{stat.label}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-grondin-900 py-16" aria-label="Chiffres clés Grondin Déménagement">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-3 gap-0 divide-x divide-white/10">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
