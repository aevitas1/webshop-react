import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import Logo from "../customComponents/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const SocialCredits = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Grid2 container width="980px" alignItems="center" direction="column">
        <Grid2
          container
          display="flex"
          width="fit-content"
          sx={{
            gap: "1.25rem",
            paddingBottom: "1.5rem",
            paddingTop: "1rem",
            svg: {
              width: "24px",
              height: "24px",
              fill: "black",
              "&:hover": {
                fill: "#707070",
                cursor: "pointer",
              },
            },
          }}
        >
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <PinterestIcon />
        </Grid2>
        <Grid2
          container
          maxWidth="680px"
          justifyContent="center"
          marginBottom="2rem"
        >
          <Typography
            variant="p"
            lineHeight="1.25rem"
            textAlign="center"
            fontSize="0.6875rem"
            fontWeight="500"
            marginBottom="0.5rem"
          >
            De inhoud van deze website is auteursrechtelijk beschermd en
            eigendom van ons nepbedrijf. Onze
            {show
              ? ` filosofie is het bieden van
            fashion en kwaliteit tegen de beste prijs op een duurzame manier. Wij
          zijn in 2023 opgericht en sindsdien uitgegroeid tot een van leidende
          fashionbedrijven in de wereld.`
              : " ..."}
          </Typography>
          <Button variant="flat" onClick={() => setShow(!show)}>
            {show ? "LEES MINDER" : "LEES MEER"}
          </Button>
        </Grid2>
        <Logo variant="logo_footer" />
        <Typography
          variant="p"
          lineHeight="1.25rem"
          width="100%"
          textAlign="center"
          fontSize="0.6875rem"
          fontWeight="500"
          marginTop="0.5rem"
        >
          Nederland | €
        </Typography>
      </Grid2>
    </>
  );
};

export default SocialCredits;
