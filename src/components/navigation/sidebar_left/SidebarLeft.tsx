import { Text, Flex } from "@chakra-ui/react";

const SidebarLeft = () => {
  return (
    <>
      <Flex align="center">
        <Text fontSize="sm" fontWeight="medium" cursor="pointer" mr="4">
          Klantenservice
        </Text>
        <Text fontSize="sm" fontWeight="medium" cursor="pointer" mr="4">
          Newsletter
        </Text>
        <Text fontSize="sm" fontWeight="medium" cursor="pointer" mr="4">
          Zoek een winkel
        </Text>
      </Flex>
    </>
  );
};

export default SidebarLeft;
