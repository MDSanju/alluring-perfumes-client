import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import useAuth from "../../../hooks/useAuth";
import {
  NavbarLogo,
  NavbarNavIcon,
  NavbarNavIcons,
  NavbarBeforeLoginAndOut,
  NavBg,
  NavbarFixed,
} from "../../styles/Navbar.styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { GiIceCube } from "react-icons/gi";
import NavLogoPNG from "../../../images/webLogo.png";
import "./Navbar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eaeaea",
  "&:hover": {
    backgroundColor: "#e1e1e1",
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "26ch",
    },
  },
}));

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Navbar = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [homeIconColor, setHomeIconColor] = useState("");
  const [exploreIconColor, setExploreIconColor] = useState("");

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];

    if (curPath === "home") {
      setHomeIconColor("navbar_icon_active_color");
    } else if (curPath === "explore") {
      setExploreIconColor("navbar_icon_active_color");
    } else {
      setHomeIconColor("");
      setExploreIconColor("");
    }
  }, [location]);

  const homeLink = () => {
    history.push("/");
  };
  const toHome = () => {
    history.push("/home");
  };

  const toExplore = () => {
    history.push("/explore");
  };
  const toDashboard = () => {
    history.push("/newDashboard");
  };
  const userSingIn = () => {
    history.push("/login");
  };

  return (
    <NavbarFixed>
      <NavBg>
        <NavbarLogo>
          <div
            onClick={homeLink}
            style={{ width: "48px", height: "48px", cursor: "pointer" }}
          >
            <img src={NavLogoPNG} style={{ width: "100%" }} alt="" />
          </div>
          <div>
            <Search>
              <SearchIconWrapper>
                <IoSearchOutline color="#868282" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </NavbarLogo>
        <NavbarNavIcons>
          <CustomTooltip title="Home">
            <NavbarNavIcon className={homeIconColor} onClick={toHome}>
              <IoIosHome size={26} />
              <p>Home</p>
            </NavbarNavIcon>
          </CustomTooltip>
          <CustomTooltip title="Explore">
            <NavbarNavIcon className={exploreIconColor} onClick={toExplore}>
              <GiIceCube size={26} />
              <p>Explore</p>
            </NavbarNavIcon>
          </CustomTooltip>
          <CustomTooltip title="Dashboard">
            <NavbarNavIcon onClick={toDashboard}>
              <MdDashboard size={26} />
              <p>Dashboard</p>
            </NavbarNavIcon>
          </CustomTooltip>
          <NavbarBeforeLoginAndOut>|</NavbarBeforeLoginAndOut>
          {user.email ? (
            <CustomTooltip title="Logout">
              <NavbarNavIcon onClick={logout}>
                <AiOutlineLogout size={26} />
                <p>Logout</p>
              </NavbarNavIcon>
            </CustomTooltip>
          ) : (
            <CustomTooltip title="Login">
              <NavbarNavIcon onClick={userSingIn}>
                <FiLogIn size={26} />
                <p>Login</p>
              </NavbarNavIcon>
            </CustomTooltip>
          )}
        </NavbarNavIcons>
      </NavBg>
    </NavbarFixed>
  );
};

export default Navbar;
