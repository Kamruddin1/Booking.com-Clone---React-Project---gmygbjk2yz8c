import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { HotelList } from "../database/HotelList";
import { ThreeCircles } from "react-loader-spinner";

const Hotel = ({ filteredHotels, setHotelDate }) => {
  const [hotel, setHotels] = useState([]);
  const [loader, setLoader] = useState(false);
  const [hotelDetails, setHotelDetails] = useState("");

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        setHotels(HotelList);
        setLoader(false);
      } catch (error) {
        console.error("Technical problems", error);
      }
    };
    fetchData();
  }, []);

  const handleItemClick = (id) => {
    const findHotelDetails = filteredHotels.find((item) => item.id === id);
    setHotelDetails(findHotelDetails);
    setHotelDate(findHotelDetails);
    console.log(findHotelDetails);
  };

  return (
    <div className="main-container">
      <div className="hotel">
        {loader ? (
          <div className="loading">
            {/* we have used loading  */}
            <ThreeCircles />
          </div>
        ) : (
          filteredHotels &&
          filteredHotels.map((img) => (
            <div className="box" key={img.id}>
              {/* dynamically generate id of hotels */}
              <Link
                to={{
                  pathname: `/payment/${img.id}`,
                  state: { hotels: filteredHotels },
                }}
                className="link"
                onClick={() => HandleItemClick(img.id)}
              >
                <img src={img.img} alt="" />
                <div className="cityName">
                  <h1>{img.city}</h1>
                  <p>{img.price}</p>
                  {/* <div className="paymentText">Payment</div> */}
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hotel;
