import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { DownLoadIcon } from "../../assets/icons/DownloadIcon";
import exportAsImage from "../../core/ExportAsImage";

const ResultTable = ({ data }) => {
  const exportRef = useRef();

  const handleExportImage = () => {
    exportAsImage(exportRef.current, '排點表')
  };

  return (
    <>
      <HStack align="center" mb="0.5rem" justify="space-between">
        <Text color="teal" fontWeight={600} fontSize="lg" as="h2">
          排點結果
        </Text>
        <Link display="flex" alignItems="center" onClick={handleExportImage}>
          下載圖片
          <DownLoadIcon />
        </Link>
      </HStack>

      <TableContainer ref={exportRef}>
        <Table variant="striped" colorScheme="blackAlpha">
          {/* <TableCaption placement="top" color="red" display="flex">排點表</TableCaption> */}
          <Thead>
            <Tr>
              <Th>場次</Th>
              <Th>第一場地</Th>
              <Th>第二場地</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item.groupOne.join("、")}</Td>
                  <Td>{item.groupTwo.join("、")}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ResultTable;
