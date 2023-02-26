import { Flex, Icon } from "@chakra-ui/react";
import FooterRow from "./FooterRow";
import SocialRowCredits from "./SocialRowCredits";

const Footer = () => {
  return (
    <>
      <Flex
        w="100%"
        bg="#e4e4e4"
        pt={{ base: "1rem", lg: "3rem", xl: "4rem" }}
        px={{ base: "1rem", xl: "2rem" }}
        justifyContent="center"
      >
        <FooterRow />
      </Flex>
      <Flex
        w="100%"
        bg="#e4e4e4"
        pt="1.5rem"
        pb={{ base: "1rem", lg: "3rem", xl: "4rem" }}
        px={{ base: "1rem", xl: "2rem" }}
        justifyContent="center"
      >
        <SocialRowCredits />
      </Flex>
    </>
  );
};

// 1024px = py 3rem px 2rem
// 768px = 1/1

export default Footer;
