import { NavigationRoute, registerRoute } from "workbox-routing"
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching"

import { clientsClaim } from "workbox-core"

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html")))

self.skipWaiting()

clientsClaim()
self.addEventListener("install", async () => {
  const cache = await caches.open("cache-1")
  await cache.addAll([
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css",
    "/vite.svg",
  ])
})

const apiOfflineFallbacks = [
  "http://localhost:4000/api/auth/renew",
  "http://localhost:4000/api/events",
]
self.addEventListener("fetch", (event) => {
  if (!apiOfflineFallbacks.includes(event.request.url)) return

  const resp = fetch(event.request)
    .then((response) => {
      if (!response) return caches.match(event.request)

      // Guardar en cache
      caches
        .open("cache-dynamic")
        .then((cache) => cache.put(event.request, response))

      return response.clone()
    })
    .catch(() => caches.match(event.request))

  event.respondWith(resp)
})
