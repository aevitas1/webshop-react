import { Flex, Box, Image } from "@chakra-ui/react";
import SidebarLeft from "./sidebar_left/SidebarLeft";
import SidebarRight from "./sidebar_right/SidebarRight";
import hm from "../../assets/hm.svg";

const Navbar = () => {
  return (
    <>
      <Box pt={4} pr={6} pb={4} pl={6} width="100vw">
        <nav>
          <Flex height={67} justify="space-between">
            <SidebarLeft />
            <Image src={hm} fill="red" />
            <SidebarRight />
          </Flex>
        </nav>
      </Box>
    </>
  );
};

export default Navbar;
