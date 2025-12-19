import { MapsApp } from "./MapsApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import mapboxgl from "mapbox-gl"

if (!navigator.geolocation) {
  alert("Tu navegador no tiene acceso de GeoLocation")
  throw new Error("Tu navegador no tiene acceso de GeoLocation")
}

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2Fja3MiLCJhIjoiY21qY2h1Mm54MHBsMjNjb3d6YmlrbXdlNSJ9.3yF2dxjcf2gnUbllO0NIdw"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>
)
