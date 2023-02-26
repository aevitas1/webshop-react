import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        w="100%"
        bg="#222"
        _hover={{ backgroundColor: "#555" }}
        borderRadius="0"
        py="6"
        px="8"
        color="#fff"
        onClick={onOpen}
        display={{ base: "none", xl: "flex" }}
      >
        Inloggen
      </Button>
      <Icon
        as={CiUser}
        w="2rem"
        h="2rem"
        fontWeight="bold"
        onClick={onOpen}
        display={{ base: "flex", xl: "none" }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="0" p="2">
          <ModalHeader fontWeight="800" pb="2">
            Inloggen
          </ModalHeader>
          <ModalCloseButton _hover={{ backgroundColor: "transparent" }} />
          <ModalBody>
            <Text
              textStyle="p"
              fontSize="sm"
              textAlign="center"
              pb="4"
              fontWeight="semibold"
            >
              Word member: mis geen deals, aanbiedingen, kortingen en
              bonusvouchers.
            </Text>
            <Stack>
              <Text textStyle="p" fontSize="sm">
                Gebruikersnaam{" "}
                <span
                  style={{ color: "red", fontWeight: "500", fontSize: "13px" }}
                >
                  *
                </span>
              </Text>
              <Input
                height="48px"
                size="lg"
                borderRadius="0"
                fontSize="1rem"
                fontWeight="400"
                border="1px solid #d0d0d0"
                placeholder="Dit is een demo website"
              />
              <Text textStyle="p" fontSize="sm">
                Wachtwoord{" "}
                <span
                  style={{ color: "red", fontWeight: "500", fontSize: "13px" }}
                >
                  *
                </span>
              </Text>
              <InputGroup
                size="md"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Input
                  height="48px"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  borderRadius="0"
                  fontSize="1rem"
                  fontWeight="400"
                  border="1px solid #d0d0d0"
                  placeholder="Je kunt niet inloggen"
                />
                <InputRightElement width="7rem">
                  <Button
                    mt="1"
                    minWidth="7rem"
                    h="1.75rem"
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: "transparent" }}
                    fontWeight="400"
                    size="lg"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Verbergen" : "Tonen"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Flex justify="space-between" minWidth="100%" pt="2">
                <Checkbox
                  borderRadius="5px"
                  iconColor="#202020"
                  colorScheme="#fafafa"
                >
                  <Text fontSize="sm" fontWeight="medium">
                    Gegevens onthouden
                  </Text>
                </Checkbox>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  textDecoration="underline"
                  _hover={{ cursor: "pointer" }}
                >
                  Wachtwoord vergeten?
                </Text>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Flex
              direction="column"
              gap="1rem"
              width="100%"
              alignItems="center"
            >
              <Button
                w="100%"
                bg="#222"
                _hover={{ backgroundColor: "#555" }}
                borderRadius="0"
                py="6"
                px="8"
                color="#fff"
              >
                Inloggen
              </Button>
              <Button
                w="100%"
                bg="transparent"
                _hover={{ backgroundColor: "transparent" }}
                borderRadius="0"
                border="1px solid #222"
                py="6"
                px="8"
                color="#222"
              >
                Word member
              </Button>
              <Text
                fontSize="sm"
                fontWeight="medium"
                textDecoration="underline"
                _hover={{ cursor: "pointer" }}
                pb="2"
              >
                Membership info
              </Text>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
