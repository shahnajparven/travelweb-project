import { Box, Button } from "@mui/material";
import img3 from "../../assets/images/img5.jpg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const PlanTrip = () => {
  return (
    <Box className="container" py={8} backgroundColor="#E9EEEE">
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={{ lg: "row", sm: "column", xs: "column" }}
        alignItems={"center"}
        py={3}
      >
        <Box
          width={{ lg: "50%", sm: "50%", xs: "100%" }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box width={300}>
            <img src={img3} alt="" height={400} width={"100%"} />
          </Box>
        </Box>
        <Box width={{ lg: "50%", sm: "50%", xs: "100%" }}>
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
              display={"flex"}
              justifyContent={"left"}
            >
              Plan Your Trip With Trisog
            </Box>
          </Box>
          <Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              repellat asperiores inventore porro, illum blanditiis quae
              provident rem autem sint? Delectus minus commodi saepe alias
              voluptatibus, esse natus itaque non.
            </Box>
            <Box py={3}>
              <Box display={"flex"}>
                <CheckBoxIcon />{" "}
                <Box width={{lg:"30%",sm:'50%',xs:'40%'}} px={2}>
                  Travel Plan
                </Box>
                <CheckBoxIcon />
                <Box px={2}>Cheap Rates</Box>
              </Box>
              <Box display={"flex"}>
                <CheckBoxIcon />{" "}
                <Box width={{lg:"30%", sm:'50%',xs:'40%'}} px={2}>
                  hand-picked Tour
                </Box>
                <CheckBoxIcon /> <Box px={2}>Private Guide</Box>
              </Box>
              <Box py={3}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#2D2727",
                    color: "#2D2727",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor:'#2D2727',
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanTrip;
