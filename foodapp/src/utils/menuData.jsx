


const restaurant_data = [
    {"name": "Domino's", "menu_items": [
        {"name": "Burger", "cuisine": "American", "price": 10.99},
        {"name": "Pizza", "cuisine": "Italian", "price": 12.99},
        {"name": "Pasta", "cuisine": "Italian", "price": 14.99},
        {"name": "Salad", "cuisine": "Healthy", "price": 8.99},
        {"name": "Steak", "cuisine": "American", "price": 22.99}
    ]},
    {"name": "The Brooklyn Creamery - Healthy Ice Cream", "menu_items": [
        {"name": "Vanilla", "cuisine": "Dessert", "price": 3.99},
        {"name": "Chocolate", "cuisine": "Dessert", "price": 4.99},
        {"name": "Strawberry", "cuisine": "Dessert", "price": 5.99},
        {"name": "Mint Chocolate Chip", "cuisine": "Dessert", "price": 6.99},
        {"name": "Cookies and Cream", "cuisine": "Dessert", "price": 7.99}
    ]},
    {"name": "Richie Rich Juices & Shakes", "menu_items": [
        {"name": "Mango Smoothie", "cuisine": "Smoothie", "price": 7.99},
        {"name": "Strawberry Milkshake", "cuisine": "Milkshake", "price": 6.99},
        {"name": "Blueberry Bliss Smoothie", "cuisine": "Smoothie", "price": 8.99},
        {"name": "Chocolate Brownie Shake", "cuisine": "Milkshake", "price": 9.99},
        {"name": "Detox Green Juice", "cuisine": "Juice", "price": 5.99}
    ]},
    {"name": "Siddhi Icecream & Thick Shake", "menu_items": [
        {"name": "Mango Smoothie", "cuisine": "Smoothie", "price": 7.99},
        {"name": "Strawberry Milkshake", "cuisine": "Milkshake", "price": 6.99},
        {"name": "Blueberry Bliss Smoothie", "cuisine": "Smoothie", "price": 8.99},
        {"name": "Chocolate Brownie Shake", "cuisine": "Milkshake", "price": 9.99},
        {"name": "Detox Green Juice", "cuisine": "Juice", "price": 5.99}
    ]},
    {"name": "Pizza Pie", "menu_items": [
        {"name": "Classic Margherita", "cuisine": "Pizza", "price": 11.99},
        {"name": "Pepperoni Feast", "cuisine": "Pizza", "price": 13.99},
        {"name": "Vegetarian Delight", "cuisine": "Pizza", "price": 12.99},
        {"name": "BBQ Chicken Supreme", "cuisine": "Pizza", "price": 14.99},
        {"name": "Hawaiian Paradise", "cuisine": "Pizza", "price": 10.99}
    ]},
    {"name": "Feeling Hungry", "menu_items": [
        {"name": "Loaded Nachos", "cuisine": "Appetizer", "price": 8.99},
        {"name": "Cheeseburger Deluxe", "cuisine": "American", "price": 11.99},
        {"name": "Chicken Wings", "cuisine": "Appetizer", "price": 9.99},
        {"name": "Vegetable Wrap", "cuisine": "Healthy", "price": 7.99},
        {"name": "Chocolate Brownie Sundae", "cuisine": "Dessert", "price": 6.99}
    ]},
    {"name": "Malaxmi Fast Food", "menu_items": [
        {"name": "Vada Pav", "cuisine": "Indian", "price": 4.99},
        {"name": "Paneer Tikka Roll", "cuisine": "Indian", "price": 7.99},
        {"name": "Samosa Chaat", "cuisine": "Indian", "price": 5.99},
        {"name": "Masala Dosa", "cuisine": "South Indian", "price": 8.99},
        {"name": "Chole Bhature", "cuisine": "North Indian", "price": 6.99}
    ]},
    {"name": "Dessert House", "menu_items": [
        {"name": "Chocolate Fondue", "cuisine": "Dessert", "price": 15.99},
        {"name": "Cheesecake", "cuisine": "Dessert", "price": 8.99},
        {"name": "Ice Cream Sundae", "cuisine": "Dessert", "price": 12.99},
        {"name": "Fruit Parfait", "cuisine": "Dessert", "price": 10.99},
        {"name": "Tiramisu", "cuisine": "Dessert", "price": 14.99}
    ]},

    {"name": "McDonald's Gourmet Burger Collection", "menu_items": [
        {"name": "Truffle Mushroom Burger", "cuisine": "Burger", "price": 9.99},
        {"name": "Blue Cheese & Caramelized Onion Burger", "cuisine": "Burger", "price": 11.99},
        {"name": "Avocado & Bacon Ranch Burger", "cuisine": "Burger", "price": 10.99},
        {"name": "Spicy Sriracha Chicken Burger", "cuisine": "Burger", "price": 12.99},
        {"name": "Classic Double Cheeseburger", "cuisine": "Burger", "price": 8.99}
    ]},
    {"name": "Behrouz Biryani", "menu_items": [
        {"name": "Royal Chicken Biryani", "cuisine": "Biryani", "price": 15.99},
        {"name": "Paneer Lazeez Biryani", "cuisine": "Biryani", "price": 13.99},
        {"name": "Mutton Kebab Biryani", "cuisine": "Biryani", "price": 16.99},
        {"name": "Vegetable Dum Biryani", "cuisine": "Biryani", "price": 12.99},
        {"name": "Egg Keema Biryani", "cuisine": "Biryani", "price": 14.99}
    ]},
    {"name": "Momos House", "menu_items": [
        {"name": "Steamed Chicken Momos", "cuisine": "Momos", "price": 9.99},
        {"name": "Fried Vegetable Momos", "cuisine": "Momos", "price": 8.99},
        {"name": "Paneer Tikka Momos", "cuisine": "Momos", "price": 10.99},
        {"name": "Spicy Schezwan Momos", "cuisine": "Momos", "price": 11.99},
        {"name": "Tandoori Momos", "cuisine": "Momos", "price": 12.99}
    ]},
    {"name": "Sabir Chicken", "menu_items": [
        {"name": "Chicken Biryani", "cuisine": "Biryani", "price": 14.99},
        {"name": "Chicken Korma", "cuisine": "Indian", "price": 12.99},
        {"name": "Grilled Chicken", "cuisine": "BBQ", "price": 16.99},
        {"name": "Chicken Curry", "cuisine": "Indian", "price": 13.99},
        {"name": "Chicken Shawarma", "cuisine": "Middle Eastern", "price": 8.99}
    ]},
    {"name": "Mahesh Pav Bhaji", "menu_items": [
        {"name": "Pav Bhaji", "cuisine": "Indian Street Food", "price": 9.99},
        {"name": "Paneer Bhurji Pav", "cuisine": "Indian Street Food", "price": 10.99},
        {"name": "Misal Pav", "cuisine": "Indian Street Food", "price": 8.99},
        {"name": "Vada Pav", "cuisine": "Indian Street Food", "price": 7.99},
        {"name": "Bhel Puri", "cuisine": "Indian Street Food", "price": 6.99}
    ]},
    {"name": "The Dango Cake Shop", "menu_items": [
        {"name": "Chocolate Truffle Cake", "cuisine": "Dessert", "price": 19.99},
        {"name": "Red Velvet Cupcake", "cuisine": "Dessert", "price": 12.99},
        {"name": "Strawberry Cheesecake", "cuisine": "Dessert", "price": 15.99},
        {"name": "Matcha Green Tea Mochi", "cuisine": "Dessert", "price": 9.99},
        {"name": "Blueberry Macarons", "cuisine": "Dessert", "price": 14.99}
    ]},
    {"name": "Cheezylicious Cafe", "menu_items": [
        {"name": "Classic Cheeseburger", "cuisine": "American", "price": 10.99},
        {"name": "Four Cheese Pizza", "cuisine": "Italian", "price": 14.99},
        {"name": "Cheese Stuffed Quesadilla", "cuisine": "Mexican", "price": 12.99},
        {"name": "Cheese Fondue", "cuisine": "International", "price": 18.99},
        {"name": "Cheese Platter", "cuisine": "Appetizer", "price": 20.99}
    ]},
]

export default restaurant_data;
