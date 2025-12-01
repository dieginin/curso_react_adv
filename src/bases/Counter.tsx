import { useState } from "react"

export const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue)

  const handleAdd = () => setCounter(counter + 1)

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}
