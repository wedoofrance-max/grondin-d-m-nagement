'use client'
import { useEffect } from 'react'
import { Icon } from '@iconify/react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6">
          <Icon icon="ph:warning-circle-fill" width={48} height={48} className="text-red-500" aria-hidden />
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">Une erreur est survenue</h1>
        <p className="text-neutral-600 mb-8">
          Nous nous excusons pour la gêne occasionnée. Notre équipe a été notifiée.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 bg-grondin-500 text-white rounded-xl font-semibold hover:bg-grondin-600 transition-colors"
          >
            <Icon icon="ph:arrow-clockwise" width={18} height={18} aria-hidden />
            Réessayer
          </button>
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl font-semibold hover:border-grondin-400 hover:text-grondin-600 transition-colors"
          >
            <Icon icon="ph:house" width={18} height={18} aria-hidden />
            Accueil
          </a>
        </div>
      </div>
    </div>
  )
}
