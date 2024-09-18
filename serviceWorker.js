const cacheVersion = "1.0";

const assets = [
  "/",
  "/fallback.html",
  "/fallback.css",
  "/letter.png",
  "/192x192.png",
  "/512x512.png",
  "/apple-touch-icon.png",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(assets)
      .then((cache) => {
        console.log("caching..");
        return cache.addAll(assets);
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("activate", (e) => {
  console.log("activating");

  e.waitUntil(
    caches.keys().then((key) => {
      return Promise.all(
        key
          .filter((key) => key !== cacheVersion)
          .map((key) => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        console.log("fetching..");
        const ClonedResponse = response.clone();
        caches
          .open(cacheVersion)
          .then((cache) => cache.put(e.request, ClonedResponse));
        return response;
      })
      .catch(() => {
        caches.match(e.request).then((cachedResponse) => {
          console.log("offline");
          console.log(cachedResponse);
          console.log(caches.match("/fallback.html"));
          return cachedResponse || caches.match("/fallback.html");
        });
      })
  );
});
