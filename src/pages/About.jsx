import { Box, Breadcrumbs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AboutUs from "./about/aboutUs";
import ChooseUs from "./about/ChooseUs";
import Footer from "./Footer";
import Team from "./about/Team";
import AboutTestimonial from "./about/AboutTestimonial";

const About = () => {
  return (
    <>
      <Box className="aboutPage">
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
          About
          <Box>
            <Breadcrumbs aria-label="breadcrumb" color="white">
              <Link style={{ textDecoration: "none" }} to="/">
                <Typography color="#EC2008">Home</Typography>
              </Link>
              <Typography color="white">About</Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
      <Box>
        <AboutUs />
      </Box>
      <Box>
        <ChooseUs />
      </Box>
      <Box>
        <Team />
      </Box>
      <Box>
        <AboutTestimonial/>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default About;
