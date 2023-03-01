import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InputAdornment from "@mui/material/InputAdornment";

const LoginModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(!open)}>
        <Box
          position="absolute"
          sx={{
            backgroundColor: "#fff",
            width: "500px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1.5rem 1.5rem",
            outline: "0",
          }}
        >
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
              onClick={() => setOpen(!open)}
              sx={{ cursor: "pointer" }}
            />
          </Grid2>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              width: "100%",
              padding: "1rem 2rem 2rem 2rem",
              textAlign: "center",
            }}
          >
            Word member: mis geen deals, aanbiedingen, kortingen en
            bonusvouchers.
          </Typography>
          <TextField
            fullWidth
            label={"E-mailadres"}
            id="margin-none"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label={"Wachtwoord"}
            id="margin-none"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ cursor: "pointer" }}
                >
                  {showPassword ? "Verbergen" : "Tonen"}
                </InputAdornment>
              ),
            }}
            required
          />
          <Button variant="primary" sx={{ marginTop: "2.5rem" }}>
            Inloggen
          </Button>
          <Button variant="secondary" sx={{ marginTop: "1rem" }}>
            Word member
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
