import { useContext, useRef, type ChangeEvent } from "react"
import { PlacesContext } from "../contexts"

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext)

  const debounceRef = useRef<number>(undefined)

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(
      () => searchPlacesByQuery(event.target.value),
      350
    )
  }

  return (
    <div className='search-container'>
      <input
        type='text'
        className='form-control'
        placeholder='Buscar lugar...'
        onChange={onQueryChange}
      />
    </div>
  )
}
