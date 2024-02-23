import React, { useState } from 'react';
import { GrCart } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [loginname, setloginname] = useState('Login');

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' alt='logo' src='https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png'></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li><NavLink to="/" style={{textDecoration:"none",color:"black"}}>Home</NavLink></li>
          <li><NavLink to="/About"  style={{textDecoration:"none",color:"black"}}>About Us</NavLink></li>
          <li><NavLink to="/Contact"  style={{textDecoration:"none",color:"black"}}>Contact Us</NavLink></li>
          <li><GrCart className='cart' /></li>
          <button className='login' onClick={() => {
            loginname === 'Login' ? setloginname('Logout') : setloginname('Login');
          }}>{loginname}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;


