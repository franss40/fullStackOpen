const PersonForm = ({ name, number, onHandleName, onHandleNumber, onHandleAdd }) => {
  return (
    <form>
      <p>
        Name: <input type="text" value={name} onChange={onHandleName} />
      </p>
      <p>
        Number:{" "}
        <input type="text" value={number} onChange={onHandleNumber} />{" "}
        <button type="submit" onClick={onHandleAdd}>
          Add
        </button>
      </p>
    </form>
  )
}

export default PersonForm