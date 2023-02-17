import { Box, Text } from "@chakra-ui/react";
const ShoppingCart = () => {
  return (
    <>
      <Box
        p="6"
        bg="#faf9f8"
        boxShadow="0 2px 4px 0 rgba(34,34,34, .2)"
        position="absolute"
        right="32px"
        top="90%"
        minWidth="250px"
      >
        <Text fontSize="sm" fontWeight="bold">
          Je winkelmandje is leeg
        </Text>
        <hr></hr>
        <Text fontSize="sm" fontWeight="semibold" color="#707070">
          Bestelwaarde
        </Text>
        <hr></hr>
        <Text fontSize="sm" fontWeight="bold">
          Totaal
        </Text>
      </Box>
    </>
  );
};

export default ShoppingCart;
