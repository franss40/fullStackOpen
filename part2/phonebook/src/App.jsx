import { useState } from "react"

const App = () => {
  const initialPersons = [
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]
  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState('')

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

  const handleFilter = (event) => {
    setFilter(event.target.value)  
  }

  function personsFilter(person) {
    if (person.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1) {
      return person
    }
  }

  const personsToShow = filter === ''
    ? persons 
    : persons.filter(personsFilter);

  return (
    <div>
      <h2>Phonebook</h2>

      Filter shown with <input type="text" value={filter} onChange={handleFilter}/>

      <h2>Add a New</h2>
      <form>
        <p>
          Name: <input type="text" value={newName} onChange={handleNewName} />
        </p>
        <p>
          Number: <input type="text" value={newNumber} onChange={handleNewNumber}/>{" "}
          <button type="submit" onClick={handleAddPerson}>
            Add
          </button>
        </p>
      </form>

      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <h3 key={person.name}>{person.name} {' '} {person.number}</h3>
      ))}
    </div>
  )
}

export default App
