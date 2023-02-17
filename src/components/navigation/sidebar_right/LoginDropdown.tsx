import { Box, Text, Button } from "@chakra-ui/react";

const LoginDropDown = () => {
  return (
    <>
      <Box
        p="6"
        bg="#faf9f8"
        boxShadow="0 2px 4px 0 rgba(34,34,34, .2)"
        position="absolute"
        right="290px"
        top="85%"
        minWidth="260px"
        letterSpacing="wide"
        cursor="initial"
        display={{ base: "none", xl: "block" }}
      >
        <Button
          w="100%"
          bg="#222"
          _hover={{ backgroundColor: "#555" }}
          borderRadius="0"
          py="6"
          px="8"
        >
          <Text color="#fff">Inloggen</Text>
        </Button>
        <Text fontSize="sm" fontWeight="semibold" pt="6">
          Mijn account
        </Text>
        <Text fontSize="sm" fontWeight="semibold" pt="2">
          Membership info
        </Text>
        <Text fontSize="xs" fontWeight="medium" color="#707070" pt="3">
          Nog geen member? Meld je hier aan!
        </Text>
      </Box>
    </>
  );
};

export default LoginDropDown;
