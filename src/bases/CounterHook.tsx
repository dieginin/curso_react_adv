import { useCounter } from "../hooks/useCounter"

export const CounterHook = () => {
  const { counter, counterRef, handleAdd } = useCounter()

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={counterRef}>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}
