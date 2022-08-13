import { useState } from "react";
import { Container, Text, Divider } from "@chakra-ui/react";
import CustomForm from "../components/customForm/CustomForm";
import ResultTable from "../components/resultTable/ResultTable";

const Main = () => {
  const [result, setResult] = useState([]);

  const transformResult = (data) => {
    setResult(data);
  };

  return (
    <Container flexGrow={1} maxW="container.lg" as="main" py="1.5rem">
      <Text color="teal" fontWeight={600} fontSize="lg" as="h2">
        出席名單
      </Text>
      <Text color="orange" fontWeight={400} fontSize="sm" as="p" mb="0.5rem">
        備註: 目前只開發了12人2面場15個場次的組合。
      </Text>

      <CustomForm setResult={transformResult} />
      {result.length > 0 && (
        <>
          <Divider my="2rem" />
          <ResultTable data={result} />
        </>
      )}
    </Container>
  );
};

export default Main;
