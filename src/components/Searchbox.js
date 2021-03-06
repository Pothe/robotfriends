import React from 'react'

const Searchbox = ({searchfield, searchchange}) => {
  return (
    <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue' 
        type='Search'
        placeholder='search here'
        onChange={searchchange}
        />
    </div>
  )
}

export default Searchbox