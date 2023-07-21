import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  function handleButtonClick() {
    setCount(prevState => prevState + 1)
  }

  return (
    <>
      <h1>Hello</h1>
      <p data-testid="state-value">{count}</p>
      <button onClick={handleButtonClick}>increase</button>
    </>
  )
}
