import { Text, Flex, Icon, Box } from "@chakra-ui/react";
import { CiUser, CiHeart, CiShoppingBasket } from "react-icons/ci";
import ShoppingCart from "./ShoppingCart";

const SidebarRight = () => {
  return (
    <>
      <Flex>
        <Flex>
          <Flex mr="4" cursor="pointer" align="center">
            <Icon as={CiUser} w="2rem" h="2rem" fontWeight="bold" />
            <Text fontSize="sm" fontWeight="normal">
              Inloggen
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Flex mr="4" cursor="pointer" align="center">
            <Icon as={CiHeart} w="2rem" h="2rem" fontWeight="bold" />
            <Text fontSize="sm" fontWeight="normal">
              Favorieten
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Flex mr="4" cursor="pointer" align="center">
            <Icon as={CiShoppingBasket} w="2rem" h="2rem" fontWeight="bold" />
            <Text fontSize="sm" fontWeight="normal">
              Winkelmandje
            </Text>
            <Box>
              <ShoppingCart />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SidebarRight;
