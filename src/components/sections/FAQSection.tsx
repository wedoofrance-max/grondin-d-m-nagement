'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer:   string
}

interface FAQSectionProps {
  items:    FAQItem[]
  title?:   string
  eyebrow?: string
}

export function FAQSection({
  items,
  title   = 'Foire aux questions',
  eyebrow = 'FAQ',
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-neutral-50" aria-label="Questions fréquentes">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-grondin-500 text-xs font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h2 className="text-fluid-4xl font-bold text-neutral-900">{title}</h2>
        </div>

        <dl className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl border bg-white overflow-hidden transition-all duration-300',
                open === i ? 'border-grondin-200 shadow-lg' : 'border-neutral-200'
              )}
            >
              <dt>
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grondin-500 focus-visible:ring-inset"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <h3 className="text-base font-semibold text-neutral-900 pr-4">
                    {item.question}
                  </h3>
                  <Icon
                    icon="ph:caret-down"
                    width={20}
                    height={20}
                    className={cn('flex-shrink-0 text-grondin-500 transition-transform duration-300', open === i ? 'rotate-180' : '')}
                    aria-hidden
                  />
                </button>
              </dt>
              <dd className={cn('overflow-hidden transition-all duration-300', open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
                <p className="px-6 pb-6 text-neutral-600 leading-relaxed text-sm">
                  {item.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
