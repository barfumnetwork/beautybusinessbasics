import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Visual } from '../components/Visual'
import { lessons, lessonsOfStage } from '../content/lessons'
import { stageByNumber, stages } from '../content/stages'
import { useProgress } from '../lib/progress'

export function JourneyPage() {
  const { read } = useProgress()

  return (
    <div className="rise mx-auto max-w-3xl px-4 pt-10">
      <p className="eyebrow">Lernreise</p>
      <h1 className="display mt-2 text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
        Neun Stufen, in einer Reihenfolge, die einen Grund hat
      </h1>
      <p className="prose-measure mt-4 text-[1.0625rem] leading-relaxed text-muted">
        Kommunikation kommt vor Prospecting, weil eine Kontaktliste nichts nützt, wenn man
        noch nie ein gutes Gespräch geführt hat. Psychologie kommt nach dem Verkaufen, weil
        man erst sehen muss, was passiert, bevor man versteht, warum.
      </p>
      <p className="prose-measure mt-3 text-[0.9375rem] text-faint">
        Gesperrt ist trotzdem nichts. Du darfst überall anfangen.
      </p>

      <ol className="mt-10 space-y-3">
        {stages.map((s) => {
          const items = lessonsOfStage(s.number)
          const doneCount = items.filter((l) => read.includes(l.id)).length
          const complete = doneCount === items.length
          return (
            <li key={s.number}>
              <Link
                to={`/lernreise/${s.number}`}
                className="block rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
              >
                <div className="flex items-baseline gap-3">
                  <span className="display text-[1.375rem] tabular-nums text-accent">
                    {String(s.number).padStart(2, '0')}
                  </span>
                  <h2 className="display text-[1.1875rem] leading-snug text-ink">{s.title}</h2>
                  {complete && (
                    <span className="ml-auto flex shrink-0 items-center gap-1 text-[0.75rem] font-medium text-accent">
                      <Icon name="check" className="h-3.5 w-3.5" />
                      gelesen
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[0.9375rem] leading-snug text-muted">{s.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-raised">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(doneCount / items.length) * 100}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-[0.75rem] tabular-nums text-faint">
                    {doneCount}/{items.length}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export function StagePage() {
  const { number } = useParams()
  const n = Number(number)
  const stage = stageByNumber(n)
  const { read } = useProgress()

  if (!stage) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="display text-2xl text-ink">Diese Stufe gibt es nicht.</h1>
        <Link to="/lernreise" className="mt-4 inline-block font-medium text-accent">
          Zur Lernreise
        </Link>
      </div>
    )
  }

  const items = lessonsOfStage(n)
  const prev = stageByNumber(n - 1)
  const next = stageByNumber(n + 1)

  return (
    <div className="rise mx-auto max-w-3xl px-4 pt-6">
      <Link
        to="/lernreise"
        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted hover:text-accent"
      >
        <Icon name="back" className="h-4 w-4" />
        Lernreise
      </Link>

      <p className="eyebrow mt-4">Stufe {String(n).padStart(2, '0')} von {stages.length}</p>
      <h1 className="display mt-2 text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
        {stage.title}
      </h1>
      <p className="prose-measure mt-4 text-[1.0625rem] leading-relaxed text-muted">
        {stage.description}
      </p>

      <Visual name={stage.visual} />

      <div className="rounded-xl border-l-2 border-accent bg-accent-soft px-4 py-3">
        <p className="eyebrow text-accent">Danach kannst du sagen</p>
        <p className="display mt-1 text-[1.0625rem] leading-snug text-ink">„{stage.outcome}"</p>
      </div>

      <ol className="mt-8 divide-y divide-line border-y border-line">
        {items.map((l) => {
          const done = read.includes(l.id)
          return (
            <li key={l.id}>
              <Link
                to={`/lektion/${l.id.toLowerCase()}`}
                className="flex items-start gap-4 py-4 transition-colors hover:bg-raised"
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[0.6875rem] font-semibold tabular-nums ${
                    done ? 'border-accent bg-accent text-accent-ink' : 'border-line text-faint'
                  }`}
                >
                  {done ? <Icon name="check" className="h-3.5 w-3.5" /> : l.id.slice(1)}
                </span>
                <span className="min-w-0">
                  <span className="block font-medium text-ink">{l.title}</span>
                  <span className="mt-0.5 block text-[0.875rem] leading-snug text-muted">
                    {l.coreQuestion}
                  </span>
                </span>
                <span className="ml-auto shrink-0 pt-0.5 text-[0.75rem] tabular-nums text-faint">
                  {l.minutes} Min
                </span>
              </Link>
            </li>
          )
        })}
      </ol>

      <nav className="mt-8 flex gap-3">
        {prev && (
          <Link
            to={`/lernreise/${prev.number}`}
            className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-line px-4 text-sm text-muted hover:border-accent hover:text-accent"
          >
            <Icon name="back" className="h-4 w-4 shrink-0" />
            <span className="truncate">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link
            to={`/lernreise/${next.number}`}
            className="flex min-h-11 min-w-0 flex-1 items-center justify-end gap-2 rounded-xl border border-line px-4 text-sm text-muted hover:border-accent hover:text-accent"
          >
            <span className="truncate">{next.title}</span>
            <Icon name="forward" className="h-4 w-4 shrink-0" />
          </Link>
        )}
      </nav>

      <p className="mt-6 text-center text-[0.8125rem] text-faint">
        Du kannst hier jederzeit aufhören. {lessons.length - read.length} Lektionen warten,
        aber keine davon drängt.
      </p>
    </div>
  )
}
