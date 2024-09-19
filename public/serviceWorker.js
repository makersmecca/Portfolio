const OFFLINE_VERSION = "1.4.9";
const CACHE_NAME = "offline";
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

self.addEventListener("install", (event) => {
  const filesUpdate = (cache) => {
    console.log("adding cache");
    const stack = [];
    assets.forEach((file) =>
      stack.push(
        cache
          .add(file)
          .catch((_) => console.error(`can't load ${file} to cache`))
      )
    );
    return Promise.all(stack);
  };

  event.waitUntil(caches.open(CACHE_NAME).then(filesUpdate));
  // event.waitUntil(
  //   async () => {
  //     const cache = await caches.open(CACHE_NAME);
  //     await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
  //   },
  //   caches.open(CACHE_NAME).then((cache) => {
  //     cache.addAll(assets);
  //   })
  // );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })(),
    caches
      .keys()
      .then((key) => {
        return Promise.all(
          key
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        );
      })
      .catch((err) => console.log(err))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          console.log("Fetch failed; returning offline page instead.", error);

          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })()
    );
  }
});
