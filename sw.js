/* HUB 3DS·A — service worker mínimo para que el portal sea instalable */
const CACHE = "hub3dsa-v13";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/app.js",
  "./js/carousel.js",
  "./data/modulos.js",
  "./assets/icon.svg",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("hub3dsa-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestURL = new URL(event.request.url);
  if (requestURL.origin !== self.location.origin || !requestURL.href.startsWith(self.registration.scope) || event.request.headers.has("range") || /\.mp4$/.test(requestURL.pathname)) return;

  // HTML siempre red primero: así una edición publicada se ve al recargar.
  if (event.request.mode === "navigate" || event.request.destination === "document") {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => response.ok && cache.put(event.request, copy)).catch(() => {});
          return response;
        })
        .catch(() => caches.match(event.request, { ignoreSearch: true }).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  // JS, CSS y datos: red primero para no servir una versión vieja.
  const url = new URL(event.request.url);
  const freshFirst = /\.(js|css|json|webmanifest)$/.test(url.pathname);

  if (freshFirst) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => response.ok && cache.put(event.request, copy)).catch(() => {});
          return response;
        })
        .catch(() => caches.match(event.request, { ignoreSearch: true }))
    );
    return;
  }

  // Imágenes y fuentes: cache primero, actualizando en segundo plano.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => response.ok && cache.put(event.request, copy)).catch(() => {});
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
