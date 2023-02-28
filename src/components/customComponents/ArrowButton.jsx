import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

const ArrowButton = ({ Width, Text }) => {
  return (
    <>
      <Button
        variant="arrow_button"
        endIcon={<EastIcon />}
        sx={
          Width === "100%"
            ? {
                display: "flex",
                justifyContent: "space-between",
              }
            : { width: "fit-content", paddingLeft: "0" }
        }
      >
        {Text}
      </Button>
    </>
  );
};

export default ArrowButton;
