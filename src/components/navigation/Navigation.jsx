import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SidebarLeft from "./sidebarLeft/SidebarLeft";
import SidebarRight from "./sidebarRight/SidebarRight";
import Logo from "../customComponents/Logo";
import mediaQuery from "../../helpers/mediaQuery";

const Navigation = () => {
  return (
    <>
      <Grid2
        container
        width="100%"
        sx={
          mediaQuery({ size: "xl" })
            ? { padding: "0 1rem" }
            : { padding: "1rem 2rem" }
        }
      >
        <Grid2
          container
          width="100%"
          height="67px"
          display="flex"
          sx={
            mediaQuery({ size: "xl" })
              ? { paddingLeft: "1rem" }
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
