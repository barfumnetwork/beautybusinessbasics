import { Link } from 'react-router-dom'
import { Icon, type IconName } from '../components/Icon'
import { SharePanel } from '../components/SharePanel'
import { TOTAL_LESSONS, lessons } from '../content/lessons'
import { objections } from '../content/objections'
import { ANSWERED_QUESTIONS } from '../content/questions'
import { stages } from '../content/stages'
import { useProgress } from '../lib/progress'

const entries: { to: string; title: string; subtitle: string; icon: IconName }[] = [
  {
    to: '/lektion/l01',
    title: 'Jetzt starten',
    subtitle: 'Ich kenne Network Marketing noch nicht.',
    icon: 'start',
  },
  {
    to: '/fragen',
    title: 'Ich habe eine Frage',
    subtitle: 'Ich möchte etwas Bestimmtes verstehen.',
    icon: 'question',
  },
  {
    to: '/bedenken',
    title: 'Ich habe Bedenken',
    subtitle: 'Etwas daran macht mich unsicher.',
    icon: 'concern',
  },
]

export function HomePage() {
  const { read } = useProgress()
  const resume = lessons.find((l) => !read.includes(l.id))
  const started = read.length > 0

  return (
    <div className="rise mx-auto max-w-5xl px-4">
      <section className="pt-12 pb-10 sm:pt-16">
        <p className="eyebrow">Kostenlos · ohne Anmeldung</p>
        <h1 className="display mt-3 max-w-[16ch] text-[2.25rem] leading-[1.1] text-ink sm:text-[3.25rem]">
          Network Marketing einfach verstanden.
        </h1>
        <p className="prose-measure mt-5 text-[1.0625rem] leading-relaxed text-muted">
          Eine kostenlose Lernreise für Menschen, die verstehen möchten, wie Network
          Marketing, Kommunikation, Verkauf, Psychologie und Führung wirklich funktionieren.
        </p>
        <p className="prose-measure mt-3 text-[0.9375rem] text-faint">
          {TOTAL_LESSONS} Lektionen in {stages.length} Stufen, je drei bis vier Minuten.
          Am Ende entscheidest du selbst, was du mit dem Wissen machst.
        </p>
      </section>

      {started && resume && (
        <Link
          to={`/lektion/${resume.id.toLowerCase()}`}
          className="mb-8 flex items-center gap-4 rounded-2xl border border-accent bg-accent-soft p-4 transition-colors hover:bg-accent-soft/70 sm:p-5"
        >
          <div className="min-w-0">
            <p className="eyebrow text-accent">Weiterlesen · {read.length} von {TOTAL_LESSONS}</p>
            <p className="display mt-1 truncate text-lg text-ink">{resume.title}</p>
          </div>
          <Icon name="forward" className="ml-auto h-5 w-5 shrink-0 text-accent" />
        </Link>
      )}

      {/* Drei gleichwertige Einstiege. */}
      <section aria-label="Einstiege" className="grid gap-3 sm:grid-cols-3">
        {entries.map((e) => (
          <Link
            key={e.to}
            to={e.to}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:border-accent hover:shadow-[0_1px_0_0_var(--color-accent)]"
          >
            <Icon name={e.icon} className="h-6 w-6 text-accent" />
            <h2 className="display mt-4 text-[1.1875rem] leading-snug text-ink">{e.title}</h2>
            <p className="mt-1.5 text-[0.9375rem] leading-snug text-muted">{e.subtitle}</p>
            <span className="mt-5 flex items-center gap-1.5 text-[0.8125rem] font-medium text-accent">
              Öffnen
              <Icon name="forward" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </section>

      {/* Was hier nicht passiert. Steht bewusst weit oben. */}
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="display text-2xl text-ink">Was dich hier nicht erwartet</h2>
        <ul className="prose-measure mt-5 space-y-3 text-[0.9375rem] leading-relaxed text-muted">
          {[
            'Keine Einladung, kein Formular, kein Drängen zu einem Einstieg.',
            'Keine Einkommenszahlen und keine Rechenbeispiele.',
            'Keine Erfolgsgeschichten, weil wir keine belegen könnten.',
            'Kein Konto, keine E-Mail-Adresse, kein Tracking.',
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
              {t}
            </li>
          ))}
        </ul>
        <p className="prose-measure mt-5 text-[0.9375rem] leading-relaxed text-faint">
          Ein Unternehmen wird an fünf Stellen als Praxisbeispiel genannt — dort, wo es
          etwas erklärt. Sonst nicht.
        </p>
      </section>

      {/* Die neun Stufen, kompakt. */}
      <section className="mt-14 border-t border-line pt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-2xl text-ink">Die Lernreise</h2>
          <Link to="/lernreise" className="shrink-0 text-sm font-medium text-accent">
            Alle Stufen
          </Link>
        </div>
        <ol className="mt-5 divide-y divide-line">
          {stages.map((s) => (
            <li key={s.number}>
              <Link
                to={`/lernreise/${s.number}`}
                className="flex items-baseline gap-4 py-3 transition-colors hover:text-accent"
              >
                <span className="w-6 shrink-0 text-[0.8125rem] font-semibold tabular-nums text-faint">
                  {String(s.number).padStart(2, '0')}
                </span>
                <span className="font-medium text-ink">{s.title}</span>
                <span className="ml-auto shrink-0 text-[0.8125rem] text-faint">
                  {lessons.filter((l) => l.stage === s.number).length}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <SharePanel />

      <section className="mt-14 grid gap-3 border-t border-line pt-10 sm:grid-cols-3">
        {[
          { n: TOTAL_LESSONS, l: 'Lektionen' },
          { n: ANSWERED_QUESTIONS, l: 'beantwortete Fragen' },
          { n: objections.length, l: 'ausgearbeitete Bedenken' },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-raised px-5 py-4">
            <p className="display text-2xl tabular-nums text-accent">{s.n}</p>
            <p className="mt-0.5 text-[0.8125rem] text-muted">{s.l}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
