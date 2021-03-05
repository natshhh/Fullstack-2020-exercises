import React from 'react'
import DetailedInfo from './DetailedInfo'
const Info = props => {
  const { searchResults, handleClick, buttonsState, countries } = props;
  return(
    <div>
      {
        searchResults.length<10 && searchResults.length>1
        ? <ul>
          {searchResults.map((obj, i) =>
              <li key={obj.name}>
                {obj.name}
                <button
                  onClick={() => handleClick(i)}>
                  Show
                </button>

                {buttonsState[i]
                 ? <DetailedInfo searchResults={searchResults} index={i} />
                 : null}
              </li>
          )}
          </ul>
        : searchResults.length >= 10 && searchResults.length<countries.length
        ? <p>Too many countries, specify another filter</p>
        : searchResults.length === 1
        ? <DetailedInfo searchResults={searchResults} index={0} />
        : null
      }
    </div>
  )
}

export default Info
