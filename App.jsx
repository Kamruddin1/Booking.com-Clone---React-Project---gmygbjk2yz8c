import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/LayoutPage/HomePage";
import NavBar from "./components/FlightSection/FlightNavBar/NavBar";
import HotelLayOut from "./components/HotelSection/hotelLayout/HotelLayOut";
import Login from "./components/ResisterLogin/Login";
import HomeNavBar from "./components/LayoutPage/HomeNavBar";
import NopageFound from "./components/NoPageFound/NopageFound";
import FlightStatus from "./components/flightbookingStatus/FlightStatus";
import FlightLayout from "./components/FlightSection/flightLayout/FlightLayout";
import SignUp from "./components/ResisterLogin/SingUp";
import { useState } from "react";
import MainLayOut from "./MainLayOut";
function App() {
  return (
    <>
      {/* <HomeNavBar /> */}

      <Routes >
       
        <Route
          path="/"
          element={
            <MainLayOut>
              <HomePage />
            </MainLayOut>
          }
        />
    

        <Route
          path="flightlist"
          element={
            <MainLayOut>
              <FlightLayout />
            </MainLayOut>
          }
        />
        <Route
          path="stay"
          element={
            <MainLayOut>
              <HotelLayOut />
            </MainLayOut>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="flightstatus" element={<FlightStatus />} />
        <Route path="*" element={<NopageFound />} />
        <Route path="/payment/:id" element={<FlightStatus />} />
      </Routes>
    </>
  );
}

export default App;
