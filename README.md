# Einhorn-ABC

Lern-Web-App für Vorschulkinder (4–6 Jahre) mit zwei Spielen: **ABC** (Buchstaben, Laute, Silben) und **English** (Alltagswörter und kurze Sätze hören und nachsprechen). Ein Einhorn begleitet das Kind und steigt mit jeder Runde einen Berg hinauf.

**Stand: Version 4.2** – natürlichere Vorlesestimme (Stimmhöhe 1,0, Tempo nah an normal), Menüs ohne Ansagen (stattdessen dezente Harfentöne), Glockenspiel-Jingle beim Start, eigene kleine Melodien für jede Belohnungsszene und jede Berg-Station, Bild und Buchstabe direkt antippbar, im Spiel English großes Bild mit dezenter Schrift, tolerantere Spracherkennung für Laute. Das Einhorn ist unverändert.

Version 4: Einhorn im Sticker-Stil (je Menü mit eigener Ausstattung), App-Symbol, Einstellungen mit Untermenüs, English mit Alltagswortschatz und kurzen Sätzen schon bei Einfach. Die App spricht nur ganze Wörter und Sätze vor, keine einzelnen Laute.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die ganze App (oben die Blöcke **CONFIG** und **BIBLIOTHEK** zum Anpassen) |
| `manifest.webmanifest` | Name und Symbol für den Home-Bildschirm |
| `sw.js` | Service Worker: speichert alles für die Offline-Nutzung |
| `icon-180.png`, `icon-512.png` | App-Symbol |
| `logo-einhorn-abc.png` | Logo mit Schriftzug (optional, z. B. zum Ausdrucken) |
| `SCHRIFT-LIZENZ.txt` | Lizenz der eingebetteten Schulschrift |
| `README.md`, `LERNINHALTE.md`, `ENTSCHEIDUNGEN.md` | Anleitung, Prüfung der Lerninhalte, alle Entscheidungen (optional hochladen) |

## Auf GitHub Pages veröffentlichen

