# Einhorn-ABC

Lern-Web-App für Vorschulkinder (4–6 Jahre) mit zwei Spielen: **ABC** (Buchstaben, Laute, Silben) und **English** (Alltagswörter und kurze Sätze hören und nachsprechen). Ein Einhorn begleitet das Kind und steigt mit jeder Runde einen Berg hinauf.

**Stand: Version 4.3**
- **Einhorn spricht:** Ein Tipp aufs Einhorn im Hauptmenü – es hüpft und stellt sich vor („Ich bin Stella!“, mehrere Sätze im Wechsel).
- **Neu anfangen:** Unter Einstellungen „Einhorn neu kennenlernen“ (Namensgebung noch einmal, alles andere bleibt) und „Alles zurücksetzen“ (wie neu installiert).
- **Berg-Videos:** Erreichte Stationen auf dem Berg lassen sich antippen und spielen ihre Szene noch einmal ab. Noch nicht erreichte zeigen ein Schlösschen; nach der ersten Krone sind alle frei. Der Wald ist jetzt ein dichter Wald, das Feld hat eine eigene Szene.
- **Eigene Inhaltsdateien:** Wörter, Übungen und Einstellungen stehen in `inhalte-abc.js`, `inhalte-english.js` und `einstellungen.js` und lassen sich direkt auf GitHub bearbeiten.
- **Aufgenommene Stimmen:** natürlich klingende freie KI-Stimmen (Dii und Thorsten für Deutsch, Isabella und Cori für Englisch), offline nutzbar. Was nicht aufgenommen ist, spricht die iPad-Stimme.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die App selbst |
| `einstellungen.js` | Punkte, Bewertung, Berg-Stationen, Mischung pro Runde, Vorlesetempo, Lob und alle Sätze des Einhorns |
| `inhalte-abc.js` | alle Karten des Spiels ABC (Buchstaben, Laute, Silben, Bildwörter) |
| `inhalte-english.js` | alle Karten des Spiels English (Wörter und Sätze) |
| `stimmen.json`, `stimme-….bin` | aufgenommene Stimmen (Liste und Tonpakete) |
| `manifest.webmanifest` | Name und Symbol für den Home-Bildschirm |
| `sw.js` | Service Worker: macht die App offline nutzbar |
| `icon-180.png`, `icon-512.png` | App-Symbol |
| `logo-einhorn-abc.png` | Logo mit Schriftzug (optional, z. B. zum Ausdrucken) |
| `SCHRIFT-LIZENZ.txt`, `STIMMEN-LIZENZ.txt` | Lizenzen der Schulschrift und der Stimmen |
| `README.md`, `LERNINHALTE.md`, `ENTSCHEIDUNGEN.md` | Anleitung, Prüfung der Lerninhalte, alle Entscheidungen (optional hochladen) |

## Inhalte bearbeiten

1. Auf GitHub im Repository die Datei anklicken (`inhalte-abc.js`, `inhalte-english.js` oder `einstellungen.js`).
2. Oben rechts auf den **Stift** („Edit this file“) tippen, ändern, unten **Commit changes**.
3. Die App auf dem iPad einmal ganz schließen und **mit Internet** neu öffnen. Die App lädt diese Dateien jedes Mal frisch, `CACHE_VERSION` muss dafür nicht erhöht werden. (GitHub Pages braucht nach dem Speichern manchmal 1–2 Minuten.)

Oben in jeder Datei steht, wie eine Karte aufgebaut ist, mit Beispiel. Wichtig: Texte in `"Anführungszeichen"`, zwischen zwei Einträgen ein Komma, bestehende `id`s nicht ändern.

**Tippfehler sind kein Drama:** Steckt ein Fehler in einer Datei, spielt die App mit der zuletzt funktionierenden Fassung weiter und zeigt kurz einen Hinweis. Unter **Einstellungen › Bibliothek › Inhaltsdateien** steht dann, in welcher Datei und Zeile der Fehler steckt. Fehlerhafte einzelne Karten werden übersprungen und dort ebenfalls aufgelistet.

**Neue Wörter und die aufgenommenen Stimmen:** Neue oder geänderte Wörter spricht zunächst die iPad-Stimme. Für neue Aufnahmen die geänderten Inhaltsdateien an Claude geben und die Stimmenpakete neu erzeugen lassen; danach `stimmen.json` und die neuen `stimme-….bin` hochladen und die alten `stimme-….bin` löschen.

## Auf GitHub Pages veröffentlichen

