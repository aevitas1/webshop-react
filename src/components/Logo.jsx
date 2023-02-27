import { Typography, Link } from "@mui/material";

const Logo = ({ variant }) => {
  return (
    <>
      <Link href="/" variant="flat">
        <Typography variant={variant}>
          M
          <Typography
            variant={
              variant === "logo_header"
                ? "logo_header_middle"
                : "logo_footer_middle"
            }
          >
            &
          </Typography>
          H
        </Typography>
      </Link>
    </>
  );
};

export default Logo;
