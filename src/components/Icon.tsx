type Props = {
  name: IconName
  className?: string
  /** Dekorative Icons neben sichtbarem Text bleiben aus dem Baum. */
  title?: string
}

export type IconName =
  | 'start'
  | 'journey'
  | 'question'
  | 'concern'
  | 'progress'
  | 'search'
  | 'back'
  | 'forward'
  | 'check'
  | 'close'
  | 'clock'
  | 'book'

const paths: Record<IconName, string> = {
  start: 'M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5',
  journey: 'M4 6h7M4 12h11M4 18h7M17.5 4.5v6m0 0-2.2-2.2m2.2 2.2 2.2-2.2M17.5 19.5v-6',
  question: 'M9.2 9a2.9 2.9 0 1 1 3.6 2.8c-.7.2-1 .8-1 1.5v.6M12 17.2h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  concern: 'M12 3 4 6.2v5.1c0 4.4 3.2 8.4 8 9.7 4.8-1.3 8-5.3 8-9.7V6.2L12 3Zm0 5.6v4m0 3.2h.01',
  progress: 'M4 19V9m5 10V5m5 14v-7m5 7V8',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5.2-1.8L21 21',
  back: 'M15 19l-7-7 7-7',
  forward: 'M9 5l7 7-7 7',
  check: 'M5 12.5 9.5 17 19 7.5',
  close: 'M6 6l12 12M18 6 6 18',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2',
  book: 'M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z',
}

export function Icon({ name, className = 'h-5 w-5', title }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={paths[name]} />
    </svg>
  )
}
