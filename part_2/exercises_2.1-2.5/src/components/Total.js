import React from 'react';

const Total = props => {
  const { parts } = props;
  const reducer = (acc, currVal) => acc + currVal;
  const copyOfParts = parts.map(item => item.exercises).reduce(reducer);
  return (
    <strong>Number of exercises {copyOfParts}</strong>
  )
}

export default Total;
