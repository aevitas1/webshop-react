import { useState } from "react";
import { Text, Flex, Icon, Box, Stack } from "@chakra-ui/react";
import { CiUser, CiHeart, CiShoppingBasket, CiSearch } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";
import LoginDropDown from "./LoginDropdown";

const SidebarRight = () => {
  const [isHoveringCart, setIsHoveringCart] = useState(false);
  const [isHoveringLogin, setIsHoveringLogin] = useState(false);

  return (
    <>
      <Flex>
        <Flex>
          <Stack
            direction="row"
            mr="4"
            cursor="pointer"
            align="center"
            onMouseEnter={() => setIsHoveringLogin(true)}
            onMouseLeave={() => setIsHoveringLogin(false)}
          >
            <Icon as={CiUser} w="2rem" h="2rem" fontWeight="bold" />
            <Text
              fontSize="sm"
              fontWeight="semibold"
              display={{ base: "none", xl: "flex" }}
              letterSpacing="wide"
            >
              Inloggen
            </Text>
            <Box
              position="absolute"
              right="32px"
              top="65px"
              display={isHoveringLogin ? "block" : "none"}
            >
              <LoginDropDown />
            </Box>
          </Stack>
        </Flex>

        <Flex display={{ base: "flex", xl: "none" }}>
          <Stack direction="row" mr="4" cursor="pointer" align="center">
            <Icon as={CiSearch} w="2rem" h="2rem" fontWeight="bold" />
          </Stack>
        </Flex>

        <Flex>
          <Stack direction="row" mr="4" cursor="pointer" align="center">
            <Icon as={CiHeart} w="2rem" h="2rem" fontWeight="bold" />
            <Text
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="wide"
              display={{ base: "none", xl: "flex" }}
            >
              Favorieten
            </Text>
          </Stack>
        </Flex>

        <Flex>
          <Stack
            direction="row"
            mr="4"
            cursor="pointer"
            align="center"
            onMouseEnter={() => setIsHoveringCart(true)}
            onMouseLeave={() => setIsHoveringCart(false)}
          >
            <Icon as={CiShoppingBasket} w="2rem" h="2rem" fontWeight="bold" />
            <Text
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="wide"
              display={{ base: "none", xl: "flex" }}
            >
              Winkelmandje (0)
            </Text>
            <Box
              position="absolute"
              right="32px"
              top="65px"
              display={isHoveringCart ? "block" : "none"}
            >
              <ShoppingCart />
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default SidebarRight;
