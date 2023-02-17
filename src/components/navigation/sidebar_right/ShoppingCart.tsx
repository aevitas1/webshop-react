import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
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
        minWidth="375px"
        letterSpacing="wide"
        cursor="initial"
        display={{ base: "none", xl: "block" }}
      >
        <Text fontSize="sm" fontWeight="semibold">
          <Wrap pb="6" borderBottom="1px solid #d0d0d0">
            <WrapItem>Je winkelmandje is leeg</WrapItem>
          </Wrap>
        </Text>
        <Text fontSize="sm">
          <Wrap
            justify="space-between"
            pt="4"
            pb="4"
            borderBottom="1px solid #000000"
          >
            <WrapItem fontWeight="semibold" color="#707070">
              Bestelwaarde
            </WrapItem>
            <WrapItem fontWeight="semibold">€ 0.00</WrapItem>
          </Wrap>
        </Text>
        <Text fontSize="md" fontWeight="bold">
          <Wrap justify="space-between" pt="4">
            <WrapItem>Totaal</WrapItem>
            <WrapItem>€ 0.00</WrapItem>
          </Wrap>
        </Text>
      </Box>
    </>
  );
};

export default ShoppingCart;
