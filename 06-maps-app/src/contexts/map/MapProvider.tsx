import { Marker, Popup, type Map } from "mapbox-gl"
import { MapContext, mapReducer, PlacesContext } from ".."
import {
  useContext,
  useEffect,
  useReducer,
  type PropsWithChildren,
} from "react"

export interface MapState {
  isMapReady: boolean
  map?: Map
  markers: Marker[]
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
}

export const MapProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)
  const { places } = useContext(PlacesContext)

  useEffect(() => {
    state.markers.forEach((marker) => marker.remove())
    const newMarkers: Marker[] = []

    for (const place of places) {
      const [lng, lat] = place.geometry.coordinates
      const popup = new Popup().setHTML(`
        <h6>${place.properties.name}</h6>
        <p>${place.properties.full_address}</p>
        `)

      newMarkers.push(
        new Marker({ color: "#6180fbff" })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(state.map!)
      )
    }

    // TODO limpiar polylines
    dispatch({ type: "setMarkers", payload: newMarkers })
  }, [places])

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`
        <h4>Aquí estoy</h4>
        <p>En algún lugar del mundo</p>
        `)
    new Marker({ color: "#61DAFB" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map)
    dispatch({ type: "setMap", payload: map })
  }

  const getRouteBetweenPoints = async (
    start: [number, number],
    end: [number, number]
  ) => {
    console.log(start, end)
  }

  return (
    <MapContext value={{ ...state, setMap, getRouteBetweenPoints }}>
      {children}
    </MapContext>
  )
}
