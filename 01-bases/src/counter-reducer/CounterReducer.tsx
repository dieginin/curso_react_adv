import { doIncreaseBy, doReset } from "./actions"

import { CounterState } from "./interfaces"
import { counterReducer } from "./state"
import { useReducer } from "react"

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
}

export const CounterReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => dispatch(doReset())

  const handleAdd = (value: number) => dispatch(doIncreaseBy(value))

  return (
    <>
      <h1>CounterReducer Segmentado:</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleAdd(1)}>+1</button>
      <button onClick={() => handleAdd(5)}>+5</button>
      <button onClick={() => handleAdd(10)}>+10</button>
    </>
  )
}
