import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({ course }) => {

  const listContent = course.map(element => (
    <div key={element.name}>
      <h2>{element.name}</h2>
      <Content course={element} />
      <Total course={element} />
    </div>
  )) 
  
  return (
    <div>
      <Header />
      {listContent}
    </div>
  )
}

export default Course
