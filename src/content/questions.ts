import type { Question, QuestionCategory } from './types'

/**
 * 74 Fragen, die ein Anfänger tatsächlich hat.
 * Jede kennt ihre Quelle und die Lektion, die sie beantwortet.
 */
export const questions: Question[] = [
  // Grundverständnis
  { id: 1, text: 'Was ist Network Marketing überhaupt?', category: 'Grundverständnis', source: 'Go Pro — Eric Worre', lesson: 'L01' },
  { id: 2, text: 'Ist das ein Schneeballsystem?', category: 'Grundverständnis', source: 'Academy', lesson: 'L02',
    tags: ['betrug', 'pyramide', 'illegal', 'abzocke', 'seriös', 'schneeball'], },
  { id: 3, text: 'Woran erkenne ich den Unterschied?', category: 'Grundverständnis', source: 'Academy', lesson: 'L02' },
  { id: 4, text: 'Ist das seriös?', category: 'Grundverständnis', source: 'Academy', lesson: 'L02',
    tags: ['seriös', 'vertrauen', 'betrug', 'legal'], },
  { id: 5, text: 'Warum hat das so einen schlechten Ruf?', category: 'Grundverständnis', source: 'Academy', lesson: 'L03',
    tags: ['ruf', 'image', 'vorurteil', 'skepsis'], },
  { id: 6, text: 'Was ist der Unterschied zu normalem Verkauf?', category: 'Grundverständnis', source: 'Go Pro — Eric Worre', lesson: 'L16' },
  { id: 7, text: 'Warum kennt das fast jeder, aber keiner erklärt es?', category: 'Grundverständnis', source: 'Academy', lesson: 'L03' },
  { id: 8, text: 'Wer verdient hier woran?', category: 'Grundverständnis', source: 'Go Pro — Eric Worre', lesson: 'L01',
    tags: ['geld', 'verdienen', 'provision', 'einkommen'], },
  { id: 9, text: 'Bin ich dann selbstständig?', category: 'Grundverständnis', source: 'Academy', lesson: 'L31',
    tags: ['selbstständig', 'gewerbe', 'steuer', 'nebenberuflich'], },
  { id: 10, text: 'Was ist ein Kunde, was ist ein Partner?', category: 'Grundverständnis', source: 'Go Pro — Eric Worre', lesson: 'L04' },

  // Selbstbild
  { id: 11, text: 'Kann ich das überhaupt?', category: 'Selbstbild', source: 'Go Pro — Eric Worre', lesson: 'L05' },
  { id: 12, text: 'Muss ich ein bestimmter Typ sein?', category: 'Selbstbild', source: 'Go Pro — Eric Worre', lesson: 'L05' },
  { id: 13, text: 'Ich bin schüchtern — geht das trotzdem?', category: 'Selbstbild', source: 'Jeb Blount', lesson: 'L13',
    tags: ['schüchtern', 'introvertiert', 'unsicher', 'angst'], },
  { id: 14, text: 'Ich kann nicht gut reden.', category: 'Selbstbild', source: 'Maxwell, Gesetz 10', lesson: 'L06' },
  { id: 15, text: 'Ich habe keine Verkaufserfahrung.', category: 'Selbstbild', source: 'Go Pro — Eric Worre', lesson: 'L05' },
  { id: 16, text: 'Werde ich dann so ein aufdringlicher Mensch?', category: 'Selbstbild', source: 'Cialdini zur Ethik', lesson: 'L20',
    tags: ['aufdringlich', 'nerven', 'druck', 'penetrant'], },
  { id: 17, text: 'Muss ich mich verstellen?', category: 'Selbstbild', source: 'Maxwell, Gesetz 6', lesson: 'L09' },
  { id: 18, text: 'Was, wenn ich mich blamiere?', category: 'Selbstbild', source: 'Jeb Blount', lesson: 'L11',
    tags: ['blamieren', 'peinlich', 'angst', 'scham'], },
  { id: 19, text: 'Bin ich dann Vertreterin?', category: 'Selbstbild', source: 'Go Pro — Eric Worre', lesson: 'L16' },
  { id: 20, text: 'Ich bin nicht der Typ für große Auftritte.', category: 'Selbstbild', source: 'Maxwell, Gesetz 2', lesson: 'L35' },

  // Kommunikation
  { id: 21, text: 'Wie spreche ich jemanden an?', category: 'Kommunikation', source: 'Go Pro — Eric Worre', lesson: 'L07',
    tags: ['ansprechen', 'anschreiben', 'nachricht', 'erstkontakt'], },
  { id: 22, text: 'Was sage ich konkret?', category: 'Kommunikation', source: 'Maxwell, Gesetz 10', lesson: 'L07',
    tags: ['was sagen', 'gesprächseinstieg', 'formulierung'], },
  { id: 23, text: 'Wie fange ich ein Gespräch an, ohne komisch zu wirken?', category: 'Kommunikation', source: 'Maxwell, Gesetz 10', lesson: 'L07' },
  { id: 24, text: 'Wie merke ich, ob jemand Interesse hat?', category: 'Kommunikation', source: 'Academy', lesson: 'L08',
    tags: ['interesse', 'signale', 'erkennen'], },
  { id: 25, text: 'Wie höre ich richtig zu?', category: 'Kommunikation', source: 'Maxwell, Gesetz 10', lesson: 'L06' },
  { id: 26, text: 'Wie erkläre ich etwas einfach?', category: 'Kommunikation', source: 'Academy', lesson: 'L10' },
  { id: 27, text: 'Warum sollte mir jemand zuhören?', category: 'Kommunikation', source: 'Maxwell, Gesetz 6', lesson: 'L09' },
  { id: 28, text: 'Wie baue ich Vertrauen auf?', category: 'Kommunikation', source: 'Maxwell, Gesetz 6', lesson: 'L09' },
  { id: 29, text: 'Wie rede ich mit Menschen, die skeptisch sind?', category: 'Kommunikation', source: 'Cialdini', lesson: 'L03' },
  { id: 30, text: 'Was mache ich, wenn jemand mich auslacht?', category: 'Kommunikation', source: 'Jeb Blount', lesson: 'L19',
    tags: ['auslachen', 'spott', 'reaktion', 'ablehnung'], },

  // Prospecting
  { id: 31, text: 'Was heißt Prospecting?', category: 'Menschen ansprechen', source: 'Fanatical Prospecting — Jeb Blount', lesson: 'L11' },
  { id: 32, text: 'Wo finde ich überhaupt Menschen?', category: 'Menschen ansprechen', source: 'Fanatical Prospecting — Jeb Blount', lesson: 'L14' },
  { id: 33, text: 'Was, wenn ich niemanden kenne?', category: 'Menschen ansprechen', source: 'Blount, Law of Familiarity', lesson: 'L14',
    tags: ['kontakte', 'niemand', 'liste', 'allein'], },
  { id: 34, text: 'Muss ich meine Freunde anschreiben?', category: 'Menschen ansprechen', source: 'Academy', lesson: 'L11',
    tags: ['freunde', 'familie', 'bekannte', 'umfeld', 'nerven'], },
  { id: 35, text: 'Muss ich Fremde ansprechen?', category: 'Menschen ansprechen', source: 'Fanatical Prospecting — Jeb Blount', lesson: 'L14' },
  { id: 36, text: 'Wie viele Menschen muss ich ansprechen?', category: 'Menschen ansprechen', source: 'Fanatical Prospecting — Jeb Blount', lesson: 'L13',
    tags: ['anzahl', 'wie viele', 'menge', 'quote'], },
  { id: 37, text: 'Wie oft soll ich das machen?', category: 'Menschen ansprechen', source: 'Blount, 30-Tage-Regel', lesson: 'L13',
    tags: ['zeit', 'regelmäßig', 'häufigkeit', 'rhythmus'], },
  { id: 38, text: 'Warum passiert in der ersten Woche nichts?', category: 'Menschen ansprechen', source: 'Blount, 30-Tage-Regel', lesson: 'L12',
    tags: ['zeit', 'geduld', 'anfang', 'nichts passiert'], },
  { id: 39, text: 'Brauche ich Social Media?', category: 'Menschen ansprechen', source: 'Blount, 5 C’s of Social Selling', lesson: 'L15',
    tags: ['instagram', 'tiktok', 'social media', 'follower', 'reichweite', 'online'], },
  { id: 40, text: 'Was, wenn ich nur 100 Follower habe?', category: 'Menschen ansprechen', source: 'Academy', lesson: 'L15',
    tags: ['instagram', 'follower', 'reichweite', 'klein'], },
  { id: 41, text: 'Muss ich mein Gesicht zeigen?', category: 'Menschen ansprechen', source: 'Academy', lesson: 'L15',
    tags: ['instagram', 'video', 'reels', 'gesicht', 'kamera'], },
  { id: 42, text: 'Wie halte ich das durch, wenn es nicht läuft?', category: 'Menschen ansprechen', source: 'Blount und Maxwell, Gesetz 3', lesson: 'L13',
    tags: ['zeit', 'durchhalten', 'motivation', 'aufgeben'], },

  // Verkaufen
  { id: 43, text: 'Muss ich verkaufen?', category: 'Verkaufen', source: 'Go Pro — Eric Worre', lesson: 'L16',
    tags: ['verkaufen', 'vertrieb', 'druck'], },
  { id: 44, text: 'Wie verkaufe ich, ohne Druck zu machen?', category: 'Verkaufen', source: 'Cialdini zur Ethik', lesson: 'L20',
    tags: ['verkaufen', 'druck', 'ohne druck', 'ethik'], },
  { id: 45, text: 'Was ist ein guter Verkäufer?', category: 'Verkaufen', source: 'Go Pro — Eric Worre', lesson: 'L16' },
  { id: 46, text: 'Warum kaufen Menschen überhaupt?', category: 'Verkaufen', source: 'Influence — Cialdini', lesson: 'L17' },
  { id: 47, text: 'Warum sagen Menschen Nein?', category: 'Verkaufen', source: 'Academy', lesson: 'L18',
    tags: ['nein', 'absage', 'ablehnung'], },
  { id: 48, text: 'Was mache ich bei einem Nein?', category: 'Verkaufen', source: 'Jeb Blount und Academy', lesson: 'L19',
    tags: ['nein', 'absage', 'ablehnung', 'reaktion'], },
  { id: 49, text: 'Wie gehe ich mit Ablehnung um?', category: 'Verkaufen', source: 'Jeb Blount', lesson: 'L19',
    tags: ['nein', 'ablehnung', 'zurückweisung', 'angst'], },
  { id: 50, text: 'Darf ich nachfragen, wenn jemand Nein gesagt hat?', category: 'Verkaufen', source: 'Academy', lesson: 'L29',
    tags: ['nein', 'nachfassen', 'nochmal fragen'], },
  { id: 51, text: 'Was, wenn das Produkt nicht passt?', category: 'Verkaufen', source: 'Go Pro — Eric Worre', lesson: 'L16' },
  { id: 52, text: 'Muss ich jedem etwas verkaufen?', category: 'Verkaufen', source: 'Academy', lesson: 'L04' },

  // Psychologie
  { id: 53, text: 'Warum sagen Menschen Ja?', category: 'Psychologie', source: 'Influence — Cialdini', lesson: 'L21' },
  { id: 54, text: 'Wird hier mit mir gespielt?', category: 'Psychologie', source: 'Cialdini zur Ethik', lesson: 'L21' },
  { id: 55, text: 'Ist Psychologie nicht Manipulation?', category: 'Psychologie', source: 'Cialdini zur Ethik', lesson: 'L20',
    tags: ['manipulation', 'psychologie', 'ethik', 'tricks'], },
  { id: 56, text: 'Woran erkenne ich, dass jemand mich manipuliert?', category: 'Psychologie', source: 'Cialdini zur Ethik', lesson: 'L26',
    tags: ['manipulation', 'erkennen', 'schutz', 'tricks'], },
  { id: 57, text: 'Wo ist die Grenze zwischen überzeugen und überreden?', category: 'Psychologie', source: 'Cialdini zur Ethik', lesson: 'L20' },
  { id: 58, text: 'Warum wirkt Zeitdruck so oft?', category: 'Psychologie', source: 'Cialdini, Knappheit', lesson: 'L26',
    tags: ['zeitdruck', 'knappheit', 'countdown', 'verknappung'], },
  { id: 59, text: 'Warum vertraue ich manchen Menschen sofort?', category: 'Psychologie', source: 'Cialdini, Sympathie und Verbundenheit', lesson: 'L22' },

  // Follow-up
  { id: 60, text: 'Was heißt Follow-up?', category: 'Dranbleiben', source: 'Go Pro — Eric Worre, Schritt 4', lesson: 'L27' },
  { id: 61, text: 'Wann melde ich mich wieder?', category: 'Dranbleiben', source: 'Academy', lesson: 'L27' },
  { id: 62, text: 'Nerve ich dann nicht?', category: 'Dranbleiben', source: 'Academy', lesson: 'L28',
    tags: ['nerven', 'aufdringlich', 'nachfassen'], },
  { id: 63, text: 'Wie oft darf ich nachfassen?', category: 'Dranbleiben', source: 'Academy', lesson: 'L29' },
  { id: 64, text: 'Wann höre ich auf?', category: 'Dranbleiben', source: 'Academy', lesson: 'L29' },

  // Team und Führung
  { id: 65, text: 'Was ist ein Team?', category: 'Team und Führung', source: 'Go Pro — Eric Worre', lesson: 'L31',
    tags: ['team', 'partner', 'gruppe', 'downline'], },
  { id: 66, text: 'Wie baue ich ein Team auf?', category: 'Team und Führung', source: 'Go Pro — Eric Worre, Schritt 6 und 7', lesson: 'L32',
    tags: ['team', 'aufbauen', 'partner', 'wachstum'], },
  { id: 67, text: 'Wie funktioniert Duplikation?', category: 'Team und Führung', source: 'Maxwell, Gesetz 13 und 20', lesson: 'L33',
    tags: ['team', 'duplikation', 'wachstum', 'multiplikation'], },
  { id: 68, text: 'Was bedeutet Führung?', category: 'Team und Führung', source: 'Maxwell, Gesetz 2', lesson: 'L35' },
  { id: 69, text: 'Was macht einen Leader aus?', category: 'Team und Führung', source: 'Maxwell, Gesetz 2 und 6', lesson: 'L35' },
  { id: 70, text: 'Muss ich Chef sein?', category: 'Team und Führung', source: 'Maxwell, Gesetz 2', lesson: 'L31' },
  { id: 71, text: 'Was mache ich, wenn mein Team nichts macht?', category: 'Team und Führung', source: 'Maxwell, Gesetz 13', lesson: 'L34',
    tags: ['team', 'inaktiv', 'motivation', 'niemand macht'], },
  { id: 72, text: 'Wie motiviere ich Menschen?', category: 'Team und Führung', source: 'Maxwell, Gesetz 13 und 10', lesson: 'L34',
    tags: ['team', 'motivation', 'antreiben'], },
  { id: 73, text: 'Wie helfe ich jemandem, selbstständig zu werden?', category: 'Team und Führung', source: 'Maxwell, Gesetz 12 und 20', lesson: 'L41',
    tags: ['team', 'selbstständig', 'begleiten', 'loslassen'], },

  // Entwicklung
  { id: 74, text: 'Wie werde ich selbst besser?', category: 'Entwicklung', source: 'Maxwell, Gesetz 1 und 3', lesson: 'L39',
    tags: ['entwicklung', 'besser werden', 'lernen'], },

  // Offene Fragen — bewusst ohne Antwort
  {
    id: 75,
    text: 'Was kostet der Einstieg bei einem konkreten Unternehmen?',
    category: 'Offen',
    source: '—',
    unanswered:
      'Diese Frage können wir hier nicht beantworten. Preise und Einstiegsbedingungen unterscheiden sich je Unternehmen und liegen uns nicht in einer Form vor, die wir öffentlich zeigen dürfen. Frag die Person, die dir davon erzählt hat, nach den offiziellen Unterlagen — und lass dir die Antwort schriftlich geben.',
    tags: ['kosten', 'preis', 'einstieg', 'investition', 'geld', 'startpaket'],
  },
  {
    id: 76,
    text: 'Was passiert, wenn ich wieder aufhören möchte?',
    category: 'Offen',
    source: '—',
    unanswered:
      'Auch das können wir nicht allgemein beantworten. Widerruf, Kündigung und Laufzeiten sind von Unternehmen zu Unternehmen verschieden. Das ist eine der wichtigsten Fragen überhaupt — stell sie vor jeder Entscheidung und bestehe auf einer schriftlichen Antwort.',
    tags: ['kündigen', 'aufhören', 'ausstieg', 'widerruf', 'vertrag', 'kosten'],
  },
  {
    id: 77,
    text: 'Wie viel verdient man damit?',
    category: 'Offen',
    source: '—',
    unanswered:
      'Diese Frage beantworten wir bewusst nicht. Jede Zahl wäre entweder ein Versprechen, das niemand halten kann, oder ein Beispiel, das nichts über deinen Fall aussagt. Wer dir eine konkrete Zahl nennt, ohne deine Umstände zu kennen, sagt dir mehr über sich als über das Geschäft.',
    tags: ['verdienst', 'einkommen', 'geld', 'gehalt', 'wie viel', 'kosten'],
  },
]

export const questionCategories: QuestionCategory[] = [
  'Grundverständnis',
  'Selbstbild',
  'Kommunikation',
  'Menschen ansprechen',
  'Verkaufen',
  'Psychologie',
  'Dranbleiben',
  'Team und Führung',
  'Entwicklung',
  'Offen',
]

/** Die 74 beantworteten Fragen — die drei offenen zählen getrennt. */
export const ANSWERED_QUESTIONS = questions.filter((q) => !q.unanswered).length
