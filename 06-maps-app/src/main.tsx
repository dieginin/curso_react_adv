import { MapsApp } from "./MapsApp"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

if (!navigator.geolocation) {
  alert("Tu navegador no tiene acceso de GeoLocation")
  throw new Error("Tu navegador no tiene acceso de GeoLocation")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>
)
