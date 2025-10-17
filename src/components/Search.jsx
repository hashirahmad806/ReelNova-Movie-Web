import React from 'react'

export default function Search({SearchTerm, setSearchTerm}) {
  return (
    <div className='search'>
      <div>
       < img src="./search.svg" alt="Search Icon" />
        <input type="text"
          placeholder='Search for a movie...'
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
          
        />
      </div>
        <h2>{SearchTerm}</h2>
        
    </div>
  )
}
