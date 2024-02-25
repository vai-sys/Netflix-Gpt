// Header.jsx
import React, { useState } from 'react';
import { GrCart } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [loginname, setloginname] = useState('Login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className='container'>
      <div className='logo-container'>
        <img className='logo' alt='logo' src='https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png'></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Network Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><NavLink to="/" className='nav-link' activeClassName='active'>Home</NavLink></li>
          <li><NavLink to="/About" className='nav-link' activeClassName='active'>About Us</NavLink></li>
          <li><NavLink to="/Contact" className='nav-link' activeClassName='active'>Contact Us</NavLink></li>
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






