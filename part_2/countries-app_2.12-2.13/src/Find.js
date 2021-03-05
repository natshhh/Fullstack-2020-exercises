import React from 'react'

const Find = props => {
  const { filterText, handleChange } = props;
  return(
    <div>
      <h2>Find Countries</h2>
      <div>
        Search
        <input value={filterText} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Find
