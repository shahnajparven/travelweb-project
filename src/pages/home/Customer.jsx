/* eslint-disable react/jsx-key */
import { Box } from "@mui/material";
import img1 from "../../assets/banner1.jpg";
import Carousel from "react-material-ui-carousel";

const customer = [
  {
    img: img1,
    message:
      "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term  most commonly applies to the sales-pitches attributed to ordinary citizens,",
    name: "Sony wins",
  },
  {
    img: img1,
    message:
      "In promotion and advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. The term",
    name: "Mark wines",
  },
  {
    img: img1,
    message: "Lorembyfcgcftyftrdrsgbvjbkj",
    name: "jbhjhvhgvh",
  },
  {
    img: img1,
    message: "Lorembnbvhvhgvhgghcguyfuyfvufufgig",
    name: "jbhjhvhgvh",
  },
];
const Customer = () => {
  return (
    <Box className="container" py={5}>
      {" "}
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
  );
};

export default Customer;
