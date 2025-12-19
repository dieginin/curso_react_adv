import { PlacesContext, placesReducer } from ".."
import { useEffect, useReducer, type PropsWithChildren } from "react"
import { getUserLocation } from "../../helpers"

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

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    )
  }, [])

  return <PlacesContext value={state}>{children}</PlacesContext>
}
