

import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurant_data from '../utils/Mockdata';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import CardShimmer from './Shimmer';

const Body = () => {
  const [listOfRestau, setListOfRestau] = useState(restaurant_data);
  const [searchText, setSearchText] = useState('');

  const handleFilter = () => {
    const filteredList = restaurant_data.filter((res) => res.data.avgRating > 4);
    setListOfRestau(filteredList);
  };

  const handleSearch = () => {
    const filteredRestu = restaurant_data.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestau(filteredRestu);
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return<h1>Looks like you are offline!</h1>
  if (listOfRestau==null) return <CardShimmer/>

  return (
    <>
      <div
        className='body'
        style={{
          padding: '20px',
        }}
      >
        <div
          className='filter'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <button
            className='filter-btn'
            onClick={handleFilter}
            style={{
              backgroundColor: 'green',
              color: '#fff',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginRight:"20px",
            }}
          >
            Top Rated Restaurants
          </button>
          <div
            className='Search'
            style={{
              display: 'flex',
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                type='text'
                className='Search-box'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  marginRight: '10px',
                }}
              />
              <button
                type='submit'
                style={{
                  backgroundColor: 'green',
                  color: '#fff',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                 
                  
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div
          className='res-container'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {listOfRestau.map((restaurant) => (
            <Link
              to={'/restaurants/' + restaurant.data.id}
              key={restaurant.data.id}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <RestaurantCard resData={restaurant}  />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;


 


