import "./index.css"

import { MapProvider, PlacesProvider } from "./contexts"

import { HomePage } from "./pages"

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  )
}