1. Auf [github.com](https://github.com) anmelden, oben rechts **+ › New repository**.
2. Name z. B. `einhorn-abc`, Sichtbarkeit **Public**, **Create repository**.
3. Auf der leeren Seite **uploading an existing file** wählen, alle Dateien hineinziehen und **Commit changes** klicken.
4. Im Repository **Settings › Pages**: unter *Build and deployment* bei *Source* **Deploy from a branch** wählen, Branch **main** und Ordner **/ (root)**, dann **Save**.
5. Nach 1–2 Minuten ist die App erreichbar unter `https://DEIN-NAME.github.io/einhorn-abc/`.

## Auf iPad oder iPhone aufs Home-Bildschirm legen

Wichtig: Apple erlaubt die **Spracherkennung nicht in Home-Bildschirm-Web-Apps**, nur im normalen Safari-Tab. Deshalb gibt es zwei Wege:

**Mit Spracherkennung (empfohlen, ab iPadOS/iOS 26):**
1. Die Adresse in **Safari** öffnen.
2. **Teilen** (Quadrat mit Pfeil) › **Zum Home-Bildschirm**.
3. Den Schalter **„Als Web-App öffnen“ ausschalten** und **Hinzufügen**.
4. Das Einhorn-Symbol öffnet die App jetzt in Safari – mit Spracherkennung und auch offline.

**Ohne Spracherkennung (Vollbild ohne Safari-Leiste):** wie oben, aber „Als Web-App öffnen“ eingeschaltet lassen. Dann bewertet ein Erwachsener mit Haken und X.

Einmal auf den Bildschirm tippen, damit Ton und Sprache freigeschaltet werden. In der Vorschau anderer Apps (z. B. der Claude-App) ist das Mikrofon gesperrt – dort funktioniert die Spracherkennung nie.

## Neue Version einspielen

1. Vorher in der App **Einstellungen › Sichern › Sicherung erstellen**.
2. Die neuen Dateien im Repository hochladen (gleiche Namen, ersetzen) und **Commit changes** klicken.
3. In `sw.js` steht `CACHE_VERSION`. Sie wird bei jeder Lieferung erhöht, damit iPad und iPhone die neuen Dateien laden.
4. Auf dem Gerät die App einmal öffnen, ganz schließen und wieder öffnen. Damit das neue App-Symbol erscheint, das Symbol auf dem Home-Bildschirm einmal löschen und neu anlegen.

Spielstand, Einstellungen und eigene Karten bleiben dabei erhalten.

## Einstellungen

Das Zahnrad öffnet eine Übersicht mit fünf Bereichen:

- **Spiel**: Name des Einhorns und des Kindes, Spracherkennung mit Mikrofon-Test, Lob vorlesen, Knöpfe ansagen (Standard: aus – dann dezente Harfentöne).
- **Sounds & Stimmen**: deutsche und englische Vorlesestimme, Tempo, Stimmhöhe (mit Knopf „auf Standard“), Töne und Melodien mit Hörproben, Musik.
- **Bibliothek**: alle Karten (ausblenden, eigene Fotos, Wort anhören) und neue Karten.
- **Fortschritt**: Berg, Einhorntraining, Trophäen zurücksetzen.
- **Sichern**: Sicherung erstellen und laden.

## Spracherkennung

- Standard: aus. Einschalten unter **Einstellungen › Spiel › Spracherkennung**. Dort zeigt die App auch, ob sie auf diesem Gerät funktioniert, und bietet einen **Mikrofon-Test**.
- Funktioniert nur im **Safari-Tab** (siehe oben), mit Internet und eingeschalteter Diktierfunktion (iPad-Einstellungen › Allgemein › Tastatur › Diktierfunktion).
- Beim ersten Mal fragt Safari nach dem Mikrofon. Startet das Zuhören nicht von selbst, einmal auf das 🎤 tippen.
- Das pulsierende 🎤 zeigt, dass zugehört wird. Haken und X bleiben klein sichtbar, falls die Erkennung danebenliegt.
- Safari schickt dabei Sprachaufnahmen zur Auswertung an Apple. Alle anderen Daten bleiben auf dem Gerät.

## Stimmen

Safari kann auf iPad und iPhone nur die **vorinstallierten** Stimmen benutzen. Stimmen, die man in den iPad-Einstellungen nachlädt („Erweitert“ oder „Premium“), sind für Web-Apps derzeit gesperrt (Einschränkung von Apple). In der App unter **Einstellungen › Sounds & Stimmen**:

- **Automatisch** wählen – das ist meist die angenehmste Stimme. Stimmen mit 🤖 klingen künstlich.
- **Stimmhöhe** am besten bei 1,0 lassen und das **Tempo** nicht stark absenken: stark veränderte Werte lassen die Apple-Stimmen gedehnt und metallisch klingen. Der Knopf „Tempo und Stimmhöhe auf Standard“ stellt alles zurück.
- Erscheint eine Stimme mit „⭐ Premium“ oder „✨ Erweitert“ in der Liste, kann Safari sie nutzen.

## Testmodus

Mit `?test` hinter der Adresse (z. B. `…/einhorn-abc/index.html?test`) erscheint unten links ein 🧪-Knopf. Damit lassen sich Runden mit 10 bis 16 Versuchen simulieren (Platz, Punkte, Belohnung, Berg) und der Speicher löschen. Mit eingeschalteter Spracherkennung zeigt die App oben an, was sie verstanden hat.

## Inhalte anpassen

Oben in `index.html` stehen zwei kommentierte Blöcke:

- **CONFIG**: Punkte, Bewertungsgrenzen, Berg-Stationen, Mischverhältnisse, Vorlesetempo und Stimmhöhe, Lob-Sätze, Laut-Varianten für die Spracherkennung (`lautVarianten`), Ansage „Nochmal!“ nach Fehlversuchen (`nochmalAnsagen`, Standard aus).
- **MELODIEN** (etwas weiter unten im Programm): Start-Jingle, Melodien der Belohnungsszenen und der Berg-Stationen in einer einfachen Notenschrift.
- **BIBLIOTHEK**: alle Karten beider Spiele. Jede Karte hat `teil: "de"` (ABC) oder `teil: "en"` (English).

Einfacher geht es in der App unter **Einstellungen › Bibliothek**. Nach Änderungen an `index.html` die `CACHE_VERSION` in `sw.js` um 1 erhöhen.

## Schrift

Die Lernbuchstaben nutzen die freie Schulschrift **Playwrite DE Grund** (nach der Grundschrift), eingebettet in `index.html`, nur mit den nötigen Zeichen. Copyright 2023 The Playwrite Project Authors (https://github.com/TypeTogether/Playwrite), Lizenz: SIL Open Font License 1.1 (siehe `SCHRIFT-LIZENZ.txt`).
