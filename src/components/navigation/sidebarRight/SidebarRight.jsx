import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "@mui/material";
const SidebarRight = () => {
  return (
    <>
      <Grid2 container>
        <Link variant="headerTop">Inloggen</Link>
        <Link variant="headerTop">Favorieten</Link>
        <Link variant="headerTop">Winkelmandje (0)</Link>
      </Grid2>
    </>
  );
};

export default SidebarRight;
