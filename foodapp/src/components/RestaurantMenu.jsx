// import React, { useState, useEffect } from "react";
// import restaurant_data from '../utils/menuData';
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
    
//         const fetchData = async () => {
            
//             await new Promise(resolve => setTimeout(resolve, 1000));
             
    
//             const resData = restaurant_data;

//             setResInfo(resData);
//         };

//         fetchData();
//     }, []);

//     if (resInfo === null) return <Shimmer />;

//     return (
//         <div className="menu">
//             {resInfo.map((restaurant, index) => (
//                 <div key={index}>
//                     <h1>{restaurant.name}</h1>
//                     <h2>Menu</h2>
//                     <ul>
//                         {restaurant.menu_items.map((menuItem, itemIndex) => (
//                             <li key={itemIndex}>
//                                 {menuItem.name} - {menuItem.cuisine} (${menuItem.price.toFixed(2)})
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default RestaurantMenu;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import restaurant_data from '../utils/menuData';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Check if resId is a valid index
            const index = parseInt(resId, 10);
            if (isNaN(index) || index < 0 || index >= restaurant_data.length) {
                console.error(`Invalid resId: ${resId}`);
                return;
            }

            const selectedRestaurant = restaurant_data[index];
            setResInfo(selectedRestaurant);
        };

        fetchData();
    }, [resId]);

    if (resInfo === null) return <Shimmer />;

    return (
        <div className="menu">
            <div>
                <h1>{resInfo.name}</h1>
                <h2>Menu</h2>
                <ul>
                    {resInfo.menu_items.map((menuItem, itemIndex) => (
                        <li key={itemIndex}>
                            {menuItem.name} - {menuItem.cuisine} (${menuItem.price.toFixed(2)})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;





