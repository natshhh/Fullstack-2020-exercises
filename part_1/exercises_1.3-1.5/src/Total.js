import React from 'react';
import ReactDOM from 'react-dom';

const Total = props => {
  let sum=0;
  for(let i=0; i<3; i++){
    sum += props.parts[i].exercises;
  }
  return (
    <p>Number of exercises {sum}</p>
  )
}

export default Total;
