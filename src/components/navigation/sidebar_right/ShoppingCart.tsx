import { Box, Wrap, WrapItem } from "@chakra-ui/react";
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
        cursor="initial"
        display={{ base: "none", xl: "block" }}
      >
        <Wrap
          pb="6"
          borderBottom="1px solid #d0d0d0"
          fontSize="sm"
          fontWeight="semibold"
          letterSpacing="wide"
        >
          <WrapItem>Je winkelmandje is leeg</WrapItem>
        </Wrap>

        <Wrap
          justify="space-between"
          pt="4"
          pb="4"
          borderBottom="1px solid #d0d0d0"
          fontSize="sm"
          letterSpacing="wide"
        >
          <WrapItem fontWeight="semibold" color="#707070">
            Bestelwaarde
          </WrapItem>
          <WrapItem fontWeight="semibold">€ 0.00</WrapItem>
        </Wrap>
        <Wrap
          justify="space-between"
          pt="4"
          fontSize="md"
          fontWeight="bold"
          letterSpacing="wide"
        >
          <WrapItem>Totaal</WrapItem>
          <WrapItem>€ 0.00</WrapItem>
        </Wrap>
      </Box>
    </>
  );
};

export default ShoppingCart;
