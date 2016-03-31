import React from 'react'

// Header Component
// using the 'title' prop
// passed down from App.js

export default props =>{
  const headerStyle = {
    borderBottom: '1px solid #ccc'
  };
  return(
    <h1 style={headerStyle}>
      {props.title}
    </h1>
  )
}