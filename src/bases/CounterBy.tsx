import { useState } from "react"

interface Props {
  initialValue?: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState({
    counter: initialValue,
    clicks: 0,
  })

  const handleAdd = (amount: number) =>
    setCounter({
      counter: counter.counter + amount,
      clicks: counter.clicks + 1,
    })

  return (
    <>
      <h1>CounterBy: {counter.counter}</h1>
      <h1>ClickCount: {counter.clicks}</h1>
      <button onClick={() => handleAdd(1)}>+1</button>
      <button onClick={() => handleAdd(5)}>+5</button>
    </>
  )
}
