import { useState } from "react"

function App() {
  const [selected, setSelected] = useState(0)

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const showAnecdote = (max) => {
      setSelected(Math.floor(Math.random() * max))
  }

  const addVote = () => {
    const newVote = [...vote]
    newVote[selected] = newVote[selected] + 1
    setVote(newVote)
  }

  const numberVote = Math.max(...vote)
  const mostVote = anecdotes[vote.indexOf(numberVote)]

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <b>{anecdotes[selected]}</b>
      <p>
        <b>has {vote[selected]} votes</b>
      </p>
      <p>
        <button onClick={addVote}>Vote</button>{" "}
        <button onClick={() => showAnecdote(anecdotes.length)}>
          next anecdote
        </button>
      </p>
      <h2>Anecdote with most votes</h2>
      <p>{mostVote}</p>
      <p>with {numberVote} votes</p>
    </div>
  )
}

export default App