/* eslint-disable react/prop-types */
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

const Table = ({ data = [], columns, caption }) => {
  if (!Array.isArray(data)) {
    console.error("Error: data no es un array", data);
    return <p>Error al cargar la tabla.</p>; // Evita el crash si `data` no es un array
  }

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
              {columns.map((col, colIndex) => (
                <Td key={colIndex}>{row[col]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};


export default Table;
