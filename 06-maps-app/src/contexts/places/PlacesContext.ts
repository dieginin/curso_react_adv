import type { Feature } from "../../interfaces/places.response"
import { createContext } from "react"

interface PlacesContextProps {
  isLoading: boolean
  isLoadingPlaces: boolean
  places: Feature[]
  userLocation?: [number, number]
  searchPlacesByQuery: (query: string) => Promise<Feature[]>
}

export const PlacesContext = createContext({} as PlacesContextProps)
