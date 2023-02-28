import useMediaQuery from "@mui/material/useMediaQuery";

const mediaQuery = ({ size }) => {
  if (size === "xl") {
    return useMediaQuery("(max-width: 1024px)");
  }
  if (size === "md") {
    return useMediaQuery("(max-width: 768px)");
  }
};

export default mediaQuery;
