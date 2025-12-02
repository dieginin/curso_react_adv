import { useEffect, useState } from "react"

const MAXIMUM_COUNT = 10

export const CounterEffect = () => {
  const [counter, setCounter] = useState(4)

  const handleAdd = () => setCounter(Math.min(counter + 1, MAXIMUM_COUNT))

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return

    console.log(
      "%cSe llego al valor máximo",
      "color: red; background-color:black;"
    )
  }, [counter])

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}
