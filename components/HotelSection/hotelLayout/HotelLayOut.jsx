import React,{useState} from 'react'
import HotelNavBarLowersection from '../../LayoutPage/HomeNavBarLowersection'
import Hotel from '../Hotel'
import { HotelList } from '../../database/HotelList'
import HomeNavBar from "../../../components/LayoutPage/HomeNavBar";
import Footers from '../../../footer/Footers';




const HotelLayOut = () => {
  const [filteredHotels, setFilteredHotels] = useState(HotelList);
  
   
  return (
    <div>
      {/* <HomeNavBar/> */}
      {/* send the props from hotelLayout to HomeNavrbar */}
        <HotelNavBarLowersection  setFilteredHotels={setFilteredHotels}/>
        <Hotel filteredHotels={filteredHotels} />
        <Footers/>
        
    </div>
  )
}

export default HotelLayOut