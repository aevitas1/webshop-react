import { Text, Flex, Icon } from "@chakra-ui/react";
import AppLinks from "./AppLinks";
import { SlMenu } from "react-icons/Sl";

const SidebarLeft = () => {
  return (
    <>
      <Flex align="center" display={{ base: "none", xl: "flex" }}>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          cursor="pointer"
          mr="4"
          letterSpacing="wide"
        >
          Klantenservice
        </Text>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          cursor="pointer"
          mr="4"
          letterSpacing="wide"
        >
          Newsletter
        </Text>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          cursor="pointer"
          mr="4"
          letterSpacing="wide"
        >
          Zoek een winkel
        </Text>
        <AppLinks />
      </Flex>
      <Flex display={{ base: "flex", xl: "none" }} align="center">
        <Icon as={SlMenu} h="1.2rem" w="1.2rem" color="#222" mr="5" />
      </Flex>
    </>
  );
};

export default SidebarLeft;
