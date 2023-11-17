import { Box, Typography } from "@mui/material";
import img1 from "../../assets/img3.jpg";

const AboutUs = () => {
  return (
    <Box className="container" py={10}>
      <Box display={"flex"} justifyContent={"center"} gap={3}>
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box width={400}>
            <img src={img1} alt="" height={250} width={"100%"} />
          </Box>
          
        </Box>
        <Box width={"50%"}>
          <Box display={"flex"} flexDirection={"column"}>
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
            <Box py={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iure
              ullam, debitis maxime deserunt aut ipsa neque minus veniam dolores
              saepe nam cumque nemo corporis ipsam praesentium delectus
              inventore maiores. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti praesentium, numquam magni quae fugit
              necessitatibus eos sit doloribus distinctio quaerat.{" "}
              <Box py={1}>
                {" "}
                Maiores magnam quo officiis numquam consectetur doloremque
                deleniti temporibus assumenda?
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box display={"flex"} justifyContent={"center"} gap={10} pt={10}>
          <Box display={"flex"} gap={1} alignItems={'center'}>
            <Box className='font' fontWeight={'bold'} fontSize={30}>120+</Box>
            <Box>Total Destination</Box>
          </Box>
          <Box display={"flex"} gap={1} alignItems={'center'}>
            {" "}
            <Box className='font' fontWeight={'bold'} fontSize={30}>500+</Box>
            <Box>Travel Packages</Box>
          </Box>
          <Box display={"flex"} gap={1} alignItems={'center'}>
            {" "}
            <Box className='font' fontWeight={'bold'} fontSize={30}>12k+</Box>
            <Box>Total Travelers</Box>
          </Box>
          <Box display={"flex"} gap={1} alignItems={'center'}>
            {" "}
            <Box className='font' fontWeight={'bold'} fontSize={30}>7k+</Box>
            <Box>Positive Reviews</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
