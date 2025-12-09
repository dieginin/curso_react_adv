import { useReducer } from "react"

interface CounterState {
  changes: number
  counter: number
  previous: number
}

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
}

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" }

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter,
      }

    case "reset":
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      }

    default:
      return state
  }
}

export const CounterReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => dispatch({ type: "reset" })

  const handleAdd = (value: number) =>
    dispatch({ type: "increaseBy", payload: { value } })

  return (
    <>
      <h1>CounterReducer:</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleAdd(1)}>+1</button>
      <button onClick={() => handleAdd(5)}>+5</button>
      <button onClick={() => handleAdd(10)}>+10</button>
    </>
  )
}
