/* =====================================================================
   EINSTELLUNGEN – Einhorn-ABC
   Punkte, Bewertung, Berg-Stationen, Mischung pro Runde, Vorlesetempo,
   Lob und alle Sätze, die das Einhorn sagt.
   ---------------------------------------------------------------------
   SO BEARBEITEST DU DIESE DATEI
   - Am einfachsten direkt auf GitHub: Datei anklicken, oben rechts auf den
     Stift (✏️ „Edit this file“), ändern, unten „Commit changes“.
   - Texte stehen immer in "Anführungszeichen". Zwischen zwei Einträgen steht
     ein Komma. Zeilen mit // davor sind nur Notizen und werden ignoriert.
   - Danach die App auf dem iPad einmal ganz schließen und mit Internet neu
     öffnen. CACHE_VERSION in sw.js muss dafür NICHT erhöht werden.
   - Steckt ein Tippfehler in der Datei, spielt die App mit der letzten
     funktionierenden Fassung weiter und zeigt unter Einstellungen ›
     Bibliothek an, in welcher Datei und Zeile der Fehler steckt.
   - {einhorn} wird durch den Namen des Einhorns ersetzt, {name} durch
     den Namen des Kindes.
   ===================================================================== */
var CONFIG = {
  // Karten pro Runde (ohne Wiederholungen)
  kartenProRunde: 10,

  // Bewertung nach Anzahl der Versuche (gezeigte Karten inkl. Wiederholungen).
  // "bis" = höchste Versuchszahl für diesen Platz.
  bewertung: [
    { bis: 11,       platz: 1, punkte: 4, szene: "gold"   },
    { bis: 13,       platz: 2, punkte: 3, szene: "silber" },
    { bis: 15,       platz: 3, punkte: 2, szene: "bronze" },
    { bis: Infinity, platz: 4, punkte: 1, szene: "wiese"  }
  ],

  // Einhorn-Berg: Stationen mit Punktgrenze. Die letzte Station ist das Ziel.
  stationen: [
    { name: "Feld",            punkte: 0,  symbol: "🌼", satz: "Wir sind auf dem Feld!" },
    { name: "Wald",            punkte: 10, symbol: "🌲", satz: "Wir sind im Wald!" },
    { name: "Bergfuß",         punkte: 20, symbol: "🪨", satz: "Wir sind am Bergfuß!" },
    { name: "Aufstieg",        punkte: 30, symbol: "🥾", satz: "Wir sind beim Aufstieg!" },
    { name: "Steilwand",       punkte: 40, symbol: "🧗‍♀️", satz: "Wir sind an der Steilwand!" },
    { name: "Gipfel",          punkte: 50, symbol: "🏔️", satz: "Wir sind auf dem Gipfel!" },
    { name: "Über den Wolken", punkte: 60, symbol: "🌈", satz: "Wir sind über den Wolken!" }
  ],
  // Punkte über dem Ziel werden in die nächste Bergtour mitgenommen.
  ueberschussMitnehmen: true,

  // Mischverhältnisse pro Runde (ABC Einfach: nur Buchstaben; English Einfach: 7 Wörter + 3 kurze Sätze)
  mischung: {
    abc: { E: { buchstaben: 10, laute: 0 }, M: { buchstaben: 5, laute: 5 }, S: { buchstaben: 3, laute: 7 } },
    en:  { E: { woerter: 7, saetze: 3 },  M: { woerter: 5, saetze: 5 },   S: { woerter: 0, saetze: 10 } }
  },
  // Feinregeln für die Auswahl
  auswahl: {
    abcSchwerLauteAusS: 5,   // bei Schwer: so viele Laute nur aus Stufe S …
    abcSchwerLauteAusM: 2,   // … und so viele aus Stufe M
    enSchwerSaetzeAusS: 6,   // bei English Schwer: Sätze aus S …
    enSchwerSaetzeAusM: 4    // … und aus M
  },

  // Einhorntraining: so oft muss eine Karte im Training richtig sein, bis sie die Liste verlässt
  trainingRichtigBisFertig: 2,

  // Spracherkennung
  sprechversuche: 3,          // höchstens so viele Sprechversuche pro Karte
  pauseNachNochmalMs: 1200,   // Pause nach dem sanften „Nochmal“-Ton
  hoerDauerMs: 7000,          // so lange wird pro Versuch höchstens zugehört
  nochmalAnsagen: false,      // true = nach einem Fehlversuch zusätzlich „Nochmal!“ / „Try again!“ sagen
  nochmalSprechenDe: "Nochmal!",
  nochmalSprechenEn: "Try again!",

  // Typische Laut-Varianten für die deutsche Spracherkennung. Safari schreibt bei kleinen
  // Kindern oft zuerst so etwas wie „ah“, „äh“, „hm“ statt des reinen Lauts.
  // Gedehnte Formen („aaah“, „mmmh“, „sss“) werden automatisch mit erkannt.
  lautVarianten: {
    a: ["ah", "ha", "aha", "ach"],      e: ["eh", "ä", "he", "ey", "hey", "ehe", "ähm"],
    i: ["ih", "ie", "hi", "y"],         o: ["oh", "ho", "oho"],
    u: ["uh", "hu", "uhu"],             m: ["mmh", "hm", "mhm", "äm", "ähm"],
    l: ["äl", "elle"],                  s: ["zz", "ps", "pst"],
    n: ["än", "ähn"],                   r: ["är", "ähr", "grr"],
    f: ["pf", "uff"],                   h: ["hä", "he"],
    w: ["wä", "ve"],                    ts: ["z", "tz", "tse"],
    "ä": ["äh", "eh", "e", "ae"],       "ö": ["öh", "oe"],          "ü": ["üh", "ue"],
    ei: ["hei", "hai", "ey", "hey"],    au: ["aua", "hau", "ow"],   eu: ["hoi", "heu", "oy"]
  },

  // Spiel English: Karte beim Erscheinen einmal automatisch vorlesen (je Stufe)
  enAutoVorlesen: { E: true, M: true, S: true },

  // Ablauf
  naechsteKarteMs: 1000,      // Pause nach „richtig“
  szeneDauerMs: 6500,         // Länge der Belohnungsszene (per Tipp überspringbar)

  // Vorlesetempo der iPad-Ersatzstimme (1 = normal) – nur für Texte ohne Aufnahme
  // (selbst angelegte Karten). Die aufgenommenen Stimmen haben ihr Tempo schon eingebaut.
  // Nur der 🐌-Knopf im Spiel English spricht bewusst langsam.
  tempo: { de: 0.94, enWort: 0.9, enSatz: 0.85, enLangsam: 0.55, bildwort: 0.9 },
  // Stimmhöhe der iPad-Ersatzstimme (1 = natürlich). Höhere Werte klingen schnell künstlich.
  stimmhoehe: 1.0,

  // Lob – wird nur vorgelesen, wenn in den Einstellungen „Lob vorlesen“ an ist
  lobDe: ["Super!", "Toll gemacht!", "Klasse!", "{einhorn} freut sich!", "Du bist ein Lese-Star!"],
  lobEn: ["Well done!", "Great job!", "Super!", "Fantastic!", "{einhorn} is so proud!"],
  szenenLob: ["Toll geübt! {einhorn} ist so stolz auf dich!", "Super gemacht! {einhorn} freut sich riesig!", "Juhu! {einhorn} hat dich lieb!"],

  // Namen für das Einhorn. Seit Version 5 kann das Kind nur aus diesen Namen wählen, denn
  // nur sie sind mit allen sechs Stimmen aufgenommen. Ein neuer Name hier spricht zunächst
  // die iPad-Stimme – für eine Aufnahme die Datei an Claude geben (siehe README).
  namensVorschlaege: ["Luna", "Stella", "Glitzer", "Rosalie", "Sternchen"],

  // ---------- Was das Einhorn sagt ----------
  // Tipp aufs Einhorn im Hauptmenü: ein Satz im Wechsel (nie zweimal derselbe hintereinander)
  einhornSaetze: [
    "Ich bin {einhorn}!",
    "Hallo, ich bin {einhorn}!",
    "Ich bin {einhorn}. Spielst du mit mir?",
    "Ich bin {einhorn}! Schön, dass du da bist!"
  ],
  // Namensgebung beim ersten Start (und unter Einstellungen › „Einhorn neu kennenlernen“)
  introFrage: "Hallo! Ich bin dein Einhorn. Ich habe noch keinen Namen. Wie soll ich heißen?",
  introNameFehlt: "Bitte gib mir einen Namen.",
  introFertig: "Juhu! Ich heiße {einhorn}! Lass uns zusammen spielen!",
  // Ganz oben am Berg
  kroneSatz: "Hurra! Wir sind über den Wolken! {einhorn} bekommt eine Krone!",
  kroneNochmalSatz: "Wir sind über den Wolken! {einhorn} trägt eine Krone!",
  neueTourSatz: "Jetzt beginnt eine neue Bergtour!"
};
