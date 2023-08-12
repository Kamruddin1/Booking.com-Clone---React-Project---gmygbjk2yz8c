import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import swal from "sweetalert";
import { Flag } from "@mui/icons-material";

const FlightStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [home, setHome] = useState("");
  const [homeTitle, setHomeTitle] = useState("");
  // const [selectedHotel, setSelectedHotel] = useState(null);

  const homepage = () => {
    navigate("/");
  };

  const handlePay = () => {
 
    if (!cardName || !cardNumber || !expiryDate || !cvv) {
      swal({
        title: "Error",
        text: "Please fill in all the payment details.",
        icon: "error",
        button: "OK",
      });
      return; 
    }

    setLoading(true);
    setTimeout(() => {
      swal({
        title: "Payment successfully",
        text: "Download",
        icon: "success",
        button: "Go to Home Page",
      });

      setLoading(false);
      setCardName("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
      setHome(<HomeIcon />);
      setHomeTitle("Go To Home Page");
    }, 3000);
  };

  const getPaymentValueName = (e) => {
    setCardName(e.target.value);
  };

  const getPaymentValueNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const getPaymentValueExpiry = (e) => {
    setExpiryDate(e.target.value);
  };

  const getPaymentValueCVV = (e) => {
    setCvv(e.target.value);
  };

  // const { state } = location;
  // const filteredHotels = state?.hotels || [];

  // useEffect(() => {
  //   const hotelId = location.pathname.split("/payment/")[1];
  //   const foundHotel = filteredHotels.find((hotel) => hotel.id === parseInt(hotelId));
  //   setSelectedHotel(foundHotel);
  // }, [location.pathname, filteredHotels]);

  return (
    <div className="bookingStatus-container">
      <div onClick={homepage} className="homePage">
        {home}
        <p>{homeTitle} </p>
      </div>
      <div className="outer-bookingStatus">
        <div className="inner-bookingStatus">
          <div>
            <h1>Fare Summary</h1>
          </div>
          <div className="fare-summery">
            <div>
              <h1>Base Fare</h1>
              <h1>Fee & Surcharges</h1>
              <h1>Total Amount</h1>
            </div>
            <div>
              {/* {selectedHotel?.price} */}
              <h1>₹8280</h1>
              <h1>₹740</h1>
              {/* {selectedHotel?.price + 740} */}
              <h1>₹9020</h1>
            </div>
          </div>
        </div>
        <div className="payAmount-bookingStatus">
          <div>
            <h1>Payment Method</h1>
          </div>
          <div className="input-field">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Name on card"
                  onChange={getPaymentValueName}
                  value={cardName}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Card Number"
                  onChange={getPaymentValueNumber}
                  value={cardNumber}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Expiry Date"
                  onChange={getPaymentValueExpiry}
                  value={expiryDate}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="CVV"
                  onChange={getPaymentValueCVV}
                  value={cvv}
                />
              </div>
            </form>

            <button onClick={handlePay}>
              {loading ? "Processing..." : "Pay"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightStatus;
