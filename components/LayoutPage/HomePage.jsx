import React, { useState } from "react";

import Hotel from "../HotelSection/Hotel";
import { HotelList } from "../database/HotelList";
import { Link,useLocation } from "react-router-dom";
import Footer from '../../footer/Footers'



const HomePage = () => {
  // const location = useLocation();
  // console.log(location)
  return (
    <>
      {/* <HomeNavBar/> */}
    {/* <div>
      <p className="userName"
      >Welcom {location.state.userName} </p>
    </div> */}
  
      <div className="main-container">

       
        <div className="hotel">
          {HotelList.map((img, index) => (
            <div className="box" key={index}>
              {/* dynamically generate id of hotels */}
              <Link to='stay' className="link">
              <img src={img.img} alt="" />
              <div className="cityName">
                <h1>{img.city}</h1>
                <p>{img.price}</p>
               
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
