import axios from "axios";
import {
  useEffect,
  memo,
  useState,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";

const FooterRow = () => {
  type linkTypes = {
    shop: any;
    corporate_info: any;
    help: any;
    sign_up: any;
    Object: {
      Header: String;
      link: [{ uri: String; id: Number }];
      text: String;
    };
  };

  const [links, setLinks] = useState<linkTypes>();

  useEffect(() => {
    axios.get("./data/footerLinks.json").then((response) => {
      setLinks(response.data);
    });
  }, []);

  return (
    links !== undefined && (
      <>
        <Flex width="960px" px="4" direction={{ base: "column", md: "row" }}>
          {/* Desktop */}
          <Box width="25%" display={{ base: "none", md: "block" }}>
            <Text textStyle="h2_footer">{links.shop.header}</Text>
            {links.shop.link.map(
              (link: {
                id: Key | null | undefined;
                uri:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => {
                return (
                  <Text
                    textStyle="a_footer"
                    _hover={{ bg: "transparent", textDecoration: "underline" }}
                    key={link.id}
                  >
                    {link.uri}
                  </Text>
                );
              }
            )}
          </Box>
          <Box width="25%" display={{ base: "none", md: "block" }}>
            <Text textStyle="h2_footer">{links.corporate_info.header}</Text>
            {links.corporate_info.link.map(
              (link: {
                id: Key | null | undefined;
                uri:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => {
                return (
                  <Text
                    textStyle="a_footer"
                    _hover={{ bg: "transparent", textDecoration: "underline" }}
                    key={link.id}
                  >
                    {link.uri}
                  </Text>
                );
              }
            )}
          </Box>
          <Box width="25%" display={{ base: "none", md: "block" }}>
            <Text textStyle="h2_footer">{links.help.header}</Text>
            {links.help.link.map(
              (link: {
                id: Key | null | undefined;
                uri:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => {
                return (
                  <Text
                    textStyle="a_footer"
                    _hover={{ bg: "transparent", textDecoration: "underline" }}
                    key={link.id}
                  >
                    {link.uri}
                  </Text>
                );
              }
            )}
            <Text
              textStyle="p"
              cursor="pointer"
              lineHeight="2.2"
              _hover={{ bg: "transparent", textDecoration: "underline" }}
            >
              Cookie Settings
            </Text>
          </Box>

          {/* Mobile */}
          <Accordion
            display={{ base: "block", md: "none" }}
            width="100%"
            allowMultiple
          >
            <AccordionItem>
              <h2>
                <Text textStyle="h2_footer">
                  <AccordionButton _hover={{ bg: "transparent" }}>
                    <Box as="span" flex="1" textAlign="left">
                      {links.shop.header}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
              </h2>
              <AccordionPanel>
                {links.shop.link.map(
                  (link: {
                    id: Key | null | undefined;
                    uri:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                  }) => {
                    return (
                      <Text
                        textStyle="a_footer"
                        _hover={{
                          bg: "transparent",
                          textDecoration: "underline",
                        }}
                        key={link.id}
                      >
                        {link.uri}
                      </Text>
                    );
                  }
                )}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <Text textStyle="h2_footer">
                  <AccordionButton _hover={{ bg: "transparent" }}>
                    <Box as="span" flex="1" textAlign="left">
                      {links.corporate_info.header}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
              </h2>
              <AccordionPanel>
                {links.corporate_info.link.map(
                  (link: {
                    id: Key | null | undefined;
                    uri:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                  }) => {
                    return (
                      <Text
                        textStyle="a_footer"
                        _hover={{
                          bg: "transparent",
                          textDecoration: "underline",
                        }}
                        key={link.id}
                      >
                        {link.uri}
                      </Text>
                    );
                  }
                )}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <Text textStyle="h2_footer">
                  <AccordionButton _hover={{ bg: "transparent" }}>
                    <Box as="span" flex="1" textAlign="left">
                      {links.help.header}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
              </h2>
              <AccordionPanel>
                {links.help.link.map(
                  (link: {
                    id: Key | null | undefined;
                    uri:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                  }) => {
                    return (
                      <Text
                        textStyle="a_footer"
                        _hover={{
                          bg: "transparent",
                          textDecoration: "underline",
                        }}
                        key={link.id}
                      >
                        {link.uri}
                      </Text>
                    );
                  }
                )}
                <Text
                  textStyle="p"
                  cursor="pointer"
                  lineHeight="2.2"
                  _hover={{ bg: "transparent", textDecoration: "underline" }}
                >
                  Cookie Settings
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Box width={{ base: "100%", md: "25%" }}>
            <Text
              textStyle="h2_footer"
              textAlign={{ base: "center", md: "left" }}
              pb={{ base: "0", md: "3" }}
            >
              {links.sign_up.header}
            </Text>
            <Text
              textStyle="a_footer"
              textAlign={{ base: "center", md: "left" }}
              width={{ base: "80vw", md: "100%" }}
            >
              {links.sign_up.text}
            </Text>
            <Button
              bg="transparent"
              textTransform="uppercase"
              p="0"
              mt="4"
              fontWeight="normal"
              fontSize="0.75rem"
              width={{ base: "100%", md: "fit-content" }}
              justifyContent={{ base: "space-between", md: "" }}
              _hover={{ bg: "transparent", textDecoration: "underline" }}
            >
              Lees meer
              <Icon
                as={HiOutlineArrowRight}
                width="1.2rem"
                height="1.2rem"
                ml={{ base: "0", md: "4" }}
              />
            </Button>
          </Box>
        </Flex>
      </>
    )
  );
};
export default FooterRow;
