/* eslint-disable react/prop-types */
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { logout } from "../../store/authSlice";
import img from "../../assets/user.jpg";
import "../HeroPage.css";
import { useNavigate } from "react-router-dom";


const UserOption = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [open, setOpen] = useState(false);

  const options = [
    {
      icon: <PersonIcon />,
      name: "Profile",
      func: accoutFunction,
    },
    {
      icon: <LogoutIcon />,
      name: "Logout",
      func: logoutFunction,
    },
  ];


  function accoutFunction() {
    navigateTo("profile");
  }
  function logoutFunction() {
    dispatch(logout());
  }

  return (
    <>
    <Box
    className="imgicon"
      display="flex"
      justifyContent="right"
      position="absolute"
      top={12}
      right={10}
    >
      <SpeedDial
       className="imgicon"
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex:30 , height: 5 }}
        open={open}
        direction="down"
        FabProps={{ size: "small", style: { backgroundColor: "#2D2727",width: 35 } }}
        icon={<img className="speedDialIcon" src={img} alt="Profile" />}
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
      {/* <Box>
        jnjbjhb:{user.name}
      </Box> */}
    </Box>
    </>
  );
};

export default UserOption;
