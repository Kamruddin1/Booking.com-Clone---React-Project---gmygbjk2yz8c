import React, { useState } from 'react';
import './style.css';
import { HotelList } from '../database/HotelList';

const HomeNavBarLowersection = ( props) => {
  // search the user value
  const [searchValue, setSearchValue] = useState('');
 

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    
  };
//   filter the city of hotel
  const handleSearchSubmit = () => {
    const filtered = HotelList.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchValue.toLowerCase())
    );
    props.setFilteredHotels(filtered);
    setSearchValue('')
  
  };
  
  return (
    <>
    {/* lover section navBar */}
      <div className='lower_navbar'>
        <div className='hotel_stay'>
          <div className='hotel_title'>
            <h1 className='stay_title'>Find your next stay</h1>
            <p className='stay_title_two'>Search deals on hotels, homes, and much more...</p>
          </div>
          <div className='search_hotel_stay'>
            {/* input field */}
            <input
              className='city_name'
              type='text'
              placeholder='Search city...'
              onChange={handleSearchChange}
              value={searchValue}
              // pass the value
            />
            <input className='date' type='date' />
            {/* search function handle */}
            <button id='hotel_search_btn' onClick={handleSearchSubmit}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBarLowersection;
