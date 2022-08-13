import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import BadmintonIcon from "../assets/icons/BadmintonIcon";

const Header = () => {
  return (
    <Box
      bg="#4ac8c2"
      w="100%"
      p={4}
      color="white"
      display="flex"
      alignItems="center"
      as='header'
      flexShrink={0}
    >
      <BadmintonIcon />
      <Text as="h1" fontSize={24} fontWeight={600} letterSpacing="4px" ml="0.5rem">
        羽球排場
      </Text>
    </Box>
  );
};

export default Header;
