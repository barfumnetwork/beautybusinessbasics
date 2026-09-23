import { lessonsA } from './lessons.stufe1-4'
import { lessonsB } from './lessons.stufe5-9'
import type { Lesson } from './types'

/** Alle 42 Lektionen in der empfohlenen Reihenfolge. Gesperrt ist nichts. */
export const lessons: Lesson[] = [...lessonsA, ...lessonsB]

export const lessonById = (id: string): Lesson | undefined =>
  lessons.find((l) => l.id.toLowerCase() === id.toLowerCase())

export const lessonsOfStage = (stage: number): Lesson[] =>
  lessons.filter((l) => l.stage === stage)

export const lessonIndex = (id: string): number =>
  lessons.findIndex((l) => l.id.toLowerCase() === id.toLowerCase())

export const neighbours = (id: string): { prev?: Lesson; next?: Lesson } => {
  const i = lessonIndex(id)
  if (i < 0) return {}
  return { prev: lessons[i - 1], next: lessons[i + 1] }
}

export const TOTAL_LESSONS = lessons.length
