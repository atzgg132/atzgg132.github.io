const CACHE = "yatra-pwa-v8";
const ICON512 = "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";
const PRECACHE = [
  "./",
  "./index.html",
  "./css/app.css",
  "./js/app.js",
  "./js/core.js",
  "./js/screens.js",
  "./data/app.json",
  "./manifest.webmanifest",
  "./assets/yatra-logo.svg",
  "./assets/icons/icon.svg",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(PRECACHE.map((u) => cache.add(u).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const path = url.pathname;
  if (path.endsWith("/icon-512.png")) {
    const bin = Uint8Array.from(atob(ICON512), (c) => c.charCodeAt(0));
    event.respondWith(new Response(bin, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000" } }));
    return;
  }
  const netFirst = path.endsWith("/") || /\.(html|js|css|json|webmanifest)$/.test(path);
  if (netFirst) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          if (res.ok) caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then((cached) => {
      const fresh = fetch(req)
        .then((res) => {
          const copy = res.clone();
          if (res.ok) caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
