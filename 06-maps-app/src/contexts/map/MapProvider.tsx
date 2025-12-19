import type { Map } from "mapbox-gl"
import { MapContext, mapReducer } from ".."
import { useReducer, type PropsWithChildren } from "react"

export interface MapState {
  isMapReady: boolean
  map?: Map
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
}

export const MapProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)

  const setMap = (map: Map) => dispatch({ type: "setMap", payload: map })

  return <MapContext value={{ ...state, setMap }}>{children}</MapContext>
}
