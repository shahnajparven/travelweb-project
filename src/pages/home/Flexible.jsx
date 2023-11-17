import { Box, Button } from "@mui/material";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner4.jpg";
import img3 from "../../assets/img3.jpg";
const Flexible = () => {
  return (
    <Box className="container" backgroundColor="#E9EEEE" py={15} height={'auto'}>
      <Box display={"flex"} justifyContent={"space-between"} flexDirection={{lg:'row',sm:'column',xs:'column'}}>
        <Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              display={"flex"}
              justifyContent={"left"}
              fontSize={"1.5rem"}
              fontWeight={"bold"}
              color={"#09235a"}
              className="font"
            >
              Why Choose Us
            </Box>
            <Box
              fontSize={30}
              fontWeight={"bold"}
              S
              display={"flex"}
              justifyContent={"left"}
            >
              Plan Your Trip With Trisog
            </Box>
          </Box>
          <Box py={2}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#2D2727",
                color: "#2D2727",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#2D2727",
                  borderColor: "#2D2727",
                  boxShadow: "none",
                  color: "white",
                },
                "&:focus": {
                  boxShadow: "#F6F4EB",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box>
            <Box display={"flex"} gap={2} py={2}>
              <Box>
                <Box height={30} width={30} borderRadius={15} backgroundColor='#F39B0B' fontSize={25} fontWeight={'bold'} className='font'>120+</Box>
                <Box  py={1}>Total Destination</Box>
              </Box>

              <Box>
                <Box height={30} width={30} borderRadius={15} backgroundColor='#F39B0B' fontSize={25} fontWeight={'bold'} className='font'>12k+</Box>
                <Box  py={1}>Total Travelers</Box>
              </Box>
            </Box>
            <Box display={"flex"} gap={2}>
              <Box>
                <Box height={30} width={30} borderRadius={15} backgroundColor='#F39B0B' fontSize={25} fontWeight={'bold'} className='font'>500+</Box>
                <Box  py={1}>Travel Packages</Box>
              </Box>
              <Box>
                <Box height={30} width={30} borderRadius={15} backgroundColor='#F39B0B' fontSize={25} fontWeight={'bold'} className='font'>7k+</Box>
                <Box py={1}>Positive Reviews</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box position={"relative"}>
          <Box display={"flex"}>
            <Box p={3} mt={3}>
              <img className="effect" src={img1} height={180} width={"100%"} />
            </Box>
            <Box>
              <img className="effect" src={img2} height={160} width={"100%"} />
            </Box>
          </Box>
          <Box position={"absolute"} top={185} right={55}>
            <img className="effect" src={img3} height={200} width={"100%"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Flexible;
