const OFFLINE_VERSION = "1.5.3";
const CACHE_NAME = "offline" + OFFLINE_VERSION;
const OFFLINE_URL = "fallback.html";
const assets = [
  "fallback.html",
  "letter.png",
  "192x192.png",
  "512x512.png",
  "apple-touch-icon.png",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon.ico",
];
// Install event: Cache assets and offline page
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching offline assets");
        return cache.addAll(assets);
      })
      .catch((error) => console.error("Error caching assets", error))
  );
  self.skipWaiting();
});
// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});
// Fetch event: Serve cached assets, fallback to offline page on failure
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    //navigation requests
    event.respondWith(
      (async () => {
        try {
          // Network fetch
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          console.error("Network failed; returning offline page", error);
          const cache = await caches.open(CACHE_NAME);
          return await cache.match(OFFLINE_URL);
        }
      })()
    );
  } else {
    //non-navigation requests
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});
