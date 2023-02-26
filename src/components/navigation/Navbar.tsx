import { Flex, Box, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import SidebarLeft from "./sidebar_left/SidebarLeft";
import SidebarRight from "./sidebar_right/SidebarRight";
import hm from "../../assets/hm.svg";
import Infobar from "./Infobar";

const Navbar = () => {
  return (
    <>
      <Box
        pt={{ base: "0", xl: "4" }}
        pr={{ base: "3", xl: "8" }}
        pb={{ base: "0", xl: "4" }}
        pl={{ base: "3", xl: "8" }}
        width="100%"
      >
        <Flex
          height={67}
          justify={{ base: "none", xl: "space-between" }}
          pl={{ base: "1rem", xl: "0" }}
        >
          <SidebarLeft />
          <LinkBox>
            <LinkOverlay href="/">
              <Image
                src={hm}
                fill="red"
                width={{ base: "36px", xl: "60px" }}
                pt="6"
              />
            </LinkOverlay>
          </LinkBox>
          <Flex
            w={{ base: "90vw", xl: "max-content" }}
            justifyContent={{ base: "flex-end", xl: "none" }}
          >
            <SidebarRight />
          </Flex>
        </Flex>
        <Infobar />
      </Box>
    </>
  );
};

export default Navbar;
