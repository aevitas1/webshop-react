import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "@mui/material";

const SidebarLeft = () => {
  return (
    <>
      <Grid2 container sx={{ gap: "1rem" }}>
        <Link variant="headerTop">Klantenservice</Link>
        <Link variant="headerTop">Newsletter</Link>
        <Link variant="headerTop">Zoek een winkel</Link>
      </Grid2>
    </>
  );
};

export default SidebarLeft;
