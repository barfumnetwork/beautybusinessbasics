import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { TOTAL_LESSONS } from '../content/lessons'
import { useProgress } from '../lib/progress'
import { BottomNav, type NavItem } from './BottomNav'
import { Icon } from './Icon'
import { IntroSequence, hasSeenIntro } from './IntroSequence'
import { Logo } from './Logo'
import { SearchOverlay } from './SearchOverlay'

const nav: NavItem[] = [
  { to: '/', label: 'Start', icon: 'start' },
  { to: '/lernreise', label: 'Lernreise', icon: 'journey', also: ['/lektion'] },
  { to: '/fragen', label: 'Fragen', icon: 'question' },
  { to: '/bedenken', label: 'Bedenken', icon: 'concern' },
  { to: '/fortschritt', label: 'Fortschritt', icon: 'progress' },
]

export function Layout() {
  const { read } = useProgress()
  const { pathname } = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  // Intro laeuft nur beim ersten Besuch der Startseite — danach nie wieder,
  // ausser der Nutzer ruft es im Fussbereich selbst auf.
  const [showIntro, setShowIntro] = useState(
    () => typeof window !== 'undefined' && window.location.pathname === '/' && !hasSeenIntro()
  )
  const done = read.length
  const percent = Math.round((done / TOTAL_LESSONS) * 100)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  // Tastaturkürzel für die Suche, wie in jeder Anwendung erwartet.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Zum Inhalt springen
      </a>

      <header
        className="sticky z-30 border-b border-line bg-paper/90 backdrop-blur"
        style={{ top: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4">
          <NavLink to="/" className="shrink-0" aria-label="Glossily Academy — zur Startseite">
            <Logo />
          </NavLink>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-soft text-accent'
                      : 'text-muted hover:bg-raised hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="ml-auto flex h-11 min-w-11 items-center gap-2 rounded-full border border-line px-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent active:scale-95 md:ml-2"
          >
            <Icon name="search" className="h-[18px] w-[18px]" />
            <span className="hidden lg:inline">Suchen</span>
          </button>
        </div>

        {/* Fortschritt, immer oben sichtbar. */}
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 pb-2">
          <div
            className="h-[3px] flex-1 overflow-hidden rounded-full bg-raised"
            role="progressbar"
            aria-valuenow={done}
            aria-valuemin={0}
            aria-valuemax={TOTAL_LESSONS}
            aria-label={`${done} von ${TOTAL_LESSONS} Lektionen gelesen`}
          >
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="shrink-0 text-[0.6875rem] font-medium tabular-nums text-faint">
            {done} von {TOTAL_LESSONS}
          </span>
        </div>
      </header>

      <main id="inhalt" className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-line px-4 py-8">
        <div className="mx-auto max-w-5xl text-[0.8125rem] leading-relaxed text-faint">
          <p>
            Diese Seite ist kostenlos und bleibt es. Sie sammelt keine Daten, setzt keine
            Zähler und verlangt keine Anmeldung. Dein Fortschritt liegt nur in deinem Browser.
          </p>
          <p className="mt-2">
            Die Inhalte sind eigene Erklärungen auf Grundlage veröffentlichter Fachbücher.
            Jede Lektion nennt ihre Quelle. Keine Einkommensversprechen, keine Beratung.
          </p>
          <button
            type="button"
            onClick={() => setShowIntro(true)}
            className="mt-4 min-h-11 text-[0.8125rem] font-medium text-accent underline-offset-4 hover:underline"
          >
            Intro noch einmal ansehen
          </button>
        </div>
      </footer>

      <BottomNav items={nav} />

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {showIntro && <IntroSequence onDone={() => setShowIntro(false)} />}
    </div>
  )
}
