import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { auth, db, logout } from "../../firebase" ;
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";




const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    // background: 'none',
  },
  inactiveLink: {
    color: 'white',
    padding : theme.spacing(1),
    fontSize: '1.5rem'
  },
  activeLink: {
    color: 'black',
    padding : theme.spacing(1),
    fontSize: '1.5rem',
    background: "#bfbfbf"
  }
}));

const SiteHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    //   navigate('/')
    } 
    
    catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };


  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Upcoming", path: "/movies/upcoming"},
    { label: "MustWatch", path: "/movies/playlist" },
    { label: "TV Shows", path: "/tvshows" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return ( 
    <>
      <AppBar className={classes.appbar}
      position="fixed" elevation={0} color='primary'> 
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" className={classes.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {/* { name ?   */}
          <Typography variant="h6" className={classes.title}>
          <Button variant="outlined" onClick={logout}>Logout</Button>
          </Typography>
           {/* : */}
           <Typography variant="h6" className={classes.title}>
           You must login for to access some features {""}
           <Button variant="outlined" onClick={() => navigate("login")}>Login</Button>
           </Typography>       
          {/* } */}

          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                  isActive ? classes.activeLink : classes.inactiveLink
                }
                  color="inherit"
                  // onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </NavLink> 
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;