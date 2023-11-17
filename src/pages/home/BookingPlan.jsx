import { Box, Button, Typography } from "@mui/material";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const BookingPlan = () => {
  return (
    <>
      <Box className="booking" height={"auto"} width={"100%"} py={10}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ lg: "row", sn: "column", xs: "column" }}
          className="container"
          gap={15}
        >
          <Box width={{ lg: "50%", xs: "100%" }}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box>
                <PlayCircleOutlinedIcon
                  fontSize="large"
                  sx={{ color: " #F39B0B" }}
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"left"}
                fontSize={"1.5rem"}
                fontWeight={"bold"}
                color={"#F39B0B"}
                className="font"
              >
                Are you Ready to Travel?
              </Box>
              <Box
                fontSize={30}
                fontWeight={"bold"}
                color={"white"}
                display={"flex"}
                justifyContent={"left"}
              >
                Tevily is a World Leading Online Tour Boking Platform
              </Box>
              <Box py={2}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#2D2727",
                      borderColor: "#fff",
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
            </Box>
          </Box>
          <Box
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            width={{ lg: "50%", xs: "100%" }}
          >
            <Box display={"flex"} gap={2} my={2}>
              <Box>
                <Box
                  height={150}
                  width={150}
                  backgroundColor="white"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  lineHeight={1.5}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={50}
                    width={50}
                    borderRadius={10}
                    backgroundColor="#F39B0B"
                  >
                    <Box  display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}><CatchingPokemonIcon/></Box>
                  </Box>

                  <Typography variant="Box" pt={1}> Wildlife</Typography>
                  <Typography variant="Box" color={"#65605F"}>
                    Tours
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"}>
                <Box
                  height={150}
                  width={150}
                  backgroundColor="white"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  lineHeight={1.5}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={50}
                    width={50}
                    borderRadius={10}
                    backgroundColor="#F39B0B"
                  >
                    <Box  display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}><CatchingPokemonIcon/></Box>
                  </Box>

                  <Typography variant="Box" pt={1}> Paragliding</Typography>
                  <Typography variant="Box" color={"#65605F"}>
                    Tours
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} gap={2}>
              <Box>
                <Box
                  height={150}
                  width={150}
                  backgroundColor="white"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  lineHeight={1.5}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={50}
                    width={50}
                    borderRadius={10}
                    backgroundColor="#F39B0B"
                  >
                    <Box  display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}><CatchingPokemonIcon/></Box>
                  </Box>

                  <Typography variant="Box"> Adventures</Typography>
                  <Typography variant="Box" color={"#65605F"}>
                    Tours
                  </Typography>
                </Box>
              </Box>

              <Box display={"flex"}>
                <Box
                  height={150}
                  width={150}
                  backgroundColor="white"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  lineHeight={1.5}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={50}
                    width={50}
                    borderRadius={10}
                    backgroundColor="#F39B0B"
                  >
                    <Box  display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}><CatchingPokemonIcon/></Box>
                  </Box>

                  <Typography variant="Box" pt={1}> Wildlife</Typography>
                  <Typography variant="Box" color={"#65605F"}>
                    Tours
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box height={"30vh"} width={"100%"} backgroundColor="#09235a" py={2}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"#F39B0B"}
          className="font"
        >
          Our Trusted Partners
        </Box>
        <Box display={'flex'} justifyContent={'center'} gap={{lg:20,sm:5,xs:3}} color={'white'} pt={2}>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Summer</Box>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Travel</Box>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Mountains</Box>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Say Yes</Box>
        </Box>
      </Box>
    </>
  );
};

export default BookingPlan;
