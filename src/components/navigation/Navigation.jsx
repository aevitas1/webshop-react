import { useContext } from "react";
import { useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SidebarLeft from "./sidebarLeft/SidebarLeft";
import SidebarRight from "./sidebarRight/SidebarRight";
import Logo from "../customComponents/Logo";
import Infobar from "./menu/Infobar";
import MainMenu from "./menu/MainMenu";
import LoginContext from "../../context/LoginContext";

const Navigation = () => {
  const { openSearchMobile } = useContext(LoginContext);
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  return (
    <>
      <Grid2
        container
        width="100%"
        sx={match ? { padding: "1rem 1rem" } : { padding: "1rem 2rem" }}
      >
        <Grid2
          container
          width="100%"
          display="flex"
          minHeight="50px"
          alignItems="center"
          sx={
            match
              ? { justifyContent: "space-between", paddingLeft: "1rem" }
              : { justifyContent: "space-between" }
          }
        >
          <SidebarLeft />
          {openSearchMobile ? "" : <Logo variant="logo_header" />}
          <SidebarRight />
        </Grid2>
        <MainMenu />
        <Infobar />
      </Grid2>
    </>
  );
};

export default Navigation;
