
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <ChakraProvider>
        <AppRoutes />
    </ChakraProvider>
  );
};

export default App;
