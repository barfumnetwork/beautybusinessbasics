import { useState } from 'react'
import { Icon } from './Icon'

/**
 * Weitergeben, nicht werben.
 *
 * Bewusst nur an einer Stelle und nie am Ende einer Lektion: Dort endet die
 * Academy ohne Aufforderung. Wer etwas weitergeben möchte, findet es hier.
 */
const GROUP_URL = 'https://chat.whatsapp.com/Dz3SuNy8V176mjAbaavThj?s=cl&p=i&mlu=4&ilr=4'

const shareText =
  'Eine kostenlose Lernreise: Network Marketing, Kommunikation, Verkauf, Psychologie und Führung einfach erklärt.'

export function SharePanel() {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  const url = typeof window === 'undefined' ? '' : window.location.origin

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setFailed(false)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      // Zwischenablage kann gesperrt sein — dann zeigen wir die Adresse zum Abschreiben.
      setFailed(true)
    }
  }

  return (
    <section className="mt-14 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <p className="eyebrow">Weitergeben</p>
      <h2 className="display mt-2 text-2xl leading-snug text-ink">
        Kostenlos — auch für alle, denen du sie zeigst
      </h2>
      <p className="prose-measure mt-3 text-[0.9375rem] leading-relaxed text-muted">
        Diese Academy kostet nichts und verlangt keine Anmeldung. Wenn du sie jemandem
        zeigen möchtest — einer Freundin, der Familie, Bekannten — schick einfach den Link.
        Wer Fragen hat, kann sie in der WhatsApp-Gruppe stellen.
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={copy}
          className="flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon name={copied ? 'check' : 'book'} className="h-4 w-4" />
          {copied ? 'Link kopiert' : 'Link kopieren'}
        </button>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Icon name="forward" className="h-4 w-4" />
          Per WhatsApp schicken
        </a>

        <a
          href={GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink"
        >
          <Icon name="concern" className="h-4 w-4" />
          Zur WhatsApp-Gruppe
        </a>
      </div>

      {failed && (
        <p className="mt-3 rounded-lg bg-raised px-3 py-2 text-[0.8125rem] text-muted">
          Kopieren hat nicht geklappt. Die Adresse lautet:{' '}
          <span className="font-medium text-ink">{url}</span>
        </p>
      )}

      <p className="mt-4 text-[0.8125rem] leading-relaxed text-faint">
        Niemand muss der Gruppe beitreten, um hier zu lernen. Alle Inhalte sind ohne
        Gruppe, ohne Konto und ohne Anmeldung vollständig zugänglich.
      </p>
    </section>
  )
}
