import { PlacesContext, placesReducer } from ".."
import { useEffect, useReducer, type PropsWithChildren } from "react"
import { getUserLocation } from "../../helpers"
import { searchApi } from "../../apis"

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

  const searchPlacesByQuery = async (query: string) => {
    if (query.length === 0) return [] // TODO limpiar srate
    if (!state.userLocation) throw new Error("No hay ubicación del usuario")

    const resp = await searchApi.get(`/forward?q=${query}`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    })
    console.log(resp.data)
    return resp.data
  }

  return (
    <PlacesContext value={{ ...state, searchPlacesByQuery }}>
      {children}
    </PlacesContext>
  )
}
