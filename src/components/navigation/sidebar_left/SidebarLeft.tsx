import { Text, Flex, Icon } from "@chakra-ui/react";
import AppLinks from "./AppLinks";
import { SlMenu } from "react-icons/Sl";

const SidebarLeft = () => {
  return (
    <>
      <Flex align="center" display={{ base: "none", xl: "flex" }}>
        <Text textStyle="a" cursor="pointer" mr="4">
          Klantenservice
        </Text>
        <Text textStyle="a" cursor="pointer" mr="4">
          Newsletter
        </Text>
        <Text textStyle="a" cursor="pointer" mr="4">
          Zoek een winkel
        </Text>
        <AppLinks />
      </Flex>
      <Flex display={{ base: "flex", xl: "none" }} align="center">
        <Icon as={SlMenu} height="1.2rem" width="1.2rem" mr="5" />
      </Flex>
    </>
  );
};

export default SidebarLeft;
