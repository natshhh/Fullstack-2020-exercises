import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Find from './Find';
import Info from './Info';

const App = () => {
  const [filterText, setFilterText] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [buttonsState, setButtonsState] = useState([false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    const results = countries.filter(each => each.name.toLowerCase().includes(filterText.toLowerCase()))
    setSearchResults(results);
  }, [countries, filterText])

  const handleChange = (event) => {
    setFilterText(event.target.value);
  }

  const handleClick = (index) => {
    const clickedButtons = [].concat(buttonsState)

    clickedButtons[index] ? clickedButtons[index]=false : clickedButtons[index]=true
    setButtonsState(clickedButtons);
  }

  return(
    <div>
      <Find
        filterText={filterText}
        handleChange={handleChange} />
      <Info
        searchResults={searchResults}
        handleClick={handleClick}
        buttonsState={buttonsState}
        countries={countries}
        />
    </div>
  )
}

export default App;
