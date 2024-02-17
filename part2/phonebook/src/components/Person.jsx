const Person = ({ name, number, id, personDelete }) => {
  return (
    <h4>
      {name} {number} {' '}
      <button onClick={() => personDelete(id)}>delete</button>
    </h4>
  )
}

export default Person