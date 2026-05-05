'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const PAGE_SIZE = 9

const FILTER_MAP: Record<string, string[] | null> = {
  'Tout':          null,
  'Organisation':  ['Organisation', 'Guide', 'Logistique'],
  'Emballage':     ['Emballage', 'Équipement', 'Objets précieux'],
  'Administratif': ['Administratif', 'Réglementation', 'Locataire', 'Juridique'],
  'Budget':        ['Budget'],
  'Transport':     ['Longue distance', 'Stockage'],
  'Profils':       ['Famille', 'Étudiant', 'Senior'],
  'Divers':        ['Paris', 'Saisonnier', 'Animaux', 'Écologie', 'Conseils'],
}

export interface ArticleMeta {
  slug: string
  title: string
  excerpt: string
  icon: string
  tag: string
  readTime: string
}

export function ConseilsClient({ articles }: { articles: ArticleMeta[] }) {
  const [search, setSearch]           = useState('')
  const [activeFilter, setActiveFilter] = useState('Tout')
  const [page, setPage]               = useState(1)

  const filtered = useMemo(() => {
    let result = articles
    const tags = FILTER_MAP[activeFilter]
    if (tags) result = result.filter(a => tags.includes(a.tag))
    const q = search.toLowerCase().trim()
    if (q) result = result.filter(a =>
      a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
    )
    return result
  }, [articles, activeFilter, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage   = Math.min(page, totalPages)
  const visible    = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const handleFilter = (f: string) => { setActiveFilter(f); setPage(1) }
  const handleSearch = (v: string) => { setSearch(v);        setPage(1) }

  return (
    <div>
      {/* ── Search + Filters ── */}
      <div className="mb-10 space-y-4">
        <div className="relative max-w-lg">
          <Icon
            icon="ph:magnifying-glass" width={18} height={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
            aria-hidden
          />
          <input
            type="search"
            placeholder="Rechercher un conseil..."
            value={search}
            onChange={e => handleSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 text-sm border border-neutral-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-grondin-500/30 focus:border-grondin-500 transition-colors"
            aria-label="Rechercher dans les conseils"
          />
          {search && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Effacer la recherche"
            >
              <Icon icon="ph:x" width={16} height={16} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          {Object.keys(FILTER_MAP).map(f => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              aria-pressed={activeFilter === f}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-grondin-500 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-grondin-50 hover:text-grondin-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results count ── */}
      {(search || activeFilter !== 'Tout') && (
        <p className="text-sm text-neutral-500 mb-6">
          {filtered.length} article{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
          {activeFilter !== 'Tout' && <> · <span className="font-medium">{activeFilter}</span></>}
          {search && <> · &ldquo;{search}&rdquo;</>}
        </p>
      )}

      {/* ── Grid ── */}
      {visible.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map(article => (
            <Link
              key={article.slug}
              href={`/conseils/${article.slug}`}
              className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-neutral-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center bg-grondin-50 rounded-xl group-hover:bg-grondin-500 transition-colors duration-300">
                  <Icon
                    icon={article.icon} width={24} height={24}
                    className="text-grondin-500 group-hover:text-white transition-colors duration-300"
                    aria-hidden
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Icon icon="ph:clock" width={12} height={12} aria-hidden />
                  {article.readTime}
                </div>
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-grondin-50 text-grondin-600 text-xs font-semibold rounded-full mb-2">
                  {article.tag}
                </span>
                <h2 className="text-fluid-base font-bold text-neutral-900 group-hover:text-grondin-600 transition-colors leading-snug mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-grondin-500 font-medium text-sm">
                <span>Lire l&apos;article</span>
                <Icon icon="ph:arrow-right" width={16} height={16} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Icon icon="ph:magnifying-glass" width={40} height={40} className="text-neutral-300 mx-auto mb-4" aria-hidden />
          <p className="text-neutral-500 font-medium">Aucun article ne correspond à votre recherche.</p>
          <button
            onClick={() => { handleFilter('Tout'); handleSearch('') }}
            className="mt-3 text-sm text-grondin-500 hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={safePage === 1}
            aria-label="Page précédente"
            className="p-2 rounded-lg border border-neutral-200 text-neutral-500 hover:border-grondin-300 hover:text-grondin-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Icon icon="ph:caret-left" width={16} height={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              aria-current={n === safePage ? 'page' : undefined}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                n === safePage
                  ? 'bg-grondin-500 text-white shadow-sm'
                  : 'border border-neutral-200 text-neutral-600 hover:border-grondin-300 hover:text-grondin-600'
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            aria-label="Page suivante"
            className="p-2 rounded-lg border border-neutral-200 text-neutral-500 hover:border-grondin-300 hover:text-grondin-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Icon icon="ph:caret-right" width={16} height={16} />
          </button>
        </nav>
      )}
    </div>
  )
}
