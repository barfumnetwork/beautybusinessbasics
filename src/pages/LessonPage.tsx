import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { QuizBlock } from '../components/QuizBlock'
import { Visual } from '../components/Visual'
import { TOTAL_LESSONS, lessonById, lessonIndex, neighbours } from '../content/lessons'
import { stageByNumber } from '../content/stages'
import { useProgress } from '../lib/progress'

export function LessonPage() {
  const { id = '' } = useParams()
  const lesson = lessonById(id)
  const { isRead, markRead, unmarkRead } = useProgress()

  // Als gelesen markieren, sobald die Lektion geöffnet wurde. Umkehrbar.
  useEffect(() => {
    if (lesson) markRead(lesson.id)
  }, [lesson, markRead])

  if (!lesson) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="display text-2xl text-ink">Diese Lektion gibt es nicht.</h1>
        <Link to="/lernreise" className="mt-4 inline-block font-medium text-accent">
          Zur Lernreise
        </Link>
      </div>
    )
  }

  const stage = stageByNumber(lesson.stage)
  const { prev, next } = neighbours(lesson.id)
  const position = lessonIndex(lesson.id) + 1
  const done = isRead(lesson.id)
  const isLast = !next

  return (
    <article className="rise mx-auto max-w-2xl px-4 pt-6">
      <div className="flex items-center gap-3">
        <Link
          to={`/lernreise/${lesson.stage}`}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted hover:text-accent"
        >
          <Icon name="back" className="h-4 w-4" />
          {stage?.title}
        </Link>
        <span className="ml-auto flex items-center gap-1.5 text-[0.75rem] tabular-nums text-faint">
          <Icon name="clock" className="h-3.5 w-3.5" />
          {lesson.minutes} Min
        </span>
      </div>

      <header className="mt-4">
        <p className="eyebrow">
          Lektion {position} von {TOTAL_LESSONS} · Stufe {lesson.stage}
        </p>
        <h1 className="display mt-2 text-[2rem] leading-[1.15] text-ink sm:text-[2.5rem]">
          {lesson.title}
        </h1>
        <p className="mt-4 border-l-2 border-accent pl-4 text-[1.0625rem] leading-relaxed text-muted">
          {lesson.coreQuestion}
        </p>
      </header>

      <div className="mt-8 space-y-4 text-[1.0625rem] leading-[1.75] text-ink">
        {lesson.explanation.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {lesson.visual && <Visual name={lesson.visual} />}

      {lesson.example && (
        <section className="mt-8 rounded-2xl bg-raised p-5">
          <p className="eyebrow">Beispiel</p>
          <p className="mt-2 text-[1rem] leading-relaxed text-ink">{lesson.example}</p>
        </section>
      )}

      {lesson.boundary && (
        <section className="mt-6 rounded-2xl border border-accent bg-accent-soft p-5">
          <p className="eyebrow text-accent">Wo die Grenze liegt</p>
          <p className="mt-2 text-[1rem] leading-relaxed text-ink">{lesson.boundary}</p>
        </section>
      )}

      <section className="mt-8 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-line p-5">
          <p className="eyebrow">Übung</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{lesson.practice}</p>
        </div>
        <div className="rounded-2xl border border-line p-5">
          <p className="eyebrow">Zum Nachdenken</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{lesson.reflection}</p>
        </div>
      </section>

      {lesson.practice_example && (
        <section className="mt-6 rounded-2xl border border-dashed border-line p-5">
          <p className="eyebrow">Praxisbeispiel</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
            {lesson.practice_example}
          </p>
        </section>
      )}

      {lesson.quiz && <QuizBlock quiz={lesson.quiz} lessonId={lesson.id} />}

      <footer className="mt-10 border-t border-line pt-5">
        <p className="text-[0.8125rem] leading-relaxed text-faint">
          <span className="font-semibold">Quelle:</span> {lesson.source}
          {lesson.sourceNote && <> · {lesson.sourceNote}</>}
        </p>
        <button
          type="button"
          onClick={() => (done ? unmarkRead(lesson.id) : markRead(lesson.id))}
          className="mt-4 flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon name={done ? 'close' : 'check'} className="h-4 w-4" />
          {done ? 'Doch nicht gelesen' : 'Als gelesen markieren'}
        </button>
      </footer>

      {isLast ? (
        <section className="mt-10 rounded-2xl border border-accent bg-accent-soft p-6 text-center">
          <p className="display text-[1.375rem] leading-snug text-ink">Das war alles.</p>
          <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted">
            Du hast jetzt die Grundlagen kennengelernt. Du weißt, wie Network Marketing,
            Kommunikation, Prospecting, Verkauf, Psychologie und Führung funktionieren.
            Was du mit diesem Wissen machst, entscheidest du selbst.
          </p>
          <p className="mt-4 text-[0.8125rem] text-faint">
            Alle Inhalte bleiben offen. Du kannst jederzeit zurückkommen.
          </p>
        </section>
      ) : (
        <nav className="mt-8 flex gap-3 pb-4">
          {prev ? (
            <Link
              to={`/lektion/${prev.id.toLowerCase()}`}
              className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-line px-4 py-2 text-sm text-muted hover:border-accent hover:text-accent"
            >
              <Icon name="back" className="h-4 w-4 shrink-0" />
              <span className="truncate">{prev.title}</span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next && (
            <Link
              to={`/lektion/${next.id.toLowerCase()}`}
              className="flex min-h-11 min-w-0 flex-1 items-center justify-end gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-accent-ink"
            >
              <span className="truncate">{next.title}</span>
              <Icon name="forward" className="h-4 w-4 shrink-0" />
            </Link>
          )}
        </nav>
      )}
    </article>
  )
}
