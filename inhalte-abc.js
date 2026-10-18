/* =====================================================================
   INHALTE ABC – alle Karten des Spiels ABC
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

   AUFBAU EINER KARTE
   id      eindeutiger Name der Karte (nie doppelt; bei neuen Karten einfach
           einen neuen erfinden, z. B. "b-a2"). Bitte bestehende ids nicht
           ändern – daran hängen Einhorntraining und eigene Fotos.
   stufe   "E" = ab Einfach, "M" = ab Mittel, "S" = nur Schwer
   typ "buchstabe": zeichen (Großbuchstabe), laut (Lautform), name (Buchstaben-
           name; beides nur für die Spracherkennung, wird nie vorgelesen),
           woerter (Bildwörter)
   typ "laut":      zeichen (Laut, Silbe oder Silbenwort mit | als Silben-
           grenze, z. B. "Ma|ma"), art ("verbindung", "silbe", "silbenwort"),
           erkennung (optional, für die Spracherkennung)
   woerter Liste aus ["Bildwort", "Emoji"]. Das Bildwort liest die App vor.
   extra   weitere akzeptierte Antworten (optional)

   BEISPIEL – neues Bildwort zu M hinzufügen:
     woerter: [["Maus", "🐭"], ["Mond", "🌙"], ["Möhre", "🥕"]]

   Stufen (geprüft mit Vorschul-Quellen, siehe LERNINHALTE.md):
     Einfach = nur Buchstaben: Selbstlaute + Dauerlaute (M L S N R F)
     Mittel  = Stopp-Laute (T D P K B G) sowie H W Z, EI und AU, Silben,
               zweisilbige Wörter
     Schwer  = seltene Buchstaben, Umlaute, Lautverbindungen, dreisilbige Wörter
   ===================================================================== */
