import React from 'react';

const Form = props => {
  const {
    handleSubmit,
    newName,
    handleNewName,
    newNumber,
    handleNewNumber } = props;
    
  return(
    <form onSubmit={handleSubmit} >
      <div>
        name:
        <input
          value={newName}
          onChange={handleNewName} />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={handleNewNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default Form
