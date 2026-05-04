'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/Button'
import type { DevisData } from '@/types'

interface Props {
  data:     Partial<DevisData>
  loading:  boolean
  onSubmit: (d: Partial<DevisData>) => void
  onPrev:   () => void
}

export function DevisStep4({ data, loading, onSubmit, onPrev }: Props) {
  const [prenom,       setPrenom]       = useState(data.prenom    || '')
  const [nom,          setNom]          = useState(data.nom       || '')
  const [telephone,    setTelephone]    = useState(data.telephone || '')
  const [email,        setEmail]        = useState(data.email     || '')
  const [message,      setMessage]      = useState(data.message   || '')
  const [rgpdAccepted, setRgpdAccepted] = useState(false)
  const [newsletter,   setNewsletter]   = useState(false)
  const [errors,       setErrors]       = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!prenom.trim())                                          e.prenom    = 'Indiquez votre prénom'
    if (!nom.trim())                                             e.nom       = 'Indiquez votre nom'
    if (telephone.replace(/\D/g, '').length < 10)               e.telephone = 'Numéro invalide'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))              e.email     = 'Email invalide'
    if (!rgpdAccepted)                                           e.rgpd      = 'Vous devez accepter les conditions'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-fluid-xl font-bold text-neutral-900 mb-1">Vos coordonnées</h2>
        <p className="text-sm text-neutral-500">Pour vous envoyer votre devis personnalisé.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="prenom" className="block text-sm font-semibold text-neutral-800 mb-1.5">
            Prénom <span className="text-error-500">*</span>
          </label>
          <input
            id="prenom" type="text" autoComplete="given-name" placeholder="Marie"
            value={prenom} onChange={(e) => setPrenom(e.target.value)}
            className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm focus:outline-none focus:border-grondin-500 ${errors.prenom ? 'border-error-500' : 'border-neutral-300'}`}
          />
          {errors.prenom && <p className="mt-1 text-xs text-error-500">{errors.prenom}</p>}
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-neutral-800 mb-1.5">
            Nom <span className="text-error-500">*</span>
          </label>
          <input
            id="nom" type="text" autoComplete="family-name" placeholder="Dupont"
            value={nom} onChange={(e) => setNom(e.target.value)}
            className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm focus:outline-none focus:border-grondin-500 ${errors.nom ? 'border-error-500' : 'border-neutral-300'}`}
          />
          {errors.nom && <p className="mt-1 text-xs text-error-500">{errors.nom}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          Téléphone <span className="text-error-500">*</span>
        </label>
        <input
          id="telephone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78"
          value={telephone} onChange={(e) => setTelephone(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border-2 text-base focus:outline-none focus:border-grondin-500 ${errors.telephone ? 'border-error-500' : 'border-neutral-300'}`}
        />
        {errors.telephone && <p className="mt-1 text-xs text-error-500">{errors.telephone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          Email <span className="text-error-500">*</span>
        </label>
        <input
          id="email" type="email" inputMode="email" autoComplete="email" placeholder="marie.dupont@email.fr"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border-2 text-base focus:outline-none focus:border-grondin-500 ${errors.email ? 'border-error-500' : 'border-neutral-300'}`}
        />
        {errors.email && <p className="mt-1 text-xs text-error-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          Message <span className="text-neutral-400 text-xs font-normal">(optionnel)</span>
        </label>
        <textarea
          id="message" rows={3}
          placeholder="Piano, objets fragiles, accès difficile..."
          value={message} onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 text-base focus:outline-none focus:border-grondin-500 resize-none"
        />
      </div>

      {/* RGPD */}
      <div className="flex flex-col gap-2 pt-1">
        <label className={`flex items-start gap-3 cursor-pointer select-none ${errors.rgpd ? 'text-error-600' : 'text-neutral-700'}`}>
          <input
            type="checkbox"
            checked={rgpdAccepted}
            onChange={(e) => setRgpdAccepted(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-grondin-500 flex-shrink-0"
          />
          <span className="text-xs leading-relaxed">
            J&apos;accepte que mes données soient utilisées pour traiter ma demande de devis, conformément à la{' '}
            <a href="/legal/politique-de-confidentialite" className="underline hover:text-grondin-600" target="_blank">
              politique de confidentialité
            </a>
            . <span className="text-error-500">*</span>
          </span>
        </label>
        {errors.rgpd && (
          <p className="text-xs text-error-500 flex items-center gap-1 pl-7">
            <Icon icon="ph:warning-circle" width={12} height={12} aria-hidden />
            {errors.rgpd}
          </p>
        )}

        <label className="flex items-start gap-3 cursor-pointer select-none text-neutral-600">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-grondin-500 flex-shrink-0"
          />
          <span className="text-xs leading-relaxed">
            Je souhaite recevoir des conseils déménagement et les offres Grondin par email.
          </span>
        </label>
      </div>

      <p className="flex items-center gap-2 text-xs text-neutral-400">
        <Icon icon="ph:lock" width={12} height={12} aria-hidden />
        Données sécurisées — Devis gratuit · Sans engagement
      </p>

      <div className="flex gap-3">
        <Button variant="outline" size="lg" icon="ph:arrow-left" iconPos="left" onClick={onPrev} className="flex-1" disabled={loading}>
          Retour
        </Button>
        <Button
          variant="primary" size="lg" icon="ph:paper-plane-tilt" loading={loading}
          onClick={() => { if (validate()) onSubmit({ prenom, nom, telephone, email, message, rgpdAccepted, newsletter }) }}
          className="flex-[2]"
        >
          Obtenir mon devis
        </Button>
      </div>
    </div>
  )
}
