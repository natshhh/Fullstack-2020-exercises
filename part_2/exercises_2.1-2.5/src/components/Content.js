import React from 'react';
import Part from './Part.js';

const Content = props => {
  const { parts } = props;
  console.log(parts);
  return (
    <div>
      {parts.map((item, i) => (
        <Part
          part={parts[i].name}
          exercises={parts[i].exercises}
          key={parts[i].id} />
      ))}
    </div>
  )
}

export default Content;
