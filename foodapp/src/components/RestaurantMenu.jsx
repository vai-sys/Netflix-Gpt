import React, { useEffect, useState } from 'react';
import { swiggy_menu_api_URL } from '../utils/constants';
import MenuShimmer from './Shimmer'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const resId = 1234/* Add your restaurant ID here */

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        setResInfo(json.data); // Assuming your API response is an array of menu items
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [resId]);
  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
 return  resInfo===null  ? <MenuShimmer/>

  :(
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      {/* <ul>
        {menuData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import restaurant_data from '../utils/menuData';
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//     const [resInfo, setResInfo] = useState(null);
//     const { resId } = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             await new Promise(resolve => setTimeout(resolve, 1000));

//             // Check if resId is a valid index
//             const index = parseInt(resId, 10);
//             if (isNaN(index) || index < 0 || index >= restaurant_data.length) {
//                 console.error(`Invalid resId: ${resId}`);
//                 return;
//             }

//             const selectedRestaurant = restaurant_data[index];
//             setResInfo(selectedRestaurant);
//         };

//         fetchData();
//     }, [resId]);

//     if (resInfo === null) return <Shimmer />;

//     return (
//         <div className="menu">
//             <div>
//                 <h1>{resInfo.name}</h1>
//                 <h2>Menu</h2>
//                 <ul>
//                     {resInfo.menu_items.map((menuItem, itemIndex) => (
//                         <li key={itemIndex}>
//                             {menuItem.name} - {menuItem.cuisine} (${menuItem.price.toFixed(2)})
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default RestaurantMenu;





