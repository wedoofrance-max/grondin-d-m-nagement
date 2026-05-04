'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import type { DevisData } from '@/types'

const FORMULES = [
  { value: 'economique', label: 'Économique',   sub: 'Manutention complète et protection mobilier', icon: 'ph:package' },
  { value: 'confort',    label: 'Confort',       sub: 'Montage mobilier + cartons inclus',           icon: 'ph:star' },
  { value: 'premium',    label: 'Premium',       sub: 'Prise en charge intégrale de A à Z',          icon: 'ph:crown' },
  { value: 'conseil',    label: 'Je ne sais pas encore', sub: 'On vous conseille gratuitement',      icon: 'ph:question' },
]

const FLEXIBILITE = [
  { value: 'fixe',    label: 'Date fixe' },
  { value: 'semaine', label: '± 1 semaine' },
  { value: 'mois',    label: '± 1 mois' },
  { value: 'aucune',  label: 'Pas de date' },
]

interface Props {
  data:   Partial<DevisData>
  onNext: (d: Partial<DevisData>) => void
  onPrev: () => void
}

export function DevisStep3({ data, onNext, onPrev }: Props) {
  const [dateSouhaitee, setDateSouhaitee] = useState<string>(data.dateSouhaitee || '')
  const [flexibilite,   setFlexibilite]   = useState<string>(data.flexibilite   || '')
  const [formule,       setFormule]       = useState<string>(data.formule       || '')
  const [errors,        setErrors]        = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!flexibilite) e.flexibilite = 'Choisissez la flexibilité de votre date'
    if (!formule)     e.formule     = 'Sélectionnez une formule'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-fluid-xl font-bold text-neutral-900 mb-1">Date & formule</h2>
        <p className="text-sm text-neutral-500">Quand souhaitez-vous déménager et quelle formule vous convient ?</p>
      </div>

      <div>
        <label htmlFor="dateSouhaitee" className="block text-sm font-semibold text-neutral-800 mb-2">
          Date souhaitée <span className="text-neutral-400 text-xs font-normal">(optionnel)</span>
        </label>
        <input
          id="dateSouhaitee"
          type="date"
          value={dateSouhaitee}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setDateSouhaitee(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 text-base focus:outline-none focus:border-grondin-500 bg-white"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-neutral-800 mb-3">
          Flexibilité <span className="text-error-500">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {FLEXIBILITE.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFlexibilite(f.value)}
              className={`py-2.5 px-3 rounded-xl border-2 text-sm font-medium transition-all ${flexibilite === f.value ? 'border-grondin-500 bg-grondin-50 text-grondin-700' : 'border-neutral-200 text-neutral-600 hover:border-grondin-300'}`}
              aria-pressed={flexibilite === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>
        {errors.flexibilite && (
          <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
            <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
            {errors.flexibilite}
          </p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-neutral-800 mb-3">
          Formule <span className="text-error-500">*</span>
        </legend>
        <div className="flex flex-col gap-2">
          {FORMULES.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFormule(f.value)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${formule === f.value ? 'border-grondin-500 bg-grondin-50' : 'border-neutral-200 hover:border-grondin-300'}`}
              aria-pressed={formule === f.value}
            >
              <Icon icon={f.icon} width={18} height={18} className={formule === f.value ? 'text-grondin-500' : 'text-neutral-400'} aria-hidden />
              <div>
                <p className={`text-sm font-semibold ${formule === f.value ? 'text-grondin-700' : 'text-neutral-800'}`}>{f.label}</p>
                <p className="text-xs text-neutral-500">{f.sub}</p>
              </div>
              {f.value === 'confort' && (
                <span className="ml-auto text-xs font-bold text-white bg-brand-amber rounded-full px-2 py-0.5">★ Recommandée</span>
              )}
            </button>
          ))}
        </div>
        {errors.formule && (
          <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
            <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
            {errors.formule}
          </p>
        )}
      </fieldset>

      <div className="flex gap-3">
        <Button variant="outline" size="lg" icon="ph:arrow-left" iconPos="left" onClick={onPrev} className="flex-1">
          Retour
        </Button>
        <Button variant="primary" size="lg" icon="ph:arrow-right" onClick={() => { if (validate()) onNext({ dateSouhaitee, flexibilite, formule }) }} className="flex-[2]">
          Continuer
        </Button>
      </div>
    </div>
  )
}
