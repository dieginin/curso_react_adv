import { useState } from "react"

interface Props {
  initialValue?: number
}

interface CounterState {
  counter: number
  clicks: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{ counter, clicks }, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  })

  const handleAdd = (amount: number) =>
    setCounter({
      counter: counter + amount,
      clicks: clicks + 1,
    })

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>ClickCount: {clicks}</h1>
      <button onClick={() => handleAdd(1)}>+1</button>
      <button onClick={() => handleAdd(5)}>+5</button>
    </>
  )
}
