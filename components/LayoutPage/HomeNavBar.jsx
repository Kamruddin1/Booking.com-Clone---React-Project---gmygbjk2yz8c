import React, { useState } from "react";
import "./style.css";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import BedTwoToneIcon from "@mui/icons-material/BedTwoTone";
import FlightTakeoffTwoToneIcon from "@mui/icons-material/FlightTakeoffTwoTone";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AttractionsSharpIcon from "@mui/icons-material/AttractionsSharp";
import AirportShuttleSharpIcon from "@mui/icons-material/AirportShuttleSharp";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const HomeNavBar = () => {
  const [loginTogle, setLoginTogle] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("loggin");
    navigate("login");
    setLoginTogle(!loginTogle);
  };

  const stay = () => {
    navigate("/stay");
  };

  const flight = () => {
    navigate("/flightlist");
  };

  const isLoggedIn = !!localStorage.getItem("loggin");

  return (
    <>
      <div className="container-homeNav">
        <div className="navbar">
          <div className="booking">
            <div className="bookingCom">
              {/* ... your booking.com logo here ... */}
              <p>Booking.com</p>
            </div>

            <div className="resister-login">
              <div>INR</div>
              <div>
                {/* ... your India flag logo here ... */}
              </div>
              <div className="help" title="Customer Service help">
                <Link to="*" className="sign">
                  <LiveHelpOutlinedIcon />
                </Link>
              </div>
              <div>
                <Link to="*" className="sign">
                  List of your Property
                </Link>
              </div>
              <div>
                {isLoggedIn ? (
                  <button onClick={logOut}>Logout</button>
                ) : (
                  <button>
                    <Link className="sign" to="/login">
                      Register
                    </Link>
                  </button>
                )}
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>

          <div className="flight-hotel-section">
            <div className="section">
              <div>
                <Link to="/">
                  <div className="section-list">
                    <HomeIcon />
                  </div>
                </Link>
              </div>
              <div title="Go to Home Page">
                <div onClick={stay} className="section-list">
                  <BedTwoToneIcon />
                  Stays
                </div>
              </div>
              <div>
                <div onClick={flight} className="section-list">
                  <FlightTakeoffTwoToneIcon />
                  Flights
                </div>
              </div>
              <div>
                <Link to="*" className="section-list">
                  <DirectionsCarFilledIcon />
                  Car rentals
                </Link>
              </div>
              <div>
                <Link to="*" className="section-list">
                  <AttractionsSharpIcon />
                  Attraction
                </Link>
              </div>
              <div>
                <Link to="*" className="section-list">
                  <AirportShuttleSharpIcon />
                  AirPort Taxis
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
