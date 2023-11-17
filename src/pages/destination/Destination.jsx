import { Box, Breadcrumbs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PopularTour from "./PopularTour";
import Activities from "./Activities";
import Footer from "../Footer";
import AboutDestination from "./AboutDestination";

const Destination = () => {
  return (
    <>
      <Box className="destination">
        <Toolbar />

        <Box
          className="container"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={40}
          color={"white"}
          fontWeight={"bold"}
          flexDirection={"column"}
          pt={5}
        >
          United Kingdom
          <Box>
            <Breadcrumbs aria-label="breadcrumb" color="white">
              <Link style={{ textDecoration: "none" }} to="/">
                <Typography color="#EC2008">Home</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/destination">
                <Typography color="white">Destination</Typography>
              </Link>
              <Typography color="white"> United Kingdom</Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
      <Box>
        <AboutDestination />
      </Box>
      <Box>
        <PopularTour />
      </Box>
      <Box>
        <Activities />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Destination;
