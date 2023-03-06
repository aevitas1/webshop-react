import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

const ArrowButton = ({ Width, Text, FontSize, IconKey, onClick }) => {
  return (
    <>
      <Button
        variant="arrow_button"
        endIcon={<EastIcon key={IconKey} />}
        onClick={onClick}
        sx={
          Width === "100%"
            ? {
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontSize: `${FontSize}`,
                ".MuiButton-endIcon": {
                  pointerEvents: "none",
                },
              }
            : {
                width: "fit-content",
                paddingLeft: "0",
                fontSize: `${FontSize}`,
                ".MuiButton-endIcon": {
                  pointerEvents: "none",
                },
              }
        }
      >
        {Text}
      </Button>
    </>
  );
};

export default ArrowButton;
