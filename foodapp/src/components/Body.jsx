import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='body'>
        <div className='search'></div>
        <div className='res-container'>
            <RestaurantCard/>
        </div>

      
    </div>
  )
}

export default Body
