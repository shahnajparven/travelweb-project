import { Box, Typography } from "@mui/material";

const TourPicCard = ({ item }) => {
  return (
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
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {item.pic}
        </Box>
      </Box>

      <Typography variant="Box" pt={1}>
        {" "}
        {item.title}
      </Typography>
      <Typography variant="Box" color={"#65605F"}>
        {item.amount}
      </Typography>
    </Box>
  );
};

export default TourPicCard;
