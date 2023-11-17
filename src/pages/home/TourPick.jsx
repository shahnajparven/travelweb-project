/* eslint-disable react/jsx-key */
import { Box, Typography } from "@mui/material";
import TourPicCard from "./TourPicCard";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const item = [
  {
    pic: <CatchingPokemonIcon/>,
    title: "City Tour",
    amount: "10 Tours+",
  },
  {
    pic: <CatchingPokemonIcon/>,
    title: "City Tour",
    amount: "10 Tours+",
  },
  {
    pic: <CatchingPokemonIcon/>,
    title: "City Tour",
    amount: "10 Tours+",
  },
  {
    pic: <CatchingPokemonIcon/>,
    title: "City Tour",
    amount: "10 Tours+",
  },
  { pic: <CatchingPokemonIcon/>,
  title: "City Tour",
  amount: "10 Tours+",
  },
  {
    pic: <CatchingPokemonIcon/>,
    title: "City Tour",
    amount: "10 Tours+",
  },
];

const TourPick = () => {
  return (
    <Box className="container" py={8} backgroundColor="#E9EEEE">
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
          Browse By category
        </Box>
        <Box fontSize={30} fontWeight={"bold"}>
          Pick a Tour Type
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={4}
          py={3}
        >
          {item.map((item) => (
            <TourPicCard item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TourPick;
