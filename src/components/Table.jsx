/* eslint-disable react/prop-types */
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

const Table = ({ data, columns, caption }) => {
  return (
    <TableContainer>
      <ChakraTable variant="striped" colorScheme="teal">
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {Object.keys(row).map((key) => (
                <Td key={key}>{row[key]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