var INHALTE_ABC = [

  /* ---------- ABC: Buchstaben – Einfach (Selbstlaute und Dauerlaute) ---------- */
  { id: "b-a", teil: "de", typ: "buchstabe", zeichen: "A", stufe: "E", laut: "a", name: "a",
    woerter: [["Affe", "🐒"], ["Ameise", "🐜"], ["Ananas", "🍍"], ["Apfel", "🍎"]] },
  { id: "b-e", teil: "de", typ: "buchstabe", zeichen: "E", stufe: "E", laut: "e", name: "e",
    woerter: [["Esel", "🫏"], ["Ente", "🦆"], ["Elefant", "🐘"], ["Engel", "👼"]] },
  { id: "b-i", teil: "de", typ: "buchstabe", zeichen: "I", stufe: "E", laut: "i", name: "i",
    woerter: [["Igel", "🦔"], ["Insel", "🏝️"]] },
  { id: "b-o", teil: "de", typ: "buchstabe", zeichen: "O", stufe: "E", laut: "o", name: "o",
    woerter: [["Ohr", "👂"], ["Oma", "👵"], ["Opa", "👴"]] },
  { id: "b-u", teil: "de", typ: "buchstabe", zeichen: "U", stufe: "E", laut: "u", name: "u",
    woerter: [["Uhr", "⌚"], ["Ufo", "🛸"], ["Unterhose", "🩲"]] },
  { id: "b-m", teil: "de", typ: "buchstabe", zeichen: "M", stufe: "E", laut: "m", name: "em",
    woerter: [["Maus", "🐭"], ["Mond", "🌙"], ["Milch", "🥛"], ["Mund", "👄"]] },
  { id: "b-l", teil: "de", typ: "buchstabe", zeichen: "L", stufe: "E", laut: "l", name: "el",
    woerter: [["Löwe", "🦁"], ["Lama", "🦙"], ["Lolli", "🍭"], ["Löffel", "🥄"]] },
  { id: "b-s", teil: "de", typ: "buchstabe", zeichen: "S", stufe: "E", laut: "s", name: "es",
    woerter: [["Sonne", "☀️"], ["Socke", "🧦"], ["Sofa", "🛋️"], ["Salat", "🥗"]] },
  { id: "b-n", teil: "de", typ: "buchstabe", zeichen: "N", stufe: "E", laut: "n", name: "en",
    woerter: [["Nase", "👃"], ["Nest", "🪺"], ["Nudeln", "🍝"], ["Nilpferd", "🦛"]] },
  { id: "b-r", teil: "de", typ: "buchstabe", zeichen: "R", stufe: "E", laut: "r", name: "er",
    woerter: [["Rakete", "🚀"], ["Rose", "🌹"], ["Regenbogen", "🌈"], ["Roboter", "🤖"]] },
  { id: "b-f", teil: "de", typ: "buchstabe", zeichen: "F", stufe: "E", laut: "f", name: "ef",
    woerter: [["Fisch", "🐟"], ["Fuchs", "🦊"], ["Fee", "🧚"], ["Feuer", "🔥"]] },

  /* ---------- ABC: Buchstaben – Mittel ---------- */
  { id: "b-t", teil: "de", typ: "buchstabe", zeichen: "T", stufe: "M", laut: "t", name: "te",
    woerter: [["Tiger", "🐯"], ["Tomate", "🍅"], ["Torte", "🎂"], ["Teddy", "🧸"]] },
  { id: "b-d", teil: "de", typ: "buchstabe", zeichen: "D", stufe: "M", laut: "d", name: "de",
    woerter: [["Dino", "🦕"], ["Delfin", "🐬"], ["Dose", "🥫"], ["Dusche", "🚿"]] },
  { id: "b-p", teil: "de", typ: "buchstabe", zeichen: "P", stufe: "M", laut: "p", name: "pe",
    woerter: [["Pinguin", "🐧"], ["Pizza", "🍕"], ["Pilz", "🍄"], ["Panda", "🐼"]] },
  { id: "b-k", teil: "de", typ: "buchstabe", zeichen: "K", stufe: "M", laut: "k", name: "ka",
    woerter: [["Katze", "🐱"], ["Kuh", "🐮"], ["Käse", "🧀"], ["Keks", "🍪"], ["Kuchen", "🍰"]] },
  { id: "b-b", teil: "de", typ: "buchstabe", zeichen: "B", stufe: "M", laut: "b", name: "be",
    woerter: [["Banane", "🍌"], ["Bär", "🐻"], ["Biene", "🐝"], ["Buch", "📖"], ["Ball", "🏀"]] },
  { id: "b-g", teil: "de", typ: "buchstabe", zeichen: "G", stufe: "M", laut: "g", name: "ge",
    woerter: [["Gans", "🪿"], ["Gabel", "🍴"], ["Gurke", "🥒"], ["Gitarre", "🎸"]] },
  { id: "b-h", teil: "de", typ: "buchstabe", zeichen: "H", stufe: "M", laut: "h", name: "ha",
    woerter: [["Haus", "🏠"], ["Hund", "🐶"], ["Herz", "❤️"], ["Hase", "🐰"]] },
  { id: "b-w", teil: "de", typ: "buchstabe", zeichen: "W", stufe: "M", laut: "w", name: "we",
    woerter: [["Wal", "🐳"], ["Wolke", "☁️"], ["Wurm", "🪱"], ["Wolf", "🐺"]] },
  { id: "b-z", teil: "de", typ: "buchstabe", zeichen: "Z", stufe: "M", laut: "ts", name: "zett",
    woerter: [["Zebra", "🦓"], ["Zahn", "🦷"], ["Zitrone", "🍋"], ["Zug", "🚂"]] },

  /* ---------- ABC: Buchstaben – Schwer ---------- */
  { id: "b-c", teil: "de", typ: "buchstabe", zeichen: "C", stufe: "S", laut: "k", name: ["ce", "tse"],
    woerter: [["Computer", "💻"], ["Cowboy", "🤠"], ["Clown", "🤡"]] },
  { id: "b-j", teil: "de", typ: "buchstabe", zeichen: "J", stufe: "S", laut: "j", name: "jot",
    woerter: [["Jacke", "🧥"], ["Jo-Jo", "🪀"], ["Junge", "👦"]] },
  { id: "b-q", teil: "de", typ: "buchstabe", zeichen: "Q", stufe: "S", laut: "kw", name: "ku",
    woerter: [["Qualle", "🪼"], ["Quadrat", "🟪"]] },
  { id: "b-v", teil: "de", typ: "buchstabe", zeichen: "V", stufe: "S", laut: ["f", "w"], name: "fau",
    woerter: [["Vogel", "🐦", "f"], ["Vulkan", "🌋", "w"], ["Vase", "🏺", "w"]] },
  { id: "b-x", teil: "de", typ: "buchstabe", zeichen: "X", stufe: "S", laut: "ks", name: "ix",
    woerter: [["Taxi", "🚕"], ["Hexe", "🧙‍♀️"]] },
  { id: "b-y", teil: "de", typ: "buchstabe", zeichen: "Y", stufe: "S", laut: ["j", "i", "ü"], name: "ypsilon",
    woerter: [["Yoga", "🧘", "j"], ["Baby", "👶", "i"]] },
  { id: "b-ae", teil: "de", typ: "buchstabe", zeichen: "Ä", stufe: "S", laut: "ä", name: "ä",
    woerter: [["Äpfel", "🍎🍎"], ["Käfer", "🐞"], ["Bär", "🐻"]] },
  { id: "b-oe", teil: "de", typ: "buchstabe", zeichen: "Ö", stufe: "S", laut: "ö", name: "ö",
    woerter: [["Löwe", "🦁"], ["Flöte", "🪈"], ["Öl", "🛢️"]] },
  { id: "b-ue", teil: "de", typ: "buchstabe", zeichen: "Ü", stufe: "S", laut: "ü", name: "ü",
    woerter: [["Tür", "🚪"], ["Würfel", "🎲"], ["Hütte", "🛖"]] },

  /* ---------- ABC: Zwielaute und Lautverbindungen ---------- */
  { id: "v-ei", teil: "de", typ: "laut", art: "verbindung", zeichen: "ei", stufe: "M", erkennung: ["ei", "ai"],
    woerter: [["Eis", "🍦"], ["Ei", "🥚"], ["Eimer", "🪣"], ["Eichhörnchen", "🐿️"]] },
  { id: "v-au", teil: "de", typ: "laut", art: "verbindung", zeichen: "au", stufe: "M", erkennung: ["au"],
    woerter: [["Auto", "🚗"], ["Auge", "👁️"], ["Maus", "🐭"], ["Haus", "🏠"]] },
  { id: "v-eu", teil: "de", typ: "laut", art: "verbindung", zeichen: "eu", stufe: "S", erkennung: ["eu", "oi"],
    woerter: [["Eule", "🦉"], ["Euro", "💶"], ["Feuer", "🔥"]] },
  { id: "v-aeu", teil: "de", typ: "laut", art: "verbindung", zeichen: "äu", stufe: "S", erkennung: ["äu", "eu", "oi"],
    woerter: [["Bäume", "🌳🌳"], ["Mäuse", "🐭🐭"], ["Häuser", "🏠🏠"]] },
  { id: "v-ie", teil: "de", typ: "laut", art: "verbindung", zeichen: "ie", stufe: "S", erkennung: ["ie", "i"],
    woerter: [["Biene", "🐝"], ["Brief", "✉️"], ["Ziege", "🐐"], ["Fliege", "🪰"]] },
  { id: "v-sch", teil: "de", typ: "laut", art: "verbindung", zeichen: "sch", stufe: "S", erkennung: ["sch"],
    woerter: [["Schaf", "🐑"], ["Schnecke", "🐌"], ["Schere", "✂️"], ["Schuh", "👟"], ["Schiff", "🚢"]] },
  { id: "v-ch", teil: "de", typ: "laut", art: "verbindung", zeichen: "ch", stufe: "S", erkennung: ["ch", "ach"],
    woerter: [["Buch", "📖"], ["Kuchen", "🍰"], ["Drache", "🐉"]] },
  { id: "v-st", teil: "de", typ: "laut", art: "verbindung", zeichen: "st", stufe: "S", erkennung: ["st", "scht"],
    woerter: [["Stern", "⭐"], ["Stuhl", "🪑"], ["Stift", "✏️"], ["Stein", "🪨"]] },
  { id: "v-sp", teil: "de", typ: "laut", art: "verbindung", zeichen: "sp", stufe: "S", erkennung: ["sp", "schp"],
    woerter: [["Spinne", "🕷️"], ["Spiegel", "🪞"]] },
  { id: "v-pf", teil: "de", typ: "laut", art: "verbindung", zeichen: "pf", stufe: "S", erkennung: ["pf"],
    woerter: [["Pferd", "🐴"], ["Pfanne", "🍳"], ["Apfel", "🍎"]] },
  { id: "v-ng", teil: "de", typ: "laut", art: "verbindung", zeichen: "ng", stufe: "S", erkennung: ["ng"],
    woerter: [["Ring", "💍"], ["Schlange", "🐍"], ["Zunge", "👅"]] },
  { id: "v-nk", teil: "de", typ: "laut", art: "verbindung", zeichen: "nk", stufe: "S", erkennung: ["nk"],
    woerter: [["Geschenk", "🎁"], ["Anker", "⚓"]] },
  { id: "v-ck", teil: "de", typ: "laut", art: "verbindung", zeichen: "ck", stufe: "S", erkennung: ["ck", "k"],
    woerter: [["Socke", "🧦"], ["Schnecke", "🐌"], ["Jacke", "🧥"], ["Glocke", "🔔"]] },

  /* ---------- ABC: Silben mit Dauerlauten (M L S N R F) ---------- */
  { id: "s-ma", teil: "de", typ: "laut", art: "silbe", zeichen: "ma", stufe: "E", woerter: [["Maler", "🧑‍🎨"], ["Magnet", "🧲"]] },
  { id: "s-me", teil: "de", typ: "laut", art: "silbe", zeichen: "me", stufe: "E", woerter: [["Melone", "🍉"], ["Meer", "🌊"]] },
  { id: "s-mi", teil: "de", typ: "laut", art: "silbe", zeichen: "mi", stufe: "E", woerter: [["Mikrofon", "🎤"], ["Milch", "🥛"]] },
  { id: "s-mo", teil: "de", typ: "laut", art: "silbe", zeichen: "mo", stufe: "E", woerter: [["Motorrad", "🏍️"], ["Mond", "🌙"]] },
  { id: "s-mu", teil: "de", typ: "laut", art: "silbe", zeichen: "mu", stufe: "E", woerter: [["Musik", "🎵"], ["Muschel", "🐚"]] },
  { id: "s-la", teil: "de", typ: "laut", art: "silbe", zeichen: "la", stufe: "E", woerter: [["Lama", "🦙"], ["Laterne", "🏮"]] },
  { id: "s-le", teil: "de", typ: "laut", art: "silbe", zeichen: "le", stufe: "M", woerter: [["Leopard", "🐆"]] },
  { id: "s-li", teil: "de", typ: "laut", art: "silbe", zeichen: "li", stufe: "E", woerter: [["Limo", "🥤"], ["Lineal", "📏"]] },
  { id: "s-lo", teil: "de", typ: "laut", art: "silbe", zeichen: "lo", stufe: "E", woerter: [["Lolli", "🍭"], ["Lok", "🚂"]] },
  { id: "s-lu", teil: "de", typ: "laut", art: "silbe", zeichen: "lu", stufe: "E", woerter: [["Lupe", "🔍"], ["Luftballon", "🎈"]] },
  { id: "s-sa", teil: "de", typ: "laut", art: "silbe", zeichen: "sa", stufe: "E", woerter: [["Salat", "🥗"], ["Saft", "🧃"]] },
  { id: "s-se", teil: "de", typ: "laut", art: "silbe", zeichen: "se", stufe: "M", woerter: [["Seehund", "🦭"], ["Segelboot", "⛵"]] },
  { id: "s-si", teil: "de", typ: "laut", art: "silbe", zeichen: "si", stufe: "M", woerter: [["Sirene", "🚨"]] },
  { id: "s-so", teil: "de", typ: "laut", art: "silbe", zeichen: "so", stufe: "E", woerter: [["Sofa", "🛋️"], ["Sonne", "☀️"]] },
  { id: "s-su", teil: "de", typ: "laut", art: "silbe", zeichen: "su", stufe: "E", woerter: [["Suppe", "🍲"], ["Sushi", "🍣"]] },
  { id: "s-na", teil: "de", typ: "laut", art: "silbe", zeichen: "na", stufe: "E", woerter: [["Nase", "👃"], ["Nadel", "🪡"]] },
  { id: "s-ne", teil: "de", typ: "laut", art: "silbe", zeichen: "ne", stufe: "M", woerter: [["Nest", "🪺"], ["Nebel", "🌫️"]] },
  { id: "s-ni", teil: "de", typ: "laut", art: "silbe", zeichen: "ni", stufe: "M", woerter: [["Nilpferd", "🦛"]] },
  { id: "s-no", teil: "de", typ: "laut", art: "silbe", zeichen: "no", stufe: "M", woerter: [["Noten", "🎶"]] },
  { id: "s-nu", teil: "de", typ: "laut", art: "silbe", zeichen: "nu", stufe: "E", woerter: [["Nudeln", "🍝"], ["Nuss", "🥜"]] },
  { id: "s-ra", teil: "de", typ: "laut", art: "silbe", zeichen: "ra", stufe: "E", woerter: [["Rakete", "🚀"], ["Radio", "📻"]] },
  { id: "s-re", teil: "de", typ: "laut", art: "silbe", zeichen: "re", stufe: "M", woerter: [["Regen", "🌧️"], ["Regenbogen", "🌈"]] },
  { id: "s-ri", teil: "de", typ: "laut", art: "silbe", zeichen: "ri", stufe: "M", woerter: [["Ring", "💍"]] },
  { id: "s-ro", teil: "de", typ: "laut", art: "silbe", zeichen: "ro", stufe: "E", woerter: [["Rose", "🌹"], ["Roboter", "🤖"]] },
  { id: "s-ru", teil: "de", typ: "laut", art: "silbe", zeichen: "ru", stufe: "M", woerter: [["Rucksack", "🎒"]] },
  { id: "s-fa", teil: "de", typ: "laut", art: "silbe", zeichen: "fa", stufe: "E", woerter: [["Fahne", "🚩"], ["Fahrrad", "🚲"]] },
  { id: "s-fe", teil: "de", typ: "laut", art: "silbe", zeichen: "fe", stufe: "M", woerter: [["Feder", "🪶"], ["Fee", "🧚"]] },
  { id: "s-fi", teil: "de", typ: "laut", art: "silbe", zeichen: "fi", stufe: "E", woerter: [["Fisch", "🐟"], ["Finger", "☝️"]] },
  { id: "s-fo", teil: "de", typ: "laut", art: "silbe", zeichen: "fo", stufe: "M", woerter: [["Foto", "📷"]] },
  { id: "s-fu", teil: "de", typ: "laut", art: "silbe", zeichen: "fu", stufe: "E", woerter: [["Fuchs", "🦊"], ["Fußball", "⚽"]] },

  /* ---------- ABC: Silben mit Stopp-Lauten und H W Z (alle Mittel) ---------- */
  { id: "s-ta", teil: "de", typ: "laut", art: "silbe", zeichen: "ta", stufe: "M", woerter: [["Tasse", "☕"], ["Taxi", "🚕"]] },
  { id: "s-te", teil: "de", typ: "laut", art: "silbe", zeichen: "te", stufe: "M", woerter: [["Telefon", "☎️"], ["Teddy", "🧸"]] },
  { id: "s-ti", teil: "de", typ: "laut", art: "silbe", zeichen: "ti", stufe: "M", woerter: [["Tiger", "🐯"]] },
  { id: "s-to", teil: "de", typ: "laut", art: "silbe", zeichen: "to", stufe: "M", woerter: [["Tomate", "🍅"], ["Torte", "🎂"]] },
  { id: "s-tu", teil: "de", typ: "laut", art: "silbe", zeichen: "tu", stufe: "M", woerter: [["Tulpe", "🌷"], ["Turm", "🗼"]] },
  { id: "s-di", teil: "de", typ: "laut", art: "silbe", zeichen: "di", stufe: "M", woerter: [["Dino", "🦕"]] },
  { id: "s-do", teil: "de", typ: "laut", art: "silbe", zeichen: "do", stufe: "M", woerter: [["Dose", "🥫"], ["Donut", "🍩"]] },
  { id: "s-du", teil: "de", typ: "laut", art: "silbe", zeichen: "du", stufe: "M", woerter: [["Dusche", "🚿"]] },
  { id: "s-pa", teil: "de", typ: "laut", art: "silbe", zeichen: "pa", stufe: "M", woerter: [["Paket", "📦"], ["Panda", "🐼"]] },
  { id: "s-pi", teil: "de", typ: "laut", art: "silbe", zeichen: "pi", stufe: "M", woerter: [["Pilot", "🧑‍✈️"], ["Pizza", "🍕"]] },
  { id: "s-po", teil: "de", typ: "laut", art: "silbe", zeichen: "po", stufe: "M", woerter: [["Pony", "🐴"], ["Pommes", "🍟"]] },
  { id: "s-ka", teil: "de", typ: "laut", art: "silbe", zeichen: "ka", stufe: "M", woerter: [["Kamel", "🐫"], ["Katze", "🐱"]] },
  { id: "s-ko", teil: "de", typ: "laut", art: "silbe", zeichen: "ko", stufe: "M", woerter: [["Koala", "🐨"], ["Koffer", "🧳"]] },
  { id: "s-ku", teil: "de", typ: "laut", art: "silbe", zeichen: "ku", stufe: "M", woerter: [["Kuh", "🐮"], ["Kuchen", "🍰"]] },
  { id: "s-ba", teil: "de", typ: "laut", art: "silbe", zeichen: "ba", stufe: "M", woerter: [["Banane", "🍌"], ["Baby", "👶"]] },
  { id: "s-bi", teil: "de", typ: "laut", art: "silbe", zeichen: "bi", stufe: "M", woerter: [["Biene", "🐝"], ["Birne", "🍐"]] },
  { id: "s-bu", teil: "de", typ: "laut", art: "silbe", zeichen: "bu", stufe: "M", woerter: [["Bus", "🚌"], ["Buch", "📖"]] },
  { id: "s-ga", teil: "de", typ: "laut", art: "silbe", zeichen: "ga", stufe: "M", woerter: [["Gabel", "🍴"], ["Gans", "🪿"]] },
  { id: "s-go", teil: "de", typ: "laut", art: "silbe", zeichen: "go", stufe: "M", woerter: [["Gorilla", "🦍"]] },
  { id: "s-ha", teil: "de", typ: "laut", art: "silbe", zeichen: "ha", stufe: "M", woerter: [["Hase", "🐰"], ["Hahn", "🐓"]] },
  { id: "s-ho", teil: "de", typ: "laut", art: "silbe", zeichen: "ho", stufe: "M", woerter: [["Hose", "👖"], ["Honig", "🍯"]] },
  { id: "s-hu", teil: "de", typ: "laut", art: "silbe", zeichen: "hu", stufe: "M", woerter: [["Hut", "👒"], ["Huhn", "🐔"]] },
  { id: "s-wa", teil: "de", typ: "laut", art: "silbe", zeichen: "wa", stufe: "M", woerter: [["Wal", "🐳"], ["Wasser", "💧"]] },
  { id: "s-wi", teil: "de", typ: "laut", art: "silbe", zeichen: "wi", stufe: "M", woerter: [["Wind", "🌬️"]] },
  { id: "s-wo", teil: "de", typ: "laut", art: "silbe", zeichen: "wo", stufe: "M", woerter: [["Wolke", "☁️"], ["Wolle", "🧶"]] },
  { id: "s-ze", teil: "de", typ: "laut", art: "silbe", zeichen: "ze", stufe: "M", woerter: [["Zebra", "🦓"]] },
  { id: "s-zi", teil: "de", typ: "laut", art: "silbe", zeichen: "zi", stufe: "M", woerter: [["Zirkus", "🎪"], ["Zitrone", "🍋"]] },
  { id: "s-zu", teil: "de", typ: "laut", art: "silbe", zeichen: "zu", stufe: "M", woerter: [["Zug", "🚂"]] },

  /* ---------- ABC: Silben mit Selbstlaut vorne (wie auf den Leseblättern) ---------- */
  { id: "s-am", teil: "de", typ: "laut", art: "silbe", zeichen: "am", stufe: "M", woerter: [["Ampel", "🚦"]] },
  { id: "s-an", teil: "de", typ: "laut", art: "silbe", zeichen: "an", stufe: "M", woerter: [["Anker", "⚓"], ["Angel", "🎣"]] },
  { id: "s-in", teil: "de", typ: "laut", art: "silbe", zeichen: "in", stufe: "M", woerter: [["Insel", "🏝️"]] },
  { id: "s-es", teil: "de", typ: "laut", art: "silbe", zeichen: "es", stufe: "M", woerter: [["Essen", "🍽️"]] },
  { id: "s-os", teil: "de", typ: "laut", art: "silbe", zeichen: "os", stufe: "M", woerter: [["Ostern", "🐣"]] },

  /* ---------- ABC: Silbenwörter mit zwei Silben (ab Mittel) ---------- */
  { id: "w-mama", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ma|ma", stufe: "M", woerter: [["Mama", "👩"]] },
  { id: "w-oma",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "O|ma",  stufe: "M", woerter: [["Oma", "👵"]] },
  { id: "w-opa",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "O|pa",  stufe: "M", woerter: [["Opa", "👴"]] },
  { id: "w-lama", teil: "de", typ: "laut", art: "silbenwort", zeichen: "La|ma", stufe: "M", woerter: [["Lama", "🦙"]] },
  { id: "w-sofa", teil: "de", typ: "laut", art: "silbenwort", zeichen: "So|fa", stufe: "M", woerter: [["Sofa", "🛋️"]] },
  { id: "w-nase", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Na|se", stufe: "M", woerter: [["Nase", "👃"]] },
  { id: "w-rose", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ro|se", stufe: "M", woerter: [["Rose", "🌹"]] },
  { id: "w-limo", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Li|mo", stufe: "M", woerter: [["Limo", "🥤"]] },
  { id: "w-hose", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ho|se", stufe: "M", woerter: [["Hose", "👖"]] },
  { id: "w-dose", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Do|se", stufe: "M", woerter: [["Dose", "🥫"]] },
  { id: "w-hase", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ha|se", stufe: "M", woerter: [["Hase", "🐰"]] },
  { id: "w-rabe", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ra|be", stufe: "M", woerter: [["Rabe", "🐦‍⬛"]] },
  { id: "w-gabel", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ga|bel", stufe: "M", woerter: [["Gabel", "🍴"]] },
  { id: "w-nadel", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Na|del", stufe: "M", woerter: [["Nadel", "🪡"]] },
  { id: "w-feder", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Fe|der", stufe: "M", woerter: [["Feder", "🪶"]] },
  { id: "w-kamel", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ka|mel", stufe: "M", woerter: [["Kamel", "🐫"]] },

  /* ---------- ABC: Silbenwörter mit drei Silben und Taxi (Schwer) ---------- */
  { id: "w-taxi",    teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ta|xi",      stufe: "S", woerter: [["Taxi", "🚕"]] },
  { id: "w-rakete",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ra|ke|te",   stufe: "S", woerter: [["Rakete", "🚀"]] },
  { id: "w-tomate",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "To|ma|te",   stufe: "S", woerter: [["Tomate", "🍅"]] },
  { id: "w-banane",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ba|na|ne",   stufe: "S", woerter: [["Banane", "🍌"]] },
  { id: "w-melone",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "Me|lo|ne",   stufe: "S", woerter: [["Melone", "🍉"]] },
  { id: "w-roboter", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ro|bo|ter",  stufe: "S", woerter: [["Roboter", "🤖"]] },
  { id: "w-telefon", teil: "de", typ: "laut", art: "silbenwort", zeichen: "Te|le|fon",  stufe: "S", woerter: [["Telefon", "☎️"]] },
  { id: "w-kamera",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "Ka|me|ra",   stufe: "S", woerter: [["Kamera", "📷"]] },
  { id: "w-ananas",  teil: "de", typ: "laut", art: "silbenwort", zeichen: "A|na|nas",   stufe: "S", woerter: [["Ananas", "🍍"]] },
];
