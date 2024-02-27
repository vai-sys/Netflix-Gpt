// import React, { useEffect, useState } from 'react';
// import { swiggy_menu_api_URL } from '../utils/constants';
// import MenuShimmer from './Shimmer';
// import { useParams } from 'react-router-dom';

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const { resId } = useParams();

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const data = await fetch(swiggy_menu_api_URL + resId);
//         const json = await data.json();
//         setResInfo(json.data);
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//       }
//     };
//     fetchMenu();
//   }, [resId]);

//   if (!resInfo) return <MenuShimmer />;

//   // Check if the card exists with the specified type
//   const restaurantCard = resInfo.cards.find(card => card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");

//   // Check if the restaurantCard is defined before accessing its properties
//   if (!restaurantCard) {
//     return <div>Restaurant information not available.</div>;
//   }

//   const { info: { name, cuisines, costForTwoMessage, aggregatedDiscountInfoV2 } } = restaurantCard.card.card;

//   return (
//     <div className='menu'>
//       <h1>{name}</h1>
//       <h3>{cuisines ? cuisines.join(", ") : 'Cuisines not available'}</h3>
//       <h3>{costForTwoMessage}</h3>
//       <div>
//         {aggregatedDiscountInfoV2 &&
//           aggregatedDiscountInfoV2.shortDescriptionList.map((discount, index) => (
//             <div key={index}>
//               <strong>{discount.discountType}:</strong> {discount.meta}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;




// import React, { useEffect, useState } from 'react';
// import { swiggy_menu_api_URL } from '../utils/constants';
// import MenuShimmer from './Shimmer';
// import { useParams } from 'react-router-dom';

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const { resId } = useParams();

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const data = await fetch(swiggy_menu_api_URL + resId);
//         const json = await data.json();
//         setResInfo(json.data);
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//       }
//     };
//     fetchMenu();
//   }, [resId]);

//   if (!resInfo) return <MenuShimmer />;

//   const {
//     info: {
//       name,
//       cuisines,
//       costForTwoMessage,
//       aggregatedDiscountInfoV2,
//     },
//   } = resInfo.cards[2].card.card;

//   return (
//     <div className='menu'>
//       <h1>{name}</h1>
//       <h3>{cuisines ? cuisines.join(", ") : 'Cuisines not available'}</h3>
//       <h3>{costForTwoMessage}</h3>
//       <div>
//         {aggregatedDiscountInfoV2 &&
//           aggregatedDiscountInfoV2.shortDescriptionList.map((discount, index) => (
//             <div key={index}>
//               <strong>{discount.discountType}:</strong> {discount.meta}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;





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
      <h1>{name}</h1>
      <h3>{cuisines ? cuisines.join(", ") : 'Cuisines not available'}</h3>
      <h3>{costForTwoMessage}</h3>
      <div>
        {aggregatedDiscountInfoV2 &&
          aggregatedDiscountInfoV2.shortDescriptionList.map((discount, index) => (
            <div key={index}>
              <strong>{discount.discountType}:</strong> {discount.meta}
            </div>
          ))}
      </div>

      <h2>Menu:</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <div>{menuItem.name}</div>
            <div>{menuItem.price}</div>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;






