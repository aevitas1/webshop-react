import { useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SidebarLeft from "./sidebarLeft/SidebarLeft";
import SidebarRight from "./sidebarRight/SidebarRight";
import Logo from "../customComponents/Logo";

const Navigation = () => {
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  return (
    <>
      <Grid2
        container
        width="100%"
        height="70px"
        sx={match ? { padding: "0 1rem" } : { padding: "1rem 2rem" }}
      >
        <Grid2
          container
          width="100%"
          height="auto"
          display="flex"
          alignItems="center"
          sx={
            match
              ? { justifyContent: "space-between", paddingLeft: "1rem" }
              : { justifyContent: "space-between" }
          }
        >
          <SidebarLeft />
          <Logo variant="logo_header" />
          <SidebarRight />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Navigation;
