import React from 'react';
import { IoMdStar } from "react-icons/io";

const RestaurantCard = (props) => {
  const { resData } = props;



  const { name, cuisines, avgRating, costForTwo } = resData.data;

  return (
    <div className='res-card'>
      <img
        className='res-logo'
        alt='img'
        src=
        {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId
               }
      />
          <div className='first'>
             <h3>{name}</h3> 
             <p className='green'> 
             <div>{avgRating}</div> 
             <div> <IoMdStar/></div>
             
               </p>
          </div>
          <div className='second'>
          <p>{cuisines.join(',')}</p>
          <h3> ₹{costForTwo / 100}</h3>
          </div>
        
     
      
      
      
    </div>
  );
};

export default RestaurantCard;