import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Intro vor dem Einstieg.
 *
 * Eine ruhige Sequenz auf dunkler Bühne: Wortmarke setzt sich, Goldlinie
 * zieht sich auf, Claim und Einstieg folgen. Alles läuft über transform und
 * opacity; bei prefers-reduced-motion greift die globale Regel und die
 * Sequenz steht sofort im Endzustand.
 *
 * Kein Zwang: jederzeit überspringbar, und nach dem ersten Mal erscheint sie
 * nicht wieder.
 */
const SEEN_KEY = 'bbb.intro.v1'

export function hasSeenIntro(): boolean {
  try {
    return localStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function remember() {
  try {
    localStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* Privates Fenster — dann läuft das Intro eben noch einmal. */
  }
}

export function IntroSequence({ onDone }: { onDone: () => void }) {
  const navigate = useNavigate()
  const [leaving, setLeaving] = useState(false)
  const panel = useRef<HTMLDivElement>(null)

  const close = (to?: string) => {
    if (leaving) return
    remember()
    setLeaving(true)
    window.setTimeout(() => {
      onDone()
      if (to) navigate(to)
    }, 420)
  }

  // Fokus in die Sequenz holen und Escape zum Überspringen.
  useEffect(() => {
    panel.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Willkommen bei Glossily Academy"
      className={`fixed inset-0 z-[60] flex flex-col bg-stage text-stage-ink transition-opacity duration-[420ms] ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {/* Warmer Lichtschein, sehr langsam. Reiner Hauch, kein Effekt. */}
      <div
        aria-hidden="true"
        className="drift pointer-events-none absolute left-1/2 top-[22%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgb(176 141 87 / 0.28) 0%, rgb(176 141 87 / 0.10) 42%, transparent 68%)',
        }}
      />

      <div className="relative flex items-center justify-end px-5 pt-4">
        <button
          type="button"
          onClick={() => close()}
          className="min-h-11 rounded-full px-4 text-[0.8125rem] font-medium text-stage-ink/55 transition-colors hover:text-stage-ink"
        >
          Überspringen
        </button>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Der Filter sitzt auf dem Wrapper: die settle-Animation animiert
            selbst `filter` und würde ein invert am Bild überschreiben. */}
        <span style={{ filter: 'invert(1)' }}>
          <img
            src="/glossily-wordmark.png"
            alt="glossily"
            width={720}
            height={208}
            className="settle h-9 w-auto sm:h-11"
            style={{ animationDelay: '0.15s' }}
          />
        </span>

        <div className="mt-3 flex w-full max-w-[17rem] items-center gap-3">
          <span
            className="draw h-px flex-1 bg-accent-warm/70"
            style={{ animationDelay: '0.9s' }}
          />
          <span
            className="fade-up spaced text-[0.5625rem] font-semibold text-accent-warm"
            style={{ animationDelay: '1.05s' }}
          >
            Academy
          </span>
          <span
            className="draw h-px flex-1 bg-accent-warm/70"
            style={{ animationDelay: '0.9s' }}
          />
        </div>

        <h1
          className="fade-up display mt-10 max-w-[15ch] text-[1.75rem] leading-[1.25] sm:text-[2.25rem]"
          style={{ animationDelay: '1.5s' }}
        >
          Verstehen, bevor du dich entscheidest.
        </h1>

        <p
          className="fade-up mt-4 max-w-[26rem] text-[0.9375rem] leading-relaxed text-stage-ink/70"
          style={{ animationDelay: '1.9s' }}
        >
          Eine kostenlose Lernreise durch Network Marketing, Kommunikation, Verkauf,
          Psychologie und Führung. Ohne Anmeldung, ohne Verpflichtung.
        </p>

        <ul
          className="fade-up mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.75rem] text-stage-ink/55"
          style={{ animationDelay: '2.2s' }}
        >
          {['42 Lektionen', '9 Stufen', 'je 3–4 Minuten'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent-warm" />
              {t}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => close('/lektion/l01')}
          className="fade-up mt-10 flex min-h-12 items-center gap-2.5 rounded-full bg-accent-warm px-7 text-[0.9375rem] font-medium text-stage transition-transform duration-200 active:scale-95"
          style={{ animationDelay: '2.5s' }}
        >
          Jetzt starten
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => close()}
          className="fade-up mt-3 min-h-11 px-4 text-[0.8125rem] text-stage-ink/50 underline-offset-4 hover:underline"
          style={{ animationDelay: '2.7s' }}
        >
          Lieber erst umsehen
        </button>
      </div>

      <p
        className="fade-up relative px-6 pb-7 text-center text-[0.75rem] text-stage-ink/40"
        style={{ animationDelay: '2.9s' }}
      >
        Diese Academy will dich zu nichts überreden. Sie erklärt.
      </p>
    </div>
  )
}
