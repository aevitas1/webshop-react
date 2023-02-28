import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "@mui/material";
const SidebarRight = () => {
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  return (
    <>
      <Grid2
        container
        alignItems="center"
        position="relative"
        sx={
          match
            ? {
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
        <Box>
          <Link variant="headerTop">
            <PersonIcon />
            <span style={match ? { display: "none" } : { display: "block" }}>
              Inloggen
            </span>
          </Link>
        </Box>
        <Box sx={match ? {} : { display: "none" }}>
          <Link variant="headerTop">
            <SearchIcon />
          </Link>
        </Box>
        <Box>
          <Link variant="headerTop">
            <FavoriteIcon />
            <span style={match ? { display: "none" } : { display: "block" }}>
              Favorieten
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
              {match ? "(0)" : "Winkelmandje (0)"}
            </span>
          </Link>
        </Box>
      </Grid2>
    </>
  );
};

export default SidebarRight;
