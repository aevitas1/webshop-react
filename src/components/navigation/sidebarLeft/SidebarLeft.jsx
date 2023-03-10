import { useState, useContext } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, Box, useMediaQuery } from "@mui/material";
import LoginContext from "../../../context/LoginContext";
import MobileMenu from "../menu/MobileMenu";

const SidebarLeft = () => {
  const [open, setOpen] = useState(false);
  const { openSearchMobile } = useContext(LoginContext);
  const match = useMediaQuery("@media screen and (max-width: 1024px)");

  return match && !openSearchMobile ? (
    <>
      <MobileMenu />
    </>
  ) : (
    <>
      <Grid2
        container
        alignItems="center"
        position="relative"
        sx={match ? { display: "none" } : { gap: "1rem" }}
      >
        <Link href="#" variant="headerTop">
          Customer Service
        </Link>
        <Link href="#" variant="headerTop">
          Student Discount
        </Link>
        <Link href="#" variant="headerTop">
          Find a store
        </Link>
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
            <Link href="#" variant="headerTop">
              Newsletter
            </Link>
            <Link href="#" variant="headerTop">
              M&H Android App
            </Link>
            <Link href="#" variant="headerTop">
              M&H Iphone App
            </Link>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SidebarLeft;
