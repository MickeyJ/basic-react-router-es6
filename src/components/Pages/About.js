import React from 'react'

const About = (props) => (
  <div>
    <h1>About</h1>
    <p>{props.params.message}</p>
  </div>
);
export default About