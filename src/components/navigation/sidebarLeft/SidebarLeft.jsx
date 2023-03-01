import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, Box, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SidebarLeft = () => {
  const [open, setOpen] = useState(false);
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  return match ? (
    <>
      <MenuIcon />
    </>
  ) : (
    <>
      <Grid2
        container
        alignItems="center"
        position="relative"
        sx={match ? { display: "none" } : { gap: "1rem" }}
      >
        <Link variant="headerTop">Klantenservice</Link>
        <Link variant="headerTop">Newsletter</Link>
        <Link variant="headerTop">Zoek een winkel</Link>
        <Grid2
          container
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            padding: "0.5rem",
            cursor: "pointer",
            ".MuiBox-root": {
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              border: "1px solid black",
              marginRight: "2px",
            },
            "&:hover": {
              ".MuiBox-root": {
                border: "1px solid red",
              },
            },
          }}
        >
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Grid2
            container
            position="absolute"
            direction="column"
            display={open ? "flex" : "none"}
            onMouseLeave={() => setOpen(!open)}
            sx={{
              boxShadow: "0 2px 4px 0 rgba(34,34,34, .2)",
              top: "1.5rem",
              right: "-6.5rem",
              width: "max-content",
              ".MuiTypography-root": {
                backgroundColor: "#fff",
                padding: "0.5rem 1rem",
                "&:hover": {
                  backgroundColor: "#f4eddd",
                },
              },
            }}
          >
            <Link variant="headerTop">M&H Android App</Link>
            <Link variant="headerTop">M&H Iphone App</Link>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SidebarLeft;
