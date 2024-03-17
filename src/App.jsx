import React from "react"
import Content from './Content'; 
import Total from "./Total";
import Header from "./Header"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      {/* Pass course.name as a prop to Header */}
      <Header courseName={course.name} />
      
      {/* Pass course.parts as a prop to Content */}
      <Content parts={course.parts} />
      
      {/* Pass course.parts as a prop to Total */}
      <Total parts={course.parts} />
    </div>
  );
}
  


export default App