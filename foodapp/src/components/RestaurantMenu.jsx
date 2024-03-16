import React, { useEffect, useState } from 'react';
import { swiggy_menu_api_URL } from '../utils/constants';
import MenuShimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(swiggy_menu_api_URL + resId);
        const json = await response.json();

        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, [resId]);

  if (!restaurant || !menuItems.length) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage, aggregatedDiscountInfoV2 } = restaurant;

  return (
    <div className='menu'>
      <div className='menu-card'>
        <div className='first'>
          <h1>{name}</h1>
          <p>{cuisines ? cuisines.join(", ") : 'Cuisines not available'}</p>
        </div>
        <div className='second'>
          {/* <h2>{costForTwoMessage}</h2> */}
        </div>
      </div>
      <h3>Recommended Products </h3>
      <ul className='menu-list'>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className='menu-box'>
            <div className='menu-image'>
              {menuItem.cloudinaryImageId && (
                <img
                  src={`https://res.cloudinary.com/YOUR_CLOUDINARY_CLOUD_NAME/image/upload/${menuItem.cloudinaryImageId}`}
                  alt={menuItem.name}
                />
              )}
            </div>
            <div className='menu-details'>
              <div className='name'>{menuItem.name}</div>
              <div className='price'> Rs -{(menuItem.price)/100}</div>
              
            </div>
            <div>
              <button>Add</button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;






// import React, { useEffect, useState } from 'react';
// import { swiggy_menu_api_URL } from '../utils/constants';
// import MenuShimmer from './Shimmer';
// import { useParams } from 'react-router-dom';

// const RestaurantMenu = () => {
//   const [restaurant, setRestaurant] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const { resId } = useParams();

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch(swiggy_menu_api_URL + resId);
//         const json = await response.json();

//         // Set restaurant data
//         const restaurantData =
//           json?.data?.cards
//             ?.map((x) => x.card)
//             ?.find((x) => x && x.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card
//             ?.info || null;
//         setRestaurant(restaurantData);

//         // Set menu item data
//         const menuItemsData =
//           json?.data?.cards
//             .find((x) => x.groupedCard)
//             ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
//               (x) => x.card?.card
//             )
//             ?.filter((x) => x["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//             ?.map((x) => x.itemCards)
//             .flat()
//             .map((x) => x.card?.info) || [];

//         const uniqueMenuItems = [];
//         menuItemsData.forEach((item) => {
//           if (!uniqueMenuItems.find((x) => x.id === item.id)) {
//             uniqueMenuItems.push(item);
//           }
//         });
//         setMenuItems(uniqueMenuItems);
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//       }
//     };

//     fetchMenu();
//   }, [resId]);

//   if (!restaurant || !menuItems.length) return <MenuShimmer />;

//   const { name, cuisines, costForTwoMessage, aggregatedDiscountInfoV2 } = restaurant;

//   return (
//     <div className='menu'>
//       <div className='menu-card'>
//         <div className='first'>
//         <h1>{name}</h1>
//           <p>{cuisines ? cuisines.join(", ") : 'Cuisines not available'}</p>
//         </div>
//         <div className='second'>
//            <h2>{costForTwoMessage}</h2>
//          </div>
//       </div>
    
     
//       <div className='discounts'>
//         {aggregatedDiscountInfoV2 &&
//           aggregatedDiscountInfoV2.shortDescriptionList.map((discount, index) => (
//             <div key={index} className='discount-card'>
//               <strong>{discount.discountType}:</strong> {discount.meta}
//             </div>
//           ))}
//       </div>

//       <h3>Recomended Products </h3>
//       <ul >
//         {menuItems.map((menuItem) => (
//           <li key={menuItem.id} className='menuBox'>
//             <div className='name '>{menuItem.name}</div>
//             <div className='price'>{menuItem.price}</div>
//             {/* Add more details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;






