import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { objectionBySlug, objections } from '../content/objections'

export function ObjectionsPage() {
  return (
    <div className="rise mx-auto max-w-3xl px-4 pt-10">
      <p className="eyebrow">Fragen und Bedenken</p>
      <h1 className="display mt-2 text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
        Die Gedanken, die man selten laut ausspricht
      </h1>
      <p className="prose-measure mt-4 text-[1.0625rem] leading-relaxed text-muted">
        Hier wird kein Bedenken widerlegt. Jedes bekommt zuerst die Anerkennung, dass es
        berechtigt ist — und dann etwas, womit man tatsächlich arbeiten kann.
      </p>
      <p className="prose-measure mt-3 text-[0.9375rem] text-faint">
        Wo wir etwas nicht wissen, steht das da.
      </p>

      <ul className="mt-10 space-y-3 pb-6">
        {objections.map((o) => (
          <li key={o.slug}>
            <Link
              to={`/bedenken/${o.slug}`}
              className="group block rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <p className="display text-[1.125rem] leading-snug text-ink">„{o.thought}"</p>
              <p className="mt-2 text-[0.9375rem] leading-snug text-muted">{o.behind}</p>
              <span className="mt-4 flex items-center gap-1.5 text-[0.8125rem] font-medium text-accent">
                Ansehen
                <Icon
                  name="forward"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ObjectionPage() {
  const { slug = '' } = useParams()
  const o = objectionBySlug(slug)
  const index = objections.findIndex((x) => x.slug === slug)
  const next = objections[index + 1]

  if (!o) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="display text-2xl text-ink">Diesen Eintrag gibt es nicht.</h1>
        <Link to="/bedenken" className="mt-4 inline-block font-medium text-accent">
          Zu den Bedenken
        </Link>
      </div>
    )
  }

  const blocks = [
    { label: 'Was dahintersteckt', text: o.behind },
    { label: 'Warum das nachvollziehbar ist', text: o.understandable },
    { label: 'Was die Quelle dazu sagt', text: o.source },
    { label: 'Praktischer Umgang', text: o.practical },
  ]

  return (
    <article className="rise mx-auto max-w-2xl px-4 pt-6">
      <Link
        to="/bedenken"
        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted hover:text-accent"
      >
        <Icon name="back" className="h-4 w-4" />
        Alle Bedenken
      </Link>

      <p className="eyebrow mt-4">
        Bedenken {index + 1} von {objections.length}
      </p>
      <h1 className="display mt-2 text-[1.75rem] leading-[1.2] text-ink sm:text-[2.25rem]">
        „{o.thought}"
      </h1>

      <div className="mt-8 space-y-6">
        {blocks.map((b) => (
          <section key={b.label}>
            <p className="eyebrow">{b.label}</p>
            <p className="mt-1.5 text-[1.0625rem] leading-[1.75] text-ink">{b.text}</p>
          </section>
        ))}
      </div>

      {o.limit && (
        <section className="mt-8 rounded-2xl border border-accent bg-accent-soft p-5">
          <p className="eyebrow text-accent">Wo die Grenze liegt</p>
          <p className="mt-2 text-[1rem] leading-relaxed text-ink">{o.limit}</p>
        </section>
      )}

      <p className="mt-8 border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-faint">
        Ein Nein wird respektiert, nicht bearbeitet. Wenn dich dieses Bedenken zu einer
        Entscheidung führt, ist das eine gültige Entscheidung.
      </p>

      {next && (
        <nav className="mt-6 pb-4">
          <Link
            to={`/bedenken/${next.slug}`}
            className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-sm text-muted hover:border-accent hover:text-accent"
          >
            <span className="min-w-0 truncate">„{next.thought}"</span>
            <Icon name="forward" className="h-4 w-4 shrink-0" />
          </Link>
        </nav>
      )}
    </article>
  )
}
