import type { Feature } from "../../interfaces/places.response"
import { createContext } from "react"

interface PlacesContextProps {
  isLoading: boolean
  userLocation?: [number, number]
  searchPlacesByQuery: (query: string) => Promise<Feature[]>
}

export const PlacesContext = createContext({} as PlacesContextProps)
