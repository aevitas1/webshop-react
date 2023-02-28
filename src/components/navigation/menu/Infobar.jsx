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
          justifyContent={mobile ? "center" : "space-between"}
        >
          <Link variant="infobar">Standaardlevering: 2-5 dagen</Link>
          <Link variant="infobar" sx={mobile ? { display: "none" } : {}}>
            Word member en ontvang 10% korting
          </Link>
          <Link variant="infobar" sx={mobile ? { display: "none" } : {}}>
            Members: Gratis standaardverzending vanaf €20
          </Link>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Infobar;
