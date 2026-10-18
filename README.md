# Einhorn-ABC

Lern-Web-App für Vorschulkinder (4–6 Jahre) mit zwei Spielen: **ABC** (Buchstaben, Laute, Silben) und **English** (Alltagswörter und kurze Sätze hören und nachsprechen). Ein Einhorn begleitet das Kind und steigt mit jeder Runde einen Berg hinauf.

**Stand: Version 5.0**
- **Neue Stimmen:** je drei weibliche, neu aufgenommene KI-Stimmen – Deutsch: Marie, Lena, Sophie; Englisch (britisch): Isabella, Emma, Sophie. Sie lesen alle Bildwörter, englischen Wörter und Sätze (auch langsam für 🐌) und alles, was das Einhorn sagt. Die iPad-Stimmen stehen nicht mehr zur Auswahl.
- **Einhorn-Namen:** Das Kind wählt aus den fünf Namen Luna, Stella, Glitzer, Rosalie und Sternchen – genau diese sind mit allen Stimmen aufgenommen. Ein Tipp aufs Einhorn im Hauptmenü: es sagt sofort „Ich bin Stella!“ (ohne Jingle davor).
- **Schlösser am Berg:** Jede Bergtour beginnt mit Schlössern an allen Stationen außer dem Feld – auf dem großen Berg und auf dem kleinen Berg im Hauptmenü. Erreicht das Einhorn eine Station, springt ihr Schloss auf, danach lässt sich ihre Szene antippen und noch einmal ansehen.
- **Updates kommen von selbst an:** Ist eine neue Version hochgeladen, lädt sich die App beim nächsten Öffnen (bzw. sobald das Kind im Hauptmenü ist) einmal von selbst neu. Die Version steht unten in den Einstellungen.

Seit Version 4.3 enthalten: Einhorn neu kennenlernen / Alles zurücksetzen, Berg-Szenen zum Wiederansehen, eigene Inhaltsdateien zum Bearbeiten auf GitHub.

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

**Neue Wörter und die aufgenommenen Stimmen:** Neue oder geänderte Wörter spricht zunächst die eingebaute iPad-Stimme. Für neue Aufnahmen die geänderten Inhaltsdateien an Claude geben und die Stimmenpakete neu erzeugen lassen; danach `stimmen.json` und die neuen `stimme-….bin` hochladen und die alten `stimme-….bin` löschen. Das gilt auch für neue Einhorn-Namen in `namensVorschlaege`.

## Auf GitHub Pages veröffentlichen

1. Auf [github.com](https://github.com) anmelden, oben rechts **+ › New repository**.
2. Name z. B. `einhorn-abc`, Sichtbarkeit **Public**, **Create repository**.
3. Auf der leeren Seite **uploading an existing file** wählen, alle Dateien hineinziehen und **Commit changes** klicken.
4. Im Repository **Settings › Pages**: unter *Build and deployment* bei *Source* **Deploy from a branch** wählen, Branch **main** und Ordner **/ (root)**, dann **Save**.
5. Nach 1–2 Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/einhorn-abc/`.

## Neue Version einspielen

1. Vorher in der App **Einstellungen › Sichern & Neu anfangen › Sicherung erstellen**.
2. Die neuen Dateien im Repository hochladen (gleiche Namen werden ersetzt) und **Commit changes** klicken. Nicht mehr gebrauchte Dateien (z. B. alte `stimme-….bin`) löschen.
3. Auf dem Gerät die App mit Internet öffnen. Seit Version 5 lädt sie sich nach einem Update von selbst einmal neu; falls nicht: App ganz schließen (vom unteren Rand hochwischen und die App nach oben wegschieben) und wieder öffnen. Unten in den Einstellungen steht, welche Version läuft.

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

- **Spiel**: Name des Einhorns (Auswahl aus den Vorschlägen) und des Kindes, „Einhorn neu kennenlernen“, Spracherkennung mit Mikrofon-Test, Lob vorlesen, Knöpfe ansagen.
- **Sounds & Stimmen**: je drei Stimmen für Deutsch und Englisch mit Hörprobe; Töne und Musik.
- **Bibliothek**: Prüfung der Inhaltsdateien, alle Karten (ausblenden, eigene Fotos, Wort anhören) und neue Karten.
- **Fortschritt**: Berg, Einhorntraining, Trophäen zurücksetzen.
- **Sichern & Neu anfangen**: Sicherung erstellen und laden, Einhorn neu kennenlernen, alles zurücksetzen.

## Stimmen

- **Sechs aufgenommene Stimmen** (alle weiblich, freie KI-Stimmen, offline erzeugt):
  - Deutsch: **Marie** (klar und deutlich, voreingestellt), **Lena** (ruhig, etwas höher), **Sophie** (sanft und freundlich) – Modell Supertonic 3.
  - Englisch, britisch: **Isabella** (voreingestellt) und **Emma** – Modell Kokoro; **Sophie** – Supertonic 3, dieselbe Stimme wie Sophie auf Deutsch.
- Aufgenommen sind alle Bildwörter, englischen Wörter und Sätze (auch langsam für 🐌), die deutschen Bedeutungen, Lob, Stations- und Einhorn-Sätze mit den fünf Namen. Einzelwörter wurden im Satzzusammenhang („Das Wort heißt … Affe.“) erzeugt und herausgeschnitten, damit sie sicher deutsch klingen. Jede Aufnahme wurde mit einer Spracherkennung geprüft und bei Bedarf neu erzeugt.
- **iPad-Stimme nur als Ersatz:** Was nicht aufgenommen ist – selbst angelegte Karten und „My name is …“ mit dem Namen des Kindes – liest die eingebaute iPad-Stimme vor (automatisch gewählt, ohne Einstellmöglichkeit).
- Lizenzen in `STIMMEN-LIZENZ.txt`.

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
