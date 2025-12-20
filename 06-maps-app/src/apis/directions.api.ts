import axios from "axios"

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1Ijoid2Fja3MiLCJhIjoiY21qY2h1Mm54MHBsMjNjb3d6YmlrbXdlNSJ9.3yF2dxjcf2gnUbllO0NIdw",
  },
})

export default directionsApi
