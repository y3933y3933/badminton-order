import { Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center bg="#4ac8c2" w="100%" px={4} py={2} color="white" as="footer" flexShrink={0}>
      <Text fontSize="md">&copy; Joanne,Lin 2022</Text>
    </Center>
  );
};

export default Footer;
