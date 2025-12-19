import { Loading } from "./"
import { PlacesContext } from "../contexts"
import { useContext } from "react"

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext)

  if (isLoading) return <Loading />

  return <div>{userLocation?.join(", ")}</div>
}
