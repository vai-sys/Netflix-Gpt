import { useEffect, useState } from "react";

const useResMenuData = (
  swiggy_menu_api_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getRestaurantInfo = async () => {
      try {
        const response = await fetch(`${swiggy_menu_api_URL}${resId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const json = await response.json();

        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];

        // Remove duplicates based on 'id'
        const uniqueMenuItems = menuItemsData.filter(
          (item, index, self) => index === self.findIndex((x) => x.id === item.id)
        );

        setMenuItems(uniqueMenuItems);
      } catch (err) {
        console.error(err);
        setMenuItems([]);
        setRestaurant(null);
      }
    };

    getRestaurantInfo();
  }, [swiggy_menu_api_URL, resId, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY]);

  return [restaurant, menuItems];
};

export default useResMenuData;

