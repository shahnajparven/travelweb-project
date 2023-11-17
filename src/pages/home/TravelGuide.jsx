/* eslint-disable react/jsx-key */
import { Box, Divider, Grid } from "@mui/material";
import img2 from "../../assets/1.jpg";
import img1 from "../../assets/3.jpg";
import img4 from "../../assets/6.jpg";
import img5 from "../../assets/img3.jpg";
import img6 from "../../assets/7.jpg";
const updates = [
  {
    img: img1,
    title: "July 13,2023 .Admin",
    message: "The  Impact of Covid-19 on travel & tourism industry",
  },
  {
    img: img2,
    title: "July 13,2023 .Admin",
    message: "The  Impact of Covid-19 on travel & tourism industry",
  },
  {
    img: img6,
    title: "July 13,2023 .Admin",
    message: "The  Impact of Covid-19 on travel & tourism industry",
  },
  {
    img: img4,
    title: "July 13,2023 .Admin",
    message: "The  Impact of Covid-19 on travel & tourism industry",
  },
];
const TravelGuide = () => {
  return (
    <Box className="container" py={5}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"#09235a"}
          className="font"
        >
          Updates
        </Box>
        <Box fontSize={30} fontWeight={"bold"}>
          Latest Travel Guide
        </Box>
      </Box>
      
        <Box py={2}>
          <Grid container my={2} spacing={3} height="auto">
          {updates.map((item) => (
            <Grid item lg={6} md={12} xs={12}>
              <Box display={'flex'} gap={2}>
                <Box>
                  <img src={item.img} height={100} width={'100%'} />
                </Box>
                <Box>
                <Box color={'#423F3F'} fontSize={14}> {item.title}</Box>
                <Box fontSize={17} fontWeight={'bold'} py={2}>{item.message}</Box>
                </Box>
              </Box>
            </Grid>
            ))}
          </Grid>
        </Box>
      <Divider/>
      <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} gap={4} py={3}>
        <Box>  <img src={img2} height={150} width={'100%'} /></Box>
        <Box>  <img src={img6} height={150} width={'100%'} /></Box>
        <Box>  <img src={img5} height={150} width={'100%'} /></Box>
        <Box>  <img src={img1} height={150} width={'100%'} /></Box>
       
      </Box>
    </Box>
  );
};

export default TravelGuide;
