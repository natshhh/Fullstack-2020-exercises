import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './Statistics.js';
import Feedback from './Feedback.js';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good+1);
  const handleNeutral = () => setNeutral(neutral+1);
  const handleBad = () => setBad(bad+1);
  let sum = good+neutral+bad;
  return (
    <div>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        sum={sum} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
