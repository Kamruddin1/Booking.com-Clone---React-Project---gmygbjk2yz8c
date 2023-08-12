import React, { useEffect, useState } from "react";
import { FlightList } from "./FlightList";
// import FlightStatus from '../../flightbookingStatus/FlightStatus'
import { Audio } from "react-loader-spinner";

import "./style.css";
import { Link } from "react-router-dom";


const FlightChartBoard = ({filteredFlights}) => {  
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));

        setFlights(FlightList);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
      setLoading(false)
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container-airBus">
        <div className="card">
          <div className="chartBoard">
            {loading ?  (
              <div className="loading">
                <Audio />
              </div>
            ) : (
              <div>
                {filteredFlights.map((list, index) => {
                  return (
                    <div className="chart" key={index}>
                   
                      <div>{list.flightName}</div>
                      <div>{list.location_one}</div>
                      <div>
                        <div>{list.date}</div>
                        <div style={{ color: "green" }}>{list.time}</div>
                        <div>{list.hours}</div>
                      </div>
                      <div>{list.location_two}</div>
                      <div>
                        <div style={{ margin: "10px" }}>{list.price}</div>
                        <div>
                          <Link to={`/payment/${list.id}`}>
                            <button>BOOK NoW</button>
                          </Link>
                        </div>
                      </div>
                    
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="airbus-img">
            <img
              src="https://airbus-master.vercel.app/static/media/flightMap.2a637138dcb4bcc025ac.png"
              alt=""
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FlightChartBoard;
