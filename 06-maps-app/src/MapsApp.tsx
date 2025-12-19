import "./index.css"

import { HomePage } from "./pages"
import { PlacesProvider } from "./contexts"
export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomePage />
    </PlacesProvider>
  )
}
