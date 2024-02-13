import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "39-44-5323523" }])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    const findPerson = persons.find(person => person.name.trim() === newName.trim())
    if (findPerson) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <p>
          name: <input type="text" value={newName} onChange={handleNewName} />
        </p>
        <p>
          number: <input type="text" value={newNumber} onChange={handleNewNumber}/>{" "}
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </p>
      </form>

      <h2>Numbers</h2>
      {persons.map((person) => (
        <h3 key={person.name}>{person.name} {' '} {person.number}</h3>
      ))}
    </div>
  )
}

export default App
