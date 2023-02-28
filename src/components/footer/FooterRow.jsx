import { getLinks } from "../../hooks/getLinks";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowButton from "../customComponents/ArrowButton";

const FooterRow = () => {
  const links = getLinks();
  const matches = useMediaQuery("(max-width: 768px)");

  return links.status === "success" ? (
    <>
      {/* Desktop footer links  */}
      <Grid2 container width="980px" display={matches ? "none" : "flex"}>
        {/* Shop  */}
        <Grid2 container direction="column" width="25%">
          <Typography variant="h2_footer">
            {links.data.data.footer.shop.header}
          </Typography>
          {links.data.data.footer.shop.link.map((item) => (
            <Typography key={item} variant="link_footer">
              {item}
            </Typography>
          ))}
        </Grid2>
        {/* Company info  */}
        <Grid2 container direction="column" width="25%">
          <Typography variant="h2_footer">
            {links.data.data.footer.corporate_info.header}
          </Typography>
          {links.data.data.footer.corporate_info.link.map((item) => (
            <Typography key={item} variant="link_footer">
              {item}
            </Typography>
          ))}
        </Grid2>
        {/* Help  */}
        <Grid2 container direction="column" width="25%">
          <Typography variant="h2_footer">
            {links.data.data.footer.help.header}
          </Typography>
          {links.data.data.footer.help.link.map((item) => (
            <Typography key={item} variant="link_footer">
              {item}
            </Typography>
          ))}
        </Grid2>
        {/* Sign up  */}
        <Grid2 container direction="column" width="25%">
          <Typography variant="h2_footer">
            {links.data.data.footer.sign_up.header}
          </Typography>
          <Typography
            key={links.data.data.footer.sign_up.text}
            variant="p"
            lineHeight="1.25rem"
            width="100%"
            fontSize="0.6875rem"
            fontWeight="500"
            sx={{ marginBottom: "1rem" }}
          >
            {links.data.data.footer.sign_up.text}
          </Typography>
          <ArrowButton Width="fit-content" Text="Lees meer" />
        </Grid2>
      </Grid2>

      {/* Mobile links  */}
      <Grid2
        contain
        width="100vw"
        display={matches ? "flex" : "none"}
        flexDirection="column"
      >
        {/* Shop  */}
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2_footer" sx={{ paddingBottom: "0" }}>
              {links.data.data.footer.shop.header}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {links.data.data.footer.shop.link.map((item) => (
              <Typography key={item} variant="link_footer" lineHeight="2.2">
                {item}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
        {/* Company info  */}
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2_footer" sx={{ paddingBottom: "0" }}>
              {links.data.data.footer.corporate_info.header}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {links.data.data.footer.corporate_info.link.map((item) => (
              <Typography key={item} variant="link_footer" lineHeight="2.2">
                {item}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
        {/* Help  */}
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2_footer" sx={{ paddingBottom: "0" }}>
              {links.data.data.footer.help.header}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {links.data.data.footer.help.link.map((item) => (
              <Typography key={item} variant="link_footer" lineHeight="2.2">
                {item}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
        {/* Sign up  */}
        <Grid2 container direction="column" paddingTop="1.5rem">
          <Typography variant="h2_footer" sx={{ textAlign: "center" }}>
            {links.data.data.footer.sign_up.header}
          </Typography>
          <Typography
            key={links.data.data.footer.sign_up.text}
            variant="p"
            lineHeight="1.25rem"
            width="100%"
            fontSize="0.6875rem"
            fontWeight="500"
            sx={{ textAlign: "center", paddingBottom: "1.5rem" }}
          >
            {links.data.data.footer.sign_up.text}
          </Typography>
          <ArrowButton Width="100%" Text="Lees meer" />
        </Grid2>
      </Grid2>
    </>
  ) : (
    ""
  );
};

export default FooterRow;
