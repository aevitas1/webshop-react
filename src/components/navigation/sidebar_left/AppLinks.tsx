import { useState } from "react";
import { Flex, Box, Link } from "@chakra-ui/react";

const AppLinks = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showApps, setShowApps] = useState(false);

  return (
    <>
      <Flex
        color="black"
        cursor="pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => (showApps ? setShowApps(false) : setShowApps(true))}
        role="group"
        position="relative"
      >
        <Box
          w="6px"
          h="6px"
          borderRadius="50%"
          border={isHovering ? "1px solid red" : "1px solid black"}
          mr="2px"
        />
        <Box
          w="6px"
          h="6px"
          borderRadius="50%"
          border={isHovering ? "1px solid red" : "1px solid black"}
          mr="2px"
        />
        <Box
          w="6px"
          h="6px"
          borderRadius="50%"
          border={isHovering ? "1px solid red" : "1px solid black"}
        />
        <Flex
          position="absolute"
          direction="column"
          left="-8px"
          top="16px"
          width="max-content"
          bg="#fff"
          boxShadow="0 2px 4px 0 rgba(34,34,34, .2)"
          display={showApps ? "flex" : "none"}
        >
          <Link
            fontSize="sm"
            fontWeight="medium"
            cursor="pointer"
            letterSpacing="wide"
            href="https://play.google.com/store/apps/details?id=com.hm.goe"
            _hover={{ backgroundColor: "#f4eddd" }}
            pt="2"
            pb="2"
            pl="4"
            pr="4"
          >
            H&M Android app
          </Link>
          <Link
            fontSize="sm"
            fontWeight="medium"
            cursor="pointer"
            letterSpacing="wide"
            href="https://apps.apple.com/nl/app/h-m-we-love-fashion/id834465911"
            _hover={{ backgroundColor: "#f4eddd" }}
            pt="2"
            pb="2"
            pl="4"
            pr="4"
          >
            H&M Iphone app
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default AppLinks;
