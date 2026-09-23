import { useCallback, useSyncExternalStore } from 'react'

/**
 * Fortschritt liegt ausschließlich im Browser des Nutzers.
 * Kein Konto, keine E-Mail, keine Übertragung. Jeder Zugriff ist abgesichert,
 * weil localStorage in privaten Fenstern oder bei blockierten Seitendaten
 * werfen kann.
 *
 * Gelesen wird über useSyncExternalStore: Kindkomponenten dürfen den Stand
 * schon in ihrem Effekt ändern, bevor die Eltern sich angemeldet haben —
 * mit einem eigenen Abo-Effekt zeigte der Kopfbereich sonst einen alten Wert.
 */
const KEY = 'bbb.progress.v1'

type Progress = {
  read: string[]
}

const empty: Progress = { read: [] }

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty
    const parsed = JSON.parse(raw) as Progress
    return Array.isArray(parsed.read) ? { read: parsed.read } : empty
  } catch {
    return empty
  }
}

function persist(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    /* Privates Fenster oder blockierte Seitendaten — die Seite funktioniert trotzdem. */
  }
}

const listeners = new Set<() => void>()
let current: Progress | null = null

function snapshot(): Progress {
  if (!current) current = load()
  return current
}

function commit(next: Progress) {
  current = next
  persist(next)
  listeners.forEach((fn) => fn())
}

function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

export function useProgress() {
  const state = useSyncExternalStore(subscribe, snapshot, () => empty)

  const markRead = useCallback((id: string) => {
    const p = snapshot()
    if (p.read.includes(id)) return
    commit({ read: [...p.read, id] })
  }, [])

  const unmarkRead = useCallback((id: string) => {
    const p = snapshot()
    if (!p.read.includes(id)) return
    commit({ read: p.read.filter((x) => x !== id) })
  }, [])

  const reset = useCallback(() => commit({ read: [] }), [])

  const isRead = useCallback((id: string) => state.read.includes(id), [state.read])

  return { read: state.read, markRead, unmarkRead, reset, isRead }
}
