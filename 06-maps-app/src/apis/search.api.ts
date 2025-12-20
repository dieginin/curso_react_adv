import axios from "axios"

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1Ijoid2Fja3MiLCJhIjoiY21qY2h1Mm54MHBsMjNjb3d6YmlrbXdlNSJ9.3yF2dxjcf2gnUbllO0NIdw",
  },
})

export default searchApi
