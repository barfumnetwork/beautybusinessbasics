import type { Lesson } from './types'

/**
 * Stufe 5 bis 9 — L21 bis L42.
 *
 * Auf Stufe 5 ist das Feld `boundary` Pflicht: keine Psychologie-Lektion
 * ohne den Abschnitt "Wo die Grenze liegt".
 */
export const lessonsB: Lesson[] = [
  // ---------------------------------------------------------------- Stufe 5
  {
    id: 'L21',
    stage: 5,
    title: 'Warum Menschen Ja sagen',
    coreQuestion: 'Gibt es Muster in Entscheidungen?',
    goal: 'Du kennst die sieben Muster im Überblick.',
    source: 'Influence — Robert B. Cialdini',
    sourceNote: 'Prinzipien über öffentliche Quellen belegt, Kapitelinhalte noch zu prüfen',
    visual: 'psychologie',
    explanation: [
      'Robert Cialdini hat sieben Muster beschrieben, nach denen Menschen Entscheidungen treffen: Gegenseitigkeit, Konsistenz, Orientierung an anderen, Autorität, Sympathie, Knappheit und Verbundenheit.',
      'Diese Muster sind keine Tricks, die jemand erfunden hat. Es sind Abkürzungen, die unser Kopf benutzt, weil er nicht jede Entscheidung von Grund auf durchrechnen kann. Sie wirken bei allen Menschen — auch bei dir, auch jetzt gerade.',
      'In den nächsten fünf Lektionen sehen wir uns sie einzeln an. Nicht, damit du sie anwendest. Sondern damit du sie erkennst.',
    ],
    example:
      'Du gehst in ein volles Restaurant statt in das leere daneben. Niemand hat dich überredet. Dein Kopf hat eine Abkürzung genommen.',
    practice:
      'Notiere eine Woche lang, wo dir diese Muster selbst begegnen — im Supermarkt, in der Werbung, bei Freunden.',
    reflection: 'Welches der sieben Muster wirkt bei dir persönlich am stärksten?',
    boundary:
      'Diese Prinzipien erklären Menschen. Sie sind keine Fernbedienung. Wer sie benutzt, um jemanden zu etwas zu bringen, das ihm nicht nützt, missbraucht sie — und das fliegt fast immer auf.',
    quiz: {
      question: 'Wozu dienen diese Prinzipien auf dieser Plattform?',
      options: [
        'Um Gespräche gezielt zu steuern',
        'Um Menschen und sich selbst besser zu verstehen',
        'Um Einwände schneller auszuräumen',
      ],
      correct: 1,
      onCorrect: 'Und nebenbei machen sie dich widerstandsfähiger gegen Manipulation — auch gegen die aus dieser Branche.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Diese Muster werden hier erklärt, damit du sie erkennst — bei anderen und bei dir selbst. Steuern ist ausdrücklich nicht das Ziel.',
    },
    minutes: 4,
  },
  {
    id: 'L22',
    stage: 5,
    title: 'Sympathie und Verbundenheit',
    coreQuestion: 'Warum vertraue ich manchen Menschen sofort?',
    goal: 'Du verstehst, warum Empfehlungen unter Bekannten funktionieren.',
    source: 'Cialdini (Sympathie, Verbundenheit) und Maxwell, Gesetz 9',
    explanation: [
      'Wir sagen eher Ja zu Menschen, die wir mögen. Und noch eher zu denen, die wir als „einer von uns" empfinden — gleiche Stadt, gleicher Beruf, gleiche Lebenslage, gleiche Sorgen.',
      'Cialdini hat dieses zweite Muster später ergänzt und Verbundenheit genannt. Es ist stärker als bloße Sympathie: Wir mögen viele Menschen, aber wir gehören nur zu wenigen dazu.',
      'Das erklärt, warum Empfehlungen unter Freunden überhaupt funktionieren — und warum dieselbe Information von einem Fremden kaum wirkt.',
    ],
    example:
      'Eine Mutter mit kleinen Kindern glaubt einer anderen Mutter mit kleinen Kindern mehr als jeder Anzeige — weil die andere dieselben Nächte kennt.',
    practice: 'Von wem kaufst du gern? Schreib auf, was diese Person anders macht.',
    reflection: 'Zu welcher Gruppe gehörst du so selbstverständlich, dass du es kaum benennen würdest?',
    boundary:
      'Sympathie vortäuschen ist der schnellste Weg, eine Beziehung zu verlieren. Echte Nähe lässt sich nicht spielen — und aufgesetztes Interesse merkt fast jeder, nur oft erst hinterher.',
    quiz: {
      question: 'Was wirkt stärker als Sympathie?',
      options: [
        'Fachliche Kompetenz',
        'Das Gefühl, zur selben Gruppe zu gehören',
        'Ein besseres Angebot',
      ],
      correct: 1,
      onCorrect: 'Deshalb wirken Erfahrungen aus dem eigenen Umfeld stärker als jede Expertenaussage.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Kompetenz und Preis überzeugen — aber Zugehörigkeit erzeugt Vertrauen, bevor überhaupt argumentiert wird.',
    },
    minutes: 3,
  },
  {
    id: 'L23',
    stage: 5,
    title: 'Orientierung an anderen',
    coreQuestion: 'Warum schauen wir, was andere tun?',
    goal: 'Du erkennst, wann Orientierung hilfreich ist und wann sie inszeniert wird.',
    source: 'Influence — Robert B. Cialdini, Social Proof',
    explanation: [
      'Bei Unsicherheit schauen wir, was andere machen. Das ist sinnvoll: Wenn hundert Menschen etwas gut finden, ist es wahrscheinlich nicht völlig schlecht.',
      'Deshalb wirken Bewertungen, Sterne und Empfehlungen. Und deshalb ist auch Skepsis ansteckend — wenn im eigenen Umfeld alle abwinken, wirkt das genauso stark.',
      'Das erklärt eine Menge über den Ruf dieser Branche: Nicht jeder, der abwinkt, hat sich damit beschäftigt. Viele übernehmen nur die Haltung ihres Umfelds.',
    ],
    example:
      'Zwei gleich gute Restaurants nebeneinander. Eines voll, eines leer. Fast jeder geht ins volle — ohne die Speisekarte gelesen zu haben.',
    practice: 'Wo hat dich zuletzt eine Bewertung beeinflusst? Hättest du auch ohne sie gekauft?',
    reflection: 'Welche Meinung hast du übernommen, ohne sie je selbst geprüft zu haben?',
    boundary:
      'Erfundene Stimmen, gekaufte Bewertungen, inszenierte Erfolgsgeschichten. Diese Plattform verwendet bewusst keine einzige Erfolgsgeschichte — weil sie keine belegen könnte und weil sie dich nicht mit dem Gefühl zurücklassen will, hinterherzuhinken.',
    quiz: {
      question: 'Wirkt dieses Muster nur in eine Richtung?',
      options: [
        'Ja, es macht Angebote attraktiver',
        'Nein, auch Ablehnung im Umfeld überträgt sich',
        'Es wirkt nur bei unsicheren Menschen',
      ],
      correct: 1,
      onCorrect: 'Und genau deshalb reagieren Menschen manchmal ablehnend auf etwas, das sie nie geprüft haben.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Wir orientieren uns an anderen — in beide Richtungen. Ein leeres Restaurant schreckt genauso ab, wie ein volles anzieht.',
    },
    minutes: 3,
  },
  {
    id: 'L24',
    stage: 5,
    title: 'Gegenseitigkeit',
    coreQuestion: 'Warum möchte man etwas zurückgeben?',
    goal: 'Du verstehst, warum Geben wirkt — und wann es aufhört zu wirken.',
    source: 'Influence — Robert B. Cialdini, Reziprozität',
    explanation: [
      'Wer etwas bekommt, fühlt sich verpflichtet. Das ist zutiefst menschlich, existiert in jeder Kultur und ist meistens etwas Gutes — es hält Gemeinschaften zusammen.',
      'Im Alltag merkst du es an Kleinigkeiten: Jemand hält dir die Tür auf, du bedankst dich übertrieben. Jemand lädt dich ein, du willst beim nächsten Mal zahlen.',
      'Wichtig ist der Unterschied zwischen Geben und Investieren. Ein echtes Geschenk hat keine Bedingung. Sobald eine Erwartung mitgeliefert wird, spürt das Gegenüber sie — und das Gute daran kippt.',
    ],
    example:
      'Die Gratisprobe im Supermarkt funktioniert nicht, weil sie schmeckt. Sie funktioniert, weil man ungern mit leeren Händen weitergeht.',
    practice: 'Wo hast du zuletzt etwas zurückgegeben, ohne dass es jemand verlangt hat?',
    reflection: 'Wann hat sich ein Geschenk für dich wie eine Rechnung angefühlt?',
    boundary:
      'Ein Geschenk mit Erwartung ist kein Geschenk, sondern eine Rechnung. Auch diese Lernplattform ist ein Geschenk — deshalb gibt es hier kein Formular, keine Einladung und keinen nächsten Schritt, den wir dir vorgeben.',
    quiz: {
      question: 'Wann kippt Gegenseitigkeit ins Unangenehme?',
      options: [
        'Wenn das Geschenk zu groß ist',
        'Wenn eine Erwartung mitgeliefert wird',
        'Wenn man sich nicht revanchieren kann',
      ],
      correct: 1,
      onCorrect: 'Die Größe spielt eine Nebenrolle. Entscheidend ist, ob eine Bedingung mitkommt.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Auch ein kleines Geschenk fühlt sich schlecht an, wenn klar ist, was dafür erwartet wird. Und ein großes kann völlig frei sein.',
    },
    minutes: 3,
  },
  {
    id: 'L25',
    stage: 5,
    title: 'Konsistenz — das Muster mit dem größten Risiko',
    coreQuestion: 'Warum machen Menschen weiter, obwohl sie aufhören wollen?',
    goal: 'Du erkennst, wann Durchhalten in Festhalten umschlägt.',
    source: 'Influence — Robert B. Cialdini, Commitment und Konsistenz',
    explanation: [
      'Wer einmal A gesagt hat, möchte zu A stehen. Wir wollen uns selbst als jemanden sehen, der zu seinem Wort steht — und handeln danach, auch wenn sich die Lage längst geändert hat.',
      'Das hilft beim Durchhalten. Es ist der Grund, warum ein ausgesprochener Vorsatz eher gehalten wird als ein gedachter.',
      'Und es ist das Muster, das am häufigsten missbraucht wird: Menschen werden an ein altes Ja erinnert, damit sie ein neues Nein nicht aussprechen. „Du hast doch selbst gesagt, dass du etwas ändern willst."',
    ],
    example:
      'Ein Abo, das man seit Jahren nicht nutzt und trotzdem nicht kündigt — weil man sich damals ja bewusst dafür entschieden hat.',
    practice: 'Wo hast du weitergemacht, obwohl du eigentlich aufhören wolltest?',
    reflection: 'Was hat dich damals festgehalten — die Sache selbst oder dein eigenes Wort?',
    boundary:
      'Jeder Mensch darf seine Meinung ändern. Wer jemanden an ein altes Ja erinnert, um ein neues Nein zu verhindern, manipuliert — auch wenn der Satz freundlich klingt und das alte Ja tatsächlich gefallen ist.',
    quiz: {
      question: 'Was ist an diesem Muster besonders heikel?',
      options: [
        'Es wirkt nur bei unsicheren Menschen',
        'Es wird benutzt, um ein neues Nein zu verhindern',
        'Es wirkt nur bei schriftlichen Zusagen',
      ],
      correct: 1,
      onCorrect: 'Ein guter Selbsttest: Würdest du dich heute wieder so entscheiden, wenn du noch nichts gesagt hättest?',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Das Risiko liegt nicht in der Form der Zusage. Es liegt darin, dass ein altes Versprechen gegen eine neue Erkenntnis ausgespielt wird.',
    },
    minutes: 4,
  },
  {
    id: 'L26',
    stage: 5,
    title: 'Knappheit und Autorität',
    coreQuestion: 'Warum wirkt Zeitdruck so stark?',
    goal: 'Du kannst echte von erfundener Knappheit unterscheiden.',
    source: 'Influence — Robert B. Cialdini, Knappheit und Autorität',
    explanation: [
      'Was selten ist, wirkt wertvoller. Und wer kompetent wirkt, wird eher geglaubt. Beide Muster sind echt und meistens nützlich: Eine begrenzte Auflage ist tatsächlich knapp, eine Ärztin weiß tatsächlich mehr über Medikamente als du.',
      'Beide sind aber auch die am leichtesten vorzutäuschenden Muster. Ein Countdown lässt sich in fünf Minuten einbauen. Ein seriöses Auftreten kann man sich anziehen.',
      'Deshalb stehen sie hier am Ende der Psychologie-Stufe und nicht am Anfang. Wer sie zu früh kennenlernt, hält sie leicht für Werkzeuge.',
    ],
    example:
      '„Nur noch 3 Plätze frei" — auf einer Seite, die schon seit acht Monaten dasselbe schreibt.',
    practice:
      'Such drei Werbungen mit Zeitdruck. Bei welcher war die Begrenzung echt?',
    reflection: 'Was hast du schon einmal gekauft, weil es „gleich weg" war? Und wie war es danach?',
    boundary:
      'Erfundene Fristen, erfundene Restplätze, geliehene Autorität. Eine echte Begrenzung darfst du benennen — das ist Information. Eine erfundene ist eine Lüge, egal wie gut sie wirkt. Wenn du irgendwo „nur noch heute" liest, prüfe, ob es morgen noch dasteht.',
    quiz: {
      question:
        'Ein Anbieter schreibt „nur noch 3 Plätze frei", obwohl es keine Begrenzung gibt. Was ist das?',
      options: [
        'Geschicktes Marketing',
        'Täuschung',
        'Das Knappheitsprinzip richtig angewendet',
      ],
      correct: 1,
      onCorrect:
        'Das Knappheitsprinzip selbst ist echt. Eine erfundene Knappheit bleibt eine Lüge, egal wie gut sie funktioniert.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Wirksamkeit macht etwas nicht richtig. Wenn die Begrenzung nicht existiert, ist die Aussage schlicht falsch.',
    },
    minutes: 4,
  },

  // ---------------------------------------------------------------- Stufe 6
  {
    id: 'L27',
    stage: 6,
    title: 'Was Follow-up ist',
    coreQuestion: 'Was passiert nach dem Gespräch?',
    goal: 'Du weißt, warum der zweite Kontakt vereinbart wird und nicht abgewartet.',
    source: 'Go Pro — Eric Worre, Schritt 4 von sieben',
    visual: 'followup',
    explanation: [
      'Follow-up ist der verabredete zweite Kontakt. Es ist der Schritt, den fast alle auslassen — und der Grund, warum so viele Gespräche ins Leere laufen.',
      'Der Denkfehler dahinter: Man glaubt, wer interessiert ist, meldet sich schon. Das stimmt nicht. Interessierte Menschen haben Alltag, Kinder, Arbeit und dreißig andere Dinge im Kopf. Sie melden sich nicht, weil sie kein Interesse haben, sondern weil Mittwoch war.',
      'Kaum jemand entscheidet beim ersten Mal. Deshalb gehört der nächste Schritt ins Gespräch — nicht danach in eine Nachricht.',
    ],
    example:
      '„Schau es dir in Ruhe an, ich melde mich Donnerstag" ist Follow-up. „Melde dich, wenn du Interesse hast" ist keins — das ist eine höfliche Art, ein Gespräch zu beenden.',
    practice:
      'Vereinbare beim nächsten Gespräch einen konkreten Tag, statt es offen zu lassen. Egal worum es geht.',
    reflection: 'Wie oft hast du selbst schon gesagt „ich melde mich" und es dann nicht getan?',
    quiz: {
      question: 'Wer vereinbart den nächsten Schritt?',
      options: [
        'Die interessierte Person, wenn sie so weit ist',
        'Du, im Gespräch selbst',
        'Niemand, das ergibt sich',
      ],
      correct: 1,
      onCorrect: 'Und dadurch wird der zweite Kontakt zu etwas Verabredetem statt zu etwas Aufdringlichem.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: „Melde dich einfach" führt fast nie zu einer Rückmeldung — nicht aus Desinteresse, sondern weil der Alltag dazwischenkommt.',
    },
    minutes: 3,
  },
  {
    id: 'L28',
    stage: 6,
    title: 'Nachfassen oder Nachlaufen',
    coreQuestion: 'Nerve ich dann nicht?',
    goal: 'Du kennst den Unterschied, der aus Aufdringlichkeit Zuverlässigkeit macht.',
    source: 'Eigene Erklärung der Academy, gestützt auf Jeb Blount',
    visual: 'followup',
    explanation: [
      'Der Unterschied ist einfach und hat nichts mit der Anzahl zu tun: verabredet oder ungefragt.',
      'Wer sich zu einem vereinbarten Termin meldet, ist zuverlässig. Das ist eine gute Eigenschaft, und sie fällt positiv auf. Wer sich ungefragt zum vierten Mal meldet, ist lästig — auch beim ersten Mal, wenn nie etwas abgesprochen war.',
      'Die Verabredung macht den Unterschied. Nicht der Abstand, nicht der Ton, nicht die Formulierung.',
    ],
    example:
      '„Wie besprochen melde ich mich heute nochmal" fühlt sich völlig anders an als „Hey, hast du schon reingeschaut?" — obwohl beides dieselbe Frage ist.',
    practice:
      'Schreib eine Nachricht, die an eine Verabredung erinnert, ohne zu drängen. Höchstens zwei Sätze.',
    reflection: 'Welche Nachricht würdest du selbst gerne bekommen?',
    quiz: {
      question: 'Was macht Nachfassen zulässig?',
      options: [
        'Ein freundlicher Ton',
        'Dass es vorher vereinbart war',
        'Ein Abstand von mindestens einer Woche',
      ],
      correct: 1,
      onCorrect: 'Deshalb ist die Verabredung am Ende des ersten Gesprächs so wichtig — sie erlaubt das zweite.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Auch eine sehr freundliche Nachricht nach zwei Wochen ist ungefragt, wenn nie etwas abgesprochen wurde.',
    },
    minutes: 3,
  },
  {
    id: 'L29',
    stage: 6,
    title: 'Wann du aufhörst',
    coreQuestion: 'Wann ist Schluss?',
    goal: 'Du hast klare Kriterien, statt auf dein Bauchgefühl angewiesen zu sein.',
    source: 'Eigene Erklärung der Academy, gestützt auf Cialdini zur Ethik',
    explanation: [
      'Bei einem klaren Nein. Bei zweimal keiner Antwort. Bei erkennbarem Ausweichen. Danach nicht mehr.',
      'Das ist keine Schwäche, sondern eine Entscheidung darüber, was dir wichtiger ist. Die Beziehung ist mehr wert als dieses eine Gespräch — und wer aufhört, wird in zwei Jahren vielleicht von sich aus gefragt.',
      'Dass du klare Kriterien hast, entlastet außerdem dich selbst. Du musst nicht jedes Mal neu abwägen, ob du dich noch einmal melden darfst.',
    ],
    example:
      'Zwei Nachrichten ohne Antwort sind eine Antwort. Die dritte macht aus einem offenen Ende ein unangenehmes.',
    practice: 'Woran erkennst du persönlich ein echtes Nein? Schreib zwei Merkmale auf.',
    reflection: 'Wie hättest du gern, dass jemand mit deinem Ausweichen umgeht?',
    quiz: {
      question: 'Was ist mehr wert?',
      options: ['Das Gespräch', 'Die Beziehung', 'Beides gleich'],
      correct: 1,
      onCorrect: 'Und praktisch gesehen ist es auch die bessere Entscheidung — Beziehungen halten länger als Gelegenheiten.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Ein Gespräch kannst du in zwei Jahren wieder führen. Eine Beziehung, die du mit Hartnäckigkeit beschädigt hast, meistens nicht.',
    },
    minutes: 3,
  },
  {
    id: 'L30',
    stage: 6,
    title: 'Der lange Zeitraum',
    coreQuestion: 'Warum entscheiden Menschen manchmal erst nach Monaten?',
    goal: 'Du verstehst, wovon der Zeitpunkt einer Entscheidung abhängt.',
    source: 'Jeb Blount (30-Tage-Regel) und Maxwell, Gesetz 6 (Vertrauen)',
    explanation: [
      'Entscheidungen brauchen einen Anlass. Und der kommt selten dann, wenn du fragst.',
      'Viele Menschen sagen Ja, wenn sich in ihrem Leben etwas ändert: ein Jobwechsel, ein Umzug, eine Rechnung, ein Kind, ein Jahreswechsel. Nicht, wenn sich in deinem Kalender etwas ändert.',
      'Das erklärt die eigenartige Erfahrung, dass Menschen sich nach einem halben Jahr melden — bei jemandem, der damals freundlich war und dann Ruhe gegeben hat.',
    ],
    example:
      'Jemand lehnt im März ab. Im November ändert sich seine Arbeitszeit, und er erinnert sich an das Gespräch. Nicht an den Inhalt — an das Gefühl.',
    practice:
      'Denk an eine Entscheidung, die du lange aufgeschoben hast. Was hat sie am Ende ausgelöst?',
    reflection: 'War dieser Auslöser vorhersehbar? Hätte jemand ihn beschleunigen können?',
    quiz: {
      question: 'Warum sagen Menschen später doch Ja?',
      options: [
        'Weil sie öfter gefragt wurden',
        'Weil sich ihre Lage geändert hat',
        'Weil das Angebot besser wurde',
      ],
      correct: 1,
      onCorrect: 'Deshalb ist die Art, wie du ein Nein annimmst, wichtiger als jedes Argument.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Häufiger Fragen erzeugt meistens Abstand statt Zustimmung. Was sich ändert, ist die Lebenslage — nicht die Anzahl der Nachfragen.',
    },
    minutes: 3,
  },

  // ---------------------------------------------------------------- Stufe 7
  {
    id: 'L31',
    stage: 7,
    title: 'Was ein Team überhaupt ist',
    coreQuestion: 'Was heißt hier Team?',
    goal: 'Du kennst deine tatsächliche Rolle gegenüber anderen.',
    source: 'Go Pro — Eric Worre, Schritt 5 und 6',
    visual: 'duplikation',
    explanation: [
      'Ein Team sind hier Menschen, die dasselbe selbstständig tun. Keine Angestellten. Du bist nicht ihr Chef, du kannst ihnen nichts anweisen, und du bekommst auch nichts dafür, dass sie erscheinen.',
      'Du bist der Mensch, der es vor ihnen gemacht hat. Mehr nicht — und das ist mehr, als es klingt.',
      'Wer diese Rolle falsch versteht, wird entweder zum Antreiber, der niemanden erreicht, oder zum Kümmerer, der allen die Arbeit abnimmt. Beides funktioniert nicht.',
    ],
    example:
      'Denk an jemanden, der etwas vor dir gemacht hat — ein Studium, eine Selbstständigkeit, ein Kind. Was hat geholfen? Wahrscheinlich nicht, dass er dir gesagt hat, was zu tun ist.',
    practice: 'Wen kennst du, der etwas vor dir gemacht und dir dabei geholfen hat? Was genau hat er getan?',
    reflection: 'Welche Art von Begleitung hättest du dir damals gewünscht?',
    quiz: {
      question: 'Bist du der Chef deines Teams?',
      options: [
        'Ja, du bist verantwortlich für die Ergebnisse',
        'Nein, es sind selbstständige Menschen',
        'Teilweise — bei neuen schon',
      ],
      correct: 1,
      onCorrect: 'Und deshalb funktioniert hier auch nichts, was auf Anweisung beruht.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Niemand hier hat einen Arbeitsvertrag mit dir. Was du hast, ist Einfluss — und den musst du dir verdienen.',
    },
    minutes: 3,
  },
  {
    id: 'L32',
    stage: 7,
    title: 'Vorbild schlägt Anweisung',
    coreQuestion: 'Wie bringe ich Menschen dazu, etwas zu tun?',
    goal: 'Du weißt, woran sich Menschen tatsächlich orientieren.',
    source: 'John C. Maxwell, Gesetz 13 — Menschen tun, was sie sehen',
    visual: 'duplikation',
    explanation: [
      'Menschen tun, was sie sehen. Nicht, was ihnen gesagt wird. Das ist Maxwells dreizehntes Gesetz und die unbequemste Antwort auf die häufigste Frage in diesem Bereich.',
      'Wer selbst nicht arbeitet, bekommt ein Team, das nicht arbeitet. Wer selbst hektisch ist, bekommt ein hektisches Team. Wer selbst Menschen unter Druck setzt, bekommt ein Team, das Menschen unter Druck setzt — und wundert sich über den Ruf.',
      'Das ist zugleich die beste Nachricht: Du kannst an dieser Stelle tatsächlich etwas bewirken. Nicht an den anderen — an dem, was sie sehen.',
    ],
    example:
      'Eltern, die verlangen, dass gelesen wird, und selbst nie ein Buch anfassen. Das Kind lernt nicht lesen. Es lernt, dass man das sagt, aber nicht tut.',
    practice:
      'Was würde jemand tun, der genau das nachmacht, was du diese Woche getan hast? Schreib es ehrlich auf.',
    reflection: 'Ist das, was du gerade aufgeschrieben hast, das, was du dir von anderen wünschst?',
    practice_example:
      'Manche Unternehmen beschreiben das als festen Ablauf. Bei glossily heißt es sinngemäß: selbst nach dem System arbeiten, die Produkte selbst nutzen, sichtbar sein — und erst dann andere begleiten. Die Reihenfolge ist dabei der eigentliche Inhalt.',
    quiz: {
      question: 'Was wirkt stärker?',
      options: ['Eine klare Ansage', 'Das eigene Verhalten', 'Regelmäßige Erinnerungen'],
      correct: 1,
      onCorrect: 'Und das gilt in beide Richtungen — auch das, was du nicht tust, wird nachgemacht.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Ansagen und Erinnerungen wirken kurz. Was Menschen dauerhaft übernehmen, ist das, was sie sehen.',
    },
    minutes: 4,
  },
  {
    id: 'L33',
    stage: 7,
    title: 'Duplikation einfach erklärt',
    coreQuestion: 'Wie wächst so etwas überhaupt?',
    goal: 'Du kannst Duplikation ohne Zahlen erklären.',
    source: 'John C. Maxwell, Gesetz 20 — Wachstum durch Entwicklung',
    visual: 'duplikation',
    explanation: [
      'Maxwell unterscheidet zwei Arten von Wachstum. Wer Mitläufer gewinnt, addiert: aus einem wird zwei, aus zwei wird drei. Wer Menschen entwickelt, die selbst wieder Menschen entwickeln, multipliziert.',
      'Der praktische Kern sind vier Schritte, und sie sind langweiliger, als man denkt: selbst machen, zeigen, begleiten, weitergeben lassen. Der vierte ist der entscheidende und der, der am häufigsten fehlt.',
      'Denn weitergeben lassen heißt: loslassen. Und das fällt besonders denen schwer, die es gut meinen.',
    ],
    example:
      'Eine Fahrlehrerin, die immer selbst mitfährt, hat nie einen Fahrer ausgebildet. Erst wenn jemand allein fährt, ist er wirklich Fahrer.',
    practice: 'Erkläre Duplikation in zwei Sätzen ohne eine einzige Zahl.',
    reflection: 'Was hältst du gerade fest, das jemand anders übernehmen könnte?',
    practice_example:
      'In der Praxis wird daraus manchmal eine Denkweise mit eigenem Namen. Bei glossily heißt sie „Power of Five": fünf Menschen wirklich begleiten, statt möglichst viele Gespräche zu führen. Keine Rechenformel, sondern eine Entscheidung für Tiefe statt Menge.',
    quiz: {
      question: 'Was multipliziert?',
      options: [
        'Möglichst viele Mitmachende',
        'Menschen, die selbst andere entwickeln',
        'Möglichst viele Gespräche',
      ],
      correct: 1,
      onCorrect: 'Und deshalb ist die Frage nicht, wie viele du erreichst — sondern wie tief du begleitest.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Viele Mitmachende bedeuten erst einmal nur mehr Arbeit für dich. Multiplikation entsteht erst, wenn andere den Ablauf selbst weitergeben.',
    },
    minutes: 4,
  },
  {
    id: 'L34',
    stage: 7,
    title: '„Mein Team macht nichts"',
    coreQuestion: 'Was tue ich, wenn niemand arbeitet?',
    goal: 'Du hast eine Reihenfolge, in der du die Ursache suchst.',
    source: 'John C. Maxwell, Gesetz 13 und Gesetz 2',
    explanation: [
      'Drei Fragen, und die Reihenfolge ist wichtig. Erstens: Was sieht dein Team von dir? Zweitens: Hat jede Person wirklich verstanden, was genau zu tun ist? Drittens: Will sie es überhaupt?',
      'Die meisten fangen bei Frage drei an und sind enttäuscht. Dabei liegt die Ursache sehr oft bei Frage eins oder zwei — und das sind die beiden, an denen du tatsächlich etwas ändern kannst.',
      'Die unbequeme Wahrheit dahinter: Du kannst niemanden motivieren. Motivation kommt von innen. Was du kannst, ist jemand sein, dem man folgen möchte.',
    ],
    example:
      'Ein Trainer, der von seiner Mannschaft Einsatz verlangt und selbst zu spät zum Training kommt. Die Mannschaft hört nicht auf seine Worte.',
    practice: 'Beantworte die drei Fragen ehrlich für dich selbst — in dieser Reihenfolge.',
    reflection: 'Bei welcher der drei Fragen wolltest du am liebsten schnell weiterblättern?',
    quiz: {
      question: 'Wo fängt die Fehlersuche an?',
      options: [
        'Bei der Motivation der anderen',
        'Beim eigenen Verhalten',
        'Bei den äußeren Umständen',
      ],
      correct: 1,
      onCorrect: 'Nicht, weil du an allem schuld bist — sondern weil das die einzige Stelle ist, an der du etwas ändern kannst.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Motivation und Umstände kannst du nicht steuern. Das, was dein Team von dir sieht, schon.',
    },
    minutes: 4,
  },

  // ---------------------------------------------------------------- Stufe 8
  {
    id: 'L35',
    stage: 8,
    title: 'Führung ist Einfluss, kein Titel',
    coreQuestion: 'Was bedeutet Führung?',
    goal: 'Du kannst Führung von Position unterscheiden.',
    source: 'John C. Maxwell, Gesetz 2 — Einfluss',
    visual: 'fuehrung',
    explanation: [
      'Maxwells zweites Gesetz ist der ganze Kern seines Buches: Führung ist Einfluss. Nicht mehr und nicht weniger.',
      'Wer einen Titel hat, dem aber niemand folgt, führt nicht — er verwaltet. Wer keinen Titel hat, dem aber zugehört wird, führt bereits.',
      'Das entzaubert den Begriff, und das ist beabsichtigt. Führung ist nichts, was einem verliehen wird. Sie beginnt in dem Moment, in dem jemand dir zuhört, weil er will — nicht weil er muss.',
    ],
    example:
      'In fast jedem Team gibt es jemanden ohne Funktion, den alle fragen, bevor sie etwas entscheiden. Das ist der Mensch, der führt.',
    practice: 'Wem folgst du freiwillig, obwohl die Person keine Position über dir hat? Schreib auf, warum.',
    reflection: 'Und umgekehrt: Wem folgst du nur, weil du musst? Was fehlt dort?',
    quiz: {
      question: 'Braucht Führung eine Position?',
      options: [
        'Ja, ohne Verantwortung führt niemand',
        'Nein, Führung ist Einfluss',
        'Nur in größeren Organisationen',
      ],
      correct: 1,
      onCorrect: 'Und deshalb kannst du damit heute anfangen — nicht, wenn du irgendwann ein Team hast.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Eine Position gibt dir Weisungsrecht. Ob dir jemand folgen will, entscheidet sie nicht.',
    },
    minutes: 3,
  },
  {
    id: 'L36',
    stage: 8,
    title: 'Führung wächst täglich',
    coreQuestion: 'Bin ich überhaupt ein Führungstyp?',
    goal: 'Du verstehst, dass Führung entsteht und nicht verliehen wird.',
    source: 'John C. Maxwell, Gesetz 3 — Prozess',
    visual: 'fuehrung',
    explanation: [
      'Führung entsteht täglich, nicht an einem Tag. Das ist vielleicht die entlastendste Aussage aus allen vier Büchern.',
      'Niemand wird als Führungskraft geboren, und niemand wird an einem Wochenendseminar dazu gemacht. Was man sieht, wenn jemand souverän wirkt, sind zehn Jahre unsichtbarer kleiner Schritte.',
      'Beachte die Nähe zu Stufe 3: Blount sagt über das Kontaktieren dasselbe, was Maxwell über Führung sagt. Zwei völlig verschiedene Bücher, ein Gedanke — täglich, nicht einmalig.',
    ],
    example:
      'Niemand fragt eine erfahrene Ärztin, ob sie „der Typ dafür" ist. Man sieht das Ergebnis von zwölf Jahren und hält es für Begabung.',
    practice:
      'Was hast du diese Woche gelernt? Schreib einen Satz. Und mach das jede Woche.',
    reflection: 'Was konntest du vor fünf Jahren nicht, das dir heute selbstverständlich vorkommt?',
    quiz: {
      question: 'Wann beginnt Führung?',
      options: [
        'Wenn man Verantwortung übertragen bekommt',
        'Heute, im Kleinen',
        'Wenn das erste Teammitglied da ist',
      ],
      correct: 1,
      onCorrect: 'Und das heißt auch: Du kannst heute anfangen, ohne dass irgendjemand es bemerkt.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Wer erst mit Verantwortung anfängt zu lernen, lernt unter Druck. Wer vorher anfängt, hat es leichter.',
    },
    minutes: 3,
  },
  {
    id: 'L37',
    stage: 8,
    title: 'Erst die Verbindung, dann die Bitte',
    coreQuestion: 'Warum folgt mir jemand?',
    goal: 'Du kennst die Reihenfolge, die über Gefolgschaft entscheidet.',
    source: 'John C. Maxwell, Gesetz 10 und Gesetz 6',
    visual: 'gespraech',
    explanation: [
      'Menschen folgen erst der Person, dann der Sache. Das gilt in Unternehmen, in Vereinen, in Familien — und es gilt unabhängig davon, wie gut die Sache ist.',
      'Wer um etwas bittet, bevor eine Verbindung da ist, bekommt Höflichkeit statt Gefolgschaft. Und Höflichkeit hält genau so lange, wie es bequem ist.',
      'Das ist derselbe Gedanke wie in Lektion 6, nur eine Ebene höher: Was dort ein Gespräch trägt, trägt hier eine Zusammenarbeit über Jahre.',
    ],
    example:
      'Eine neue Chefin, die am ersten Tag Veränderungen ankündigt, bekommt Nicken. Eine, die vier Wochen zuhört und dann dasselbe ankündigt, bekommt Mitarbeit.',
    practice:
      'Bei wem in deinem Umfeld hast du zuletzt etwas gefordert, ohne vorher zugehört zu haben?',
    reflection: 'Was hättest du gehört, wenn du zuerst gefragt hättest?',
    quiz: {
      question: 'Was kommt zuerst?',
      options: ['Die Sache', 'Die Person', 'Das hängt vom Gegenüber ab'],
      correct: 1,
      onCorrect: 'Eine gute Sache überlebt eine schlechte Beziehung selten. Umgekehrt schon.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Auch ein sehr gutes Argument läuft ins Leere, wenn die Person dahinter nicht erreicht hat.',
    },
    minutes: 3,
  },
  {
    id: 'L38',
    stage: 8,
    title: 'Der eigene Deckel',
    coreQuestion: 'Warum wächst mein Bereich nicht weiter?',
    goal: 'Du weißt, wo die Obergrenze liegt und wer sie setzt.',
    source: 'John C. Maxwell, Gesetz 1 — der Deckel',
    visual: 'deckel',
    explanation: [
      'Maxwells erstes Gesetz sagt: Deine eigene Fähigkeit begrenzt, wie weit es kommt. Er nennt das den Deckel.',
      'Das klingt zunächst hart. Tatsächlich ist es die gute Nachricht dieser Stufe — denn ein Deckel, den du selbst setzt, kannst du auch selbst anheben. An anderen Menschen kannst du nichts ändern.',
      'Praktisch heißt das: Wenn etwas nicht weitergeht, ist die nützlichste Frage nicht „woran liegt es", sondern „was müsste ich können".',
    ],
    example:
      'Ein guter Koch mit zwanzig Plätzen kann nicht plötzlich hundert bekochen, indem er sich mehr anstrengt. Er muss etwas Neues lernen: führen, einkaufen, planen.',
    practice: 'Welche eine Fähigkeit würde dich gerade am meisten weiterbringen?',
    reflection: 'Warum hast du gerade diese aufgeschrieben — und nicht eine, die leichter wäre?',
    quiz: {
      question: 'Wer setzt die Obergrenze?',
      options: ['Die Umstände', 'Du selbst', 'Die Menschen um dich herum'],
      correct: 1,
      onCorrect: 'Unbequem, aber brauchbar: Es ist die einzige Stelle, an der du wirklich etwas tun kannst.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Umstände und andere Menschen beeinflussen viel — aber ändern kannst du nur deine eigenen Fähigkeiten.',
    },
    minutes: 3,
  },

  // ---------------------------------------------------------------- Stufe 9
  {
    id: 'L39',
    stage: 9,
    title: 'An einer Sache arbeiten, nicht an allem',
    coreQuestion: 'Wie werde ich besser?',
    goal: 'Du weißt, wie viel du gleichzeitig verbessern kannst.',
    source: 'Eric Worre (Handwerk) und Maxwell, Gesetz 3',
    explanation: [
      'Eine Fähigkeit über mehrere Wochen bewusst üben schlägt zehn Bücher in einem Monat.',
      'Wer alles gleichzeitig verbessern will, verbessert nichts. Er sammelt Wissen, das sich gut anfühlt und nie angewendet wird — und verwechselt dieses gute Gefühl mit Fortschritt.',
      'Die sieben Fähigkeiten aus Lektion 5 sind hier die praktische Liste. Nimm eine. Vier Wochen. Dann die nächste.',
    ],
    example:
      'Wer Gitarre lernen will und jeden Tag ein anderes Stück anfängt, kann nach einem Jahr zwölf Anfänge.',
    practice: 'Wähle eine der sieben Fähigkeiten für die nächsten vier Wochen. Nur eine.',
    reflection: 'Welche hast du gewählt — und welche hättest du eigentlich wählen sollen?',
    quiz: {
      question: 'Wie viele Fähigkeiten gleichzeitig?',
      options: ['So viele wie möglich', 'Eine', 'Drei bis vier'],
      correct: 1,
      onCorrect: 'Und nach vier Wochen ist die nächste dran. In einem Jahr sind das zwölf.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Mehrere Baustellen gleichzeitig führen dazu, dass keine fertig wird. Eine nach der anderen ist langsamer — und am Ende schneller.',
    },
    minutes: 3,
  },
  {
    id: 'L40',
    stage: 9,
    title: 'Rückschläge einordnen',
    coreQuestion: 'Was mache ich, wenn lange nichts funktioniert?',
    goal: 'Du kannst schlechte Phasen einordnen, statt sie als Urteil zu nehmen.',
    source: 'Jeb Blount und Maxwell, Gesetz 3',
    visual: 'dreissig-tage',
    explanation: [
      'Schwankungen gehören dazu. Blount beschreibt den Zyklus aus viel und nichts — und wie er entsteht: Man arbeitet, wenn es schlecht läuft, hört auf, wenn es gut läuft, und wundert sich, dass es wieder schlecht wird.',
      'Entscheidend ist deshalb nicht, ob gerade etwas zurückkommt. Entscheidend ist, ob du in der schlechten Phase weitergemacht hast — denn die Wirkung dieser Wochen zeigt sich erst danach.',
      'Das Einzige, was du in einer schlechten Phase steuern kannst, ist die eigene Handlung. Nicht das Ergebnis, nicht die Stimmung, nicht die Reaktion anderer.',
    ],
    example:
      'Zwei Läufer. Einer läuft nur bei gutem Wetter, der andere immer. Nach einem Jahr ist der Unterschied nicht Talent.',
    practice:
      'Schreib auf, was du auch dann tust, wenn nichts zurückkommt. Etwas Kleines, das du wirklich durchhältst.',
    reflection: 'Was hat dich beim letzten Mal zum Aufhören gebracht — das Ergebnis oder die Stimmung?',
    quiz: {
      question: 'Was steuert man in einer schlechten Phase?',
      options: ['Das Ergebnis', 'Die eigene Handlung', 'Die Reaktion der anderen'],
      correct: 1,
      onCorrect: 'Und weil die Wirkung verzögert kommt, ist die schlechte Phase genau die, die später zählt.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Ergebnisse und Reaktionen anderer entziehen sich dir. Was du tust, nicht.',
    },
    minutes: 3,
  },
  {
    id: 'L41',
    stage: 9,
    title: 'Menschen selbstständig machen',
    coreQuestion: 'Wie helfe ich jemandem, ohne ihn abhängig zu machen?',
    goal: 'Du erkennst den Unterschied zwischen Helfen und Gebrauchtwerden.',
    source: 'John C. Maxwell, Gesetz 12 und Gesetz 20',
    visual: 'duplikation',
    explanation: [
      'Maxwell sagt: Nur sichere Menschen geben Verantwortung ab. Wer unsicher ist, macht alles selbst — meistens mit dem Argument, es gehe schneller.',
      'Dahinter steckt oft etwas anderes: Wer alles selbst macht, wird gebraucht. Und Gebrauchtwerden fühlt sich gut an. Es verhindert aber genau das Wachstum, das man sich wünscht.',
      'Der Prüfstein ist unangenehm einfach: Braucht dich die Person nach einem Jahr immer noch genauso wie am Anfang? Dann hast du ihr nicht geholfen, sondern sie an dich gebunden.',
    ],
    example:
      'Ein Vater, der die Hausaufgaben schneller selbst macht, hat abends Ruhe — und ein Kind, das in zwei Jahren immer noch nicht rechnen kann.',
    practice: 'Was machst du gerade für jemanden, das er selbst lernen könnte?',
    reflection: 'Was würde es dich kosten, das abzugeben?',
    quiz: {
      question: 'Woran erkennt man gute Begleitung?',
      options: [
        'Die Person fragt oft nach',
        'Die Person braucht dich irgendwann nicht mehr',
        'Die Person macht es genau wie du',
      ],
      correct: 1,
      onCorrect: 'Und das ist der Moment, in dem Multiplikation aus Lektion 33 tatsächlich beginnt.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Häufiges Nachfragen und exaktes Nachmachen sind Zeichen von Abhängigkeit. Selbstständigkeit ist das Ziel.',
    },
    minutes: 3,
  },
  {
    id: 'L42',
    stage: 9,
    title: 'Deine eigene Entscheidung',
    coreQuestion: 'Was mache ich jetzt mit dem, was ich gelernt habe?',
    goal: 'Du ordnest für dich ein, was du mitnimmst und was nicht.',
    source: 'Eigene Erklärung der Academy',
    explanation: [
      'Du weißt jetzt, wie Empfehlungsmarketing funktioniert und woran man ein seriöses Modell erkennt. Du weißt, wie man Gespräche führt, wie Kontakte entstehen und warum Menschen Ja oder Nein sagen. Du kennst die sieben Muster hinter Entscheidungen — und die Grenze, an der sie in Manipulation umschlagen. Du weißt, was Follow-up ist, wie ein Team entsteht und was Führung bedeutet.',
      'Dieses Wissen gehört dir. Unabhängig davon, ob du jemals in dieser Branche arbeitest. Es funktioniert in einem Angestelltenverhältnis, in einem Verein, in einer Familie.',
      'Es gibt hier keinen nächsten Schritt, den wir dir vorgeben. Es gibt nur deinen.',
    ],
    practice:
      'Schreib drei Sätze: Was habe ich verstanden? Was interessiert mich weiter? Was lasse ich sein?',
    reflection: 'Was von allem hier hättest du dir gewünscht, früher gewusst zu haben?',
    practice_example:
      'Falls dich ein konkretes Unternehmen interessiert: Was über glossily aus den vorliegenden Unterlagen bekannt ist — Marke, Gründung, Produktlinien, Geschäftsmodell — steht im Abschnitt Praxisbeispiel. Was nicht bekannt ist, steht dort ebenfalls. Beides nebeneinander, ohne Wertung.',
    minutes: 3,
  },
]
