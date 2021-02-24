import React from 'react';
import Course from './Course.js';

const App = props => {
  const { course } = props;
  return (
    <div>
      <Course course={course[0]} />
      <Course course={course[1]} />
    </div>
  )
}

export default App;
