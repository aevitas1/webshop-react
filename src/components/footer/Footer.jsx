import FooterRow from "./FooterRow";
import SocialCredits from "./SocialCredits";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <>
      <Container variant="fullWidth">
        <Container variant="footerTop">
          <FooterRow />
        </Container>
        <Container variant="footerBottom">
          <SocialCredits />
        </Container>
      </Container>
    </>
  );
};

export default Footer;
