import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Numbers from './components/Numbers';
import axios from 'axios';

const App = () => {
  const [persons, setPerson] = useState([])
  const [newName, setNewName] = useState('Enter name');
  const [newNumber, setNewNumber] = useState('');
  const [filterText, setFilterText] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
      })
  }, [])
  console.log(persons.length, 'persons');


  const handleFilter = event => {
    setFilterText(event.target.value)
  }
  const handleNewName = event => {
    setNewName(event.target.value);
  }
  const handleNewNumber = event => {
    setNewNumber(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault();
    const obj = {
      name: newName,
      number: newNumber
    };
    const isNotSame = (currObj) => currObj.name !== newName;
    persons.every(isNotSame)
      ? setPerson(persons.concat(obj))
      : window.alert(`${newName} is already added to phonebook`);
  }

  useEffect(() => {
    const results = persons.filter(each => each.name.toLowerCase().includes(filterText.toLowerCase()));
    setSearchResults(results);
  }, [persons, filterText])


  return(
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterText={filterText}
        handleFilter={handleFilter} />

      <h2>add a new</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber} />

      <h2>Numbers</h2>
      <Numbers searchResults={searchResults} />
    </div>
  )
}
export default App;
