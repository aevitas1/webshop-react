import { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import LoginContext from "../../../context/LoginContext";
import Modal from "@mui/material/Modal";
import { Box, Typography, TextField, FormGroup, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from "@mui/material/InputAdornment";

const CreateAccountModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthmonth, setBirthmonth] = useState("");
  const [birthyear, setBirthyear] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [birthdayErr, setBirthdayErr] = useState(false);
  const [birthmonthErr, setBirthmonthErr] = useState(false);
  const [birthyearErr, setBirthyearErr] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
    openLoginModal,
    setOpenLoginModal,
    openAccountModal,
    setOpenAccountModal,
  } = useContext(AppContext);

  const { loginInfo, setLoginInfo } = useContext(LoginContext);

  // Error checks
  const errorCheck = () => {
    setNameErr(false);
    setPasswordErr(false);
    setBirthdayErr(false);
    setBirthmonthErr(false);
    setBirthyearErr(false);
    setHasError(false);

    if (
      name === "" ||
      password === "" ||
      birthday === "" ||
      birthmonth === "" ||
      birthyear === ""
    ) {
      if (name === "") {
        setNameErr(true);
        setHasError(true);
      }
      if (password === "") {
        setPasswordErr(true);
        setHasError(true);
      }
      if (birthday === "") {
        setBirthdayErr(true);
        setHasError(true);
      }
      if (birthmonth === "") {
        setBirthmonthErr(true);
        setHasError(true);
      }
      if (birthyear === "") {
        setBirthyearErr(true);
        setHasError(true);
      }
      return;
    } else {
      if (!hasError) {
        saveLogin();
      }
    }
  };

  // Storing the login info in localStorage
  const saveLogin = () => {
    setLoginInfo({
      ...loginInfo,
      name: name,
      password: password,
      birthday: birthday,
      birthmonth: birthmonth,
      birthyear: birthyear,
    });
    localStorage.setItem("login", [JSON.stringify(loginInfo)]);
    setOpenAccountModal(!openAccountModal);
    setOpenLoginModal(!openLoginModal);
  };

  // Become a member button
  const handleClick = () => {
    errorCheck();
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
              Become a member
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
            Become a member -- you'll enjoy exclusive deals, offers, invites and
            rewards.
          </Typography>
          <TextField
            fullWidth
            label={"Name"}
            helperText={nameErr ? "Fill in a name" : ""}
            variant="outlined"
            className="login"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <TextField
            fullWidth
            label={"Password"}
            helperText={passwordErr ? "Fill in a password" : ""}
            variant="outlined"
            className="login"
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
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
                      fontSize: "0.8125rem",
                    },
                  }}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </InputAdornment>
              ),
            }}
            required
          />
          <Typography
            variant="p"
            sx={{
              display: "flex",
              padding: "1rem 0 0.5rem 0rem",
            }}
          >
            Date of birth *
          </Typography>
          <FormGroup
            sx={{
              flexDirection: "row",
              border: "1px solid #222",
            }}
          >
            <TextField
              label={"DD"}
              variant="outlined"
              className="birthdate"
              helperText={birthdayErr ? "Fill in birth day" : ""}
              text="number"
              onChange={(e) => {
                setBirthday(e.target.value);
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
              label={"MM"}
              variant="outlined"
              className="birthdate"
              helperText={birthmonthErr ? "Fill in birth month" : ""}
              text="number"
              onChange={(e) => {
                setBirthmonth(e.target.value);
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
              label={"YYYY"}
              variant="outlined"
              className="birthdate"
              helperText={birthyearErr ? "Fill in birth year" : ""}
              text="number"
              onChange={(e) => {
                setBirthyear(e.target.value);
              }}
              required
            />
          </FormGroup>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Your data will only be saved in your browser, we cannot see it. By
            pressing 'Become a member' you create an account that is only
            available to you, which allows you to use different features on the
            website.
          </Typography>
          <Button
            variant="primary"
            sx={{ marginTop: "1rem" }}
            onClick={handleClick}
          >
            Become a member
          </Button>
          <Button
            variant="secondary"
            sx={{ marginTop: "1rem" }}
            onClick={() => {
              setOpenAccountModal(!openAccountModal);
              setOpenLoginModal(!openLoginModal);
            }}
          >
            Sign in
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default CreateAccountModal;
