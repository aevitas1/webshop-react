import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Button } from "@mui/material";
import { useState } from "react";
import Logo from "../Logo";

const SocialCredits = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Grid2 container width="980px" alignItems="center" direction="column">
        <Typography
          variant="p"
          lineHeight="1.25rem"
          width="100%"
          textAlign="center"
          fontSize="0.6875rem"
          fontWeight="500"
          maxWidth="680px"
        >
          De inhoud van deze website is auteursrechtelijk beschermd en eigendom
          van ons nepbedrijf.
          {show
            ? ` Onze filosofie is het bieden van
            fashion en kwaliteit tegen de beste prijs op een duurzame manier. Wij
          zijn in 2023 opgericht en sindsdien uitgegroeid tot een van leidende
          fashionbedrijven in de wereld.`
            : " ..."}
        </Typography>
        <Button variant="flat" onClick={() => setShow(!show)}>
          {show ? "LEES MINDER" : "LEES MEER"}
        </Button>
        <Logo variant="logo_header" />
        <Logo variant="logo_footer" />
        <Typography>Logo & icoontjes hier</Typography>

        <Typography
          variant="p"
          lineHeight="1.25rem"
          width="100%"
          textAlign="center"
          fontSize="0.6875rem"
          fontWeight="500"
        >
          Nederland | €
        </Typography>
      </Grid2>
    </>
  );
};

export default SocialCredits;
