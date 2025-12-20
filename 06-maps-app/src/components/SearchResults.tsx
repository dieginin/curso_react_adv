import { MapContext, PlacesContext } from "../contexts"
import { useContext, useState } from "react"

import type { Feature } from "../interfaces/places.response"
import { LoadingPlaces } from "."

export const SearchResults = () => {
  const { isLoadingPlaces, places } = useContext(PlacesContext)
  const { map } = useContext(MapContext)

  const [activeId, setActiveId] = useState("")

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.geometry.coordinates
    setActiveId(place.id)
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    })
  }

  if (isLoadingPlaces) {
    return <LoadingPlaces />
  }

  if (!places.length) return

  return (
    <ul className='list-group mt-3'>
      {places.map((place) => (
        <li
          key={place.properties.mapbox_id}
          className={`list-group-item list-group-item-action pointer ${
            activeId == place.id && "active"
          }`}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.properties.name}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.properties.full_address}
          </p>
          <button
            className={`btn btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  )
}
