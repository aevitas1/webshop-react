import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, Button } from "@mui/material";
import LoginModal from "./LoginModal";
import { useState } from "react";

const LoginDropdown = ({ hover, setHover }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid2
        position="absolute"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(!hover)}
        sx={{
          boxShadow: "0 2px 4px 0 rgba(34,34,34, 0.2)",
          backgroundColor: "#faf9f8",
          padding: "1.5rem",
          minWidth: "280px",
          left: "-195px",
          top: "27px",
        }}
      >
        <Button variant="primary" onClick={() => setOpen(!open)}>
          Inloggen
        </Button>
        <LoginModal open={open} setOpen={setOpen} />
        <Link variant="headerTop" sx={{ paddingTop: "1.5rem" }}>
          Mijn account
        </Link>
        <Link variant="headerTop" sx={{ paddingTop: "0.5rem" }}>
          Membership info
        </Link>
        <Link variant="helper" sx={{ paddingTop: "0.5rem" }}>
          Nog geen member? Meld je hier aan!
        </Link>
      </Grid2>
    </>
  );
};

export default LoginDropdown;
