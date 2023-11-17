/* eslint-disable react/jsx-key */

import { Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img3 from "../../assets/2.jpg";
import img4 from "../../assets/3.jpg";
import img5 from "../../assets/4.jpg";
import img6 from "../../assets/5.jpg";
import img7 from "../../assets/6.jpg";
import img8 from "../../assets/7.jpg";
import img9 from "../../assets/8.jpg";
import img10 from "../../assets/9.jpg";
const card1 = [
  {
    img: img3,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img4,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img5,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img6,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img7,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img8,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img9,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
  {
    img: img10,
    title1: "Budapest, Hungary",
    title2: "High Speed Thanes River RIB Cruise in London",
  },
];

const Activities = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Box className="container" py={5}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box fontSize={30} fontWeight={"bold"}>
          Activites in UK
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box px={1} pt={0.5}>
            See All
          </Box>{" "}
          <ArrowForwardIcon fontSize="12px" />
        </Box>
      </Box>

      <Box py={2}>
        <Slider {...settings}>
          {card1.map((item) => (
            <Box py={5}>
              <Card sx={{ maxWidth: 280 }}>
                <Box position="relative">
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.title1}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontSize={18}
                      fontWeight={"bold"}
                      pt={1.5}
                    >
                      {item.title2}
                    </Typography>
                  </CardContent>
                  <Box
                    position="absolute"
                    top={10}
                    right={10}
                    height={30}
                    width={30}
                    borderRadius={15}
                    backgroundColor="white"
                  >
                    <Box
                      mt={1}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <FavoriteBorderOutlinedIcon
                        fontSize="5px"
                        sx={{ color: "#2D2727" }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box px={2} py={1}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box display={"flex"}>
                      <Box
                        height={20}
                        width={50}
                        backgroundColor="#F39B0B"
                        borderRadius={1}
                        display={"flex"}
                        px={0.5}
                      >
                        <Box mt={0.2} pr={0.3}>
                          <StarPurple500OutlinedIcon fontSize="10px" />
                        </Box>
                        <Box fontSize="14px"> 4.8</Box>
                      </Box>
                      <Box fontSize="14px" pl={0.5} color="text.secondary">
                        15 reviews
                      </Box>
                    </Box>

                    <Box display={"flex"}>
                      <Box mt={0.2}>
                        <AccessTimeOutlinedIcon fontSize="10px" />
                      </Box>
                      <Box fontSize="14px" px={1} color="text.secondary">
                        {" "}
                        7days
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box px={2}>
                  {" "}
                  <Divider />
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  px={2}
                  py={1}
                >
                  <Box fontSize="14px" color="text.secondary">
                    {" "}
                    Starting From
                  </Box>
                  <Box fontSize="14px" fontWeight={"bold"}>
                    $520
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Activities;
