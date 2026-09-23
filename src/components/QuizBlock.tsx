import { useEffect, useState } from 'react'
import type { Quiz } from '../content/types'
import { Icon } from './Icon'

/**
 * Selbstkontrolle, keine Prüfung.
 * Kein Punktestand, kein Ergebnis, kein zweiter Versuch — es gibt nichts zu bestehen.
 * Eine falsche Antwort führt zur Erklärung, nicht zur Bewertung.
 */
export function QuizBlock({ quiz, lessonId }: { quiz: Quiz; lessonId: string }) {
  const [picked, setPicked] = useState<number | null>(null)

  // Beim Lektionswechsel zurücksetzen.
  useEffect(() => setPicked(null), [lessonId])

  const answered = picked !== null
  const correct = picked === quiz.correct

  return (
    <section className="mt-10 rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <p className="eyebrow">Kurz nachgedacht</p>
      <h2 className="display mt-1.5 text-lg leading-snug text-ink">{quiz.question}</h2>

      <ul className="mt-4 space-y-2">
        {quiz.options.map((option, i) => {
          const isPicked = picked === i
          const isAnswer = i === quiz.correct
          const show = answered && (isPicked || isAnswer)
          return (
            <li key={option}>
              <button
                type="button"
                disabled={answered}
                onClick={() => setPicked(i)}
                aria-pressed={isPicked}
                className={[
                  'flex min-h-11 w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-[0.9375rem] leading-snug transition-colors',
                  answered
                    ? show
                      ? isAnswer
                        ? 'border-accent bg-accent-soft text-ink'
                        : 'border-line bg-raised text-muted'
                      : 'border-line text-faint'
                    : 'border-line text-ink hover:border-accent hover:bg-accent-soft',
                ].join(' ')}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.6875rem] font-semibold ${
                    show && isAnswer
                      ? 'border-accent bg-accent text-accent-ink'
                      : 'border-line text-faint'
                  }`}
                >
                  {show && isAnswer ? (
                    <Icon name="check" className="h-3 w-3" />
                  ) : (
                    String.fromCharCode(97 + i)
                  )}
                </span>
                {option}
              </button>
            </li>
          )
        })}
      </ul>

      {answered && (
        <div className="rise mt-4 border-t border-line pt-4">
          <p className="text-[0.9375rem] leading-relaxed text-ink">
            {correct ? quiz.onCorrect : quiz.onWrong}
          </p>
        </div>
      )}
    </section>
  )
}
