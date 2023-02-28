import useMediaQuery from "@mui/material/useMediaQuery";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SidebarLeft from "./sidebarLeft/SidebarLeft";
import SidebarRight from "./sidebarRight/SidebarRight";
import Logo from "../customComponents/Logo";

const Navigation = () => {
  const matches = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <Grid2
        container
        width="100%"
        sx={matches ? { padding: "0.75rem 1rem" } : { padding: "0" }}
      >
        <Grid2
          container
          width="100%"
          height="67px"
          display="flex"
          sx={
            matches
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
