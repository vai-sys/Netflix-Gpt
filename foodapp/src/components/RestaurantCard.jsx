import React from 'react';

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

      <p>{name}</p>
      <p>{cuisines.join(',')}</p>
      <p>{avgRating}</p>
      <p>{costForTwo / 100}</p>
    </div>
  );
};

export default RestaurantCard;




