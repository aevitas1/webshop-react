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
import { FormControlLabel, Checkbox, Link, FormGroup } from "@mui/material";

const CreateAccountModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [birthdayErr, setBirthdayErr] = useState(false);
  const [birthmonthErr, setBirthmonthErr] = useState(false);
  const [birthyearErr, setBirthyearErr] = useState(false);

  const {
    openLoginModal,
    setOpenLoginModal,
    openAccountModal,
    setOpenAccountModal,
  } = useContext(AppContext);

  const { loginInfo, setLoginInfo } = useContext(LoginContext);

  // Error checks
  const handleClick = () => {
    setNameErr(false);
    setPasswordErr(false);
    setBirthdayErr(false);
    setBirthmonthErr(false);
    setBirthyearErr(false);

    if (loginInfo.name === "") {
      setNameErr(true);
    }
    if (loginInfo.password === "") {
      setPasswordErr(true);
    }
    if (loginInfo.birthday === "") {
      setBirthdayErr(true);
    }
    if (loginInfo.birthmonth === "") {
      setBirthmonthErr(true);
    }
    if (loginInfo.birthyear === "") {
      setBirthyearErr(true);
    }

    if (
      !nameErr &&
      !passwordErr &&
      !birthdayErr &&
      !birthmonthErr &&
      !birthyearErr
    ) {
      // If no errors, store the login info in localStorage & open login modal
      localStorage.setItem("login", [JSON.stringify(loginInfo)]);
      setOpenAccountModal(!openAccountModal);
      setOpenLoginModal(!openLoginModal);
    } else {
      return;
    }
  };

  return (
    <>
      <Modal
        open={openAccountModal}
        onClose={() => {
          setOpenAccountModal(!openAccountModal);
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
              Word member
            </Typography>
            <CloseIcon
              onClick={() => {
                setOpenAccountModal(!openAccountModal);
              }}
              sx={{ cursor: "pointer" }}
            />
          </Grid2>
          <Typography
            variant="p"
            sx={{
              display: "flex",
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
            helperText={nameErr ? "Voer naam in" : ""}
            variant="outlined"
            className="login"
            onChange={(e) => {
              setLoginInfo({
                ...loginInfo,
                name: e.target.value,
              });
            }}
            required
          />
          <TextField
            fullWidth
            label={"Wachtwoord"}
            helperText={passwordErr ? "Voer wachtwoord in" : ""}
            variant="outlined"
            className="login"
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setLoginInfo({
                ...loginInfo,
                password: e.target.value,
              });
            }}
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
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Wachtwoord moet 1 letter, 1 nummer en 1 leesteken bevatten
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              padding: "1rem 0 0.5rem 0rem",
            }}
          >
            Geboortedatum *
          </Typography>
          <FormGroup
            sx={{
              flexDirection: "row",
              border: "1px solid #222",
            }}
          >
            <TextField
              label={"dd"}
              variant="outlined"
              className="birthdate"
              helperText={birthdayErr ? "Voer dag in" : ""}
              text="number"
              onChange={(e) => {
                setLoginInfo({
                  ...loginInfo,
                  birthday: e.target.value,
                });
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      ".MuiTypography-root": {
                        color: "#222",
                        userSelect: "none",
                      },
                    }}
                  >
                    -
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              label={"mm"}
              variant="outlined"
              className="birthdate"
              helperText={birthmonthErr ? "Voer maand in" : ""}
              text="number"
              onChange={(e) => {
                setLoginInfo({
                  ...loginInfo,
                  birthmonth: e.target.value,
                });
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      ".MuiTypography-root": {
                        color: "#222",
                        userSelect: "none",
                      },
                    }}
                  >
                    -
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              label={"jjjj"}
              variant="outlined"
              className="birthdate"
              helperText={birthyearErr ? "Voer jaar in" : ""}
              text="number"
              onChange={(e) => {
                setLoginInfo({
                  ...loginInfo,
                  birthyear: e.target.value,
                });
              }}
              required
            />
          </FormGroup>
          <Grid2 display="flex" justifyContent="space-between">
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
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
            <Link variant="underline">Wachtwoord vergeten?</Link>
          </Grid2>
          <Typography
            sx={{
              color: "red",
              fontSize: "10px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Uw gegevens worden alleen in uw browser opgeslagen, deze kunnen wij
            niet zien. Door op 'word member' te drukken maakt u een account aan
            die alleen beschikbaar is voor u, hierdoor kunt u verschillende
            features gebruiken op de website.
          </Typography>
          <Button
            variant="primary"
            sx={{ marginTop: "1rem" }}
            onClick={handleClick}
          >
            Word member
          </Button>
          <Button
            variant="secondary"
            sx={{ marginTop: "1rem" }}
            onClick={() => {
              setOpenAccountModal(!openAccountModal);
              setOpenLoginModal(!openLoginModal);
            }}
          >
            Inloggen
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

export default CreateAccountModal;
