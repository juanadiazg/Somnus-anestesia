/* SOMNUS Anestesiología — Service Worker
   Estrategia: red primero, caché como respaldo.
   - Con señal: siempre sirve la versión más nueva (evita quedar con una copia vieja).
   - Sin señal: sirve la última copia guardada, de modo que la app abre igual
     en pabellón aunque no haya internet.
   Para forzar una recarga completa del caché, sube CACHE_VERSION. */
const CACHE_VERSION = 'somnus-v1';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => c.addAll(ASSETS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        /* Guarda una copia fresca para cuando no haya señal */
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(req).then(hit => hit || caches.match('./index.html'))
      )
  );
});
