import React from 'react'

const Content = ({parts}) => {
  return (
    <div>
    {parts.map(part => (
      <p key={part.name}>
        {part.name}: {part.exercises} exercises
      </p>
    ))}
  </div>
  )
}

export default Content
