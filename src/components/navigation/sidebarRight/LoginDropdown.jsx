import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import LoginContext from "../../../context/LoginContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, Button } from "@mui/material";

const LoginDropdown = ({ hover, setHover }) => {
  const { openLoginModal, setOpenLoginModal, setOpenAccountModal } =
    useContext(AppContext);

  const { setLoggedIn, loggedIn, loginInfo, setLoginInfo } =
    useContext(LoginContext);

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
        {loggedIn ? (
          ""
        ) : (
          <>
            <Button
              variant="primary"
              onClick={() => {
                setOpenLoginModal(!openLoginModal);
              }}
            >
              Inloggen
            </Button>
          </>
        )}

        <Link
          variant="headerTop"
          sx={loggedIn ? {} : { paddingTop: "1.5rem" }}
          onClick={() => {
            loggedIn ? "" : setOpenLoginModal(true);
          }}
        >
          Mijn account
        </Link>
        <Link variant="headerTop" sx={{ paddingTop: "0.5rem" }}>
          Membership info
        </Link>
        {loggedIn ? (
          <Button
            variant="helper"
            onClick={() => {
              setLoggedIn(false);
              setLoginInfo({
                ...loginInfo,
                remember: false,
                hasloggedin: false,
              });
            }}
            sx={{
              fontWeight: "600",
              minWidth: "fit-content",
            }}
          >
            Uitloggen
          </Button>
        ) : (
          <Button
            variant="helper"
            onClick={() => {
              setOpenAccountModal(true);
            }}
          >
            Nog geen member? Meld je hier aan!
          </Button>
        )}
      </Grid2>
    </>
  );
};

export default LoginDropdown;
