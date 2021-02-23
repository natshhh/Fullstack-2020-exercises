import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState( [0, 0, 0, 0, 0, 0] )

  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVote = () => {
    const newArr = [...votes];
    newArr[selected] += 1;
    setVotes(newArr);
  }
  let max = votes.indexOf(Math.max(...votes));
  
  return (
    <div id='container'>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote} className='button'>Vote</button>
      <button onClick={handleClick} className='button'>Next Anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[max]}</p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));
