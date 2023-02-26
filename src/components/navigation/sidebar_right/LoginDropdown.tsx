import { Flex, Text } from "@chakra-ui/react";
import LoginModal from "./LoginModal";

const LoginDropDown = () => {
  return (
    <>
      <Flex
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
        direction="column"
      >
        <LoginModal />
        <Text textStyle="p" cursor="pointer" pt="3">
          Mijn account
        </Text>
        <Text textStyle="p" cursor="pointer" pt="3">
          Membership info
        </Text>
        <Text textStyle="helper" fontSize="xs" fontWeight="medium" pt="3">
          Nog geen member? Meld je hier aan!
        </Text>
      </Flex>
    </>
  );
};

export default LoginDropDown;
