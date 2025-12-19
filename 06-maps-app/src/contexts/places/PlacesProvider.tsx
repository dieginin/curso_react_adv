import { PlacesContext, placesReducer } from ".."
import { useReducer, type PropsWithChildren } from "react"

export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
}

export const PlacesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  return <PlacesContext value={state}>{children}</PlacesContext>
}
