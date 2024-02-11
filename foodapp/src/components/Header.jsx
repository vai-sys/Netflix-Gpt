import React from 'react';
import { GrCart } from "react-icons/gr";

const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
         <img className='logo' alt='logo' src='https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png'></img>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li >< GrCart  className='cart'/></li>
            </ul>

        </div>
      
    </div>
  )
}

export default Header

