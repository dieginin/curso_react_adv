import { PlacesContext } from ".."
import type { PropsWithChildren } from "react"

export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
}

export const PlacesProvider = ({ children }: PropsWithChildren) => {
  return <PlacesContext value={INITIAL_STATE}>{children}</PlacesContext>
}
