import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

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
    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form>
        <p>
          name: <input value={newName} onChange={handleNewName} />{" "}
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </p>
      </form>

      <h2>Numbers</h2>
      {persons.map((person) => (
        <h3 key={person.name}>{person.name}</h3>
      ))}
    </div>
  )
}

export default App
