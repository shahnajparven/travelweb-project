import { Box, Toolbar } from "@mui/material";
import img1 from "../../assets/img3.jpg";
import img2 from "../../assets/1.jpg";
import img3 from "../../assets/2.jpg";
import img4 from "../../assets/3.jpg";
import img5 from "../../assets/4.jpg";
import img6 from "../../assets/5.jpg";
import img7 from "../../assets/6.jpg";
import img8 from "../../assets/7.jpg";
import img9 from "../../assets/8.jpg";
import img10 from "../../assets/9.jpg";
const AboutDestination = () => {
  return (
    <Box className="container">
      <Toolbar />
      <Box display={"flex"} justifyContent={"center"} gap={4}>
        <Box width={"60%"}>
          <Box>
            <img src={img1} height={400} width={"100%"} />
          </Box>
          <Box display={"flex"} gap={3} py={3}>
            <Box>
              <img src={img2} height={150} width={"100%"} />
            </Box>
            <Box>
              <img src={img3} height={150} width={"100%"} />
            </Box>
            <Box>
              <img src={img4} height={150} width={"100%"} />
            </Box>
            <Box
              className="hoverpic"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"white"}
              flexDirection={"column"}
            >
              <Box className="font" fontSize={20}>
                12+
              </Box>
              <Box>More Photo</Box>
            </Box>
          </Box>
        </Box>
        <Box width={"40%"}>
          <Box>
            <Box>City Map</Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78478.06004284113!2d4.227467203480845!3d52.07173104191635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1700210728472!5m2!1sen!2sbd"
              height={300}
              width={"100%"}
            ></iframe>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box height={"auto"} width={"100%"} backgroundColor="#E9EEEE" p={2}>
              <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptas aliquid blanditiis placeat pariatur expedita accusantium
          velit quis sit,</Box>
              <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptas aliquid blanditiis placeat pariatur expedita accusantium
          velit quis sit,</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box width={'50%'}>
            <Box py={2} fontWeight={'bold'}>About UK</Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptas aliquid blanditiis placeat pariatur expedita accusantium
          velit quis sit, fuga cupiditate fugit architecto, necessitatibus in
          ratione dicta ipsum natus incidunt? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda illum est magnam at,
          perferendis omnis. Quo totam eos dolores a, ad doloremque similique,
          atque nesciunt fugit illo perferendis, enim impedit.
        </Box>
        <Box py={4}>
            <Box py={2} fontWeight={'bold'}>Basic Information</Box>
            <Box backgroundColor="#E9EEEE" height={'auto'} width={"30%"} px={2}py={2}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptas aliquid blanditiis placeat pariatur expedita accusantium
          velit quis sit,
          {''}<br/>
          voluptas aliquid blanditiis placeat pariatur expedita accusantium
          velit quis sit </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutDestination;
