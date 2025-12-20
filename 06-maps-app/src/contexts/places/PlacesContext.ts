import { createContext } from "react"

interface PlacesContextProps {
  isLoading: boolean
  userLocation?: [number, number]
  searchPlacesByQuery: (query: string) => Promise<any>
}

export const PlacesContext = createContext({} as PlacesContextProps)
