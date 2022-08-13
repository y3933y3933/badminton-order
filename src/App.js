import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" height='100vh'>
        <Header />
        <Main />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
