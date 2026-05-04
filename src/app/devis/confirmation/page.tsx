import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ConfirmationContent } from './ConfirmationContent'

export const metadata: Metadata = {
  title: 'Demande envoyée — Grondin Déménagement',
  robots: { index: false, follow: false },
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50 flex items-center justify-center" />}>
      <ConfirmationContent />
    </Suspense>
  )
}
