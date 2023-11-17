import Slider from "react-slick";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Toolbar } from "@mui/material";

const team = [
  {
    img: img1,
    title1: "Antoni Shkraba",
    title2: "Founder & Director",
  },
  {
    img: img2,
    title1: "Antoni Shkraba",
    title2: "Founder & Director",
  },
  {
    img: img3,
    title1: "Antoni Shkraba",
    title2: "Founder & Director",
  },
  {
    img: img4,
    title1: "Antoni Shkraba",
    title2: "Founder & Director",
  },
  {
    img: img5,
    title1: "Antoni Shkraba",
    title2: "Founder & Director",
  },
  {
    img: img6,
    title1: "Antoni Shkraba",
    title2: "Founder & Director",
  },
];

const Team = () => {
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
        <Box display={"flex"} justifyContent={"center"} flexDirection={'column'} alignItems={'center'}>
          <Box
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            color={"#EC2008"}
            className="font"
          >
            Team
          </Box>
          <Box fontSize={30} fontWeight={"bold"}>
           Our Amazing Team
          </Box>
        </Box>
        <Toolbar />

        <Slider {...settings}>
          {team.map((item) => (
            <Box py={2}>
              <Box px={2}>
                <Box backgroundColor="#E9EEEE">
                  <img src={item.img} height={200} width={"100%"} />
                  <Box fontWeight={"bold"} px={1} pt={1}>
                    {item.title1}
                  </Box>
                  <Box fontSize={16} px={1} py={1}>
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

export default Team;
