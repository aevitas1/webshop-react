import { getLinks } from "../../../hooks/getLinks";
import { Container, useMediaQuery, Typography, Link } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
                  height: "auto",
                  backgroundColor: "#faf9f8",
                  borderBottom: "5px solid #222",
                }}
              >
                <Grid2
                  container
                  position="relative"
                  sx={{
                    width: "960px",
                    margin: "0 auto",
                    padding: "0 5rem",
                    maxHeight: "70vh",
                    // gridTemplateRows: "repeat(1fr)",
                    // gridTemplateColumns: "repeat(1fr)",
                    gridRowGap: "16px",
                    alignItems: "start",
                    gridAutoRows: "fit-content" /* OR min-content*/,
                    marginBottom: "auto",
                    // display: "flex",
                    // flexWrap: "wrap",
                  }}
                >
                  {item.links.map((submenu) => (
                    // Submenu items
                    <Grid2
                      container
                      key={`${submenu.header}${firstId++}`}
                      sx={{
                        display: "grid",
                        maxHeight: "max-content",
                        // flexDirection: "column",
                        width: "25%",
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
                    </Grid2>
                  ))}
                </Grid2>
              </Grid2>
            </Grid2>
          ))}
        </Container>
      </>
    )
  );
};

export default MainMenu;
