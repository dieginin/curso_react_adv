import { PlacesContext, placesReducer } from ".."
import { useEffect, useReducer, type PropsWithChildren } from "react"
import { getUserLocation } from "../../helpers"
import { searchApi } from "../../apis"
import type { Feature, PlacesResponse } from "../../interfaces/places.response"

export interface PlacesState {
  isLoading: boolean
  isLoadingPlaces: boolean
  places: Feature[]
  userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  isLoadingPlaces: false,
  places: [],
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
    if (query.length === 0) return [] // TODO limpiar state
    if (!state.userLocation) throw new Error("No hay ubicación del usuario")

    dispatch({ type: "setLoadingPlaces" })
    const resp = await searchApi.get<PlacesResponse>(`/forward?q=${query}`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    })
    dispatch({ type: "setPlaces", payload: resp.data.features })
    return resp.data.features
  }

  return (
    <PlacesContext value={{ ...state, searchPlacesByQuery }}>
      {children}
    </PlacesContext>
  )
}
