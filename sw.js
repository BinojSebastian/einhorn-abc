/* Einhorn-ABC – Service Worker
   Speichert alle Dateien für die Offline-Nutzung.
   WICHTIG: Bei jeder neuen Version CACHE_VERSION erhöhen,
   damit iPad und iPhone die neuen Dateien laden. */
const CACHE_VERSION = 5;
const CACHE_NAME = "einhorn-abc-v" + CACHE_VERSION;
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(namen.filter((n) => n.startsWith("einhorn-abc-") && n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Erst aus dem Speicher, sonst aus dem Netz (und dann merken)
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((treffer) => {
      if (treffer) return treffer;
      return fetch(req).then((antwort) => {
        if (antwort && antwort.ok) { const kopie = antwort.clone(); caches.open(CACHE_NAME).then((c) => c.put(req, kopie)); }
        return antwort;
      }).catch(() => (req.mode === "navigate" ? caches.match("./index.html") : undefined));
    })
  );
});
