import React from 'react'

const DetailedInfo = props => {
  const { searchResults, index } = props
  return(
    <div>
        <h2>{searchResults[index].name}</h2>
        <p>capital {searchResults[index].capital} <br/> population {searchResults[index].population}</p>
        <h3>Languages</h3>
        <ul>
          {searchResults[index].languages.map(each => <li key={each.name}>{each.name}</li>)}
        </ul>
        <img src={searchResults[index].flag} alt={searchResults[index].name} style={{width: 300}}/>
      </div>
  )
}

export default DetailedInfo
