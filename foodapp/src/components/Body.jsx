// import React, { useEffect, useState } from 'react';
// import RestaurantCard from './RestaurantCard';


// const Body = () => {
//   const [listOfRestau, setListOfRestau] = useState([]);
//   useEffect(()=>{fetchData();
//   },[]);

//   const fetchData= async()=>{
//     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=94613&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
//     const jsonD=await data.json();
//     console.log(jsonD);
//     setListOfRestau(jsonD?.data?.cards[2]?.card);

//   }
 
 

//   return (
//     <div className='body'>
    

//       <div className='res-container'>
//         {listOfRestau.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;




import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
const Body = () => {
  const [listOfRestau, setListOfRestau] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=94613&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const jsonData = await data.json();

      // Use optional chaining to access nested properties
      setListOfRestau(jsonData?.data?.cards[2]?.card || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestau.length===0 ? <Shimmer/> :(
    <div className='body'>
      <div className='res-container'>
      
        {listOfRestau.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;







