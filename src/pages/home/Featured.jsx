/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Divider } from "@mui/material";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import product3 from "../../assets/product3.jpg";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CardHeader from "@mui/material/CardHeader";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const card1 = [
  {
    img: img1,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: img2,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: img3,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: img4,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: img5,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: img3,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: product3,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
  {
    img: product3,
    title1: "Budapest ,Hungary",
    title2: "Wonders of the West Coast & Kimberley",
  },
];



const Featured = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Box className="container" backgroundColor="#09235a" py={5}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"left"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"#fff"}
          className="font"
        >
          Tours
        </Box>
        <Box
          fontSize={30}
          fontWeight={"bold"}
          color={"#fff"}
          display={"flex"}
          justifyContent={"left"}
        >
          Featured Tours
        </Box>
      </Box>

      <Box py={5}>
        
          
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
                          <Box mt={.2} pr={.3}>
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
                    py={2}
                  >
                    <Box fontSize="14px" color="text.secondary"> Starting From</Box>
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

export default Featured;
