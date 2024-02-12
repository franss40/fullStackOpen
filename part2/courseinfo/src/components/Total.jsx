const Total = ({ course }) => {

  const sum = course.parts.reduce((a, b) => a + b.exercises, 0)

  return (
    <h3>
      Total of {sum} exercises
    </h3>
  )
}

export default Total