import { Link, useLocation } from 'react-router-dom'
import { Icon, type IconName } from './Icon'

export type NavItem = {
  to: string
  label: string
  icon: IconName
  /** Weitere Pfade, die zu diesem Eintrag gehören — z. B. eine Lektion zur Lernreise. */
  also?: string[]
}

/**
 * Schwebende Navigation für das Telefon.
 *
 * Der aktive Eintrag wird durch eine Pille markiert, die beim Wechsel an die
 * neue Stelle gleitet. Bewegt wird ausschließlich `transform`, damit nichts
 * neu umbricht; `prefers-reduced-motion` wird global auf nahezu null gesetzt.
 */
export function BottomNav({ items }: { items: NavItem[] }) {
  const { pathname } = useLocation()

  const activeIndex = items.findIndex((item) => {
    if (item.to === '/') return pathname === '/'
    if (pathname === item.to || pathname.startsWith(`${item.to}/`)) return true
    return (item.also ?? []).some((p) => pathname === p || pathname.startsWith(`${p}/`))
  })

  return (
    <nav
      className="sticky bottom-0 z-30 md:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.625rem)' }}
      aria-label="Hauptnavigation"
    >
      {/* Weicher Übergang, damit Inhalt nicht hart unter der Leiste abreißt. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper via-paper/90 to-transparent"
      />

      <ul className="relative mx-3 flex rounded-[1.75rem] border border-line bg-surface/90 p-1.5 shadow-[0_10px_34px_-14px_rgb(0_0_0/0.3)] backdrop-blur-md">
        {/* Gleitende Pille hinter dem aktiven Eintrag. */}
        {activeIndex >= 0 && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1.5 top-1.5 left-1.5 rounded-[1.375rem] bg-accent-soft transition-transform duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{
              width: `calc((100% - 0.75rem) / ${items.length})`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
        )}

        {items.map((item, i) => {
          const isActive = i === activeIndex
          return (
            <li key={item.to} className="relative min-w-0 flex-1">
              <Link
                to={item.to}
                aria-current={isActive ? 'page' : undefined}
                className={`flex h-[3.25rem] flex-col items-center justify-center gap-[3px] rounded-[1.375rem] px-0.5 text-[0.625rem] font-medium leading-none transition-[color,transform] duration-200 active:scale-95 ${
                  isActive ? 'text-accent' : 'text-faint'
                }`}
              >
                <Icon
                  name={item.icon}
                  className={`h-5 w-5 transition-transform duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                    isActive ? '-translate-y-px scale-110' : ''
                  }`}
                />
                <span className="w-full truncate text-center">{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
