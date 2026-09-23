import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { TOTAL_LESSONS, lessons, lessonsOfStage } from '../content/lessons'
import { stages } from '../content/stages'
import { useProgress } from '../lib/progress'

export function ProgressPage() {
  const { read, reset } = useProgress()
  const [confirm, setConfirm] = useState(false)
  const resume = lessons.find((l) => !read.includes(l.id))
  const percent = Math.round((read.length / TOTAL_LESSONS) * 100)

  return (
    <div className="rise mx-auto max-w-3xl px-4 pt-10">
      <p className="eyebrow">Fortschritt</p>
      <h1 className="display mt-2 text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
        {read.length} von {TOTAL_LESSONS} Lektionen
      </h1>
      <p className="prose-measure mt-4 text-[1.0625rem] leading-relaxed text-muted">
        {read.length === 0
          ? 'Noch nichts gelesen. Das ist ein völlig normaler Startpunkt.'
          : read.length === TOTAL_LESSONS
            ? 'Alles gelesen. Alle Inhalte bleiben offen — du kannst jederzeit zurückkommen.'
            : 'Der Fortschritt liegt nur in diesem Browser. Kein Konto, keine Übertragung.'}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-raised">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="shrink-0 text-sm font-medium tabular-nums text-muted">{percent}%</span>
      </div>

      {resume && (
        <Link
          to={`/lektion/${resume.id.toLowerCase()}`}
          className="mt-6 flex items-center gap-4 rounded-2xl border border-accent bg-accent-soft p-5 transition-colors hover:bg-accent-soft/70"
        >
          <div className="min-w-0">
            <p className="eyebrow text-accent">Weiterlesen</p>
            <p className="display mt-1 truncate text-lg text-ink">{resume.title}</p>
          </div>
          <Icon name="forward" className="ml-auto h-5 w-5 shrink-0 text-accent" />
        </Link>
      )}

      <ol className="mt-10 space-y-5 pb-6">
        {stages.map((s) => {
          const items = lessonsOfStage(s.number)
          const doneCount = items.filter((l) => read.includes(l.id)).length
          return (
            <li key={s.number}>
              <div className="flex items-baseline gap-3">
                <span className="display text-[1.0625rem] tabular-nums text-accent">
                  {String(s.number).padStart(2, '0')}
                </span>
                <Link to={`/lernreise/${s.number}`} className="font-medium text-ink hover:text-accent">
                  {s.title}
                </Link>
                <span className="ml-auto text-[0.8125rem] tabular-nums text-faint">
                  {doneCount}/{items.length}
                </span>
              </div>
              <div className="mt-2 flex gap-1">
                {items.map((l) => (
                  <Link
                    key={l.id}
                    to={`/lektion/${l.id.toLowerCase()}`}
                    title={l.title}
                    aria-label={l.title}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      read.includes(l.id) ? 'bg-accent' : 'bg-raised hover:bg-line'
                    }`}
                  />
                ))}
              </div>
            </li>
          )
        })}
      </ol>

      <section className="mt-6 border-t border-line pt-6 pb-4">
        <p className="text-[0.8125rem] leading-relaxed text-faint">
          Der Fortschritt wird ausschließlich in diesem Browser gespeichert. Auf einem
          anderen Gerät fängst du wieder bei null an — und niemand außer dir sieht ihn.
        </p>
        {confirm ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                reset()
                setConfirm(false)
              }}
              className="min-h-11 rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink"
            >
              Ja, Fortschritt löschen
            </button>
            <button
              type="button"
              onClick={() => setConfirm(false)}
              className="min-h-11 rounded-lg border border-line px-4 text-sm text-muted"
            >
              Abbrechen
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirm(true)}
            className="mt-4 min-h-11 rounded-lg border border-line px-4 text-sm text-muted hover:border-accent hover:text-accent"
          >
            Fortschritt zurücksetzen
          </button>
        )}
      </section>
    </div>
  )
}
