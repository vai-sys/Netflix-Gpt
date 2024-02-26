
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import useResMenuData from "../utils/useResMenuData"; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api
// import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
// import UserOffline from "./UserOffline";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );



  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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





