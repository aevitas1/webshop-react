import { useState, useContext } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import LoginDropdown from "./LoginDropdown";
import LoginContext from "../../../context/LoginContext";
import SearchBar from "../menu/SearchBar";
import { Link } from "@mui/material";

const SidebarRight = () => {
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  const [hover, setHover] = useState(false);
  const { loggedIn, openSearchMobile, setOpenSearchMobile } =
    useContext(LoginContext);

  return (
    <>
      <Grid2
        container
        alignItems="center"
        position="relative"
        sx={
          match && openSearchMobile
            ? {
                display: "none",
              }
            : {
                gap: "1rem",
                ".MuiBox-root": {
                  a: {
                    display: "flex",
                    alignItems: "center",
                    svg: {
                      width: "28px",
                    },
                  },
                },
              }
        }
      >
        <Box position="relative">
          <Link
            variant="headerTop"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            <PersonIcon />
            <span style={match ? { display: "none" } : { display: "block" }}>
              {loggedIn ? "My account" : "Sign in"}
            </span>
          </Link>
          <Grid2 sx={hover ? { display: "flex" } : { display: "none" }}>
            <LoginDropdown hover={hover} setHover={setHover} />
          </Grid2>
        </Box>
        <Box
          sx={match ? {} : { display: "none" }}
          onClick={() => setOpenSearchMobile(!openSearchMobile)}
        >
          <Link variant="headerTop">
            <SearchIcon />
          </Link>
        </Box>
        <Box>
          <Link variant="headerTop">
            <FavoriteIcon />
            <span style={match ? { display: "none" } : { display: "block" }}>
              Favorites
            </span>
          </Link>
        </Box>
        <Box>
          <Link variant="headerTop">
            <ShoppingBagIcon />
            <span
              style={
                match
                  ? {
                      position: "absolute",
                      color: "#222",
                      right: "0.4rem",
                      top: "1.5rem",
                    }
                  : {}
              }
            >
              {match ? "(0)" : "Shopping bag (0)"}
            </span>
          </Link>
        </Box>
      </Grid2>
    </>
  );
};

export default SidebarRight;
