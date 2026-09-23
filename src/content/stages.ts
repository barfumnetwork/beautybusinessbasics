import type { Stage } from './types'

/**
 * Neun Stufen. Die Reihenfolge ist eine Empfehlung, keine Pflicht —
 * gesperrt ist nichts.
 */
export const stages: Stage[] = [
  {
    number: 1,
    title: 'Absolute Grundlagen',
    description:
      'Was Network Marketing ist, woran man ein seriöses Modell erkennt und warum das Thema so einen schlechten Ruf hat.',
    outcome: 'Jetzt verstehe ich das Grundprinzip.',
    visual: 'empfehlung',
  },
  {
    number: 2,
    title: 'Kommunikation',
    description:
      'Zuhören, Fragen stellen, Interesse erkennen. Die Fähigkeiten, die vor allem anderen kommen.',
    outcome: 'Jetzt weiß ich, wie man mit Menschen redet.',
    visual: 'gespraech',
  },
  {
    number: 3,
    title: 'Prospecting',
    description:
      'Wie Gespräche überhaupt entstehen — und warum in der ersten Woche nichts passiert.',
    outcome: 'Jetzt verstehe ich, wie man Kontakte findet.',
    visual: 'prospecting',
  },
  {
    number: 4,
    title: 'Verkaufen',
    description:
      'Verkaufen als Prüfung, ob etwas passt. Warum Menschen Ja sagen, warum sie Nein sagen, und wo es in Druck umkippt.',
    outcome: 'Jetzt verstehe ich Verkauf ohne Druck.',
    visual: 'verkauf',
  },
  {
    number: 5,
    title: 'Psychologie',
    description:
      'Die sieben Muster hinter Entscheidungen. Jede Lektion dieser Stufe zeigt auch, wo die Grenze liegt.',
    outcome: 'Jetzt verstehe ich, warum Menschen Ja sagen.',
    visual: 'psychologie',
  },
  {
    number: 6,
    title: 'Follow-up',
    description:
      'Was nach dem Gespräch kommt. Der Unterschied zwischen Nachfassen und Nachlaufen — und wann Schluss ist.',
    outcome: 'Jetzt weiß ich, was nach dem Gespräch kommt.',
    visual: 'followup',
  },
  {
    number: 7,
    title: 'Teamaufbau',
    description:
      'Wie aus einzelnen Menschen ein Team wird, warum Vorbild stärker wirkt als jede Ansage.',
    outcome: 'Jetzt verstehe ich, wie ein Team entsteht.',
    visual: 'duplikation',
  },
  {
    number: 8,
    title: 'Führung',
    description:
      'Führung als Einfluss statt als Titel. Vier Gedanken, die auch ohne ein einziges Teammitglied gelten.',
    outcome: 'Jetzt verstehe ich, was Führung wirklich ist.',
    visual: 'fuehrung',
  },
  {
    number: 9,
    title: 'Entwicklung',
    description:
      'An einer Sache arbeiten statt an allem. Rückschläge einordnen. Und am Ende: deine eigene Entscheidung.',
    outcome: 'Jetzt arbeite ich an mir selbst.',
    visual: 'deckel',
  },
]

export const stageByNumber = (n: number) => stages.find((s) => s.number === n)
