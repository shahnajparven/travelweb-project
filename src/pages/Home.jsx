import { Box } from "@mui/material";
import  Banner  from "./Banner";
import Footer from "./Footer";
import TourPick from "./home/TourPick";
import PlanTrip from "./home/PlanTrip";
import Featured from "./home/Featured";
import Flexible from "./home/Flexible";
import Customer from "./home/Customer";
import BookingPlan from "./home/BookingPlan";
import TravelGuide from "./home/TravelGuide";
import HomeDestination from "./home/HomeDestination";

const Home = () => {
  return (
    <Box overflow='hidden'>    
    <Banner/>
    <TourPick/>
    <PlanTrip/>
    <HomeDestination/>
    <Featured/>
    <Flexible/>
    <Customer/>
    <BookingPlan/>
    <TravelGuide/>
    <Footer />
    </Box>
  )
}

export default Home