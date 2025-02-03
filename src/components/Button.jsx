import { Button as ChakraButton } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, colorScheme = "teal", variant = "solid", size = "md" }) => {
  return (
    <ChakraButton onClick={onClick} colorScheme={colorScheme} variant={variant} size={size}>
      {children}
    </ChakraButton>
  );
};

export default Button;
