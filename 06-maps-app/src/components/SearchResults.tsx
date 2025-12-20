import { LoadingPlaces } from "."
import { PlacesContext } from "../contexts"
import { useContext } from "react"

export const SearchResults = () => {
  const { isLoadingPlaces, places } = useContext(PlacesContext)

  if (isLoadingPlaces) {
    return <LoadingPlaces />
  }

  if (!places.length) return

  return (
    <ul className='list-group mt-3'>
      {places.map(({ properties }) => (
        <li
          key={properties.mapbox_id}
          className='list-group-item list-group-item-action'
        >
          <h6>{properties.name}</h6>
          <p
            className='text-muted'
            style={{
              fontSize: "12px",
            }}
          >
            {properties.full_address}
          </p>
          <button className='btn btn-outline-primary'>Direcciones</button>
        </li>
      ))}
    </ul>
  )
}
