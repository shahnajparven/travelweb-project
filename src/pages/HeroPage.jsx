/* eslint-disable react/jsx-key */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "./HeroPage.css";
import "../index.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Outlet } from "react-router-dom";
import Login from "./user/login";
import img from "../assets/user.jpg";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../assets/logo.png";
import { logout } from "../store/authSlice";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
const drawerWidth = 240;

const HeroPage = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [loggedinIcon, setLoggedinIcon] = React.useState(true);

  React.useEffect(() => {
    if (isLoggedIn) {
      setLoggedinIcon(false);
    } else {
      setLoggedinIcon(true);
    }
  }, [dispatch, isLoggedIn]);

  const [open, setOpen] = React.useState(false);

  const options = [
    {
      icon: <PersonIcon />,
      name: "Profile",
    },
    {
      icon: <LogoutIcon />,
      name: "Logout",
      func: logoutFunction,
    },
  ];

  function logoutFunction() {
    dispatch(logout);
    setLoggedinIcon(true);
  }
  ////modal
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  ///modal

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    <Link className="navItem" to="/">
      <Box>Home</Box>
    </Link>,
    <Link className="navItem" to="/about">
      <Box>About</Box>
    </Link>,
    <Link className="navItem" to="contact">
      <Box>Tours</Box>
    </Link>,
    <Link className="navItem" to="/destination">
      <Box>Destination</Box>
    </Link>,
    <Link className="navItem" to="contact">
      <Box>Blog</Box>
    </Link>,
    <Link className="navItem" to="contact">
      <Box>Pages</Box>
    </Link>,
    <Link className="navItem" to="contact">
      <Box>Contact</Box>
    </Link>,
  ];
  ////////////////////////////////////////////// for Mobile start
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box variant="h6" sx={{ my: 2, color: "#2D2727" }}>
        Trisog
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", color: "#fff" }}
              className="test"
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  ////////////////////////////////////////////// for Mobile end
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />

      {/******************************************** nav start********************************************* */}
      <AppBar height={"1vh"} width={"100%"} className="appbar">
        <Toolbar display={"flex"} width={"100%"} className="tolbar">
          <Box width={{ lg: "10%", sm: "20%", xs: "30%" }}>
            <IconButton
              color="#2D2727"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box display={"flex"}>
              <Box
                mt={0.5}
                sx={{ display: { sm: "block", xs: "none", lg: "block" } }}
              >
                <img src={logo} height={25} width={"100%"} alt="logo" />
              </Box>
              <Box
                className="logo"
                variant="h6"
                component="div"
                sx={{ display: { sm: "block", xs: "none", lg: "block" } }}
                color={"#2D2727"}
              >
                Trisog
              </Box>
            </Box>
          </Box>
          <Box
            width={"65%"}
            pl={2}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box display={"flex"} gap={2}>
              {navItems.map((item) => (
                <Box key={item} sx={{ color: "#fff" }}>
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            width={{ lg: "35%", sm: "70%", xs: "80%" }}
            display={"flex"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
          >
            <Box>
              <Box display={"flex"}>
                <Box className="navIcon" mt={1.2} px={2}>
                  <SearchOutlinedIcon sx={{ color: "#2D2727" }} />
                </Box>

                {loggedinIcon ? (
                  <Box>
                    {["right"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Box
                          display={"flex"}
                          sx={{ cursor: "pointer" }}
                          onClick={toggleDrawer(anchor, true)}
                        >
                          <IconButton size="small" color="#2D2727">
                            <PersonOutlineOutlinedIcon
                              sx={{ color: "#2D2727" }}
                            />
                          </IconButton>
                          <Box lineHeight={2.5} color={"#2D2727"}>
                            Login / Signup
                          </Box>
                        </Box>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          <Box
                            width={{ lg: 500, md: 500, xs: 400 }}
                            py={2}
                            px={5}
                          >
                            <IconButton onClick={toggleDrawer(anchor, false)}>
                              <CloseIcon />
                            </IconButton>
                            <Box mt={1}>
                              <Divider />
                            </Box>

                            <Box>
                              <Login
                                props={toggleDrawer()}
                                anchor={anchor}
                                state={state}
                                setState={setState}
                              />
                            </Box>
                          </Box>
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </Box>
                ) : (
                  <Box className="navIcon" px={5}>
                    <IconButton
                      size="small"
                      aria-label="search"
                      color="inherit"
                    >
                      <SpeedDial
                        className="imgicon"
                        ariaLabel="SpeedDial tooltip example"
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        style={{ zIndex: 30, height: 18 }}
                        open={open}
                        direction="down"
                        FabProps={{
                          size: "small",
                          style: { backgroundColor: "#2D2727", width: 35},
                        }}
                        icon={
                          <img
                            className="speedDialIcon"
                            src={img}
                            alt="Profile"
                          />
                        }
                      >
                        {options.map((item) => (
                          <SpeedDialAction
                            key={item.name}
                            icon={item.icon}
                            tooltipTitle={item.name}
                            onClick={item.func}
                          />
                        ))}
                      </SpeedDial>
                    </IconButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/********************************* for Mobile start**************************** */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ffffff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/********************************* for Mobile end**************************** */}
      <Box component="main">
        <Toolbar />
        {/* this is where children pages will show */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default HeroPage;
