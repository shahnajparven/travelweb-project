/* eslint-disable react/jsx-key */
import { Box, Grid } from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const choosecard = [
  {
    img: <LocalAtmIcon/>,
    title: "Cheap Rate",
    info: "Credibly target visionary portals than prospective human capital.",
  },
  {
    img: <LocalAtmIcon/>,
    title: "Cheap Rate",
    info: "Credibly target visionary portals than prospective human capital.",
  },
  {
    img: <LocalAtmIcon/>,
    title: "Cheap Rate",
    info: "Credibly target visionary portals than prospective human capital.",
  },
  {
    img: <LocalAtmIcon/>,
    title: "Cheap Rate",
    info: "Credibly target visionary portals than prospective human capital.",
  },
  {
    img: <LocalAtmIcon/>,
    title: "Cheap Rate",
    info: "Credibly target visionary portals than prospective human capital.",
  },
  {
    img: <LocalAtmIcon/>,
    title: "Cheap Rate",
    info: "Credibly target visionary portals than prospective human capital.",
  },
];
const ChooseUs = () => {
  return (
    <Box backgroundColor="#E9EEEE" height={"auto"} py={8}>
      <Box
        className="container"
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {" "}
        <Box
          display={"flex"}
          justifyContent={"left"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"#EC2008"}
          className="font"
        >
          About us
        </Box>
        <Box
          fontSize={30}
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"left"}
        >
          Why Select Us for Your Vacation
        </Box>
        <Box>
          <Grid container my={1} spacing={5} height="auto">
            {choosecard.map((item)=>(

          
            <Grid item lg={4} md={6} xs={12}>
              <Box height={150} width={380} backgroundColor="white" px={2} pt={2}>
                <Box>{item.img}</Box>
                <Box fontWeight={'bold'} py={1}>{item.title}</Box>
                <Box>{item.info}</Box>
              </Box>
            </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseUs;
