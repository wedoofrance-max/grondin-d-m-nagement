'use client'
import { addCollection } from '@iconify/react'
import ph from '@iconify-json/ph/icons.json'

// Register ph icons at module load — eliminates runtime CDN requests for all ph:* icons
addCollection(ph as Parameters<typeof addCollection>[0])

export function IconifyProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
