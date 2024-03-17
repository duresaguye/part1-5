import React from 'react'

const Header = ({courseName}) => {
    console.log(courseName);
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

export default Header
