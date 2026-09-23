import { lessons } from '../content/lessons'
import { objections } from '../content/objections'
import { questions } from '../content/questions'
import { stages } from '../content/stages'

export type SearchHit = {
  kind: 'Lektion' | 'Frage' | 'Bedenken' | 'Stufe'
  title: string
  context: string
  to: string
  score: number
}

/** Umlaute normalisieren, damit "fuehrung" auch "Führung" findet. */
function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[‘’‚“”„]/g, "'")
}

type Doc = Omit<SearchHit, 'score'> & { haystack: string }

let cache: Doc[] | null = null

function corpus(): Doc[] {
  if (cache) return cache
  const docs: Doc[] = []

  for (const s of stages) {
    docs.push({
      kind: 'Stufe',
      title: `${String(s.number).padStart(2, '0')} · ${s.title}`,
      context: s.description,
      to: `/lernreise/${s.number}`,
      haystack: fold([s.title, s.description, s.outcome].join(' ')),
    })
  }

  for (const l of lessons) {
    docs.push({
      kind: 'Lektion',
      title: l.title,
      context: l.coreQuestion,
      to: `/lektion/${l.id.toLowerCase()}`,
      haystack: fold(
        [
          l.id,
          l.title,
          l.coreQuestion,
          l.goal ?? '',
          l.source,
          ...l.explanation,
          l.example ?? '',
          l.practice,
          l.reflection,
          l.boundary ?? '',
        ].join(' ')
      ),
    })
  }

  for (const q of questions) {
    docs.push({
      kind: 'Frage',
      title: q.text,
      context: q.unanswered ? 'Offen — wir beantworten das bewusst nicht' : q.category,
      to: q.lesson ? `/lektion/${q.lesson.toLowerCase()}` : `/fragen#f${q.id}`,
      haystack: fold(
        [q.text, q.category, q.source, q.unanswered ?? '', ...(q.tags ?? [])].join(' ')
      ),
    })
  }

  for (const o of objections) {
    docs.push({
      kind: 'Bedenken',
      title: o.thought,
      context: o.behind,
      to: `/bedenken/${o.slug}`,
      haystack: fold(
        [o.thought, o.behind, o.understandable, o.practical, o.limit ?? '', ...o.tags].join(' ')
      ),
    })
  }

  cache = docs
  return docs
}

export function search(query: string, limit = 24): SearchHit[] {
  const q = fold(query.trim())
  if (q.length < 2) return []
  const terms = q.split(/\s+/).filter(Boolean)

  const hits: SearchHit[] = []
  for (const doc of corpus()) {
    let score = 0
    for (const term of terms) {
      const inTitle = fold(doc.title).includes(term)
      const inBody = doc.haystack.includes(term)
      if (!inTitle && !inBody) {
        score = -1
        break
      }
      score += inTitle ? 4 : 1
    }
    if (score > 0) {
      // Bedenken und Fragen zuerst — wer sucht, hat meistens eine konkrete Sorge.
      const boost = doc.kind === 'Bedenken' ? 2 : doc.kind === 'Frage' ? 1 : 0
      hits.push({ ...doc, score: score + boost })
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit)
}
