/* Einhorn-ABC – Service Worker
   Macht die App offline nutzbar.
   - index.html und die Inhaltsdateien (einstellungen.js, inhalte-abc.js,
     inhalte-english.js) und die Stimmen-Liste werden zuerst frisch aus dem Netz
     geladen. Änderungen erscheinen deshalb beim nächsten Öffnen mit Internet,
     ohne dass CACHE_VERSION erhöht werden muss. Ohne Internet gilt die
     gespeicherte Fassung.
   - Bilder, Symbole und Stimmenpakete kommen zuerst aus dem Speicher.
   - Seit Version 5: Kommt eine neue App-Version an, lädt sich die App von
     selbst neu (sobald das Kind wieder im Hauptmenü ist).
   CACHE_VERSION nur bei einer neuen App-Version erhöhen. */
const CACHE_VERSION = 7;
const CACHE_NAME = "einhorn-abc-v" + CACHE_VERSION;
const STIMMEN_CACHE = "einhorn-abc-stimmen";   // Stimmenpakete (bleiben über Versionen erhalten)
const DATEIEN = ["./", "./index.html", "./einstellungen.js", "./inhalte-abc.js", "./inhalte-english.js",
  "./stimmen.json", "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];
const NETZ_ZUERST = /(\/|\.html|\.js|\.json|\.webmanifest)$/;
const NETZ_WARTEN_MS = 4000;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then((c) => Promise.all(DATEIEN.map((d) => c.add(new Request(d, { cache: "reload" })).catch(() => { }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(namen.filter((n) => n.startsWith("einhorn-abc-v") && n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

function merken(cacheName, req, antwort) {
  if (antwort && antwort.ok && antwort.type === "basic") { const kopie = antwort.clone(); caches.open(cacheName).then((c) => c.put(req, kopie)); }
  return antwort;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  const pfad = url.pathname;

  // Stimmenpakete: Dateiname enthält eine Prüfsumme, darum dürfen sie dauerhaft aus dem Speicher kommen
  if (/\/stimme-[^/]+\.bin$/.test(pfad)) {
    event.respondWith(caches.open(STIMMEN_CACHE).then((c) => c.match(req).then((t) => t || fetch(req).then((a) => merken(STIMMEN_CACHE, req, a)))));
    return;
  }

  // App und Inhalte: zuerst aus dem Netz (frisch), sonst aus dem Speicher
  if (req.mode === "navigate" || NETZ_ZUERST.test(pfad)) {
    event.respondWith((async () => {
      const ausSpeicher = () => caches.match(req, { ignoreSearch: true }).then((t) => t || (req.mode === "navigate" ? caches.match("./index.html") : undefined));
      const netz = fetch(req, { cache: "no-cache" }).then((a) => merken(CACHE_NAME, req, a));
      // Bei langsamer Verbindung nicht ewig warten: nach kurzer Zeit die gespeicherte Fassung nehmen
      const zeit = new Promise((r) => setTimeout(r, NETZ_WARTEN_MS, "zeit"));
      try {
        const sieger = await Promise.race([netz, zeit]);
        if (sieger !== "zeit" && sieger && sieger.ok) return sieger;
        const t = await ausSpeicher();
        return t || await netz;
      } catch (e) {
        const t = await ausSpeicher();
        if (t) return t;
        throw e;
      }
    })());
    return;
  }

  // Alles andere (Bilder, Symbole): zuerst aus dem Speicher
  event.respondWith(caches.match(req, { ignoreSearch: true }).then((t) => t || fetch(req).then((a) => merken(CACHE_NAME, req, a))));
});
