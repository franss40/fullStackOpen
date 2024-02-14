const Filter = ({ filter, onHandleFilter }) => {
  return (
    <>
      <span>Filter shown with</span>{" "}
      <input type="text" value={filter} onChange={onHandleFilter} />
    </>
  )
}

export default Filter