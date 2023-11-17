import {
  Box,
  Divider,
  TextField,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box backgroundColor={"black"} height={"auto"} py={6}>
      <Box className="container" display={"flex"} justifyContent={'center'} flexWrap={'wrap'} gap={3}>
        <Box color={"#fff"} pr={10}>
          <Box py={2}>Trisog</Box>
          <Box className="font">Need Any Help?</Box>
          <Box fontSize={18}>
            Call Us :
            <Typography variant="span" color="#F39B0B">
              (888)12345678
            </Typography>
          </Box>
          <Box py={1}>
            <Box>Love Street,Muscat,Oman</Box>
            <Box>exaample@trisog.com</Box>
          </Box>
          <Box py={1}>
            <IconButton>
              {" "}
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              {" "}
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              {" "}
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ color: "white" }} />
        <Box color={"#fff"} lineHeight={2}>
          <Box className="font" fontSize={15} py={2}  px={1}>
            Company
          </Box>
          <Box fontSize={14}>About Us</Box>
          <Box fontSize={14}>Contact Us</Box>
          <Box fontSize={14}>Travel Guides</Box>
          <Box fontSize={14}>Data Policy</Box>
        </Box>
        <Box color={"#fff"} lineHeight={2}  px={1}>
          <Box className="font" fontSize={15} py={2}>
            Top Destination
          </Box>
          <Box fontSize={14}>Last Vegas</Box>
          <Box fontSize={14}>New York City</Box>
          <Box fontSize={14}>San Francisco</Box>
          <Box fontSize={14}>Hawali</Box>
        </Box>
        <Box color={"#fff"} lineHeight={2} pt={8} px={{lg:1,sm:1,xs:0}}>
          <Box fontSize={14}>Tokio</Box>
          <Box fontSize={14}>Sydney</Box>
          <Box fontSize={14}>Melbourne</Box>
          <Box fontSize={14}>Dubai</Box>
        </Box>

        <Box color={"#fff"} pl={{lg:20,sm:20,xs:0}}>
          <Box className="font" py={2}>
            Sign up Newsletter
          </Box>
          <Box
            sx={{
              "& .MuiTextField-root": {
                color: "black",
                [`& fieldset`]: {
                  backgroundColor: "white",
                },
              },
            }}
          >
            <TextField
              inputProps={{
                style: { fontSize: 13 },
              }}
              InputLabelProps={{
                style: { fontSize: 13 },
              }}
              size="small"
              id="hotel-name"
              placeholder="sgdh"
              label="Enter Email..."
            />
          </Box>
          <Box py={2}>
            <Button
              variant="containet"
              sx={{
                backgroundColor: "#F39B0B",
                color: "#fff",
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
          <Box className="copyright">
            <Typography variant="span" fontSize={12} color="white" fontSize='16px'>
              © <a href="#">Trisog {currentYear}</a>. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
