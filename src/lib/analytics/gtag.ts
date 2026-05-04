export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function pageview(url: string) {
  if (typeof window !== 'undefined' && GA_ID && window.gtag) {
    window.gtag('config', GA_ID, { page_path: url })
  }
}

export function event(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params)
  }
}
