import React, { useState, useEffect } from "react";
import restaurant_data from '../utils/menuData';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
    
        const fetchData = async () => {
            
            await new Promise(resolve => setTimeout(resolve, 1000));

    
            const resData = restaurant_data;

            setResInfo(resData);
        };

        fetchData();
    }, []);

    if (resInfo === null) return <Shimmer />;

    return (
        <div className="menu">
            {resInfo.map((restaurant, index) => (
                <div key={index}>
                    <h1>{restaurant.name}</h1>
                    <h2>Menu</h2>
                    <ul>
                        {restaurant.menu_items.map((menuItem, itemIndex) => (
                            <li key={itemIndex}>
                                {menuItem.name} - {menuItem.cuisine} (${menuItem.price.toFixed(2)})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;





// import React from "react";
// import restaurant_data from '../utils/menuData';
// import { useState } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//     const[resInfo,setResInfo]=useState(null);

//     if (resInfo===null) return <Shimmer/>

//     return (
//         <div className="menu">
//             {restaurant_data.map((restaurant, index) => (
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
