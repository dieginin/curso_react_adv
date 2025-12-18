import { CacheFirst, NetworkFirst } from "workbox-strategies"

import { BackgroundSyncPlugin } from "workbox-background-sync"
import { NetworkOnly } from "workbox-strategies"
import { precacheAndRoute } from "workbox-precaching"
import { registerRoute } from "workbox-routing"

precacheAndRoute([...self.__WB_MANIFEST, { url: "/vite.svg", revision: null }])

// registerRoute(
//   new RegExp("http://localhost:4000/api/auth/renew"),
//   new NetworkFirst()
// )

const cacheCacheFirst = [
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css",
]
registerRoute(({ url }) => cacheCacheFirst.includes(url.href), new CacheFirst())

const cacheNetworkFirst = ["/api/auth/renew", "/api/events"]
registerRoute(
  ({ url }) => cacheNetworkFirst.includes(url.pathname),
  new NetworkFirst()
)

// Post offline
const bgSyncPlugin = new BackgroundSyncPlugin("offlineCue", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
})

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
)

registerRoute(
  new RegExp("http://localhost:4000/api/events/*"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "PUT"
)

registerRoute(
  new RegExp("http://localhost:4000/api/events/*"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "DELETE"
)
