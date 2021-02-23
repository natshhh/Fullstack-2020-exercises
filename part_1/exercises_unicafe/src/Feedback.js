import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

const Feedback = props => {
  const { handleGood, handleNeutral, handleBad } = props;
  return(
    <div>
      <h2>Give a Feedback</h2>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
    </div>
  )
}

export default Feedback;
