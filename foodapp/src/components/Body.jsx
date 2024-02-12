import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resObj from '../utils/Mockdata';

const Body = () => {
  const [listOfRestau, setListOfRestau] = useState(resObj);

  const handleFilter = () => {
    const filteredList = resObj.filter((res) => res.data.avgRating > 4);
    setListOfRestau(filteredList);
  };

  return (
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn' onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className='res-container'>
        {listOfRestau.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;




// import React from 'react';
// import RestaurantCard from './RestaurantCard';
// import resObj from '../utils/Mockdata';
// import { useState } from 'react';

// const Body = () => {
//   const [listOfRestau,setListOfRestau]=useState( )
//   return (
//     <div className='body'>
//      <div className='filter'>
//   <button className='filter-btn' onClick={() => {
//     const filteredList = listOfRestau.filter((res) => {
//       return res.data.avgRating >  4;
//     });
//     setListOfRestau(filteredList);
//   }}>
//     Top Rated Restaurants
//   </button>
// </div>

//       <div className='res-container'>
        
//      {
//       resObj.map((restaurant)=><RestaurantCard key={restaurant.data.id} resData={restaurant}
//       />)
//      }
//       </div>
//     </div>
//   );
// };

// export default Body;



