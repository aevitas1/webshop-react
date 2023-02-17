import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    transparent: "transparent",
    white: "#faf9f8",
    text: {
      gray: "#222222",
    },
  },
  fonts: {
    heading: "montserrat",
    body: "montserrat",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSizes: {
    xs: "10px",
    sm: "11px",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    // These have been set
    xl: "70.25rem",
  },
});
