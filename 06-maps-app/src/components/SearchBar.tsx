import { useRef, type ChangeEvent } from "react"

export const SearchBar = () => {
  const debounceRef = useRef<number>(undefined)

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => console.log(event.target.value), 350)
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
