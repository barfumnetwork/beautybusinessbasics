import type { Lesson } from './types'

/** Stufe 1 bis 4 — L01 bis L20. */
export const lessonsA: Lesson[] = [
  // ---------------------------------------------------------------- Stufe 1
  {
    id: 'L01',
    stage: 1,
    title: 'Was ist Network Marketing?',
    coreQuestion: 'Wie funktioniert dieses Geschäftsmodell grundsätzlich?',
    goal: 'Du kannst das Grundprinzip in einem Satz erklären.',
    source: 'Go Pro — Eric Worre',
    sourceNote: 'Buchdatei liegt nicht vor, Struktur aus öffentlicher Recherche belegt',
    visual: 'empfehlung',
    explanation: [
      'Jede Firma muss Menschen erreichen. Der übliche Weg kostet Geld: Fernsehen, Plakate, Anzeigen im Internet. Dieses Geld ist weg, sobald die Werbung läuft — egal ob jemand kauft.',
      'Network Marketing geht den anderen Weg. Die Firma gibt dieses Werbegeld an Menschen weiter, die ihre Produkte tatsächlich weiterempfehlen. Statt eines Werbespots erzählt dir also eine Person, der du vertraust, von etwas. Und weil diese Empfehlung funktioniert hat, bekommt sie einen Teil davon ab.',
      'Mehr ist es im Kern nicht. Alles andere — Teams, Stufen, Begriffe — ist nur Organisation drumherum.',
    ],
    example:
      'Du empfiehlst seit Jahren dein Lieblingsrestaurant weiter. Vielleicht waren schon zehn Leute wegen dir dort. Du hast nie etwas dafür bekommen. Network Marketing ist genau dieser Vorgang — nur mit Beteiligung.',
    practice: 'Schreib die letzten drei Dinge auf, die du jemandem empfohlen hast. Ein Film, ein Café, eine Handwerkerin — alles zählt.',
    reflection: 'Warum hast du diese drei Dinge empfohlen? Was hättest du dafür gebraucht, es nicht zu tun?',
    practice_example:
      'In der Praxis heißt das: Das Unternehmen übernimmt Produktentwicklung, Herstellung, rechtliche Prüfung, Logistik, Shop, Zahlung, Marketing und Schulung. Die empfehlende Person übernimmt genau eine Aufgabe — empfehlen. Deshalb braucht sie kein Lager und keine eigene Website. Bei glossily, einem Beauty-Unternehmen, ist das genau so aufgeteilt.',
    quiz: {
      question: 'Woher kommt das Geld, das an empfehlende Menschen ausgezahlt wird?',
      options: [
        'Aus dem Werbebudget, das sonst für Anzeigen ausgegeben würde',
        'Aus den Einstiegszahlungen neuer Teilnehmer',
        'Aus staatlicher Förderung für Selbstständige',
      ],
      correct: 0,
      onCorrect:
        'Genau. Und daraus folgt auch die wichtigste Prüffrage überhaupt — die kommt in der nächsten Lektion.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Die Firma spart sich Werbung und gibt dieses Geld stattdessen an Menschen weiter, die Kunden bringen. Nicht die neuen Teilnehmer bezahlen das, sondern das eingesparte Werbebudget.',
    },
    minutes: 3,
  },
  {
    id: 'L02',
    stage: 1,
    title: 'Ist das seriös? Woran man es erkennt',
    coreQuestion: 'Wie unterscheide ich ein echtes Geschäft von einem Schneeballsystem?',
    goal: 'Du kennst eine Prüffrage, die du jedem Unternehmen stellen kannst.',
    source: 'Eigene Erklärung der Academy',
    visual: 'kunde-partner',
    explanation: [
      'Die Frage ist berechtigt und jeder sollte sie stellen. Es gibt eine einzige Unterscheidung, auf die es ankommt: Womit wird das Geld verdient?',
      'Fließt es aus dem Verkauf echter Produkte an echte Kunden — also an Menschen, die nie mitarbeiten wollen? Dann trägt sich das System selbst. Oder fließt es hauptsächlich aus den Einstiegszahlungen neuer Teilnehmer? Dann funktioniert es nur, solange immer weitere dazukommen. Das kann rechnerisch nicht dauerhaft gutgehen, und irgendwann verlieren die Letzten ihr Geld.',
      'Diese eine Frage darfst du jedem Unternehmen stellen. Und du solltest sie stellen. Wer ausweicht, hat dir damit schon geantwortet.',
    ],
    example:
      'Firma A verkauft Creme an 1000 Kunden, von denen 950 nie mitarbeiten wollen. Firma B hat 1000 Partner und fast keine Kunden. Nur eine der beiden trägt sich selbst.',
    practice: 'Formuliere die Prüffrage in deinen eigenen Worten, so wie du sie tatsächlich aussprechen würdest.',
    reflection: 'Was würdest du denken, wenn jemand auf diese Frage ausweichend antwortet?',
    quiz: {
      question: 'Woran erkennst du es am sichersten?',
      options: [
        'Wie groß das Team ist',
        'Woher der Umsatz kommt',
        'Wie bekannt die Marke ist',
      ],
      correct: 1,
      onCorrect:
        'Richtig. Ein riesiges Team ohne Kunden ist ein Warnzeichen, kein Erfolgsbeweis.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Teamgröße und Bekanntheit sagen nichts darüber aus, ob das Modell trägt. Entscheidend ist, ob das Geld von echten Kunden kommt oder von neuen Teilnehmern.',
    },
    minutes: 4,
  },
  {
    id: 'L03',
    stage: 1,
    title: 'Warum das Thema einen schlechten Ruf hat',
    coreQuestion: 'Warum reagieren Menschen abwehrend, wenn ich davon erzähle?',
    goal: 'Du verstehst die Skepsis anderer, statt sie persönlich zu nehmen.',
    source: 'Eigene Erklärung der Academy, gestützt auf Cialdini zur Ethik',
    explanation: [
      'Der Ruf kommt nicht aus dem Nichts. Sehr viele Menschen wurden in diesem Umfeld schon einmal bedrängt: eine Nachricht aus dem Nichts von jemandem, der sich fünf Jahre nicht gemeldet hat. Zeitdruck, der erfunden war. Zahlen, die etwas versprochen haben, das niemand halten kann.',
      'Wenn jemand also abwehrend reagiert, gilt das nicht dir. Es gilt dieser Erfahrung. Das ist eine gute Nachricht, denn du kannst es anders machen — und der Unterschied fällt sofort auf.',
      'Wer das weiß, argumentiert nicht dagegen an. Er nimmt die Skepsis ernst, weil sie berechtigt ist.',
    ],
    example:
      '„Hey, lange nichts gehört! Wie geht’s dir? Sag mal, bist du eigentlich offen für was Neues?" — fast jeder kennt diese Nachricht. Und fast jeder weiß schon beim zweiten Satz, was kommt.',
    practice:
      'Erinnere dich an eine Situation, in der du dich bedrängt gefühlt hast. Was genau hat gestört — das Angebot selbst oder die Art, wie es kam?',
    reflection: 'Was hätte die Person anders machen müssen, damit du zugehört hättest?',
    quiz: {
      question: 'Woran liegt der schlechte Ruf vor allem?',
      options: [
        'Am Geschäftsmodell selbst',
        'An der Art, wie Menschen angesprochen wurden',
        'An den Produkten',
      ],
      correct: 1,
      onCorrect:
        'Und genau deshalb ist die zweite Stufe dieser Lernreise Kommunikation — noch vor allem anderen.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Die meisten Menschen haben nie das Modell geprüft. Sie erinnern sich an eine unangenehme Nachricht oder ein Gespräch, aus dem sie nicht herauskamen.',
    },
    minutes: 3,
  },
  {
    id: 'L04',
    stage: 1,
    title: 'Kunde oder Partner — zwei verschiedene Wege',
    coreQuestion: 'Muss jeder, dem ich etwas zeige, mitmachen?',
    goal: 'Du kannst die beiden Rollen sauber trennen.',
    source: 'Go Pro — Eric Worre',
    visual: 'kunde-partner',
    explanation: [
      'Nein. Die allermeisten Menschen wollen nur das Produkt. Sie kaufen die Creme, den Kaffee, das Nahrungsergänzungsmittel — und denken nie daran, selbst etwas aufzubauen.',
      'Das ist kein Misserfolg. Das ist der Normalfall und gleichzeitig der Grund, warum das Modell überhaupt trägt. Ohne diese große Gruppe echter Kunden wäre es das, was in Lektion 2 beschrieben wurde: ein System, das nur von neuen Teilnehmern lebt.',
      'Nur wenige Menschen wollen selbst etwas aufbauen. Wer das von Anfang an weiß, setzt niemanden unter Druck — weil ein Kunde eben kein halber Partner ist, sondern genau das, was gebraucht wird.',
    ],
    example:
      'Von zehn Menschen, denen du etwas zeigst, kaufen vielleicht drei. Und vielleicht fragt eine einzige irgendwann: „Sag mal, wie funktioniert das eigentlich bei dir?"',
    practice:
      'Denk an zwei Bekannte. Wer wäre eher Kunde, wer eher Partner? Schreib je einen Satz auf, warum.',
    reflection: 'Wärst du selbst eher Kunde oder eher Partner? Und warum?',
    practice_example:
      'Beide Rollen sind in solchen Modellen ausdrücklich vorgesehen. Bei glossily etwa gibt es Menschen, die ausschließlich Produkte kaufen, und Menschen, die selbst etwas aufbauen. Die erste Gruppe ist die deutlich größere — und soll es auch sein.',
    quiz: {
      question: 'Ist ein Kunde ein gescheiterter Partner?',
      options: [
        'Ja, denn das Ziel ist immer der Aufbau',
        'Nein, Kunden sind der Normalfall und die Grundlage',
        'Nur wenn er nicht regelmäßig kauft',
      ],
      correct: 1,
      onCorrect:
        'Und daraus folgt etwas Praktisches: Du musst niemanden überreden. Die meisten sind genau dort richtig, wo sie sind.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Ein Modell, in dem jeder Kunde eigentlich Partner werden soll, hätte am Ende fast keine echten Kunden mehr. Genau das war in Lektion 2 das Warnzeichen.',
    },
    minutes: 3,
  },
  {
    id: 'L05',
    stage: 1,
    title: 'Das ist ein Handwerk, kein Talent',
    coreQuestion: 'Kann ich das überhaupt, wenn ich kein Verkäufertyp bin?',
    goal: 'Du verstehst, dass es um lernbare Fähigkeiten geht.',
    source: 'Go Pro — Eric Worre, die sieben Fähigkeiten',
    sourceNote: 'Die sieben Schritte sind über die Verlagsbeschreibung belegt',
    visual: 'sieben-faehigkeiten',
    explanation: [
      'Eric Worre beschreibt in „Go Pro" sieben Fähigkeiten. Kontakte finden. Einladen. Zeigen. Nachfassen. Zum Kunden oder Partner begleiten. Beim Start helfen. Und über gemeinsame Veranstaltungen wachsen.',
      'Keine davon ist angeboren. Es gibt keinen Gen-Test für „kann empfehlen". Es sind sieben Handgriffe, die man einzeln üben kann, wie Einparken oder Kuchenbacken.',
      'Und noch wichtiger: Du brauchst am Anfang nur die erste. Niemand muss alle sieben können, um anzufangen. Die meisten, die aufgeben, tun das nicht, weil sie untalentiert sind, sondern weil sie geglaubt haben, sie müssten von Tag eins alles gleichzeitig beherrschen.',
    ],
    example:
      'Niemand erwartet, dass du Auto fahren kannst, bevor du die erste Fahrstunde hattest. Und niemand hält sich für untalentiert, weil das erste Einparken schiefgeht.',
    practice:
      'Welche der sieben Fähigkeiten klingt für dich am schwersten? Schreib auf, warum genau diese.',
    reflection: 'Was hast du schon einmal gelernt, von dem du anfangs dachtest, du könntest es nicht?',
    quiz: {
      question: 'Wie viele der sieben Fähigkeiten brauchst du am ersten Tag?',
      options: ['Alle sieben', 'Mindestens vier', 'Eine'],
      correct: 2,
      onCorrect:
        'Deshalb ist diese Lernreise auch in Stufen aufgeteilt — und nicht in ein einziges großes Paket.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Die sieben Fähigkeiten sind ein Ablauf, kein Aufnahmetest. Der erste Schritt kommt zuerst, alles andere später.',
    },
    minutes: 4,
  },

  // ---------------------------------------------------------------- Stufe 2
  {
    id: 'L06',
    stage: 2,
    title: 'Zuhören ist die erste Fähigkeit',
    coreQuestion: 'Was mache ich in einem Gespräch eigentlich?',
    goal: 'Du weißt, was vor dem Erklären kommt.',
    source: 'John C. Maxwell, Gesetz 10 — Verbindung',
    visual: 'gespraech',
    explanation: [
      'Der häufigste Anfängerfehler ist Reden. Man hat etwas verstanden, ist begeistert, und will es loswerden. Das Gegenüber hört zu, nickt höflich — und meldet sich nie wieder.',
      'Maxwells zehntes Gesetz sagt: Erst die Verbindung, dann die Bitte. Wer zuerst etwas will und danach zuhört, hat die Reihenfolge vertauscht.',
      'Praktisch heißt das drei Dinge: ausreden lassen, mitschreiben, kurz zusammenfassen. Und erst dann — wenn überhaupt — etwas zeigen. Das klingt unspektakulär. Es ist der größte Unterschied zwischen einem Gespräch, an das sich jemand gern erinnert, und einem, dem er ausweicht.',
    ],
    example:
      'Zwei Verkäufer im Möbelhaus. Der eine erklärt dir die Federkernqualität des Sofas. Der andere fragt, wer darauf sitzen wird und wie lange es halten soll. Bei wem kaufst du?',
    practice:
      'Führe ein Gespräch, in dem du nur Fragen stellst. Ein ganz normales, mit einem Menschen, den du magst. Zähl hinterher, wie oft du trotzdem von dir erzählt hast.',
    reflection: 'Wann hat dir zuletzt jemand wirklich zugehört? Woran hast du es gemerkt?',
    practice_example:
      'Manche Unternehmen schreiben ihren Leuten diesen Grundsatz ausdrücklich vor. In den Unterlagen von glossily steht er sinngemäß so: ausreden lassen, mitschreiben — und erst danach zeigen, wie etwas zu den genannten Zielen passt. Ein Unternehmen, das das schriftlich festhält, sagt damit etwas über seine Haltung.',
    quiz: {
      question: 'Was kommt zuerst?',
      options: ['Erklären', 'Verstehen', 'Beides gleichzeitig'],
      correct: 1,
      onCorrect: 'Und das gilt weit über dieses Thema hinaus — in jedem Gespräch, das etwas bewirken soll.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Solange du nicht weißt, was jemanden bewegt, weißt du auch nicht, was für ihn überhaupt interessant wäre.',
    },
    minutes: 3,
  },
  {
    id: 'L07',
    stage: 2,
    title: 'Drei Fragen, die jedes Gespräch öffnen',
    coreQuestion: 'Wie fange ich an, ohne komisch zu wirken?',
    goal: 'Du kennst den Unterschied zwischen einer Frage, die öffnet, und einer, die schließt.',
    source: 'Eigene Erklärung der Academy, gestützt auf Maxwell Gesetz 10',
    visual: 'gespraech',
    explanation: [
      'Es gibt zwei Sorten Fragen. Die eine lässt nur Ja oder Nein zu: „Hast du Interesse?" Die andere lädt zum Erzählen ein: „Was würdest du ändern, wenn du könntest?"',
      'Die erste zwingt jemanden zu einer Entscheidung, bevor er überhaupt versteht, worum es geht. Und weil Menschen im Zweifel Nein sagen, bekommst du fast immer ein Nein — zu einer Sache, die du noch gar nicht erklärt hast.',
      'Die zweite gibt dir etwas, mit dem du arbeiten kannst. Und dem Gegenüber das Gefühl, dass es um ihn geht und nicht um dich.',
    ],
    example:
      '„Bist du offen für etwas Nebenberufliches?" ist geschlossen. „Wie zufrieden bist du eigentlich gerade mit deiner Arbeitszeit?" ist offen. Die zweite Frage kann man beantworten, ohne sich festzulegen.',
    practice:
      'Schreib drei offene Fragen auf, die zu dir passen — die du auch wirklich aussprechen würdest, ohne dich komisch zu fühlen.',
    reflection: 'Welche deiner drei Fragen würdest du selbst gerne gestellt bekommen?',
    quiz: {
      question: 'Was ist an „Hast du Interesse?" ungeschickt?',
      options: [
        'Sie ist zu direkt formuliert',
        'Sie erzwingt eine Entscheidung, bevor jemand versteht, worum es geht',
        'Sie ist zu lang',
      ],
      correct: 1,
      onCorrect:
        'Und im Zweifel entscheiden sich Menschen für Nein. Nicht gegen dich — gegen das Unbekannte.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Das Problem ist nicht die Direktheit. Das Problem ist, dass die Frage nur Ja oder Nein zulässt, obwohl noch gar nichts erklärt wurde.',
    },
    minutes: 3,
  },
  {
    id: 'L08',
    stage: 2,
    title: 'Interesse erkennen — und Desinteresse auch',
    coreQuestion: 'Woran merke ich, ob jemand wirklich will?',
    goal: 'Du kannst Höflichkeit von echtem Interesse unterscheiden.',
    source: 'Eigene Erklärung der Academy',
    explanation: [
      'Interesse zeigt sich in Rückfragen. Wer fragt, denkt mit. Wer nur zustimmt, ist meistens höflich.',
      'Das klingt nach einer Kleinigkeit, ist aber die Fähigkeit, die dich davor schützt, jemandem hinterherzulaufen, der längst innerlich abgewinkt hat. Und sie schützt dein Gegenüber davor, immer neue Ausreden erfinden zu müssen.',
      'Höflichkeit ist kein Interesse. Das ist keine schlechte Nachricht — es ist die Information, die du brauchst.',
    ],
    example:
      '„Klingt spannend, schick mal" ist fast immer Höflichkeit. „Und wie viel Zeit braucht das ungefähr?" ist Interesse. Der Unterschied: eine eigene Frage.',
    practice:
      'Erinnere dich an ein Gespräch, in dem du höflich warst statt interessiert. Woran hätte die andere Person es merken können?',
    reflection: 'Wie sagst du selbst Nein, wenn du es nicht direkt sagen willst?',
    quiz: {
      question: 'Was ist das stärkste Zeichen für echtes Interesse?',
      options: [
        'Zustimmendes Nicken',
        'Eine eigene Rückfrage',
        'Die Bitte, Informationen zuzuschicken',
      ],
      correct: 1,
      onCorrect:
        'Nicken kostet nichts. Eine Frage zu stellen bedeutet, dass jemand sich gedanklich hineinversetzt hat.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Nicken und „schick mal" sind die beiden häufigsten Arten, ein Gespräch höflich zu beenden. Eine eigene Frage ist Aufwand — und deshalb ein echtes Signal.',
    },
    minutes: 3,
  },
  {
    id: 'L09',
    stage: 2,
    title: 'Vertrauen ist das Fundament',
    coreQuestion: 'Warum sollte mir jemand zuhören?',
    goal: 'Du verstehst, worauf alles andere aufbaut.',
    source: 'John C. Maxwell, Gesetz 6 — Vertrauen',
    explanation: [
      'Ohne Vertrauen nützt keine Technik. Du kannst die besten Fragen stellen, die klarste Erklärung haben und trotzdem nicht weiterkommen, wenn dir jemand nicht glaubt.',
      'Vertrauen entsteht aus etwas sehr Unspektakulärem: Zuverlässigkeit über Zeit. Gesagt, getan. Wieder gesagt, wieder getan. Es gibt keine Abkürzung und keinen Trick dafür.',
      'Das ist die unbequeme und zugleich beruhigende Nachricht dieser Lektion: Du kannst Vertrauen nicht beschleunigen. Aber du kannst es dir verdienen — und niemand kann dich daran hindern.',
    ],
    example:
      'Denk an einen Handwerker, dem du blind vertraust. Wahrscheinlich nicht, weil er gut geredet hat, sondern weil er dreimal hintereinander pünktlich war.',
    practice:
      'Wem vertraust du? Schreib drei Gründe auf. Das sind dieselben Gründe, aus denen irgendwann jemand dir vertrauen wird.',
    reflection: 'Wo hast du selbst einmal Vertrauen verloren? Was genau hat es gekostet?',
    quiz: {
      question: 'Kann man Vertrauen beschleunigen?',
      options: [
        'Ja, durch gute Kommunikation',
        'Nein, nur verspielen',
        'Ja, durch Empfehlungen anderer',
      ],
      correct: 1,
      onCorrect:
        'Empfehlungen anderer helfen tatsächlich beim Start — aber halten kannst du das Vertrauen nur selbst.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Gute Kommunikation und Empfehlungen öffnen eine Tür. Ob du durch sie hindurchkommst, entscheidet sich erst über die Zeit.',
    },
    minutes: 3,
  },
  {
    id: 'L10',
    stage: 2,
    title: 'Einfach erklären können',
    coreQuestion: 'Wie erkläre ich etwas, das ich selbst gerade erst verstanden habe?',
    goal: 'Du kennst den Test dafür, ob du etwas wirklich verstanden hast.',
    source: 'Eigene Erklärung der Academy',
    explanation: [
      'Wer Fachwörter braucht, hat es meistens selbst noch nicht verstanden. Fachwörter sind bequem: Man kann sie aussprechen, ohne den Inhalt zu kennen.',
      'Der Test ist einfach: Kannst du es einem Vierzehnjährigen erklären? Wenn ja, hast du es verstanden. Wenn du dabei ins Stocken gerätst, weißt du genau, an welcher Stelle deine eigene Erklärung eine Lücke hat.',
      'Das ist übrigens auch der Grund, warum diese Plattform so geschrieben ist, wie sie geschrieben ist.',
    ],
    example:
      'Sag nicht „Uni-Level-Vergütung über drei Ebenen". Sag: „Wenn jemand, dem ich es gezeigt habe, etwas verkauft, bekomme ich einen kleinen Anteil davon."',
    practice:
      'Erkläre Lektion 1 in drei Sätzen ohne ein einziges Fachwort. Laut, nicht nur im Kopf.',
    reflection: 'An welcher Stelle bist du beim lauten Erklären ins Stocken geraten?',
    quiz: {
      question: 'Was ist das Zeichen dafür, dass du etwas verstanden hast?',
      options: [
        'Du kennst die Fachbegriffe',
        'Du kannst es einfach sagen',
        'Du kannst es auswendig',
      ],
      correct: 1,
      onCorrect: 'Und nebenbei: Einfach erklären zu können ist die beste Vorbereitung auf jede Rückfrage.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Begriffe und Auswendiggelerntes kann man wiedergeben, ohne den Inhalt zu kennen. Einfach erklären kann nur, wer den Kern erfasst hat.',
    },
    minutes: 3,
  },

  // ---------------------------------------------------------------- Stufe 3
  {
    id: 'L11',
    stage: 3,
    title: 'Ein Gespräch eröffnen',
    jargon: 'Prospecting',
    coreQuestion: 'Wie fängt so ein Kontakt überhaupt an?',
    goal: 'Du kannst Kontaktaufnahme und Verkauf voneinander trennen.',
    source: 'Fanatical Prospecting — Jeb Blount',
    sourceNote: 'Buchdatei liegt nicht vor, Konzeptnamen aus öffentlicher Recherche belegt',
    visual: 'prospecting',
    explanation: [
      'Es geht um einen einzigen Vorgang: ein Gespräch eröffnen. Nicht verkaufen. Das sind zwei völlig getrennte Dinge — und fast die gesamte Angst vor dem ersten Schritt entsteht, weil man sie zusammenwirft.',
      'Dafür gibt es ein englisches Fachwort, das du früher oder später hören wirst: Prospecting. Es klingt nach Technik, bedeutet aber nichts anderes als das, was du gerade gelesen hast — mit Menschen ins Gespräch kommen. Wer dir das Wort erklärt, ohne es zu übersetzen, hat es meist selbst nicht verstanden.',
      'Wer glaubt, er müsse bei der ersten Nachricht schon überzeugen, macht sich den Kontakt so schwer, dass er ihn lieber lässt. Dabei geht es zunächst nur um eine einzige Frage: Ist das überhaupt ein Thema für diese Person?',
      'Das nimmt fast allen Druck heraus. Ein Gespräch zu eröffnen ist keine Verpflichtung — für keinen von beiden.',
    ],
    example: 'Jemanden zu fragen, ob er Zeit für einen Kaffee hat, ist kein Heiratsantrag.',
    practice:
      'Formuliere einen Satz, mit dem du ein Gespräch eröffnest, ohne irgendetwas anzubieten. Nur eine Öffnung, kein Angebot.',
    reflection: 'Was wäre das Schlimmste, was nach diesem Satz passieren könnte?',
    quiz: {
      question: 'Ist ein Gespräch zu eröffnen dasselbe wie Verkaufen?',
      options: [
        'Ja, nur der erste Teil davon',
        'Nein, es ist das Eröffnen eines Gesprächs',
        'Nein, es ist die Nachbereitung',
      ],
      correct: 1,
      onCorrect: 'Und weil es nur eine Öffnung ist, darf sie auch ins Leere laufen, ohne dass etwas verloren geht.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Beim ersten Kontakt willst du nur herausfinden, ob das Thema überhaupt passt. Alles andere kommt später — oder gar nicht.',
    },
    minutes: 3,
  },
  {
    id: 'L12',
    stage: 3,
    title: 'Die 30-Tage-Regel',
    coreQuestion: 'Warum passiert in der ersten Woche nichts?',
    goal: 'Du kannst einschätzen, wann die Arbeit von heute sichtbar wird.',
    source: 'Fanatical Prospecting — Jeb Blount, 30-Day Rule',
    sourceNote: 'Name belegt, genauer Inhalt noch am Buch zu prüfen',
    visual: 'dreissig-tage',
    explanation: [
      'Was du heute tust, zeigt Wirkung erst in etwa dreißig Tagen. Menschen brauchen Zeit, um zu antworten, nachzudenken, sich zu melden, wiederzukommen.',
      'Wer nach einer Woche aufhört, weil nichts passiert, hört genau in dem Moment auf, in dem die Arbeit noch unterwegs ist. Und er wird nie erfahren, dass sie unterwegs war.',
      'Umgekehrt gilt dasselbe: Eine gute Woche heute bedeutet nicht, dass es gerade gut läuft. Sie bedeutet, dass es vor einem Monat gut lief.',
    ],
    example:
      'Wie in einem Garten. Du gießt heute und erntest nicht morgen. Und wenn heute nichts wächst, sagt das etwas über letzten Monat aus — nicht über heute.',
    practice:
      'Markiere in deinem Kalender den Tag in dreißig Tagen. Bis dahin bewertest du nichts.',
    reflection: 'Wo in deinem Leben hast du schon einmal zu früh aufgehört?',
    quiz: {
      question: 'Was sagt die 30-Tage-Regel?',
      options: [
        'Nach 30 Tagen muss man Ergebnisse haben',
        'Die Wirkung heutiger Arbeit zeigt sich verzögert',
        'Man sollte 30 Tage lang täglich Kontakte suchen',
      ],
      correct: 1,
      onCorrect:
        'Und daraus folgt das Unangenehmste daran: In einer guten Phase darf man nicht aufhören zu arbeiten.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Es ist keine Frist und kein Ziel. Es ist eine Beobachtung darüber, wie lange es dauert, bis etwas zurückkommt.',
    },
    minutes: 3,
  },
  {
    id: 'L13',
    stage: 3,
    title: 'Regelmäßig schlägt motiviert',
    coreQuestion: 'Wie halte ich das durch?',
    goal: 'Du weißt, worauf du dich verlassen kannst — und worauf nicht.',
    source: 'Jeb Blount (Disziplin) und John C. Maxwell, Gesetz 3 (Prozess)',
    explanation: [
      'Zwei sehr unterschiedliche Bücher sagen hier dasselbe mit verschiedenen Worten: täglich ein wenig schlägt selten viel.',
      'Der Grund ist einfach. Motivation schwankt. Sie hängt vom Wetter ab, vom Schlaf, von einem Gespräch, das schiefgelaufen ist. Ein fester Termin im Kalender schwankt nicht.',
      'Wer auf Motivation wartet, arbeitet in Schüben — viel, wenn es gut läuft, gar nicht, wenn es schlecht läuft. Und weil die Wirkung verzögert kommt, verstärkt das die Schwankung noch. Genau dieser Kreislauf macht die meisten mürbe.',
    ],
    example:
      'Zähneputzen funktioniert nicht, weil du morgens motiviert bist. Es funktioniert, weil du nicht darüber nachdenkst.',
    practice:
      'Leg ein festes Zeitfenster fest. Lieber zwanzig Minuten an drei Tagen als drei Stunden am Sonntag.',
    reflection: 'Welche Gewohnheit hast du, über die du nicht mehr nachdenken musst? Wie ist sie entstanden?',
    quiz: {
      question: 'Was ist verlässlicher?',
      options: ['Motivation', 'Gewohnheit', 'Ein klares Ziel'],
      correct: 1,
      onCorrect: 'Ziele geben die Richtung. Gewohnheiten bringen dich dorthin.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Motivation und Ziele sind beide gut — aber beide helfen nicht an dem Tag, an dem du keine Lust hast. Eine Gewohnheit schon.',
    },
    minutes: 3,
  },
  {
    id: 'L14',
    stage: 3,
    title: '„Ich kenne niemanden"',
    coreQuestion: 'Was, wenn ich keine Kontakte habe?',
    goal: 'Du erkennst, wie Kontakte tatsächlich entstehen.',
    source: 'Fanatical Prospecting — Jeb Blount, Law of Familiarity',
    sourceNote: 'Name belegt, genauer Inhalt noch am Buch zu prüfen',
    visual: 'prospecting',
    explanation: [
      'Fast niemand hat am ersten Tag eine Liste. Und wer eine hätte, würde sie wahrscheinlich falsch benutzen.',
      'Kontakte entstehen durch Sichtbarkeit über Zeit. Blount nennt das sinngemäß das Gesetz der Vertrautheit: Wer regelmäßig auftaucht, wird vertraut — und Vertrautheit senkt den Widerstand beim ersten Gespräch erheblich.',
      'Das heißt: „Ich kenne niemanden" beschreibt keinen Zustand, sondern einen Zeitpunkt. Er ändert sich, sobald du anfängst, sichtbar zu sein.',
    ],
    example:
      'Der Bäcker, bei dem du seit zwei Jahren einkaufst, ist kein Freund. Aber wenn er dich etwas fragen würde, würdest du antworten. Das ist Vertrautheit.',
    practice:
      'Schreib auf, wer sich in den letzten zwölf Monaten von sich aus bei dir gemeldet hat. Das ist deine tatsächliche Ausgangslage — nicht dein Adressbuch.',
    reflection: 'Überrascht dich die Länge dieser Liste? In welche Richtung?',
    quiz: {
      question: 'Woraus entstehen Kontakte vor allem?',
      options: [
        'Aus einer gut sortierten Liste',
        'Aus Sichtbarkeit über Zeit',
        'Aus der Anzahl der Nachrichten, die man schreibt',
      ],
      correct: 1,
      onCorrect: 'Deshalb ist die erste Woche auch keine gute Grundlage, um sich selbst zu beurteilen.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Eine Liste ist nur eine Momentaufnahme. Wer regelmäßig sichtbar ist, bekommt fortlaufend neue Namen — ohne sie zu sammeln.',
    },
    minutes: 3,
  },
  {
    id: 'L15',
    stage: 3,
    title: 'Brauche ich Social Media?',
    coreQuestion: 'Geht das auch ohne Reichweite?',
    goal: 'Du kannst einschätzen, wofür Reichweite gut ist und wofür nicht.',
    source: 'Fanatical Prospecting — Jeb Blount, 5 C’s of Social Selling',
    sourceNote: 'Name belegt, genauer Inhalt noch am Buch zu prüfen',
    explanation: [
      'Social Media ist ein Weg, Vertrautheit aufzubauen, ohne jeden einzeln anzuschreiben. Das ist praktisch, aber es ist nicht der einzige Weg und schon gar keine Voraussetzung.',
      'Was oft übersehen wird: Reichweite ersetzt kein Vertrauen. Zehn Menschen, die dir vertrauen, sind mehr wert als tausend, die dich nicht kennen. Wer mit zweihundert Followern anfängt, ist nicht im Nachteil — er hat nur einen kleineren, dafür wärmeren Kreis.',
      'Und wer sein Gesicht nicht zeigen will, muss es nicht. Es gibt Menschen in diesem Geschäft, die nie ein Video gemacht haben.',
    ],
    example:
      'Eine Kosmetikerin mit 180 Followern, die jede davon persönlich kennt, hat mehr Wirkung als ein Profil mit 20.000 gekauften Followern.',
    practice:
      'Zähl die Menschen, mit denen du diesen Monat gesprochen hast — offline. Das ist auch Reichweite, sie wird nur nirgends angezeigt.',
    reflection: 'Wem vertraust du mehr: einem Account mit vielen Followern oder einem Menschen, den du kennst?',
    quiz: {
      question: 'Ist Reichweite Pflicht?',
      options: [
        'Ja, ohne Social Media geht es heute nicht',
        'Nein, sie ist eine Abkürzung',
        'Nur wenn man jünger als 30 ist',
      ],
      correct: 1,
      onCorrect: 'Eine Abkürzung ist trotzdem nützlich — nur eben keine Voraussetzung.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Reichweite verkürzt den Weg zu Vertrautheit. Sie ersetzt aber weder Vertrauen noch Gespräche.',
    },
    minutes: 3,
  },

  // ---------------------------------------------------------------- Stufe 4
  {
    id: 'L16',
    stage: 4,
    title: 'Verkaufen heißt prüfen, ob es passt',
    coreQuestion: 'Muss ich verkaufen?',
    goal: 'Du hast eine Vorstellung von Verkauf, die ohne Überreden auskommt.',
    source: 'Go Pro — Eric Worre, gestützt auf Cialdini zur Ethik',
    visual: 'verkauf',
    explanation: [
      'Verkaufen im guten Sinn heißt herausfinden, ob etwas zu jemandem passt. Nicht: jemanden dazu bringen, etwas zu nehmen.',
      'Das ändert alles. Wenn es nicht passt, ist „das ist nichts für dich" die richtige Antwort. Nicht aus Anstand. Sondern weil es schlicht die richtige Auskunft ist.',
      'Wer so arbeitet, muss nie überreden. Und er verliert auch niemanden, weil jemand ein Produkt bekommen hat, das ihm nicht geholfen hat.',
    ],
    example:
      'Ein guter Schuhverkäufer sagt dir, wenn der Schuh zu klein ist — auch wenn er ihn in diesem Moment verkaufen könnte. Genau deshalb gehst du wieder hin.',
    practice:
      'Denk an einen Kauf, der nicht gepasst hat. Welche Frage hätte der Verkäufer stellen müssen?',
    reflection: 'Wie würde sich ein Gespräch anfühlen, in dem jemand ehrlich sagt, dass etwas nichts für dich ist?',
    quiz: {
      question: 'Was ist das Ziel eines Verkaufsgesprächs?',
      options: [
        'Einen Abschluss erzielen',
        'Herausfinden, ob es passt',
        'Alle Einwände ausräumen',
      ],
      correct: 1,
      onCorrect:
        'Und wenn es passt, ergibt sich der Rest fast von selbst. Wenn nicht, hast du eine Beziehung behalten.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Ein Abschluss, der nicht passt, kommt als Rückgabe, als Unzufriedenheit oder als verlorener Kontakt zurück.',
    },
    minutes: 4,
  },
  {
    id: 'L17',
    stage: 4,
    title: 'Warum Menschen kaufen',
    coreQuestion: 'Was bringt jemanden wirklich zur Entscheidung?',
    goal: 'Du kennst die tatsächlichen Gründe hinter Kaufentscheidungen.',
    source: 'Influence — Robert B. Cialdini',
    sourceNote: 'Buchdatei liegt nicht vor, Prinzipien aus öffentlicher Recherche belegt',
    visual: 'psychologie',
    explanation: [
      'Selten wegen der Produktdaten. Fast niemand vergleicht Inhaltsstofflisten, bevor er eine Creme kauft.',
      'Meistens entscheiden drei Dinge: Vertrauen zu der Person, die es empfiehlt. Der Eindruck, dass andere es auch tun. Und ein Problem, das gerade jetzt gelöst werden soll.',
      'Das ist kein Trick und nichts Schlechtes. So entscheidest du selbst auch — bei deinem Arzt, deinem Friseur, deinem letzten Restaurantbesuch.',
    ],
    example:
      'Denk an deinen letzten größeren Kauf. Wahrscheinlich hat jemand, dem du vertraust, ihn empfohlen — oder du hattest gerade ein konkretes Problem.',
    practice:
      'Schreib deinen letzten größeren Kauf auf und die drei Gründe. Welcher war wirklich ausschlaggebend?',
    reflection: 'Hättest du denselben Kauf auch gemacht, wenn ihn ein Fremder empfohlen hätte?',
    quiz: {
      question: 'Entscheiden Menschen vor allem sachlich?',
      options: [
        'Ja, bei größeren Anschaffungen schon',
        'Nein, Vertrauen und Situation wiegen meist schwerer',
        'Nur wenn sie sich gut auskennen',
      ],
      correct: 1,
      onCorrect: 'Sachargumente kommen meistens hinterher — um eine Entscheidung zu begründen, die schon gefallen ist.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Auch bei großen Anschaffungen entscheidet oft, wem man glaubt. Die Daten holt man sich danach, um sicherer zu sein.',
    },
    minutes: 3,
  },
  {
    id: 'L18',
    stage: 4,
    title: 'Warum Menschen Nein sagen',
    coreQuestion: 'Was steckt hinter einem Nein?',
    goal: 'Du kannst ein Nein einordnen, statt es persönlich zu nehmen.',
    source: 'Eigene Erklärung der Academy',
    explanation: [
      'Es gibt im Wesentlichen vier Gründe. Falscher Zeitpunkt. Fehlendes Vertrauen. Ein Angebot, das nicht verstanden wurde. Oder schlicht kein Bedarf.',
      'Nur sehr selten heißt Nein „du bist mir unsympathisch". Und noch seltener heißt es „nie".',
      'Das ist mehr als Trost. Es ist eine praktische Information: Bei zwei der vier Gründe lohnt ein späteres Gespräch, bei zweien nicht. Wer das unterscheiden kann, spart sich und anderen viel.',
    ],
    example:
      'Jemand sagt Nein zu einem Umzug in eine schönere Wohnung. Nicht, weil die Wohnung schlecht ist — sondern weil gerade ein Kind unterwegs ist.',
    practice:
      'Schreib dein letztes Nein auf, das du jemandem gegeben hast. Welcher der vier Gründe war es wirklich?',
    reflection: 'Hast du diesen Grund damals ehrlich gesagt? Oder etwas anderes?',
    quiz: {
      question: 'Gilt ein Nein meistens der Person?',
      options: [
        'Ja, Sympathie entscheidet',
        'Nein, meistens dem Zeitpunkt oder der Situation',
        'Das lässt sich nicht sagen',
      ],
      correct: 1,
      onCorrect: 'Und deshalb ist ein Nein auch kein Urteil über dich, sondern eine Momentaufnahme.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Denk an deine eigenen Neins. Wie viele davon galten wirklich der Person, die gefragt hat?',
    },
    minutes: 3,
  },
  {
    id: 'L19',
    stage: 4,
    title: 'Ein Nein annehmen können',
    coreQuestion: 'Was mache ich, wenn jemand ablehnt?',
    goal: 'Du hast einen Satz, den du bei einem Nein sagen kannst.',
    source: 'Jeb Blount (Umgang mit Ablehnung), eigene Haltung der Academy',
    explanation: [
      'Du nimmst es an. Ohne Nachfassen, ohne „darf ich dich in einem halben Jahr nochmal fragen", ohne beleidigten Unterton.',
      'Das klingt selbstverständlich, ist es aber nicht — in vielen Verkaufsbüchern steht das Gegenteil. Genau dieses Gegenteil ist der Grund für den schlechten Ruf aus Lektion 3.',
      'Und es ist auch praktisch die bessere Entscheidung: Wer ein Nein respektiert, bleibt jemand, an den man sich gern erinnert. Ein erheblicher Teil der Menschen, die irgendwann Ja sagen, hat vorher Nein gesagt — und ist wiedergekommen, weil es beim ersten Mal angenehm war.',
    ],
    example:
      '„Alles gut, danke fürs Zuhören. Wenn sich bei dir mal was ändert, weißt du ja, wo du mich findest." Punkt. Kein Nachsatz.',
    practice:
      'Formuliere deinen eigenen Satz für ein Nein. Einen, den du ehrlich meinst und ohne Anstrengung sagen kannst.',
    reflection: 'Wie fühlt es sich an, diesen Satz zu haben, bevor du ihn brauchst?',
    quiz: {
      question: 'Was ist die richtige Reaktion auf ein klares Nein?',
      options: [
        'Nachfragen, was genau der Grund ist',
        'Es respektieren und das Gespräch freundlich beenden',
        'Ein späteres Gespräch vereinbaren',
      ],
      correct: 1,
      onCorrect: 'Und genau das unterscheidet dich von dem, was die meisten Menschen befürchten.',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Nach einem klaren Nein ist jede weitere Frage Druck — auch die freundlich gemeinte. Die Tür bleibt offen, wenn du sie leise schließt.',
    },
    minutes: 3,
  },
  {
    id: 'L20',
    stage: 4,
    title: 'Wo Verkaufen in Druck umkippt',
    coreQuestion: 'Wie merke ich, dass ich zu weit gehe?',
    goal: 'Du kennst die Grenze und kannst sie benennen.',
    source: 'Robert B. Cialdini zur ethischen Anwendung',
    sourceNote: 'Aussage von der Website des Autors, nicht aus dem Buch selbst',
    visual: 'verkauf',
    explanation: [
      'Es gibt eine einzige Frage, die die Grenze markiert: Hilfst du jemandem, etwas zu verstehen, das ihm nützt? Oder bringst du ihn zu etwas, das ihm nicht nützt?',
      'Cialdini selbst sagt es so: Ethisch angewandt bauen diese Prinzipien langfristige Beziehungen auf. Unethisch angewandt wirken sie kurzfristig — und zerstören die Beziehung, sobald es auffliegt.',
      'Das ist bemerkenswert, weil es von dem Autor kommt, dessen Buch am häufigsten zur Rechtfertigung von Manipulation herangezogen wird. Anständigkeit ist hier kein Verzicht. Sie ist der wirksamere Weg.',
    ],
    example:
      'Derselbe Satz, zwei Absichten: „Das Angebot läuft Freitag aus." Wenn es stimmt, ist es eine Information. Wenn nicht, ist es eine Lüge — und wirkt genau einmal.',
    practice:
      'Erinnere dich an eine Situation, in der du bedrängt wurdest. Was genau hat den Umschlag ausgelöst?',
    reflection: 'Würdest du dieselbe Sache auch tun, wenn die andere Person wüsste, warum du sie tust?',
    quiz: {
      question: 'Woran erkennt man die Grenze zwischen Überzeugen und Überreden?',
      options: [
        'An der Lautstärke und Häufigkeit',
        'Daran, wem es nützt',
        'Daran, ob am Ende ein Abschluss steht',
      ],
      correct: 1,
      onCorrect: 'Ein guter Test: Würdest du es auch tun, wenn die andere Person deine Absicht kennen würde?',
      onWrong:
        'Noch einmal kurz darüber nachdenken: Auch ein leises, freundliches Gespräch kann manipulativ sein. Entscheidend ist nicht der Ton, sondern wem das Ergebnis nützt.',
    },
    minutes: 4,
  },
]
