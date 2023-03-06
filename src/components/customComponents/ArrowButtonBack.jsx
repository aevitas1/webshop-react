import WestIcon from "@mui/icons-material/West";
import { Button } from "@mui/material";

const ArrowButtonBack = ({ Text, IconKey, onClick }) => {
  return (
    <>
      <Button
        variant="arrow_button"
        startIcon={<WestIcon key={IconKey} />}
        onClick={onClick}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          fontSize: "1.25rem",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid #d0d0d0",
          ".MuiButton-startIcon": {
            pointerEvents: "none",
          },
          position: "relative",
          ".text": {
            position: "absolute",
            pointerEvents: "none",
            width: "100%",
            textAlign: "center",
            left: "-0.75rem",
          },
        }}
      >
        <div className="text">{Text}</div>
      </Button>
    </>
  );
};

export default ArrowButtonBack;
