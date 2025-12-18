import { CacheFirst, NetworkFirst } from "workbox-strategies"

import { precacheAndRoute } from "workbox-precaching"
import { registerRoute } from "workbox-routing"

precacheAndRoute([...self.__WB_MANIFEST, { url: "/vite.svg" }])

registerRoute(
  new RegExp(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  ),
  new CacheFirst()
)

registerRoute(
  new RegExp(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
  ),
  new CacheFirst()
)

registerRoute(
  new RegExp("http://localhost:4000/api/auth/renew"),
  new NetworkFirst()
)

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkFirst()
)
