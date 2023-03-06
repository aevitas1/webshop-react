import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  useMediaQuery,
  Link,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import ArrowButton from "../../customComponents/ArrowButton";
import ArrowButtonBack from "../../customComponents/ArrowButtonBack";
import { getLinks } from "../../../hooks/getLinks";

const MobileMenu = () => {
  const match = useMediaQuery("@media screen and (max-width: 1024px)");
  const links = getLinks();
  const [open, setOpen] = useState(false);

  const handleOpenSub = (e) => {
    e.target.parentNode.parentNode.style.transform = "translateX(100%)";
    e.target.parentNode.childNodes[1].style.transform =
      "translateX(calc(-100% - 0.5rem))";
  };
  const handleBackButton = (e) => {
    e.target.parentNode.parentNode.style.transform = "translateX(100%)";
    e.target.parentNode.parentNode.parentNode.parentNode.style.transform =
      "translateX(0rem)";
  };
  const handleOpenSubSub = (e) => {
    e.target.parentNode.parentNode.style.transform =
      "translateX(calc(100% - 0.5rem))";
    e.target.parentNode.childNodes[1].style.transform =
      "translateX(calc(-200% - 0.5rem))";
  };

  const handleBackButtonSub = (e) => {
    e.target.parentNode.parentNode.style.transform = "translateX(100%)";
    e.target.parentNode.parentNode.parentNode.parentNode.style.transform =
      "translateX(calc(-100% - 0.5rem))";
  };

  const defaultLinkStyle = {
    padding: "1rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    userSelect: "none",
  };
  const arrowLinkStyle = {
    padding: "1rem 0.5rem",
    userSelect: "none",
  };
  const defaultWindowStyle = {
    position: "absolute",
    width: "100%",
    top: "0",
    transform: "translateX(100%)",
  };

  return (
    links.status === "success" &&
    match && (
      <>
        <MenuIcon onClick={() => setOpen(!open)} sx={{ cursor: "pointer" }} />
        <CloseIcon
          onClick={() => setOpen(!open)}
          sx={
            open
              ? {
                  position: "absolute",
                  left: "calc(85vw + 0.25rem)",
                  top: "45vh",
                  color: "#faf9f8",
                  zIndex: "1000",
                  cursor: "pointer",
                  "&.MuiSvgIcon-root": {
                    width: "32px",
                    height: "32px",
                  },
                  "@media screen and (min-width: 768px)": {
                    left: "388px",
                  },
                }
              : { display: "none" }
          }
        />

        <Drawer open={open} sx={{ zIndex: "999" }}>
          <Grid2 container sx={{ flexDirection: "column" }}>
            <ul>
              {/* Main menu items  */}
              <li
                style={{
                  backgroundColor: "#F1EBDF",
                  display: "flex",
                  padding: "1rem 1rem",
                  alignItems: "center",
                }}
              >
                <Link href="#" variant="headerTop" sx={{ minWidth: "100%" }}>
                  <Grid2
                    sx={{
                      display: "flex",
                      padding: "1rem 1rem",
                      alignItems: "center",
                    }}
                  >
                    <PersonIcon sx={{ marginRight: "0.5rem" }} /> My Account
                  </Grid2>
                </Link>
              </li>

              {links.data.data.menu.map((item) => (
                <li style={arrowLinkStyle}>
                  <ArrowButton
                    Width="100%"
                    FontSize="1rem"
                    Text={item.menu_item}
                    onClick={handleOpenSub}
                  />
                  <ul style={defaultWindowStyle}>
                    {/* Submenu items  */}
                    {item.links.map((subItem) => (
                      <>
                        <li>
                          <ArrowButtonBack
                            Width="100%"
                            FontSize="1rem"
                            Text={subItem.main_item}
                            onClick={handleBackButton}
                          />
                        </li>
                        {subItem.sub_item.map((subItemLinks) => (
                          <li style={arrowLinkStyle}>
                            <ArrowButton
                              Width="100%"
                              FontSize="1rem"
                              Text={subItemLinks.header}
                              onClick={handleOpenSubSub}
                            />
                            {/* Sub sub menu items  */}
                            <ul style={defaultWindowStyle}>
                              {subItemLinks.link.map((subSubItem) => (
                                <>
                                  <li>
                                    <ArrowButtonBack
                                      Text={subItemLinks.header}
                                      onClick={handleBackButtonSub}
                                    />
                                  </li>
                                  {subSubItem.sublinks.map((links) => (
                                    <li style={defaultLinkStyle}>{links}</li>
                                  ))}
                                </>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
              <Grid2 sx={{ padding: "0.75rem 0 1rem 1.5rem" }}>
                <Link variant="flat">Customer Service</Link>
              </Grid2>
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1.5rem" }}>
                <Link variant="flat">Student Discount</Link>
              </Grid2>
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1.5rem" }}>
                <Link variant="flat">Find a store</Link>
              </Grid2>
              <Grid2 sx={{ padding: "0.75rem 0 0.75rem 1.5rem" }}>
                <Link variant="flat">Newsletter</Link>
              </Grid2>
            </ul>
          </Grid2>
        </Drawer>
      </>
    )
  );
};

export default MobileMenu;
