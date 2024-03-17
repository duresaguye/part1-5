import React from 'react'

const Total = ({parts}) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <p>Total exercises: {totalExercises}</p>
    </div>
  )
}

export default Total
