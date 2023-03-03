import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useMediaQuery } from "@mui/material";
import { Link } from "@mui/material";

const Infobar = () => {
  const mobile = useMediaQuery("@media screen and (max-width: 768px)");

  return (
    <>
      <Grid2 container width="100%" justifyContent="center">
        <Grid2
          container
          width="960px"
          justifyContent={mobile ? "center" : "space-around"}
        >
          <Link variant="infobar">Free shipping over $40</Link>
          <Link variant="infobar" sx={mobile ? { display: "none" } : {}}>
            Become a M&H member
          </Link>
          <Link variant="infobar" sx={mobile ? { display: "none" } : {}}>
            Gift Card
          </Link>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Infobar;
