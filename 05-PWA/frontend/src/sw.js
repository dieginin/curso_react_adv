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
registerRoute(
  new NavigationRoute(createHandlerBoundToURL("index.html"), {
    denylist: [/^\/backoffice/],
  })
)

self.skipWaiting()

clientsClaim()
self.addEventListener("install", async (event) => {
  const cache = await caches.open("cache-1")
  await cache.addAll([
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css",
    "/vite.svg",
  ])
})

self.addEventListener("fetch", (event) => {
  console.log(event.request.url)
})
