import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { lessonById } from '../content/lessons'
import { ANSWERED_QUESTIONS, questionCategories, questions } from '../content/questions'
import type { QuestionCategory } from '../content/types'

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
}

const shortcuts = ['Freunde', 'Nein', 'Instagram', 'Verkaufen', 'Team', 'Kosten', 'Zeit']

export function QuestionsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<QuestionCategory | 'alle'>('alle')

  const filtered = useMemo(() => {
    const q = fold(query.trim())
    return questions.filter((item) => {
      if (category !== 'alle' && item.category !== category) return false
      if (q.length < 2) return true
      const hay = `${item.text} ${item.category} ${item.source} ${item.unanswered ?? ''} ${(item.tags ?? []).join(' ')}`
      return fold(hay).includes(q)
    })
  }, [query, category])

  const grouped = useMemo(() => {
    const map = new Map<QuestionCategory, typeof questions>()
    for (const item of filtered) {
      const list = map.get(item.category) ?? []
      list.push(item)
      map.set(item.category, list)
    }
    return [...map.entries()]
  }, [filtered])

  return (
    <div className="rise mx-auto max-w-3xl px-4 pt-10">
      <p className="eyebrow">Fragen</p>
      <h1 className="display mt-2 text-[2rem] leading-tight text-ink sm:text-[2.5rem]">
        Die Fragen, die fast alle haben
      </h1>
      <p className="prose-measure mt-4 text-[1.0625rem] leading-relaxed text-muted">
        {ANSWERED_QUESTIONS} Fragen, jede mit der Lektion verknüpft, die sie beantwortet.
        Drei weitere beantworten wir bewusst nicht — auch das steht hier.
      </p>

      <div className="sticky top-[5.5rem] z-20 -mx-4 mt-8 bg-paper/95 px-4 pb-3 pt-1 backdrop-blur">
        <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3">
          <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={'Suchen — zum Beispiel „Freunde"'}
            className="h-12 w-full min-w-0 bg-transparent text-base text-ink outline-none placeholder:text-faint"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Suche leeren"
              className="flex h-11 w-9 shrink-0 items-center justify-center text-faint hover:text-ink"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="-mx-4 mt-2 overflow-x-auto px-4">
          <div className="flex w-max gap-2 pb-1">
            {(['alle', ...questionCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`min-h-9 shrink-0 rounded-full border px-3.5 text-[0.8125rem] font-medium transition-colors ${
                  category === c
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-line text-muted hover:text-ink'
                }`}
              >
                {c === 'alle' ? 'Alle' : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {query.trim().length < 2 && category === 'alle' && (
        <div className="mt-2 flex flex-wrap gap-2">
          {shortcuts.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQuery(s)}
              className="min-h-9 rounded-full bg-raised px-3.5 text-[0.8125rem] text-muted transition-colors hover:text-accent"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="mt-10 text-muted">
          Dazu ist hier nichts hinterlegt. Versuch ein einzelnes Wort — zum Beispiel „Nein"
          oder „Team".
        </p>
      )}

      <div className="mt-6 space-y-8 pb-6">
        {grouped.map(([cat, items]) => (
          <section key={cat}>
            <h2 className="eyebrow">{cat}</h2>
            <ul className="mt-2 divide-y divide-line border-t border-line">
              {items.map((item) => (
                <li key={item.id} id={`f${item.id}`}>
                  {item.lesson ? (
                    <Link
                      to={`/lektion/${item.lesson.toLowerCase()}`}
                      className="flex items-start gap-3 py-3.5 transition-colors hover:text-accent"
                    >
                      <span className="min-w-0">
                        <span className="block font-medium text-ink">{item.text}</span>
                        <span className="mt-0.5 block text-[0.8125rem] text-faint">
                          {lessonById(item.lesson)?.title !== item.text && (
                            <>{lessonById(item.lesson)?.title} · </>
                          )}
                          {item.source}
                        </span>
                      </span>
                      <Icon name="forward" className="ml-auto mt-1 h-4 w-4 shrink-0 text-faint" />
                    </Link>
                  ) : (
                    <div className="py-3.5">
                      <p className="font-medium text-ink">{item.text}</p>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                        {item.unanswered}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
