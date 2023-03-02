import { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import LoginContext from "../../../context/LoginContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControlLabel, Checkbox, Link } from "@mui/material";

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const {
    openLoginModal,
    setOpenLoginModal,
    openAccountModal,
    setOpenAccountModal,
  } = useContext(AppContext);

  const { loginInfo, setLoginInfo, setLoggedIn } = useContext(LoginContext);
  // Password & username checks
  const handleLogin = () => {
    setUserNameErr(false);
    setPasswordErr(false);
    if (
      (loginInfo.name !== "" && userName !== loginInfo.name) ||
      loginInfo.name === ""
    ) {
      setUserNameErr(true);
    }
    if (
      (loginInfo.password !== "" && password !== loginInfo.password) ||
      loginInfo.password === ""
    ) {
      setPasswordErr(true);
    }
    if (
      loginInfo.password !== "" &&
      loginInfo.name !== "" &&
      userName === loginInfo.name &&
      password === loginInfo.password
    ) {
      setOpenLoginModal(!openLoginModal);
      setUserNameErr(false);
      setPasswordErr(false);
      setLoggedIn(true);
      setLoginInfo({ ...loginInfo, hasloggedin: true });
    }
  };

  // Show username & password if user forgot them
  const handleForgottenPassword = () => {
    if (loginInfo !== "") {
      setUserName(loginInfo.name);
      setPassword(loginInfo.password);
    }
  };

  return (
    <>
      <Modal
        open={openLoginModal}
        onClose={() => {
          setOpenLoginModal(!openLoginModal);
        }}
      >
        <Box>
          <Grid2
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="h2">
              Inloggen
            </Typography>
            <CloseIcon
              onClick={() => {
                setOpenLoginModal(!openLoginModal);
              }}
              sx={{ cursor: "pointer" }}
            />
          </Grid2>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              width: "100%",
              padding: "1rem 2rem 0.5rem 2rem",
              textAlign: "center",
            }}
          >
            Word member: mis geen deals, aanbiedingen, kortingen en
            bonusvouchers.
          </Typography>
          <TextField
            fullWidth
            label={"Naam"}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            id="name_field"
            helperText={userNameErr ? "Verkeerde naam ingevoerd" : ""}
            variant="outlined"
            className="login"
            required
          />
          <TextField
            fullWidth
            label={"Wachtwoord"}
            value={password}
            helperText={passwordErr ? "Uw wachtwoord is verkeerd" : ""}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password_field"
            variant="outlined"
            className="login"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    cursor: "pointer",
                    ".MuiTypography-root": {
                      color: "#222",
                      userSelect: "none",
                    },
                  }}
                >
                  {showPassword ? "Verbergen" : "Tonen"}
                </InputAdornment>
              ),
            }}
            required
          />
          <Typography
            sx={{
              color: "red",
              fontSize: "10px",
              fontWeight: "00",
              textAlign: "center",
              padding: "0 2rem",
              display: `${userNameErr || passwordErr ? "block" : "none"}`,
            }}
          >
            {userNameErr && passwordErr
              ? `Weet u uw login informatie niet meer? Druk op ''Wachtwoord vergeten?'`
              : userNameErr
              ? `Weet u uw naam niet meer? Druk op ''Wachtwoord vergeten?'`
              : passwordErr
              ? `Weet u uw wachtwoord niet meer? Druk op 'Wachtwoord vergeten?'`
              : ""}
          </Typography>
          <Grid2 display="flex" justifyContent="space-between">
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    console.log(loginInfo);
                    setLoginInfo({
                      ...loginInfo,
                      remember: e.target.checked ? true : false,
                    });
                  }}
                />
              }
              label="Gegevens onthouden"
              sx={{
                ".MuiTypography-root": {
                  fontSize: "0.8rem",
                  fontWeight: "500",
                },
              }}
            />
            <Button variant="flat_underline" onClick={handleForgottenPassword}>
              Wachtwoord vergeten?
            </Button>
          </Grid2>
          <Button
            variant="primary"
            sx={{ marginTop: "2.5rem" }}
            onClick={handleLogin}
          >
            Inloggen
          </Button>
          <Button
            variant="secondary"
            sx={{ marginTop: "1rem" }}
            onClick={() => {
              setOpenLoginModal(!openLoginModal);
              setOpenAccountModal(!openAccountModal);
            }}
          >
            Lid worden
          </Button>
          <Link
            variant="underline"
            sx={{ justifyContent: "center", width: "100%", margin: "1rem 0" }}
          >
            Membership info
          </Link>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
