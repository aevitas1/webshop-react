import { getLinks } from "../../hooks/getLinks";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const FooterRow = () => {
  const links = getLinks();

  return links.status === "success" ? (
    <>
      <Grid2 container width="980px">
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
          >
            {links.data.data.footer.sign_up.text}
          </Typography>
        </Grid2>
      </Grid2>
    </>
  ) : (
    ""
  );
};

export default FooterRow;
