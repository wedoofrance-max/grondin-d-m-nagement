'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import type { DevisData } from '@/types'

interface Props {
  data:   Partial<DevisData>
  onNext: (d: Partial<DevisData>) => void
  onPrev: () => void
}

interface AddressFields {
  ville:      string
  cp:         string
  etage:      number
  ascenseur:  boolean
}

function AddressBlock({
  label,
  fields,
  errors,
  onChange,
  idPrefix,
}: {
  label:    string
  fields:   AddressFields
  errors:   Partial<Record<keyof AddressFields, string>>
  onChange: (field: keyof AddressFields, value: string | number | boolean) => void
  idPrefix: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-neutral-800 border-b border-neutral-100 pb-2">{label}</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${idPrefix}-ville`} className="block text-xs font-medium text-neutral-600 mb-1">
            Ville <span className="text-error-500">*</span>
          </label>
          <input
            id={`${idPrefix}-ville`}
            type="text"
            placeholder="Paris"
            value={fields.ville}
            onChange={(e) => onChange('ville', e.target.value)}
            className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm focus:outline-none focus:border-grondin-500 ${errors.ville ? 'border-error-500' : 'border-neutral-300'}`}
          />
          {errors.ville && (
            <p className="mt-1 text-xs text-error-500 flex items-center gap-1">
              <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
              {errors.ville}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-cp`} className="block text-xs font-medium text-neutral-600 mb-1">
            Code postal <span className="text-error-500">*</span>
          </label>
          <input
            id={`${idPrefix}-cp`}
            type="text"
            inputMode="numeric"
            placeholder="75001"
            maxLength={5}
            value={fields.cp}
            onChange={(e) => onChange('cp', e.target.value)}
            className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm focus:outline-none focus:border-grondin-500 ${errors.cp ? 'border-error-500' : 'border-neutral-300'}`}
          />
          {errors.cp && (
            <p className="mt-1 text-xs text-error-500 flex items-center gap-1">
              <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
              {errors.cp}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${idPrefix}-etage`} className="block text-xs font-medium text-neutral-600 mb-1">
            Étage
          </label>
          <input
            id={`${idPrefix}-etage`}
            type="number"
            inputMode="numeric"
            min="0"
            max="50"
            placeholder="0"
            value={fields.etage}
            onChange={(e) => onChange('etage', +e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border-2 border-neutral-300 text-sm focus:outline-none focus:border-grondin-500"
          />
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-600 mb-1">Ascenseur</p>
          <div className="flex gap-2 mt-1">
            {([true, false] as const).map((val) => (
              <button
                key={String(val)}
                type="button"
                onClick={() => onChange('ascenseur', val)}
                className={`flex-1 py-2 rounded-xl border-2 text-sm font-medium transition-all ${fields.ascenseur === val ? 'border-grondin-500 bg-grondin-50 text-grondin-700' : 'border-neutral-200 text-neutral-600 hover:border-grondin-300'}`}
                aria-pressed={fields.ascenseur === val}
              >
                {val ? 'Oui' : 'Non'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function DevisStep2({ data, onNext, onPrev }: Props) {
  const [depart,  setDepart]  = useState<AddressFields>({
    ville:     data.villeDepart     || '',
    cp:        data.cpDepart        || '',
    etage:     data.etageDepart     ?? 0,
    ascenseur: data.ascenseurDepart ?? false,
  })
  const [arrivee, setArrivee] = useState<AddressFields>({
    ville:     data.villeArrivee     || '',
    cp:        data.cpArrivee        || '',
    etage:     data.etageArrivee     ?? 0,
    ascenseur: data.ascenseurArrivee ?? false,
  })
  const [errorsD, setErrorsD] = useState<Partial<Record<keyof AddressFields, string>>>({})
  const [errorsA, setErrorsA] = useState<Partial<Record<keyof AddressFields, string>>>({})

  const validate = () => {
    const ed: typeof errorsD = {}
    const ea: typeof errorsA = {}
    if (!depart.ville)         ed.ville = 'Indiquez la ville de départ'
    if (depart.cp.length !== 5) ed.cp   = 'Code postal à 5 chiffres'
    if (!arrivee.ville)         ea.ville = "Indiquez la ville d'arrivée"
    if (arrivee.cp.length !== 5) ea.cp  = 'Code postal à 5 chiffres'
    setErrorsD(ed)
    setErrorsA(ea)
    return Object.keys(ed).length === 0 && Object.keys(ea).length === 0
  }

  const handleNext = () => {
    if (!validate()) return
    onNext({
      villeDepart:      depart.ville,
      cpDepart:         depart.cp,
      etageDepart:      depart.etage,
      ascenseurDepart:  depart.ascenseur,
      villeArrivee:     arrivee.ville,
      cpArrivee:        arrivee.cp,
      etageArrivee:     arrivee.etage,
      ascenseurArrivee: arrivee.ascenseur,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-fluid-xl font-bold text-neutral-900 mb-1">Vos adresses</h2>
        <p className="text-sm text-neutral-500">Départ et arrivée de votre déménagement.</p>
      </div>

      <AddressBlock
        label="Adresse de départ"
        idPrefix="depart"
        fields={depart}
        errors={errorsD}
        onChange={(field, value) => setDepart((prev) => ({ ...prev, [field]: value }))}
      />

      <div className="flex items-center gap-3 py-1">
        <div className="flex-1 h-px bg-neutral-200" />
        <Icon icon="ph:arrow-down" width={20} height={20} className="text-grondin-400" aria-hidden />
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <AddressBlock
        label="Adresse d'arrivée"
        idPrefix="arrivee"
        fields={arrivee}
        errors={errorsA}
        onChange={(field, value) => setArrivee((prev) => ({ ...prev, [field]: value }))}
      />

      <div className="flex gap-3">
        <Button variant="outline" size="lg" icon="ph:arrow-left" iconPos="left" onClick={onPrev} className="flex-1">
          Retour
        </Button>
        <Button variant="primary" size="lg" icon="ph:arrow-right" onClick={handleNext} className="flex-[2]">
          Continuer
        </Button>
      </div>
    </div>
  )
}
