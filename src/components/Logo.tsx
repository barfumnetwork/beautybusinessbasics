/**
 * Wortmarke „glossily" (Originaldatei) plus die Sperrschrift ACADEMY.
 * Die Wortmarke ist reines Schwarz und wird im dunklen Thema invertiert,
 * die Linie und ACADEMY laufen über den Akzent-Token.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex flex-col items-start leading-none ${className}`}>
      <img
        src="/glossily-wordmark.png"
        alt="glossily"
        width={720}
        height={208}
        className="h-[1.375rem] w-auto sm:h-6"
        style={{ filter: 'var(--wordmark-filter, none)' }}
      />
      <span className="mt-[3px] flex w-full items-center gap-1.5">
        <span className="h-px flex-1 bg-accent" />
        <span className="text-[0.5rem] font-semibold tracking-[0.34em] text-accent">
          ACADEMY
        </span>
        <span className="h-px flex-1 bg-accent" />
      </span>
    </span>
  )
}
