import React from 'react';

const Filter = props => {
  const { filterText, handleFilter } = props;
  return(
    <div>
      Filter by name
      <input
        value={filterText}
        onChange={handleFilter} />
    </div>
  )
}

export default Filter;
