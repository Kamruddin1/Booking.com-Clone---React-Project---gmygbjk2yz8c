import React,{useState} from 'react'
import NavBar from '../FlightNavBar/NavBar'
import FlightChartBoard from '../flightChartBoard/FlightChartBoard'
import { FlightList } from '../flightChartBoard/FlightList'
import HomeNavBar from '../../LayoutPage/HomeNavBar'


const FlightLayout = () => {
    const [filteredFlights, setFilteredFlights] = useState(FlightList);
  return (
  
   <>
   {/* <HomeNavBar/> */}
   <NavBar setFilteredFlights={setFilteredFlights} />
   <FlightChartBoard filteredFlights={filteredFlights}/>

   </>
  )
}

export default FlightLayout