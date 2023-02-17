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
    xs: "0.6875rem",
    sm: "0.8125rem",
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
});
