import React from "react";
import HomeNavBar from "./components/LayoutPage/HomeNavBar";

const MainLayOut = (props) => {
  return (
    <>
    <HomeNavBar/>
    {props.children}
    </>
  )
};

export default MainLayOut;
