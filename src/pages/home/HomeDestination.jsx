/* eslint-disable react/jsx-key */


import { Box, Toolbar } from "@mui/material";
import Slider from "react-slick";
import img1 from "../../assets/6.jpg";
import img2 from "../../assets/7.jpg";
import img3 from "../../assets/8.jpg";
import img4 from "../../assets/9.jpg";
import img5 from "../../assets/img3.jpg";
import img6 from "../../assets/6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const destinationCard = [
  {
    img: img1,
    title1: "United Kingdom",
    title2: "174,6888 Travelers",
    size: 0,
  },
  {
    img: img2,
    title1: "United Kingdom",
    title2: "174,6888 Travelers",
    size: 5,
  },
  {
    img: img3,
    title1: "United Kingdom",
    title2: "174,6888 Travelers",
    size: 0,
  },
  {
    img: img4,
    title1: "United Kingdom",
    title2: "174,6888 Travelers",
    size: 5,
  },
  {
    img: img5,
    title1: "United Kingdom",
    title2: "174,6888 Travelers",
    size: 0,
  },
  {
    img: img6,
    title1: "United Kingdom",
    title2: "174,6888 Travelers",
    size: 5,
  },
];

const HomeDestination = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Box py={6}>
      <Box className="container">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Box
              fontSize={"1.5rem"}
              fontWeight={"bold"}
              color={"#09235a"}
              className="font"
            >
              Destination
            </Box>
            <Box fontSize={30} fontWeight={"bold"}>
             Top Destination
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box px={1} pt={.5}>See All</Box> <ArrowForwardIcon fontSize="12px"/>
          </Box>
        </Box>
        <Toolbar />

        <Slider {...settings}>
          {destinationCard.map((item) => (
            <Box py={5}>
              <Box px={2} pt={item.size}>
                <Box backgroundColor="#E9EEEE">
                  <img src={item.img} height={200} width={"100%"} />
                  <Box fontWeight={"bold"} py={1} px={1}>
                    {item.title1}
                  </Box>
                  <Box fontSize={16} px={1}>
                    {item.title1}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HomeDestination;
