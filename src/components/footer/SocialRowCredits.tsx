import {
  Flex,
  Icon,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import hm from "../../assets/hm.svg";

const SocialRowCredits = () => {
  return (
    <>
      <Flex
        alignItems="center"
        width={{ base: "100%", md: "960px" }}
        direction="column"
      >
        <Flex gap="1.5rem">
          <Icon
            as={AiFillFacebook}
            width={{ base: "1.3rem", md: "1.5rem" }}
            height={{ base: "1.3rem", md: "1.5rem" }}
            cursor="pointer"
            _hover={{ color: "#707070" }}
          />
          <Icon
            as={AiOutlineTwitter}
            width={{ base: "1.3rem", md: "1.5rem" }}
            height={{ base: "1.3rem", md: "1.5rem" }}
            cursor="pointer"
            _hover={{ color: "#707070" }}
          />
          <Icon
            as={AiOutlineInstagram}
            width={{ base: "1.3rem", md: "1.5rem" }}
            height={{ base: "1.3rem", md: "1.5rem" }}
            cursor="pointer"
            _hover={{ color: "#707070" }}
          />
          <Icon
            as={AiFillYoutube}
            width={{ base: "1.3rem", md: "1.5rem" }}
            height={{ base: "1.3rem", md: "1.5rem" }}
            cursor="pointer"
            _hover={{ color: "#707070" }}
          />
          <Icon
            as={FaPinterest}
            width={{ base: "1.3rem", md: "1.5rem" }}
            height={{ base: "1.3rem", md: "1.5rem" }}
            cursor="pointer"
            _hover={{ color: "#707070" }}
          />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text
            textStyle="a_footer"
            cursor="default"
            width={{ base: "90%", md: "670px" }}
            textAlign="center"
            lineHeight="1.6"
            pt="6"
            pb="6"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            labore reiciendis consequuntur vitae iusto aut ratione? Sunt
            repudiandae pariatur perferendis sit, natus quaerat, corporis
            voluptatibus maiores saepe explicabo fuga blanditiis error, a
            reiciendis ab distinctio!
          </Text>
          <LinkBox>
            <LinkOverlay href="/">
              <Image src={hm} color="#222" width="36px" pt="6" />
            </LinkOverlay>
          </LinkBox>
          <Text pt="3" textStyle="a_footer">
            Nederland | €
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default SocialRowCredits;
