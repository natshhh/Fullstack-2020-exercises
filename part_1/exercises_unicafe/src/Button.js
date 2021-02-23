import React from 'react';
import ReactDOM from 'react-dom';

const Button = props => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default Button;
