import Person from './Person'

const Persons = ({ personsToShow, personDelete }) => {
  return (
    <>
      {personsToShow.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} id={person.id} personDelete={personDelete} />
      ))}
    </>
  )
}

export default Persons