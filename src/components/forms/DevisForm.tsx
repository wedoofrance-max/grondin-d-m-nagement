'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { DevisStep1 } from './DevisStep1'
import { DevisStep2 } from './DevisStep2'
import { DevisStep3 } from './DevisStep3'
import { DevisStep4 } from './DevisStep4'
import { track } from '@/lib/analytics/events'
import type { DevisData } from '@/types'

const STEPS = [
  { label: 'Votre projet',    icon: 'ph:house' },
  { label: 'Les adresses',    icon: 'ph:map-pin' },
  { label: 'Date & formule',  icon: 'ph:calendar-check' },
  { label: 'Vos coordonnées', icon: 'ph:user-circle' },
]

export function DevisForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [loading,     setLoading]     = useState(false)
  const [error,       setError]       = useState<string | null>(null)
  const [data,        setData]        = useState<Partial<DevisData>>({})

  const updateData = (partial: Partial<DevisData>) =>
    setData((prev) => ({ ...prev, ...partial }))

  const next = () => {
    const step = currentStep + 1
    setCurrentStep((s) => Math.min(s + 1, 3))
    track.devisStep(step)
  }
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0))

  const handleSubmit = async (step4Data: Partial<DevisData>) => {
    setLoading(true)
    setError(null)
    const payload: Partial<DevisData> = {
      ...data,
      ...step4Data,
      // Defaults pour champs non collectés par le formulaire
      needDismounting: data.needDismounting ?? false,
      needPacking:     data.needPacking     ?? false,
      needFullPacking: data.needFullPacking ?? false,
      needCleaning:    data.needCleaning    ?? false,
      needMonteMeuble: data.needMonteMeuble ?? false,
      needStorage:     data.needStorage     ?? false,
    }

    try {
      const res = await fetch('/api/devis/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error ?? 'Erreur lors de l\'envoi')
      }

      const result = await res.json() as { ref: string; id: string }
      track.devisSubmitted(result.ref)
      router.push(`/devis/confirmation?ref=${result.ref}`)
    } catch (err) {
      console.error('[DevisForm] submit error:', err)
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler au 01 85 44 00 50.')
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
              <div className={`w-9 h-9 flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-300 ${
                i < currentStep  ? 'bg-grondin-500 text-white shadow-grondin' :
                i === currentStep ? 'bg-grondin-500 text-white ring-4 ring-grondin-100' :
                'bg-neutral-100 text-neutral-400'
              }`}>
                {i < currentStep
                  ? <Icon icon="ph:check-fat" width={16} height={16} aria-hidden />
                  : <Icon icon={step.icon} width={16} height={16} aria-hidden />
                }
              </div>
              <span className={`text-[10px] font-medium text-center hidden sm:block ${i === currentStep ? 'text-grondin-600' : 'text-neutral-400'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-grondin-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
            role="progressbar"
            aria-valuenow={currentStep + 1}
            aria-valuemin={1}
            aria-valuemax={4}
            aria-label={`Étape ${currentStep + 1} sur 4`}
          />
        </div>
        <p className="text-xs text-neutral-500 text-right mt-1">Étape {currentStep + 1} / 4</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-6">
        <p className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
          <Icon icon="ph:lock" width={12} height={12} aria-hidden />
          Devis gratuit · Sans engagement · Données sécurisées
        </p>

        {currentStep === 0 && (
          <DevisStep1 data={data} onNext={(d) => { updateData(d); next() }} />
        )}
        {currentStep === 1 && (
          <DevisStep2 data={data} onNext={(d) => { updateData(d); next() }} onPrev={prev} />
        )}
        {currentStep === 2 && (
          <DevisStep3 data={data} onNext={(d) => { updateData(d); next() }} onPrev={prev} />
        )}
        {currentStep === 3 && (
          <DevisStep4 data={data} loading={loading} onSubmit={handleSubmit} onPrev={prev} />
        )}

        {error && (
          <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            <Icon icon="ph:warning-circle" width={16} height={16} className="flex-shrink-0 mt-0.5" aria-hidden />
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
