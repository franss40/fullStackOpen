import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
//import axios from "axios"
import personServices from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    personServices
      .getAll()
      .then((response) => setPersons(response))
      .catch((error) => {
        if (error.response) {
          console.log("error: " + error.response.status)
        } else {
          console.log(
            "se ha producido un error en la recuperación de datos, " + error
          )
        }
      })
  }, [])

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
      setNewName('')
      setNewNumber('')
      return
    }

    personServices
      .create({ name: newName, number: newNumber })
      .then((response) => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        if (error.response) {
          console.log("error: " + error.response.status)
        } else {
          console.log(
            "se ha producido un error en la recuperación de datos, " + error
          )
        }
      })
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
      {persons.length ? (
        <Persons personsToShow={personsToShow} />
      ) : (
        <h4>Loading ...</h4>
      )}
    </div>
  )
}

export default App
