import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { search } from '../lib/search'
import { Icon } from './Icon'

const suggestions = ['Freunde', 'Nein', 'Instagram', 'Verkaufen', 'Team', 'Kosten', 'Führung']

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const hits = useMemo(() => search(query), [query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    // Kurz warten, sonst greift der Fokus, bevor das Feld sichtbar ist.
    const id = window.setTimeout(() => inputRef.current?.focus(), 30)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(id)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const go = (to: string) => {
    onClose()
    navigate(to)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-paper"
      role="dialog"
      aria-modal="true"
      aria-label="Suche"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <Icon name="search" className="h-5 w-5 shrink-0 text-faint" />
        <input
          ref={inputRef}
          id="suche"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Wonach suchst du?"
          autoComplete="off"
          className="h-11 w-full min-w-0 bg-transparent text-base text-ink outline-none placeholder:text-faint"
        />
        <button
          type="button"
          onClick={onClose}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-raised"
          aria-label="Suche schließen"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-10">
        {query.trim().length < 2 ? (
          <div className="mx-auto max-w-2xl py-8">
            <p className="eyebrow">Häufig gesucht</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="min-h-11 rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-8 text-sm text-faint">
              Durchsucht werden alle Lektionen, die Fragen und die Bedenken.
            </p>
          </div>
        ) : hits.length === 0 ? (
          <div className="mx-auto max-w-2xl py-10">
            <p className="text-ink">Dazu ist hier nichts hinterlegt.</p>
            <p className="mt-2 text-sm text-muted">
              Versuch ein einzelnes Wort — zum Beispiel „Nein", „Freunde" oder „Team".
            </p>
          </div>
        ) : (
          <ul className="mx-auto max-w-2xl divide-y divide-line py-2">
            {hits.map((hit) => (
              <li key={`${hit.kind}-${hit.to}-${hit.title}`}>
                <button
                  type="button"
                  onClick={() => go(hit.to)}
                  className="w-full py-3.5 text-left transition-colors hover:bg-raised"
                >
                  <span className="eyebrow">{hit.kind}</span>
                  <span className="mt-0.5 block font-medium text-ink">{hit.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{hit.context}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
