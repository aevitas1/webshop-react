import { getLinks } from "../../../hooks/getLinks";
import { Container, useMediaQuery, Typography, Link, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Masonry from "@mui/lab/Masonry";

const MainMenu = () => {
  const links = getLinks();
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  let firstId = 0;
  let secondId = 100;
  return (
    links.status === "success" && (
      <>
        <Container
          variant="mainMenuItems"
          sx={match ? { display: "none" } : {}}
        >
          {/* Main menu items  */}
          {links.data.data.menu.map((item) => (
            <Grid2
              container
              key={`${item.menu_item}${firstId++}`}
              sx={{
                padding: "0",
                margin: "0",
                lineHeight: "0.9rem",
                "&:hover": { "> .MuiGrid2-root": { display: "flex" } },
              }}
            >
              <Link
                variant="mainMenuItems"
                key={`${item.menu_item}${secondId++}`}
              >
                {item.menu_item}
              </Link>
              {/* Dropdown menu  */}
              <Grid2
                container
                position="absolute"
                sx={{
                  display: "none",
                  zIndex: "100",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  top: "8.5rem",
                  padding: "2rem 2rem 3.5rem 2rem",
                  width: "100vw",
                  maxHeight: "90vh",
                  backgroundColor: "#faf9f8",
                  borderBottom: "5px solid #222",
                  justifyContent: "center",
                }}
              >
                <Masonry
                  columns={4}
                  position="relative"
                  sx={{
                    maxWidth: "960px",
                    padding: "0 3rem",
                    Content: "center",
                  }}
                >
                  {item.links.map((submenu) => (
                    // Submenu items
                    <Box
                      key={`${submenu.header}${firstId++}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0 3% 0.5rem 3%",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      <Typography
                        variant="submenu_link_header"
                        key={submenu.header}
                        sx={{ paddingBottom: "0.25rem" }}
                      >
                        {submenu.header}
                      </Typography>
                      {submenu.link.map((link) => (
                        <Link variant="headerTopLinks" key={link}>
                          {link}
                        </Link>
                      ))}
                    </Box>
                  ))}
                </Masonry>
              </Grid2>
            </Grid2>
          ))}
        </Container>
      </>
    )
  );
};

export default MainMenu;
