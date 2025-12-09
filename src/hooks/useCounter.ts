import { useEffect, useRef, useState } from "react"

import gsap from "gsap"

const MAXIMUM_COUNT = 10

export const useCounter = () => {
  const [counter, setCounter] = useState(4)
  const counterRef = useRef<HTMLHeadingElement>(null)

  const handleAdd = () => setCounter(Math.min(counter + 1, MAXIMUM_COUNT))

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return

    console.log(
      "%cSe llego al valor máximo",
      "color: red; background-color:black;"
    )

    const tl = gsap.timeline()
    tl.to(counterRef.current, { y: -10, duration: 0.2, ease: "ease.out" })
    tl.to(counterRef.current, { y: 0, duration: 1, ease: "bounce.out" })
  }, [counter])

  return {
    counter,
    counterRef,
    handleAdd,
  }
}
