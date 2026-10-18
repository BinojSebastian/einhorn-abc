/* =====================================================================
   INHALTE ENGLISH – alle Karten des Spiels English
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
   id      eindeutiger Name der Karte (nie doppelt; bestehende ids nicht ändern)
   typ     "wort" oder "satz"
   text    britisches Englisch – das liest die App vor
   de      deutsche Bedeutung (klein unter dem Bild)
   bild    Emoji
   stufe   "E" = ab Einfach, "M" = ab Mittel, "S" = nur Schwer
   varianten   weitere Schreibweisen, die die Spracherkennung gelten lässt (optional)
   brauchtName true = {name} im Text wird durch den Namen des Kindes ersetzt
               (die Karte kommt nur dran, wenn ein Name eingetragen ist)

   BEISPIEL – neues Wort:
     { id: "en-pear", typ: "wort", text: "pear", de: "Birne", bild: "🍐", stufe: "M" },
   ===================================================================== */
var INHALTE_ENGLISH = [

  /* ---------- English: Wörter – Einfach (Alltag zuerst) ---------- */
  // Essen und Trinken
  { id: "en-water",   teil: "en", typ: "wort", text: "water",     de: "Wasser",  bild: "💧", stufe: "E" },
  { id: "en-milk",    teil: "en", typ: "wort", text: "milk",      de: "Milch",   bild: "🥛", stufe: "E" },
  { id: "en-juice",   teil: "en", typ: "wort", text: "juice",     de: "Saft",    bild: "🧃", stufe: "E" },
  { id: "en-bread",   teil: "en", typ: "wort", text: "bread",     de: "Brot",    bild: "🍞", stufe: "E", varianten: ["bred"] },
  { id: "en-apple",   teil: "en", typ: "wort", text: "apple",     de: "Apfel",   bild: "🍎", stufe: "E" },
  { id: "en-banana",  teil: "en", typ: "wort", text: "banana",    de: "Banane",  bild: "🍌", stufe: "E" },
  { id: "en-biscuit", teil: "en", typ: "wort", text: "biscuit",   de: "Keks",    bild: "🍪", stufe: "E", varianten: ["cookie"] },
  { id: "en-cake",    teil: "en", typ: "wort", text: "cake",      de: "Kuchen",  bild: "🍰", stufe: "E" },
  { id: "en-cheese",  teil: "en", typ: "wort", text: "cheese",    de: "Käse",    bild: "🧀", stufe: "E" },
  { id: "en-egg",     teil: "en", typ: "wort", text: "egg",       de: "Ei",      bild: "🥚", stufe: "E" },
  { id: "en-icecream",teil: "en", typ: "wort", text: "ice cream", de: "Eis",     bild: "🍦", stufe: "E", varianten: ["icecream", "ice-cream"] },
  { id: "en-pizza",   teil: "en", typ: "wort", text: "pizza",     de: "Pizza",   bild: "🍕", stufe: "E" },
  // Zuhause und Alltag
  { id: "en-house",      teil: "en", typ: "wort", text: "house",      de: "Haus",       bild: "🏠", stufe: "E" },
  { id: "en-bed",        teil: "en", typ: "wort", text: "bed",        de: "Bett",       bild: "🛏️", stufe: "E" },
  { id: "en-bath",       teil: "en", typ: "wort", text: "bath",       de: "Badewanne",  bild: "🛁", stufe: "E" },
  { id: "en-toothbrush", teil: "en", typ: "wort", text: "toothbrush", de: "Zahnbürste", bild: "🪥", stufe: "E" },
  { id: "en-cup",        teil: "en", typ: "wort", text: "cup",        de: "Tasse",      bild: "☕", stufe: "E" },
  { id: "en-spoon",      teil: "en", typ: "wort", text: "spoon",      de: "Löffel",     bild: "🥄", stufe: "E" },
  { id: "en-book",       teil: "en", typ: "wort", text: "book",       de: "Buch",       bild: "📖", stufe: "E" },
  { id: "en-ball",       teil: "en", typ: "wort", text: "ball",       de: "Ball",       bild: "⚽", stufe: "E" },
  { id: "en-teddy",      teil: "en", typ: "wort", text: "teddy",      de: "Teddy",      bild: "🧸", stufe: "E", varianten: ["teddy bear"] },
  { id: "en-car",        teil: "en", typ: "wort", text: "car",        de: "Auto",       bild: "🚗", stufe: "E" },
  { id: "en-bus",        teil: "en", typ: "wort", text: "bus",        de: "Bus",        bild: "🚌", stufe: "E" },
  // Anziehen
  { id: "en-shoes",  teil: "en", typ: "wort", text: "shoes",   de: "Schuhe", bild: "👟", stufe: "E", varianten: ["shoe"] },
  { id: "en-socks",  teil: "en", typ: "wort", text: "socks",   de: "Socken", bild: "🧦", stufe: "E", varianten: ["sock"] },
  { id: "en-hat",    teil: "en", typ: "wort", text: "hat",     de: "Hut",    bild: "👒", stufe: "E" },
  { id: "en-coat",   teil: "en", typ: "wort", text: "coat",    de: "Jacke",  bild: "🧥", stufe: "E", varianten: ["jacket"] },
  { id: "en-tshirt", teil: "en", typ: "wort", text: "T-shirt", de: "T-Shirt", bild: "👕", stufe: "E", varianten: ["t shirt", "tshirt", "tee shirt"] },
  // Familie
  { id: "en-mum",     teil: "en", typ: "wort", text: "mum",     de: "Mama",      bild: "👩", stufe: "E", varianten: ["mummy", "mom", "mam"] },
  { id: "en-dad",     teil: "en", typ: "wort", text: "dad",     de: "Papa",      bild: "👨", stufe: "E", varianten: ["daddy"] },
  { id: "en-baby",    teil: "en", typ: "wort", text: "baby",    de: "Baby",      bild: "👶", stufe: "E" },
  { id: "en-sister",  teil: "en", typ: "wort", text: "sister",  de: "Schwester", bild: "👧", stufe: "E" },
  { id: "en-brother", teil: "en", typ: "wort", text: "brother", de: "Bruder",    bild: "👦", stufe: "E" },
  { id: "en-grandma", teil: "en", typ: "wort", text: "grandma", de: "Oma",       bild: "👵", stufe: "E", varianten: ["granny", "nana"] },
  { id: "en-grandpa", teil: "en", typ: "wort", text: "grandpa", de: "Opa",       bild: "👴", stufe: "E", varianten: ["grandad", "granddad"] },
  // Tiere
  { id: "en-cat",     teil: "en", typ: "wort", text: "cat",     de: "Katze",   bild: "🐱", stufe: "E" },
  { id: "en-dog",     teil: "en", typ: "wort", text: "dog",     de: "Hund",    bild: "🐶", stufe: "E" },
  { id: "en-fish",    teil: "en", typ: "wort", text: "fish",    de: "Fisch",   bild: "🐟", stufe: "E" },
  { id: "en-bird",    teil: "en", typ: "wort", text: "bird",    de: "Vogel",   bild: "🐦", stufe: "E" },
  { id: "en-horse",   teil: "en", typ: "wort", text: "horse",   de: "Pferd",   bild: "🐴", stufe: "E" },
  { id: "en-cow",     teil: "en", typ: "wort", text: "cow",     de: "Kuh",     bild: "🐮", stufe: "E" },
  { id: "en-pig",     teil: "en", typ: "wort", text: "pig",     de: "Schwein", bild: "🐷", stufe: "E" },
  { id: "en-duck",    teil: "en", typ: "wort", text: "duck",    de: "Ente",    bild: "🦆", stufe: "E" },
  { id: "en-mouse",   teil: "en", typ: "wort", text: "mouse",   de: "Maus",    bild: "🐭", stufe: "E" },
  { id: "en-rabbit",  teil: "en", typ: "wort", text: "rabbit",  de: "Hase",    bild: "🐰", stufe: "E", varianten: ["bunny"] },
  { id: "en-bear",    teil: "en", typ: "wort", text: "bear",    de: "Bär",     bild: "🐻", stufe: "E" },
  { id: "en-unicorn", teil: "en", typ: "wort", text: "unicorn", de: "Einhorn", bild: "🦄", stufe: "E" },
  // Farben und Himmel
  { id: "en-red",    teil: "en", typ: "wort", text: "red",    de: "rot",   bild: "🔴", stufe: "E", varianten: ["read"] },
  { id: "en-blue",   teil: "en", typ: "wort", text: "blue",   de: "blau",  bild: "🔵", stufe: "E", varianten: ["blew"] },
  { id: "en-yellow", teil: "en", typ: "wort", text: "yellow", de: "gelb",  bild: "🟡", stufe: "E" },
  { id: "en-green",  teil: "en", typ: "wort", text: "green",  de: "grün",  bild: "🟢", stufe: "E" },
  { id: "en-pink",   teil: "en", typ: "wort", text: "pink",   de: "rosa",  bild: "🩷", stufe: "E" },
  { id: "en-sun",    teil: "en", typ: "wort", text: "sun",    de: "Sonne", bild: "☀️", stufe: "E", varianten: ["son"] },
  { id: "en-moon",   teil: "en", typ: "wort", text: "moon",   de: "Mond",  bild: "🌙", stufe: "E" },
  { id: "en-star",   teil: "en", typ: "wort", text: "star",   de: "Stern", bild: "⭐", stufe: "E" },

  /* ---------- English: Wörter – Mittel ---------- */
  // Körper
  { id: "en-hand",  teil: "en", typ: "wort", text: "hand",  de: "Hand",  bild: "✋", stufe: "M" },
  { id: "en-nose",  teil: "en", typ: "wort", text: "nose",  de: "Nase",  bild: "👃", stufe: "M", varianten: ["knows"] },
  { id: "en-eye",   teil: "en", typ: "wort", text: "eye",   de: "Auge",  bild: "👁️", stufe: "M", varianten: ["i", "aye"] },
  { id: "en-ear",   teil: "en", typ: "wort", text: "ear",   de: "Ohr",   bild: "👂", stufe: "M" },
  { id: "en-mouth", teil: "en", typ: "wort", text: "mouth", de: "Mund",  bild: "👄", stufe: "M" },
  { id: "en-foot",  teil: "en", typ: "wort", text: "foot",  de: "Fuß",   bild: "🦶", stufe: "M" },
  { id: "en-hair",  teil: "en", typ: "wort", text: "hair",  de: "Haare", bild: "💇‍♀️", stufe: "M", varianten: ["hare"] },
  { id: "en-tooth", teil: "en", typ: "wort", text: "tooth", de: "Zahn",  bild: "🦷", stufe: "M" },
  // Essen
  { id: "en-strawberry", teil: "en", typ: "wort", text: "strawberry", de: "Erdbeere",   bild: "🍓", stufe: "M" },
  { id: "en-carrot",     teil: "en", typ: "wort", text: "carrot",     de: "Möhre",      bild: "🥕", stufe: "M" },
  { id: "en-soup",       teil: "en", typ: "wort", text: "soup",       de: "Suppe",      bild: "🍲", stufe: "M" },
  { id: "en-chocolate",  teil: "en", typ: "wort", text: "chocolate",  de: "Schokolade", bild: "🍫", stufe: "M" },
  // Zuhause und unterwegs
  { id: "en-door",   teil: "en", typ: "wort", text: "door",   de: "Tür",      bild: "🚪", stufe: "M" },
  { id: "en-chair",  teil: "en", typ: "wort", text: "chair",  de: "Stuhl",    bild: "🪑", stufe: "M" },
  { id: "en-window", teil: "en", typ: "wort", text: "window", de: "Fenster",  bild: "🪟", stufe: "M" },
  { id: "en-train",  teil: "en", typ: "wort", text: "train",  de: "Zug",      bild: "🚂", stufe: "M" },
  { id: "en-bike",   teil: "en", typ: "wort", text: "bike",   de: "Fahrrad",  bild: "🚲", stufe: "M", varianten: ["bicycle"] },
  { id: "en-boat",   teil: "en", typ: "wort", text: "boat",   de: "Boot",     bild: "⛵", stufe: "M" },
  { id: "en-plane",  teil: "en", typ: "wort", text: "plane",  de: "Flugzeug", bild: "✈️", stufe: "M", varianten: ["aeroplane", "airplane"] },
  // Anziehen
  { id: "en-dress",  teil: "en", typ: "wort", text: "dress",  de: "Kleid",      bild: "👗", stufe: "M" },
  { id: "en-gloves", teil: "en", typ: "wort", text: "gloves", de: "Handschuhe", bild: "🧤", stufe: "M", varianten: ["glove"] },
  { id: "en-scarf",  teil: "en", typ: "wort", text: "scarf",  de: "Schal",      bild: "🧣", stufe: "M" },
  // Natur und Wetter
  { id: "en-tree",    teil: "en", typ: "wort", text: "tree",    de: "Baum",       bild: "🌳", stufe: "M" },
  { id: "en-flower",  teil: "en", typ: "wort", text: "flower",  de: "Blume",      bild: "🌸", stufe: "M" },
  { id: "en-rain",    teil: "en", typ: "wort", text: "rain",    de: "Regen",      bild: "🌧️", stufe: "M" },
  { id: "en-snow",    teil: "en", typ: "wort", text: "snow",    de: "Schnee",     bild: "❄️", stufe: "M" },
  { id: "en-rainbow", teil: "en", typ: "wort", text: "rainbow", de: "Regenbogen", bild: "🌈", stufe: "M" },
  { id: "en-cloud",   teil: "en", typ: "wort", text: "cloud",   de: "Wolke",      bild: "☁️", stufe: "M" },
  // Farben und Zahlen
  { id: "en-purple", teil: "en", typ: "wort", text: "purple", de: "lila",    bild: "🟣", stufe: "M" },
  { id: "en-orange", teil: "en", typ: "wort", text: "orange", de: "orange",  bild: "🟠", stufe: "M" },
  { id: "en-black",  teil: "en", typ: "wort", text: "black",  de: "schwarz", bild: "⚫", stufe: "M" },
  { id: "en-white",  teil: "en", typ: "wort", text: "white",  de: "weiß",    bild: "⚪", stufe: "M" },
  { id: "en-one",    teil: "en", typ: "wort", text: "one",    de: "eins",    bild: "1️⃣", stufe: "M", varianten: ["won"] },
  { id: "en-two",    teil: "en", typ: "wort", text: "two",    de: "zwei",    bild: "2️⃣", stufe: "M", varianten: ["to", "too"] },
  { id: "en-three",  teil: "en", typ: "wort", text: "three",  de: "drei",    bild: "3️⃣", stufe: "M" },
  { id: "en-four",   teil: "en", typ: "wort", text: "four",   de: "vier",    bild: "4️⃣", stufe: "M", varianten: ["for"] },
  { id: "en-five",   teil: "en", typ: "wort", text: "five",   de: "fünf",    bild: "5️⃣", stufe: "M" },

  /* ---------- English: Sätze – Einfach (kurze Alltagssätze) ---------- */
  { id: "en-s-hello",     teil: "en", typ: "satz", text: "Hello!",          de: "Hallo!",           bild: "👋",   stufe: "E" },
  { id: "en-s-goodbye",   teil: "en", typ: "satz", text: "Goodbye!",        de: "Tschüss!",         bild: "🚶‍♀️👋", stufe: "E", varianten: ["bye", "bye bye"] },
  { id: "en-s-thankyou",  teil: "en", typ: "satz", text: "Thank you!",      de: "Danke!",           bild: "🙏",   stufe: "E", varianten: ["thanks"] },
  { id: "en-s-please",    teil: "en", typ: "satz", text: "Please!",         de: "Bitte!",           bild: "🥺",   stufe: "E" },
  { id: "en-s-yesplease", teil: "en", typ: "satz", text: "Yes, please!",    de: "Ja, bitte!",       bild: "👍",   stufe: "E" },
  { id: "en-s-nothanks",  teil: "en", typ: "satz", text: "No, thank you!",  de: "Nein, danke!",     bild: "🙅‍♀️", stufe: "E" },
  { id: "en-s-morning",   teil: "en", typ: "satz", text: "Good morning!",   de: "Guten Morgen!",    bild: "🌅",   stufe: "E" },
  { id: "en-s-night",     teil: "en", typ: "satz", text: "Good night!",     de: "Gute Nacht!",      bild: "🌙😴", stufe: "E" },
  { id: "en-s-sorry",     teil: "en", typ: "satz", text: "Sorry!",          de: "Entschuldigung!",  bild: "😔",   stufe: "E" },
  { id: "en-s-hungry",    teil: "en", typ: "satz", text: "I am hungry.",    de: "Ich habe Hunger.", bild: "😋",   stufe: "E" },
  { id: "en-s-thirsty",   teil: "en", typ: "satz", text: "I am thirsty.",   de: "Ich habe Durst.",  bild: "🥤",   stufe: "E" },
  { id: "en-s-tired",     teil: "en", typ: "satz", text: "I am tired.",     de: "Ich bin müde.",    bild: "😴",   stufe: "E" },
  { id: "en-s-happy",     teil: "en", typ: "satz", text: "I am happy.",     de: "Ich bin fröhlich.", bild: "😊",  stufe: "E" },
  { id: "en-s-waterplease", teil: "en", typ: "satz", text: "Water, please!", de: "Wasser, bitte!",  bild: "💧",   stufe: "E" },
  { id: "en-s-breadplease", teil: "en", typ: "satz", text: "Bread, please!", de: "Brot, bitte!",    bild: "🍞",   stufe: "E" },
  { id: "en-s-more",      teil: "en", typ: "satz", text: "More, please!",   de: "Mehr, bitte!",     bild: "🙋‍♀️", stufe: "E" },
  { id: "en-s-play",      teil: "en", typ: "satz", text: "Let's play!",     de: "Lass uns spielen!", bild: "🎲",  stufe: "E" },
  { id: "en-s-loveyou",   teil: "en", typ: "satz", text: "I love you.",     de: "Ich hab dich lieb.", bild: "❤️", stufe: "E" },

  /* ---------- English: Sätze – Mittel ---------- */
  { id: "en-s-sad",       teil: "en", typ: "satz", text: "I am sad.",              de: "Ich bin traurig.",         bild: "😢", stufe: "M" },
  { id: "en-s-birthday",  teil: "en", typ: "satz", text: "Happy birthday!",        de: "Alles Gute zum Geburtstag!", bild: "🎂", stufe: "M" },
  { id: "en-s-howareyou", teil: "en", typ: "satz", text: "How are you?",           de: "Wie geht es dir?",         bild: "🙂", stufe: "M" },
  { id: "en-s-fine",      teil: "en", typ: "satz", text: "I am fine, thank you.",  de: "Mir geht es gut, danke.",  bild: "😊", stufe: "M" },
  { id: "en-s-myname",    teil: "en", typ: "satz", text: "My name is {name}.",     de: "Ich heiße {name}.",        bild: "👧", stufe: "M", brauchtName: true },
  { id: "en-s-teddy",     teil: "en", typ: "satz", text: "Where is my teddy?",     de: "Wo ist mein Teddy?",       bild: "🧸", stufe: "M" },
  { id: "en-s-apples",    teil: "en", typ: "satz", text: "I like apples.",         de: "Ich mag Äpfel.",           bild: "🍎", stufe: "M" },
  { id: "en-s-cat",       teil: "en", typ: "satz", text: "I have a cat.",          de: "Ich habe eine Katze.",     bild: "🐱", stufe: "M" },
  { id: "en-s-raining",   teil: "en", typ: "satz", text: "It is raining.",         de: "Es regnet.",               bild: "🌧️", stufe: "M" },
  { id: "en-s-sunny",     teil: "en", typ: "satz", text: "It is sunny.",           de: "Die Sonne scheint.",       bild: "☀️", stufe: "M" },
  { id: "en-s-hands",     teil: "en", typ: "satz", text: "Wash your hands!",       de: "Wasch deine Hände!",       bild: "🧼", stufe: "M" },
  { id: "en-s-teeth",     teil: "en", typ: "satz", text: "Brush your teeth!",      de: "Putz deine Zähne!",        bild: "🪥", stufe: "M" },
  { id: "en-s-bedtime",   teil: "en", typ: "satz", text: "Time for bed!",          de: "Zeit fürs Bett!",          bild: "🛏️", stufe: "M" },
  { id: "en-s-letsgo",    teil: "en", typ: "satz", text: "Let's go!",              de: "Los geht's!",              bild: "🏃‍♀️", stufe: "M" },
  { id: "en-s-comehere",  teil: "en", typ: "satz", text: "Come here, please!",     de: "Komm bitte her!",          bild: "🤗", stufe: "M" },
  { id: "en-s-wantplay",  teil: "en", typ: "satz", text: "I want to play.",        de: "Ich will spielen.",        bild: "🪀", stufe: "M" },

  /* ---------- English: Sätze – Schwer ---------- */
  { id: "en-s-water",     teil: "en", typ: "satz", text: "Can I have some water, please?", de: "Kann ich bitte Wasser haben?",  bild: "💧", stufe: "S" },
  { id: "en-s-breadhave", teil: "en", typ: "satz", text: "Can I have some bread, please?", de: "Kann ich bitte Brot haben?",    bild: "🍞", stufe: "S" },
  { id: "en-s-cake",      teil: "en", typ: "satz", text: "Can I have some cake, please?",  de: "Kann ich bitte Kuchen haben?",  bild: "🍰", stufe: "S" },
  { id: "en-s-applelike", teil: "en", typ: "satz", text: "I would like an apple, please.",  de: "Ich hätte gern einen Apfel, bitte.", bild: "🍎", stufe: "S" },
  { id: "en-s-unicorn",   teil: "en", typ: "satz", text: "I love my unicorn.",             de: "Ich hab mein Einhorn lieb.",   bild: "🦄❤️", stufe: "S" },
  { id: "en-s-mum",       teil: "en", typ: "satz", text: "This is my mum.",                de: "Das ist meine Mama.",          bild: "👩", stufe: "S" },
  { id: "en-s-house",     teil: "en", typ: "satz", text: "This is my house.",              de: "Das ist mein Haus.",           bild: "🏠", stufe: "S" },
  { id: "en-s-rainbow",   teil: "en", typ: "satz", text: "I can see a rainbow.",           de: "Ich sehe einen Regenbogen.",   bild: "🌈", stufe: "S" },
  { id: "en-s-sun",       teil: "en", typ: "satz", text: "The sun is yellow.",             de: "Die Sonne ist gelb.",          bild: "☀️", stufe: "S" },
  { id: "en-s-sky",       teil: "en", typ: "satz", text: "The sky is blue.",               de: "Der Himmel ist blau.",         bild: "🌤️", stufe: "S" },
  { id: "en-s-run",       teil: "en", typ: "satz", text: "I can run fast.",                de: "Ich kann schnell rennen.",     bild: "🏃‍♀️", stufe: "S" },
  { id: "en-s-pink",      teil: "en", typ: "satz", text: "I like the colour pink.",        de: "Ich mag die Farbe Rosa.",      bild: "🩷", stufe: "S", varianten: ["color"] },
  { id: "en-s-shoes",     teil: "en", typ: "satz", text: "Where are my shoes?",            de: "Wo sind meine Schuhe?",        bild: "👟", stufe: "S" },
  { id: "en-s-help",      teil: "en", typ: "satz", text: "Can you help me, please?",       de: "Kannst du mir bitte helfen?",  bild: "🙋‍♀️", stufe: "S" },
  { id: "en-s-outside",   teil: "en", typ: "satz", text: "I want to go outside.",          de: "Ich will nach draußen.",       bild: "🌳", stufe: "S" },
  { id: "en-s-coat",      teil: "en", typ: "satz", text: "Put on your coat, please.",      de: "Zieh bitte deine Jacke an.",   bild: "🧥", stufe: "S" }
];
