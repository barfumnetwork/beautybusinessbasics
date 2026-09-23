/**
 * Inhaltstypen der Lernplattform.
 *
 * Inhalte liegen als Daten vor, nicht in Komponenten. So kann später jemand
 * ohne Programmierkenntnisse Texte ändern, ohne die Oberfläche anzufassen.
 */

export type VisualKey =
  | 'empfehlung'
  | 'kunde-partner'
  | 'sieben-faehigkeiten'
  | 'gespraech'
  | 'prospecting'
  | 'dreissig-tage'
  | 'verkauf'
  | 'psychologie'
  | 'followup'
  | 'duplikation'
  | 'fuehrung'
  | 'deckel'

export type Quiz = {
  /** Eine Frage, höchstens zwei pro Lektion. Nie mehr als drei Antworten. */
  question: string
  options: string[]
  correct: number
  /** Ein Satz, der über die Frage hinausgeht — statt eines Lobes. */
  onCorrect: string
  /** Der Kerngedanke noch einmal, in anderen Worten. Kein "Falsch!". */
  onWrong: string
}

export type Lesson = {
  id: string
  stage: number
  title: string
  coreQuestion: string
  goal?: string
  /** Woher der Gedanke stammt. Wird unter jeder Lektion angezeigt. */
  source: string
  /** Hinweis auf ungeprüfte Herkunft, z. B. [ZU PRÜFEN]. */
  sourceNote?: string
  explanation: string[]
  example?: string
  practice: string
  reflection: string
  /** Pflicht auf Stufe 5: "Wo die Grenze liegt". */
  boundary?: string
  /** Praxisbeispiel. Kommt in genau fünf der 42 Lektionen vor. */
  practice_example?: string
  quiz?: Quiz
  minutes: number
  visual?: VisualKey
}

export type Stage = {
  number: number
  title: string
  description: string
  /** Der Satz, den der Lernende danach sagen kann. */
  outcome: string
  visual: VisualKey
}

export type QuestionCategory =
  | 'Grundverständnis'
  | 'Selbstbild'
  | 'Kommunikation'
  | 'Prospecting'
  | 'Verkaufen'
  | 'Psychologie'
  | 'Follow-up'
  | 'Team und Führung'
  | 'Entwicklung'
  | 'Offen'

export type Question = {
  id: number
  text: string
  category: QuestionCategory
  source: string
  /** Lektion, die die Frage beantwortet. Fehlt bei offenen Fragen. */
  lesson?: string
  /** Steht nur bei Fragen, die wir derzeit nicht beantworten können. */
  unanswered?: string
  /** Weitere Wörter, unter denen ein Mensch diese Frage sucht. */
  tags?: string[]
}

export type Objection = {
  id: number
  slug: string
  thought: string
  behind: string
  understandable: string
  source: string
  practical: string
  /** Wo die Grenze liegt bzw. was wir nicht wissen. */
  limit?: string
  tags: string[]
}
