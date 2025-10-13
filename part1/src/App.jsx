import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { text: 'Fundamentals of React', exercise: 10 },
    { text: 'Using props to pass data', exercise: 7 },
    { text: 'State of a component', exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />

      

      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App