import { useState } from "react"

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />

      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={(good - bad) / total} />
      <StatisticLine text="positive" value={(good * 100) / total + " %"} />
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>
      <b>{text}</b> {value}
    </p>
  )
}

const Button = ({text, onClick}) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}

function App() {

  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button text="good" onClick={handleGood} />
        <Button text="neutral" onClick={handleNeutral} />
        <Button text="bad" onClick={handleBad} />
      </div>

      {good + neutral + bad == 0 ? (
        <p>
          <b>No feedback given</b>
        </p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  )
}

export default App
