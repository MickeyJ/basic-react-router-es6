import React from 'react'

// Content Component

export default props =>{
  return(
    <div className="container" style={{height: '80vh'}}>

      <h3>here is content container</h3>
      {props.children}

    </div>
  )
}