1. Auf [github.com](https://github.com) anmelden, oben rechts **+ › New repository**.
2. Name z. B. `einhorn-abc`, Sichtbarkeit **Public**, **Create repository**.
3. Auf der leeren Seite **uploading an existing file** wählen, alle Dateien hineinziehen und **Commit changes** klicken.
4. Im Repository **Settings › Pages**: unter *Build and deployment* bei *Source* **Deploy from a branch** wählen, Branch **main** und Ordner **/ (root)**, dann **Save**.
5. Nach 1–2 Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/einhorn-abc/`.

## Neue Version einspielen

1. Vorher in der App **Einstellungen › Sichern & Neu anfangen › Sicherung erstellen**.
2. Die neuen Dateien im Repository hochladen (gleiche Namen werden ersetzt) und **Commit changes** klicken. Nicht mehr gebrauchte Dateien (z. B. alte `stimme-….bin`) löschen.
3. Auf dem Gerät die App einmal mit Internet öffnen, ganz schließen und wieder öffnen.

Spielstand, Einstellungen und eigene Karten bleiben dabei erhalten.

## Auf iPad oder iPhone aufs Home-Bildschirm legen

Wichtig: Apple erlaubt die **Spracherkennung nicht in Home-Bildschirm-Web-Apps**, nur im normalen Safari-Tab. Deshalb gibt es zwei Wege:

**Mit Spracherkennung (empfohlen, ab iPadOS/iOS 26):**
1. Die Adresse in **Safari** öffnen.
2. **Teilen** (Quadrat mit Pfeil) › **Zum Home-Bildschirm**.
3. Den Schalter **„Als Web-App öffnen“ ausschalten** und **Hinzufügen**.
4. Das Einhorn-Symbol öffnet die App jetzt in Safari – mit Spracherkennung und auch offline.

**Ohne Spracherkennung (Vollbild ohne Safari-Leiste):** wie oben, aber „Als Web-App öffnen“ eingeschaltet lassen. Dann bewertet ein Erwachsener mit Haken und X.

Einmal auf den Bildschirm tippen, damit Ton und Sprache freigeschaltet werden.

## Einstellungen

Das Zahnrad öffnet eine Übersicht mit fünf Bereichen:

- **Spiel**: Name des Einhorns und des Kindes, „Einhorn neu kennenlernen“, Spracherkennung mit Mikrofon-Test, Lob vorlesen, Knöpfe ansagen.
- **Sounds & Stimmen**: aufgenommene Stimme wählen (mit Hörprobe) oder nur die iPad-Stimme; iPad-Stimme mit Tempo und Stimmhöhe; Töne und Musik.
- **Bibliothek**: Prüfung der Inhaltsdateien, alle Karten (ausblenden, eigene Fotos, Wort anhören) und neue Karten.
- **Fortschritt**: Berg, Einhorntraining, Trophäen zurücksetzen.
- **Sichern & Neu anfangen**: Sicherung erstellen und laden, Einhorn neu kennenlernen, alles zurücksetzen.

## Stimmen

- **Aufgenommene Stimmen:** Dii und Thorsten (Deutsch), Isabella und Cori (britisches Englisch) – freie KI-Stimmen, die vorab alle Bildwörter, englischen Wörter und Sätze sowie die Sätze des Einhorns aufgenommen haben (auch langsam für den 🐌-Knopf). Sie funktionieren offline und klingen natürlicher als die iPad-Stimmen. Lizenzen in `STIMMEN-LIZENZ.txt`.
- **Namen:** Sätze mit dem Einhorn-Namen sind für die fünf Namensvorschläge (Luna, Stella, Glitzer, Rosalie, Sternchen) aufgenommen. Bei einem anderen Namen und für „My name is …“ spricht die iPad-Stimme.
- **iPad-Stimme:** Safari kann nur die vorinstallierten Apple-Stimmen benutzen; nachgeladene „Erweitert“- oder „Premium“-Stimmen sind für Web-Apps gesperrt (Einschränkung von Apple). Tempo und Stimmhöhe gelten nur für die iPad-Stimme.

## Spracherkennung

- Standard: aus. Einschalten unter **Einstellungen › Spiel › Spracherkennung**. Dort zeigt die App auch, ob sie auf diesem Gerät funktioniert, und bietet einen **Mikrofon-Test**.
- Funktioniert nur im **Safari-Tab** (siehe oben), mit Internet und eingeschalteter Diktierfunktion (iPad-Einstellungen › Allgemein › Tastatur › Diktierfunktion).
- Safari schickt dabei Sprachaufnahmen zur Auswertung an Apple. Alle anderen Daten bleiben auf dem Gerät.

## Testmodus

Mit `?test` hinter der Adresse (z. B. `…/einhorn-abc/index.html?test`) erscheint unten links ein 🧪-Knopf. Damit lassen sich Runden mit 10 bis 16 Versuchen simulieren (Platz, Punkte, Belohnung, Berg) und der Speicher löschen.

## Melodien

Start-Jingle, Melodien der Belohnungsszenen und der Berg-Stationen stehen im Block **MELODIEN** in `index.html` in einer einfachen Notenschrift.

## Schrift

Die Lernbuchstaben nutzen die freie Schulschrift **Playwrite DE Grund** (nach der Grundschrift), eingebettet in `index.html`, nur mit den nötigen Zeichen. Copyright 2023 The Playwrite Project Authors (https://github.com/TypeTogether/Playwrite), Lizenz: SIL Open Font License 1.1 (siehe `SCHRIFT-LIZENZ.txt`).
