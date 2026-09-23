import type { VisualKey } from '../content/types'

/**
 * Lernbilder. Jedes erklärt etwas, keines dekoriert.
 * Alle Farben kommen aus den Theme-Tokens, damit sie in beiden Themen tragen.
 */

const ink = 'var(--color-ink)'
const faint = 'var(--color-faint)'
const line = 'var(--color-line)'
const accent = 'var(--color-accent)'
const soft = 'var(--color-accent-soft)'

type Props = { name: VisualKey; className?: string }

const captions: Record<VisualKey, string> = {
  empfehlung: 'Werbung spricht zu vielen. Eine Empfehlung spricht zu einem — und wird geglaubt.',
  'kunde-partner': 'Von zehn Menschen wollen die meisten gar nichts, einige das Produkt, sehr wenige das Geschäft.',
  'sieben-faehigkeiten': 'Sieben Fähigkeiten, nacheinander. Am ersten Tag brauchst du die erste.',
  gespraech: 'Zuerst verstehen, dann zeigen. Der Teil links ist der größere.',
  prospecting: 'Ein Gespräch eröffnen und verkaufen sind zwei getrennte Dinge.',
  'dreissig-tage': 'Was du heute tust, kommt erst etwa dreißig Tage später zurück.',
  verkauf: 'Beide Ausgänge sind richtig. Nur einer davon ist ein Verkauf.',
  psychologie: 'Sieben Muster — und eine Linie, an der sie in Manipulation umschlagen.',
  followup: 'Verabredet ist Zuverlässigkeit. Ungefragt ist Druck. Der Abstand ist dabei egal.',
  duplikation: 'Selbst machen, zeigen, begleiten, weitergeben lassen. Der vierte Schritt fehlt am häufigsten.',
  fuehrung: 'Ein Titel ohne Folgende ist Verwaltung. Folgende ohne Titel sind Führung.',
  deckel: 'Die eigene Fähigkeit begrenzt das Ergebnis — und ist das Einzige, was du anheben kannst.',
}

export function Visual({ name, className = '' }: Props) {
  return (
    <figure className={`my-7 ${className}`}>
      <div className="overflow-x-auto rounded-xl border border-line bg-surface px-4 py-5">
        <svg
          viewBox="0 0 320 150"
          role="img"
          aria-label={captions[name]}
          className="mx-auto block h-auto w-full max-w-[420px]"
          fontFamily="Inter, system-ui, sans-serif"
        >
          {shapes(name)}
        </svg>
      </div>
      <figcaption className="mt-2.5 text-[0.8125rem] leading-snug text-faint">
        {captions[name]}
      </figcaption>
    </figure>
  )
}

function label(x: number, y: number, text: string, opts: { size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number } = {}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={opts.size ?? 9}
      fill={opts.fill ?? faint}
      textAnchor={opts.anchor ?? 'middle'}
      fontWeight={opts.weight ?? 500}
    >
      {text}
    </text>
  )
}

function arrow(x1: number, y: number, x2: number) {
  return (
    <g stroke={line} strokeWidth="1.2" fill="none">
      <line x1={x1} y1={y} x2={x2 - 4} y2={y} />
      <path d={`M ${x2 - 5} ${y - 3} L ${x2} ${y} L ${x2 - 5} ${y + 3}`} />
    </g>
  )
}

