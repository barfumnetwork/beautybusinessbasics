import type { Objection } from './types'

/**
 * Fragen und Bedenken — nicht "Einwände überwinden".
 *
 * Aufbau jedes Eintrags: Der Gedanke, was dahintersteckt, warum die Sorge
 * nachvollziehbar ist, was die Quelle dazu sagt, wie man praktisch damit
 * umgeht — und wo die Grenze liegt bzw. was wir nicht wissen.
 */
export const objections: Objection[] = [
  {
    id: 1,
    slug: 'freunde-nerven',
    thought: 'Ich möchte meine Freunde nicht nerven.',
    behind:
      'Die Angst, eine Beziehung gegen Geld einzutauschen. Wer einmal erlebt hat, dass ein Freund plötzlich etwas von einem wollte, kennt das Gefühl genau.',
    understandable:
      'Vollkommen. Diese Sorge ist berechtigt, denn genau das passiert in dieser Branche tatsächlich oft. Wer sie nicht hat, hat meistens schon jemanden verloren.',
    source: 'Maxwell, Gesetz 10 (erst Verbindung, dann Bitte) und Cialdini zur Ethik',
    practical:
      'Lerne zuerst, Interesse zu erkennen. Wer kein Interesse zeigt, bekommt kein zweites Gespräch — und bleibt dein Freund. Die Menschen, die Beziehungen verlieren, sind nicht die, die einmal gefragt haben. Es sind die, die nach dem Nein weitergemacht haben.',
    limit:
      'Wenn du merkst, dass du ein Treffen nur noch deshalb vorschlägst, um etwas zu zeigen, ist die Grenze überschritten.',
    tags: ['freunde', 'beziehung', 'nerven', 'umfeld', 'familie', 'bekannte'],
  },
  {
    id: 2,
    slug: 'schneeballsystem',
    thought: 'Ist das nicht ein Schneeballsystem?',
    behind: 'Die Angst, in etwas Unseriöses oder Illegales zu geraten.',
    understandable:
      'Ja. Und diese Frage sollte jeder stellen — sie ist kein Misstrauen, sondern Sorgfalt.',
    source: 'Eigene Erklärung der Academy',
    practical:
      'Das entscheidende Merkmal ist, womit das Geld verdient wird. Fließt es aus dem Verkauf echter Produkte an echte Kunden? Oder aus den Einstiegszahlungen neuer Teilnehmer? Diese eine Frage darfst du jedem Unternehmen stellen — und du solltest sie stellen. Wer ausweicht, hat dir damit geantwortet.',
    limit:
      'Diese Plattform gibt keine Rechtsberatung und ersetzt keine. Bei Zweifeln hilft die Verbraucherzentrale weiter.',
    tags: ['schneeball', 'pyramide', 'illegal', 'seriös', 'betrug', 'legal'],
  },
  {
    id: 3,
    slug: 'muss-ich-verkaufen',
    thought: 'Muss ich verkaufen? Ich kann das nicht.',
    behind:
      'Das Bild vom aufdringlichen Vertreter an der Haustür. Niemand möchte so ein Mensch sein.',
    understandable: 'Ja. Und es spricht für dich, dass du das nicht willst.',
    source: 'Go Pro — Eric Worre, gestützt auf Cialdini zur Ethik',
    practical:
      'Verkaufen heißt herauszufinden, ob etwas passt — nicht, jemanden zu überreden. Wenn es nicht passt, ist „nein, das ist nichts für dich" die richtige Antwort. Übe zuerst das. Wer das kann, muss nie jemanden bearbeiten.',
    tags: ['verkaufen', 'vertreter', 'überreden', 'druck', 'kann ich nicht'],
  },
  {
    id: 4,
    slug: 'kenne-niemanden',
    thought: 'Was, wenn ich niemanden kenne?',
    behind: 'Das Gefühl, die falschen Voraussetzungen mitzubringen.',
    understandable:
      'Ja — besonders, wenn man gerade umgezogen ist, viel arbeitet oder einfach ein kleines Umfeld hat.',
    source: 'Jeb Blount, Law of Familiarity',
    practical:
      'Kontakte entstehen durch Sichtbarkeit über Zeit, nicht durch eine Liste am ersten Tag. Schreib auf, wer sich in den letzten zwölf Monaten von sich aus bei dir gemeldet hat. Das ist deine echte Ausgangslage — und sie ist bei fast allen länger als gedacht.',
    tags: ['kontakte', 'niemand', 'liste', 'umfeld', 'allein', 'neu'],
  },
  {
    id: 5,
    slug: 'nein-gesagt',
    thought: 'Was, wenn die Person Nein sagt?',
    behind: 'Angst vor persönlicher Ablehnung — nicht vor dem Nein selbst.',
    understandable:
      'Ja. Ablehnung tut weh, und das lässt sich nicht wegdenken.',
    source: 'Jeb Blount zum Umgang mit Ablehnung',
    practical:
      'Die meisten Neins gelten dem Zeitpunkt, nicht dir. Bereite einen Satz vor, den du bei einem Nein sagst — etwas Freundliches, das das Gespräch beendet, ohne die Beziehung zu belasten. Wer diesen Satz hat, fürchtet das Nein deutlich weniger.',
    limit: 'Bei uns gilt: Ein Nein wird respektiert, nicht bearbeitet.',
    tags: ['nein', 'ablehnung', 'absage', 'angst', 'zurückweisung'],
  },
  {
    id: 6,
    slug: 'brauche-ich-instagram',
    thought: 'Brauche ich Instagram und viele Follower?',
    behind: 'Die Angst, ohne Reichweite von vornherein chancenlos zu sein.',
    understandable:
      'Ja. Man sieht online fast nur Menschen mit großer Reichweite — die anderen sieht man eben nicht.',
    source: 'Jeb Blount, 5 C’s of Social Selling',
    practical:
      'Reichweite ist ein Weg, nicht der einzige. Zehn Menschen, die dir vertrauen, sind mehr wert als tausend, die dich nicht kennen. Und wer sein Gesicht nicht zeigen will, muss es nicht.',
    tags: ['instagram', 'social media', 'follower', 'reichweite', 'gesicht', 'online'],
  },
  {
    id: 7,
    slug: 'psychologie-manipulation',
    thought: 'Ist Psychologie nicht Manipulation?',
    behind: 'Die Angst, benutzt zu werden — oder selbst andere zu benutzen.',
    understandable:
      'Sehr. Und in diesem Umfeld ist die Sorge besonders angebracht.',
    source: 'Robert B. Cialdini, Aussage zur ethischen Anwendung',
    practical:
      'Cialdini selbst sagt: Ethisch angewandt bauen diese Prinzipien langfristige Beziehungen auf. Unethisch angewandt wirken sie kurz und zerstören die Beziehung, sobald es auffliegt. Die Grenze ist einfach: Hilfst du jemandem, etwas zu verstehen, das ihm nützt? Oder bringst du ihn zu etwas, das ihm nicht nützt?',
    limit:
      'Jede Psychologie-Lektion auf dieser Plattform endet deshalb mit dem Abschnitt „Wo die Grenze liegt".',
    tags: ['psychologie', 'manipulation', 'cialdini', 'tricks', 'ethik', 'beeinflussen'],
  },
  {
    id: 8,
    slug: 'blamieren',
    thought: 'Ich habe Angst, mich zu blamieren.',
    behind:
      'Sozialer Schmerz, nicht Geschäftsangst. Es geht darum, vor Menschen dazustehen, deren Meinung einem wichtig ist.',
    understandable: 'Ja. Das ist eine der ehrlichsten Sorgen überhaupt.',
    source: 'Jeb Blount zu Angst und Frust beim Erstkontakt',
    practical:
      'Die Angst verschwindet nicht durch Nachdenken. Sie wird kleiner durch Wiederholung. Fang mit dem leichtesten Gespräch an, nicht mit dem wichtigsten — und rechne damit, dass die ersten drei ungelenk werden.',
    tags: ['blamieren', 'peinlich', 'angst', 'schüchtern', 'unsicher'],
  },
  {
    id: 9,
    slug: 'funktioniert-nicht',
    thought: 'Was, wenn es nicht funktioniert?',
    behind: 'Angst vor verlorener Zeit und verlorenem Geld.',
    understandable: 'Ja, und das ist ein reales Risiko. Wir behaupten nichts anderes.',
    source: 'Eigene Erklärung der Academy',
    practical:
      'Frag vor jeder Entscheidung: Was kostet mich das, wenn nichts daraus wird? Kannst du diese Antwort aushalten, ist es deine Entscheidung. Kannst du sie nicht aushalten, ist es keine — dann ist es ein Risiko, das du dir nicht leisten kannst.',
    limit:
      'Konkrete Kosten und Ausstiegsbedingungen können wir hier nicht nennen. Lass sie dir vom jeweiligen Unternehmen schriftlich geben.',
    tags: ['risiko', 'scheitern', 'geld', 'verlust', 'funktioniert nicht', 'kosten'],
  },
  {
    id: 10,
    slug: 'warum-ich',
    thought: 'Warum sollte ausgerechnet ich Erfolg haben?',
    behind: 'Selbstzweifel — und meistens der Vergleich mit Menschen, die schon weiter sind.',
    understandable: 'Ja. Und die ehrliche Antwort ist unbequem.',
    source: 'Maxwell, Gesetz 1 (Deckel) und Gesetz 3 (Prozess)',
    practical:
      'Niemand weiß das. Was du beeinflussen kannst, ist, ob du die Fähigkeiten entwickelst. Was du nicht beeinflussen kannst, garantiert dir auch niemand. Wer dir etwas anderes erzählt, verkauft dir eine Geschichte.',
    tags: ['erfolg', 'zweifel', 'garantie', 'vergleich', 'schaffe ich das'],
  },
  {
    id: 11,
    slug: 'neben-dem-job',
    thought: 'Kann ich das neben meinem Job machen?',
    behind: 'Die Frage, ob der Aufwand realistisch in ein volles Leben passt.',
    understandable: 'Ja, und sie ist wichtiger als die meisten anderen.',
    source: 'Jeb Blount und Maxwell, Gesetz 3',
    practical:
      'Die Frage ist nicht, ob es geht, sondern wie viel Zeit du regelmäßig hast. Lieber vier feste Stunden pro Woche als ein ganzer Samstag einmal im Monat. Regelmäßigkeit schlägt Menge — das sagen beide Autoren unabhängig voneinander.',
    tags: ['zeit', 'job', 'nebenbei', 'feierabend', 'kinder', 'vollzeit'],
  },
  {
    id: 12,
    slug: 'was-denkt-mein-umfeld',
    thought: 'Was denkt mein Umfeld über mich?',
    behind:
      'Sozialer Status. Das ist der am häufigsten verschwiegene Einwand überhaupt — kaum jemand spricht ihn aus.',
    understandable:
      'Ja. Und er verschwindet nicht dadurch, dass man ihn ignoriert oder als Ausrede abtut.',
    source: 'Eigene Erklärung der Academy, gestützt auf Cialdini, Social Proof',
    practical:
      'Manche in deinem Umfeld werden es komisch finden. Das ist der Preis, und du darfst entscheiden, ob er dir zu hoch ist. Niemand hier sagt dir, dass du darüber hinwegsehen musst.',
    limit:
      'Wer dir sagt, dein Umfeld sei einfach nur neidisch, macht es sich zu leicht. Nebenbei schneidet er dich von den Menschen ab, die dich am längsten kennen.',
    tags: ['umfeld', 'peinlich', 'ruf', 'familie', 'was denken andere', 'status'],
  },
  {
    id: 13,
    slug: 'team-macht-nichts',
    thought: 'Was mache ich, wenn mein Team nichts macht?',
    behind: 'Das Gefühl, verantwortlich zu sein für Menschen, die man nicht steuern kann.',
    understandable: 'Ja. Und die Antwort ist unbequem.',
    source: 'Maxwell, Gesetz 13 (Vorbild) und Gesetz 2 (Einfluss)',
    practical:
      'Schau zuerst, was dein Team von dir sieht. Menschen tun, was sie sehen, nicht was ihnen gesagt wird. Danach: Hat jeder verstanden, was genau zu tun ist? Und erst dann: Will die Person es überhaupt? Du kannst niemanden motivieren — du kannst nur jemand sein, dem man folgen möchte.',
    tags: ['team', 'motivation', 'führung', 'niemand macht', 'partner', 'inaktiv'],
  },
  {
    id: 14,
    slug: 'firma-ist-neu',
    thought: 'Warum ist die Firma so neu? Kann man dem trauen?',
    behind: 'Die Angst, auf etwas zu setzen, das es in zwei Jahren nicht mehr gibt.',
    understandable: 'Ja. Eine neue Firma hat weniger Nachweise, das ist schlicht eine Tatsache.',
    source: 'Eigene Erklärung der Academy',
    practical:
      'Eine neue Firma hat weniger Nachweise und mehr Unbekanntes. Das ist ein Nachteil und ein Vorteil zugleich, und beide sind echt. Frag nach dem, was überprüfbar ist: Wer steht dahinter? Welche Erfahrung haben diese Menschen? Gibt es Produkte, die man tatsächlich kaufen kann? Und akzeptiere, dass der Rest offen bleibt.',
    limit:
      'Wer dir sagt, gerade jetzt sei der einzig richtige Moment, benutzt das Knappheitsprinzip. Prüfe, ob die Begrenzung echt ist.',
    tags: ['neu', 'firma', 'risiko', 'start', 'unternehmen', 'vertrauen'],
  },
]

export const objectionBySlug = (slug: string) =>
  objections.find((o) => o.slug === slug)
