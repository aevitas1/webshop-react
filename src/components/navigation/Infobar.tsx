import { Flex, Text } from "@chakra-ui/react";

const Infobar = () => {
  return (
    <>
      <Flex width="100%" justifyContent="center" pt="8">
        <Flex
          w={{ base: "100%", xl: "1008px" }}
          pr={{ base: "1.5rem", xl: "0" }}
          justify="space-between"
          color="#222222"
          letterSpacing="wide"
          fontSize="sm"
          fontWeight="semibold"
        >
          <Text
            p="2"
            width={{ base: "100%", md: "max-content" }}
            textAlign={{ base: "center", md: "left" }}
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            Standaardlevering: 3-5 dagen
          </Text>
          <Text
            p="2"
            display={{ base: "none", md: "block" }}
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            Word member en ontvang 10% korting
          </Text>
          <Text
            p="2"
            display={{ base: "none", md: "block" }}
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            Members: Gratis standaardverzending vanaf €20
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Infobar;
