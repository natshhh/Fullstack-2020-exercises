import React from 'react';

const Numbers = props => {
  const { searchResults } = props;
  return(
    <ul>
      {searchResults.map(each =>
        <li key={each.name.split(' ').join('')}>{each.name} {each.number}</li>
      )}
    </ul>
  )
}

export default Numbers;
