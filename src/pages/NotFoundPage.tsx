import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="rise mx-auto max-w-2xl px-4 py-20">
      <p className="eyebrow">Seite nicht gefunden</p>
      <h1 className="display mt-2 text-[2rem] leading-tight text-ink">
        Diese Seite gibt es hier nicht.
      </h1>
      <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">
        Vielleicht hat sich in der Adresse ein Tippfehler eingeschlichen. Alle Inhalte
        erreichst du über die Lernreise.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="flex min-h-11 items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink"
        >
          Zur Startseite
        </Link>
        <Link
          to="/lernreise"
          className="flex min-h-11 items-center rounded-lg border border-line px-5 text-sm text-muted hover:border-accent hover:text-accent"
        >
          Zur Lernreise
        </Link>
      </div>
    </div>
  )
}
