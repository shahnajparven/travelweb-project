import { Box } from "@mui/material";
import img1 from "../../assets/banner1.jpg";
import Carousel from "react-material-ui-carousel";

const customer = [
  {
    img: img1,
    message: "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term",
    name: "Mark Wines",
  },
  {
    img: img1,
    message: "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term",
    name: "Mark Wines",
  },
  {
    img: img1,
    message: "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term",
    name: "Mark Wines",
  },
  {
    img: img1,
    message: "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term",
    name: "Mark Wines",
  },
];

const AboutTestimonial = () => {
  return (
    <>
    <Box display={'flex'} justifyContent={'center'} className='container' py={8}>
    <Box width={'40%'}>
    <Box width={400}>
            <img src={img1} alt="" height={350} width={"100%"} />
          </Box>
        
    </Box>
    <Box width={'60%'}>
      <Carousel
        indicatorIconButtonProps={{
          style: {
            borderRadius: "none",
            color: "gray",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#583C99", // 2
          },
        }}
        s
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "15px",
            //   marginTop: 0, // 5
            textAlign: "center",
            zIndex: 2,
          },
        }}
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#2F7B92",
            borderRadius: 0,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: "100",
            top: "50px",
          },
        }}
        NextIcon={false}
        PrevIcon={false}
      >
        {customer.map((item) => (
          <Box
            backgroundColor="white"
            height="70vh"
            display="flex"
            justifyContent="center"
            flexDirection={"column"}
          >
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
                Testimonial
              </Box>
              <Box fontSize={30} fontWeight={"bold"}>
                What Our Customer
              </Box>
              <Box fontSize={30} fontWeight={"bold"}>
                Says About Us
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              flexDirection={"column"}
              py={5}
            >
              <Box fontSize={50} color={"#F39B0B"}>
                ❞
              </Box>
              <Box>{item.message}</Box>
              <Box>{item.name}</Box>
            </Box>
          </Box>
        ))}
      </Carousel>
      </Box>
      </Box>
      <Box
      py={4}
      height={150}
        display={"flex"}
        justifyContent={"center"}
        gap={3}
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color={"#17202A "}
        className="font"
      >
       <Box display={'flex'} justifyContent={'center'} gap={{lg:20,sm:5,xs:3}} pt={2} color={"#17202A "}>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Summer</Box>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Travel</Box>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Mountains</Box>
          <Box fontSize={30} fontWeight={'bold'} className='font'>Say Yes</Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutTestimonial;
