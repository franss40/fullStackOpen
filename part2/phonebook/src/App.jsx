import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  },[])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    const findPerson = persons.find(
      (person) => person.name.trim() === newName.trim()
    )
    if (findPerson) {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName("")
    setNewNumber("")
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

  const personsToShow = filter === "" ? persons : persons.filter(personsFilter)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onHandleFilter={handleFilter} />

      <h3>Add a New</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        onHandleName={handleNewName}
        onHandleNumber={handleNewNumber}
        onHandleAdd={handleAddPerson}
      />

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
