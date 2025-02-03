import { Box, ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <ChakraProvider>
      <Box h={"100vh"} display="flex" alignItems="center" justifyContent="center">
        <AppRoutes />
      </Box>
    </ChakraProvider>
  );
};

export default App;
