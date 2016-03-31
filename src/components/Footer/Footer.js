import React from 'react'

// Footer Component

export default props =>{
  const footStyle = {
    borderTop: '1px solid #ccc'
  };
  return(
    <h5 style={footStyle}>
      &copy; 2015 {props.title}
    </h5>
  )
}