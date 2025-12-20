import {
  LngLatBounds,
  Marker,
  Popup,
  type Map,
  type SourceSpecification,
} from "mapbox-gl"
import { MapContext, mapReducer, PlacesContext } from ".."
import {
  useContext,
  useEffect,
  useReducer,
  type PropsWithChildren,
} from "react"
import { directionsApi } from "../../apis"
import type { DirectionsResponse } from "../../interfaces/directions.response"

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
    const resp = await directionsApi.get<DirectionsResponse>(
      `/${start.join(",")};${end.join(",")}`
    )

    const { distance, duration, geometry } = resp.data.routes[0]
    const { coordinates: coords } = geometry

    let kms = distance / 1000
    kms = Math.round(kms * 100)
    kms /= 100
    const mins = Math.floor(duration / 60)
    console.log({ kms, mins })

    // * Zoom
    const bounds = new LngLatBounds(start, start)
    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]]
      bounds.extend(newCoord)
    }
    state.map?.fitBounds(bounds, { padding: 150 })

    // * Polyline
    const sourceData: SourceSpecification = {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
          },
        ],
      },
    }

    if (state.map?.getLayer("RouteString")) {
      state.map.removeLayer("RouteString")
      state.map.removeSource("RouteString")
    }

    state.map?.addSource("RouteString", sourceData)
    state.map?.addLayer({
      id: "RouteString",
      type: "line",
      source: "RouteString",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "black",
        "line-width": 3,
      },
    })
  }

  return (
    <MapContext value={{ ...state, setMap, getRouteBetweenPoints }}>
      {children}
    </MapContext>
  )
}
