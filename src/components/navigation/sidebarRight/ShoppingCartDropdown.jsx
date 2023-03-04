import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Link, Box, useMediaQuery } from "@mui/material";

const ShoppingCartDropdown = ({ setHover }) => {
  const match = useMediaQuery("@media screen and (max-width: 1024px)");

  return (
    !match && (
      <>
        <Grid2
          position="absolute"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            boxShadow: "0 2px 4px 0 rgba(34,34,34, 0.2)",
            backgroundColor: "#faf9f8",
            padding: "1.5rem",
            minWidth: "400px",
            right: "0px",
            top: "27px",
            zIndex: "10",
          }}
        >
          <Box
            sx={{ paddingBottom: "1rem", borderBottom: "1px solid #d0d0d0" }}
          >
            <Typography variant="p_bold">
              Your shopping cart is empty
            </Typography>
          </Box>
          <Box
            display="flex"
            sx={{
              justifyContent: "space-between",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #d0d0d0",
            }}
          >
            <Typography variant="p" sx={{ color: "#707070" }}>
              Your shopping cart is empty
            </Typography>
            <Typography variant="p">$0.00</Typography>
          </Box>
          <Box
            display="flex"
            sx={{
              justifyContent: "space-between",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "1rem", fontWeight: "700" }}>
              Total
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: "700" }}>
              $0.00
            </Typography>
          </Box>
        </Grid2>
      </>
    )
  );
};

export default ShoppingCartDropdown;
