import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  useMediaQuery,
  Link,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import ArrowButton from "../../customComponents/ArrowButton";
import { getLinks } from "../../../hooks/getLinks";

const MobileMenu = () => {
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  const links = getLinks();
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState();
  const handeclick = () => {
    setOpen(!open);
    console.log("click");
  };

  let firstId = 0;
  let secondId = 100;
  let thirdId = 1000;

  return (
    links.status === "success" &&
    match && (
      <>
        <MenuIcon onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }} />
        <CloseIcon
          onClick={() => setOpen(!open)}
          sx={
            open
              ? {
                  position: "absolute",
                  left: "calc(85vw + 0.25rem)",
                  top: "45vh",
                  color: "#faf9f8",
                  zIndex: "1000",
                  cursor: "pointer",
                  "&.MuiSvgIcon-root": {
                    width: "32px",
                    height: "32px",
                  },
                  "@media screen and (min-width: 768px)": {
                    left: "388px",
                  },
                }
              : { display: "none" }
          }
        />

        <Drawer open={open} sx={{ zIndex: "999" }}>
          <Grid2 container sx={{ height: "100vh", flexDirection: "column" }}>
            <Link href="#" variant="headerTop">
              <Grid2
                sx={{
                  backgroundColor: "#F1EBDF",
                  display: "flex",
                  padding: "1rem 1rem",
                  alignItems: "center",
                }}
              >
                <PersonIcon sx={{ marginRight: "0.5rem" }} /> My Account
              </Grid2>
            </Link>
            <Grid2 container sx={{ display: "flex", flexDirection: "column" }}>
              {/* Main menu items  */}
              {links.data.data.menu.map((item) => (
                <Grid2 key={item.menu_item} sx={{ padding: "0.75rem 0" }}>
                  <ArrowButton
                    Width="100%"
                    FontSize="1rem"
                    Text={item.menu_item}
                    key={item.menu_item}
                    IconKey={item.menu_item}
                  />
                </Grid2>
              ))}
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1rem" }}>
                <Link variant="flat">Customer Service</Link>
              </Grid2>
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1rem" }}>
                <Link variant="flat">Student Discount</Link>
              </Grid2>
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1rem" }}>
                <Link variant="flat">Find a store</Link>
              </Grid2>
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1rem" }}>
                <Link variant="flat">Newsletter</Link>
              </Grid2>
            </Grid2>
          </Grid2>
        </Drawer>
      </>
    )
  );
};

export default MobileMenu;