function shapes(name: VisualKey) {
  switch (name) {
    case 'empfehlung':
      return (
        <g>
          {label(10, 16, 'Werbung', { anchor: 'start', size: 9.5, fill: faint })}
          <rect x="10" y="24" width="52" height="26" rx="5" fill="none" stroke={line} strokeWidth="1.2" />
          {label(36, 41, 'Firma', { size: 9, fill: ink })}
          {arrow(64, 37, 96)}
          <rect x="98" y="24" width="52" height="26" rx="5" fill="none" stroke={line} strokeWidth="1.2" />
          {label(124, 41, 'Anzeige', { size: 9 })}
          {arrow(152, 37, 180)}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <circle key={i} cx={192 + (i % 4) * 22} cy={30 + Math.floor(i / 4) * 16} r="5" fill={line} />
          ))}
          {label(310, 58, 'kaum Vertrauen', { anchor: 'end', size: 8 })}

          <line x1="10" y1="76" x2="310" y2="76" stroke={line} strokeWidth="1" strokeDasharray="3 4" />

          {label(10, 96, 'Empfehlung', { anchor: 'start', size: 9.5, fill: accent })}
          <rect x="10" y="104" width="52" height="26" rx="5" fill="none" stroke={line} strokeWidth="1.2" />
          {label(36, 121, 'Firma', { size: 9, fill: ink })}
          {arrow(64, 117, 96)}
          <rect x="98" y="104" width="52" height="26" rx="5" fill={soft} stroke={accent} strokeWidth="1.4" />
          {label(124, 121, 'du', { size: 9.5, fill: accent, weight: 600 })}
          {arrow(152, 117, 180)}
          <circle cx="196" cy="117" r="9" fill={accent} />
          {label(240, 114, 'eine Person,', { anchor: 'start', size: 8.5 })}
          {label(240, 124, 'die dir glaubt', { anchor: 'start', size: 8.5 })}
        </g>
      )

    case 'kunde-partner':
      return (
        <g>
          {Array.from({ length: 10 }).map((_, i) => {
            const cx = 26 + i * 30
            const kind = i < 6 ? 'nichts' : i < 9 ? 'kunde' : 'partner'
            return (
              <g key={i}>
                <circle
                  cx={cx}
                  cy="46"
                  r="10"
                  fill={kind === 'kunde' ? soft : 'none'}
                  stroke={kind === 'nichts' ? line : accent}
                  strokeWidth={kind === 'partner' ? 2 : 1.4}
                />
                {kind === 'partner' && <circle cx={cx} cy="46" r="4.5" fill={accent} />}
              </g>
            )
          })}
          <line x1="16" y1="70" x2="196" y2="70" stroke={line} strokeWidth="1" />
          {label(106, 84, '6 von 10 wollen nichts', { size: 9 })}
          <line x1="206" y1="70" x2="286" y2="70" stroke={accent} strokeWidth="1" />
          {label(246, 84, '3 kaufen', { size: 9, fill: accent })}
          <line x1="296" y1="70" x2="316" y2="70" stroke={accent} strokeWidth="2" />
          {label(300, 106, '1 fragt irgendwann,', { anchor: 'end', size: 8.5 })}
          {label(300, 116, 'wie es funktioniert', { anchor: 'end', size: 8.5 })}
          {label(20, 126, 'Beispielhaft — kein Erfahrungswert.', { anchor: 'start', size: 8 })}
        </g>
      )

    case 'sieben-faehigkeiten': {
      const steps = ['finden', 'einladen', 'zeigen', 'nachfassen', 'begleiten', 'starten', 'wachsen']
      return (
        <g>
          {steps.map((s, i) => {
            const x = 14 + (i % 4) * 76
            const y = i < 4 ? 26 : 84
            const first = i === 0
            return (
              <g key={s}>
                <rect
                  x={x}
                  y={y}
                  width="62"
                  height="34"
                  rx="6"
                  fill={first ? soft : 'none'}
                  stroke={first ? accent : line}
                  strokeWidth={first ? 1.6 : 1.2}
                />
                {label(x + 31, y + 15, String(i + 1), { size: 8, fill: first ? accent : faint, weight: 600 })}
                {label(x + 31, y + 27, s, { size: 9, fill: first ? accent : ink })}
              </g>
            )
          })}
          {label(14, 74, 'hier fängst du an', { anchor: 'start', size: 8.5, fill: accent })}
          {label(306, 132, 'alles Weitere kommt später', { anchor: 'end', size: 8.5 })}
        </g>
      )
    }

    case 'gespraech':
      return (
        <g>
          <rect x="14" y="34" width="180" height="62" rx="8" fill={soft} stroke={accent} strokeWidth="1.4" />
          {label(104, 60, 'zuhören', { size: 14, fill: accent, weight: 600 })}
          {label(104, 78, 'ausreden lassen · mitschreiben · zusammenfassen', { size: 7.6, fill: accent })}
          {label(20, 26, '1', { anchor: 'start', size: 9, fill: accent, weight: 600 })}

          <rect x="208" y="48" width="98" height="34" rx="8" fill="none" stroke={line} strokeWidth="1.2" />
          {label(257, 69, 'zeigen', { size: 11, fill: ink })}
          {label(214, 40, '2', { anchor: 'start', size: 9, weight: 600 })}

          {label(160, 126, 'Die Reihenfolge ist der ganze Trick.', { size: 8.5 })}
        </g>
      )

    case 'prospecting':
      return (
        <g>
          <rect x="16" y="40" width="118" height="48" rx="8" fill={soft} stroke={accent} strokeWidth="1.4" />
          {label(75, 62, 'Gespräch eröffnen', { size: 9.5, fill: accent, weight: 600 })}
          {label(75, 76, '„Ist das ein Thema für dich?"', { size: 7.8, fill: accent })}

          <line x1="148" y1="30" x2="148" y2="98" stroke={line} strokeWidth="1" strokeDasharray="3 4" />
          {label(148, 22, 'zwei Dinge', { size: 8 })}

          <rect x="162" y="40" width="142" height="48" rx="8" fill="none" stroke={line} strokeWidth="1.2" />
          {label(233, 62, 'verkaufen', { size: 9.5, fill: ink, weight: 600 })}
          {label(233, 76, '„Passt es zu dir?"', { size: 7.8 })}

          {label(160, 122, 'Die Angst entsteht, weil man beides zusammenwirft.', { size: 8.5 })}
        </g>
      )

    case 'dreissig-tage':
      return (
        <g>
          <line x1="20" y1="82" x2="300" y2="82" stroke={line} strokeWidth="1.2" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <line x1={30 + i * 14} y1="82" x2={30 + i * 14} y2="58" stroke={accent} strokeWidth="1.6" />
              <circle cx={30 + i * 14} cy="55" r="3" fill={accent} />
            </g>
          ))}
          {label(52, 44, 'du arbeitest', { size: 8.5, fill: accent })}

          {[0, 1, 2].map((i) => (
            <g key={i}>
              <line x1={236 + i * 18} y1="82" x2={236 + i * 18} y2="104" stroke={ink} strokeWidth="1.6" />
              <circle cx={236 + i * 18} cy="107" r="3" fill={ink} />
            </g>
          ))}
          {label(254, 124, 'es kommt zurück', { size: 8.5, fill: ink })}

          {label(24, 96, 'Tag 0', { anchor: 'start', size: 8 })}
          {label(300, 96, 'Tag 30', { anchor: 'end', size: 8 })}
          <path d="M 70 40 C 130 22 190 22 232 48" stroke={line} strokeWidth="1.2" fill="none" strokeDasharray="4 4" />
          {label(152, 20, 'dazwischen sieht es aus, als passiere nichts', { size: 8 })}
        </g>
      )

    case 'verkauf':
      return (
        <g>
          <rect x="112" y="16" width="96" height="30" rx="7" fill="none" stroke={line} strokeWidth="1.2" />
          {label(160, 35, 'Passt es?', { size: 10, fill: ink, weight: 600 })}
          <path d="M 140 48 L 90 72" stroke={line} strokeWidth="1.2" fill="none" />
          <path d="M 180 48 L 230 72" stroke={line} strokeWidth="1.2" fill="none" />

          <rect x="24" y="76" width="130" height="40" rx="7" fill={soft} stroke={accent} strokeWidth="1.4" />
          {label(89, 94, 'Ja — dann kauft sie', { size: 9, fill: accent, weight: 600 })}
          {label(89, 107, 'richtige Antwort', { size: 8, fill: accent })}

          <rect x="168" y="76" width="130" height="40" rx="7" fill="none" stroke={line} strokeWidth="1.4" />
          {label(233, 94, 'Nein — dann nicht', { size: 9, fill: ink, weight: 600 })}
          {label(233, 107, 'ebenso richtige Antwort', { size: 8 })}

          {label(160, 136, 'Überreden kommt in dieser Grafik nicht vor.', { size: 8.5 })}
        </g>
      )

    case 'psychologie': {
      const names = ['Gegenseitigkeit', 'Konsistenz', 'andere', 'Autorität', 'Sympathie', 'Knappheit', 'Verbundenheit']
      return (
        <g>
          {names.map((n, i) => {
            const cx = 28 + i * 44
            return (
              <g key={n}>
                <circle cx={cx} cy="40" r="13" fill={soft} stroke={accent} strokeWidth="1.3" />
                {label(cx, 44, String(i + 1), { size: 10, fill: accent, weight: 600 })}
                <text x={cx} y="66" fontSize="6.6" fill={faint} textAnchor="middle" fontWeight={500}>
                  {n}
                </text>
              </g>
            )
          })}
          <line x1="14" y1="88" x2="306" y2="88" stroke={accent} strokeWidth="1.4" strokeDasharray="5 4" />
          {label(160, 104, 'Hier liegt die Grenze', { size: 9.5, fill: accent, weight: 600 })}
          {label(160, 120, 'Nützt es der anderen Person? Dann ist es Kommunikation.', { size: 8 })}
          {label(160, 132, 'Nützt es ihr nicht? Dann ist es Manipulation.', { size: 8 })}
        </g>
      )
    }

    case 'followup':
      return (
        <g>
          <rect x="14" y="28" width="86" height="30" rx="7" fill="none" stroke={line} strokeWidth="1.2" />
          {label(57, 47, 'Gespräch', { size: 9, fill: ink })}

          {arrow(102, 43, 136)}
          <rect x="140" y="20" width="166" height="30" rx="7" fill={soft} stroke={accent} strokeWidth="1.4" />
          {label(223, 39, '„Ich melde mich Donnerstag"', { size: 8.6, fill: accent, weight: 600 })}
          {label(306, 62, 'verabredet · zuverlässig', { anchor: 'end', size: 8, fill: accent })}

          {arrow(102, 43, 136)}
          <path d="M 102 50 C 118 50 122 86 136 86" stroke={line} strokeWidth="1.2" fill="none" />
          <rect x="140" y="72" width="166" height="30" rx="7" fill="none" stroke={line} strokeWidth="1.2" strokeDasharray="4 4" />
          {label(223, 91, '„Hey, schon reingeschaut?"', { size: 8.6, fill: ink })}
          {label(306, 114, 'ungefragt · Druck', { anchor: 'end', size: 8 })}

          {label(14, 134, 'Gleiche Frage. Anderer Vorgang.', { anchor: 'start', size: 8.5 })}
        </g>
      )

    case 'duplikation': {
      const steps = ['selbst machen', 'zeigen', 'begleiten', 'weitergeben']
      return (
        <g>
          {steps.map((s, i) => {
            const x = 14 + i * 78
            const last = i === 3
            return (
              <g key={s}>
                <circle
                  cx={x + 31}
                  cy="46"
                  r="16"
                  fill={last ? accent : soft}
                  stroke={accent}
                  strokeWidth="1.4"
                />
                {label(x + 31, 50, String(i + 1), {
                  size: 11,
                  fill: last ? 'var(--color-accent-ink)' : accent,
                  weight: 600,
                })}
                <text x={x + 31} y="78" fontSize="8.4" fill={ink} textAnchor="middle" fontWeight={500}>
                  {s}
                </text>
                {i < 3 && arrow(x + 50, 46, x + 74)}
              </g>
            )
          })}
          {label(160, 106, 'Schritt 4 ist der, der am häufigsten fehlt.', { size: 9, fill: accent })}
          {label(160, 122, 'Erst dort beginnt Multiplikation.', { size: 8.5 })}
        </g>
      )
    }

    case 'fuehrung':
      return (
        <g>
          <rect x="16" y="24" width="132" height="94" rx="8" fill="none" stroke={line} strokeWidth="1.2" />
          {label(82, 44, 'Titel', { size: 11, fill: ink, weight: 600 })}
          <circle cx="82" cy="66" r="10" fill="none" stroke={line} strokeWidth="1.4" />
          {label(82, 96, 'niemand folgt', { size: 8.5 })}
          {label(82, 108, '= Verwaltung', { size: 8.5 })}

          <rect x="172" y="24" width="132" height="94" rx="8" fill={soft} stroke={accent} strokeWidth="1.4" />
          {label(238, 44, 'kein Titel', { size: 11, fill: accent, weight: 600 })}
          <circle cx="238" cy="66" r="10" fill={accent} />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={216 + i * 22} cy="84" r="4.5" fill={accent} opacity={0.5} />
          ))}
          {label(238, 108, 'man hört zu = Führung', { size: 8.5, fill: accent })}

          {label(160, 138, 'Führung ist Einfluss. Nicht mehr und nicht weniger.', { size: 8.5 })}
        </g>
      )

    case 'deckel':
      return (
        <g>
          <line x1="40" y1="34" x2="280" y2="34" stroke={accent} strokeWidth="2.5" />
          {label(284, 30, 'dein Deckel', { anchor: 'end', size: 9, fill: accent, weight: 600 })}

          {[62, 34, 78, 48].map((h, i) => (
            <rect
              key={i}
              x={62 + i * 54}
              y={110 - h}
              width="34"
              height={h}
              rx="4"
              fill={soft}
              stroke={accent}
              strokeWidth="1.2"
            />
          ))}
          <line x1="40" y1="110" x2="280" y2="110" stroke={line} strokeWidth="1.2" />
          {label(160, 126, 'Kein Balken kommt über die Linie — egal wie sehr er sich anstrengt.', { size: 8 })}
          {label(160, 138, 'Die Linie lässt sich anheben. Das ist die ganze Arbeit.', { size: 8, fill: accent })}
        </g>
      )
  }
}
