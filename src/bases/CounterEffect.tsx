import { useEffect, useState } from "react"

import { gsap } from "gsap"

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

    gsap.to("h2", { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
      gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out" })
    })
  }, [counter])

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}
