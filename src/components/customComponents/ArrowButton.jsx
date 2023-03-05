import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

const ArrowButton = ({ Width, Text, FontSize, IconKey }) => {
  return (
    <>
      <Button
        variant="arrow_button"
        endIcon={<EastIcon key={IconKey} />}
        sx={
          Width === "100%"
            ? {
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                fontSize: `${FontSize}`,
              }
            : {
                width: "fit-content",
                paddingLeft: "0",
                fontSize: `${FontSize}`,
              }
        }
      >
        {Text}
      </Button>
    </>
  );
};

export default ArrowButton;
