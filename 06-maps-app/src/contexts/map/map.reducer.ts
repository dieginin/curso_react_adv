import type { Map } from "mapbox-gl"
import type { MapState } from ".."

type MapAction = { type: "setMap"; payload: Map }

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        map: action.payload,
      }

    default:
      return state
  }
}
