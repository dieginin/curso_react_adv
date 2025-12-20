import type { PlacesState } from ".."

type PlacesAction =
  | { type: "setUserLocation"; payload: [number, number] }
  | { type: "setSearch"; payload: string }

export const placesReducer = (
  state: PlacesState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case "setUserLocation":
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload,
      }

    default:
      return state
  }
}
