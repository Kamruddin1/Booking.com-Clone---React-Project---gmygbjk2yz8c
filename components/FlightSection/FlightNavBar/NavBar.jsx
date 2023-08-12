import React, { useState } from "react";
import { FlightList } from "../flightChartBoard/FlightList";

const NavBar = ({setFilteredFlights}) => {
  const [searchValueOne, setSearchValueOne] = useState("");
  const [searchValuesTwo, setSearchValuesTwo] = useState("");

  const handleflightFilterFrom = (event) => {
    setSearchValueOne(event.target.value);
  };
  const handleflightFilterTo = (event) => {
    setSearchValuesTwo(event.target.value);
  };

  const handleClickFlight = () => {
      const FlightFileredOne = FlightList.filter((flight) =>
        flight.location_one.toLowerCase().includes(searchValueOne.toLowerCase())
      )
      const FlightFileredTwo = FlightList.filter((flight) =>
        flight.location_two.toLowerCase().includes(searchValuesTwo.toLowerCase())
      )
      setFilteredFlights(FlightFileredOne)
      setFilteredFlights(FlightFileredTwo)
      setSearchValueOne('')
      setSearchValuesTwo('')

  };

  return (
    <>
      <div className="container">
        <div className="title">
          <div className="airbus">
            {/* <div className="airbus-logo">
            <img
              src="https://airbus-master.vercel.app/static/media/logo.cb429cff81fdfd34a5e1.webp"
              
              alt="airbus-logo"
            /> */}
            {/* <img className="airbus-logo"src="https://logosmarcas.net/wp-content/uploads/2020/07/Airbnb-Logo.png" alt="" /> */}
            {/* <h1><Link to="/">BOOKING.COM</Link></h1>
            
          </div> */}
          </div>
        </div>
        <div className="airbus-search-form">
          <div className="flight_title">
            <h1>Find your next Flights </h1>
            <p>Search deals on flights, hotels, and much more...</p>
          </div>
          <div className="distination">
            <p id="airbus-text">Let the journey begin</p>

            <div className="searchForm">
              <div>
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  placeholder="Amsterdam"
                  id="from"
                  onChange={handleflightFilterFrom}
                  value={searchValueOne}
                />
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  placeholder="Stckholm"
                  id="to"
                  onChange={handleflightFilterTo}
                  value={searchValuesTwo}
                />
              </div>
              <div>
                <label htmlFor="depart">Depart</label>
                <input type="date" placeholder="mm/dd/yyyy" id="depart" />
              </div>
              <div>
                <label htmlFor="return">Return</label>
                <input type="date" placeholder="mm/dd/yyyy" id="return" />
              </div>

              <div>
                <button onClick={handleClickFlight} id="search-btn">
                  SEARCH FLIGHTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
