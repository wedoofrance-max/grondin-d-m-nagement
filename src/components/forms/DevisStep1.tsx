'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import type { DevisData } from '@/types'

const TYPES_BIEN = [
  { value: 'appartement', label: 'Appartement', icon: 'ph:buildings' },
  { value: 'maison',      label: 'Maison',       icon: 'ph:house' },
  { value: 'bureau',      label: 'Bureau',        icon: 'ph:briefcase' },
  { value: 'autre',       label: 'Autre',         icon: 'ph:dots-three' },
]

const NB_PIECES = [
  { value: 1, label: '1 pièce' },
  { value: 2, label: '2 pièces' },
  { value: 3, label: '3 pièces' },
  { value: 4, label: '4 pièces' },
  { value: 5, label: '5 pièces+' },
]

interface Props {
  data:   Partial<DevisData>
  onNext: (d: Partial<DevisData>) => void
}

export function DevisStep1({ data, onNext }: Props) {
  const [typeBien,   setTypeBien]   = useState<string>(data.typeBien || '')
  const [superficie, setSuperficie] = useState<string>(data.superficie ? String(data.superficie) : '')
  const [nbPieces,   setNbPieces]   = useState<number>(data.nbPieces || 0)
  const [errors,     setErrors]     = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!typeBien)                      e.typeBien   = 'Sélectionnez un type de bien'
    if (!superficie || +superficie < 5) e.superficie = 'Indiquez une superficie valide'
    if (!nbPieces)                      e.nbPieces   = 'Sélectionnez le nombre de pièces'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-fluid-xl font-bold text-neutral-900 mb-1">Parlez-nous de votre bien</h2>
        <p className="text-sm text-neutral-500">Ces informations nous permettent de vous faire une estimation précise.</p>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-neutral-800 mb-3">
          Type de bien <span className="text-error-500">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {TYPES_BIEN.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTypeBien(t.value)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left text-sm font-medium transition-all duration-200 ${typeBien === t.value ? 'border-grondin-500 bg-grondin-50 text-grondin-700' : 'border-neutral-200 bg-white text-neutral-700 hover:border-grondin-300'}`}
              aria-pressed={typeBien === t.value}
            >
              <Icon icon={t.icon} width={20} height={20} aria-hidden />
              {t.label}
            </button>
          ))}
        </div>
        {errors.typeBien && (
          <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
            <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
            {errors.typeBien}
          </p>
        )}
      </fieldset>

      <div>
        <label htmlFor="superficie" className="block text-sm font-semibold text-neutral-800 mb-2">
          Superficie (m²) <span className="text-error-500">*</span>
        </label>
        <input
          id="superficie"
          type="number"
          inputMode="numeric"
          min="5"
          max="1000"
          placeholder="ex : 65"
          value={superficie}
          onChange={(e) => setSuperficie(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border-2 text-base focus:outline-none focus:ring-2 focus:ring-grondin-200 transition-colors duration-200 ${errors.superficie ? 'border-error-500 bg-error-50' : 'border-neutral-300 focus:border-grondin-500 bg-white'}`}
        />
        {errors.superficie && (
          <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
            <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
            {errors.superficie}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-neutral-800 mb-3">
          Nombre de pièces <span className="text-error-500">*</span>
        </legend>
        <div className="flex gap-2 flex-wrap">
          {NB_PIECES.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setNbPieces(p.value)}
              className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${nbPieces === p.value ? 'border-grondin-500 bg-grondin-500 text-white' : 'border-neutral-200 bg-white text-neutral-700 hover:border-grondin-300'}`}
              aria-pressed={nbPieces === p.value}
            >
              {p.label}
            </button>
          ))}
        </div>
        {errors.nbPieces && (
          <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
            <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
            {errors.nbPieces}
          </p>
        )}
      </fieldset>

      <Button variant="primary" size="lg" icon="ph:arrow-right" fullWidth onClick={() => { if (validate()) onNext({ typeBien, superficie: +superficie, nbPieces }) }}>
        Continuer
      </Button>
    </div>
  )
}
