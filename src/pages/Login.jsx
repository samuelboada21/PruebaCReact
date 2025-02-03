import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { loginUsuario } from "../services/UsuarioServices"; // Importa la función de axios

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Usamos la función loginUsuario que usa axios
      const data = await loginUsuario({ correo, contrasenia });

      // Si la autenticación fue exitosa, obtenemos el token y decodificamos
      const token = data.token;
      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      if (decodedToken.rol === "Usuario") {
        navigate("/home-usuario");
      } else if (decodedToken.rol === "Administrador") {
        navigate("/home-administrador");
      }
    } catch (error) {
      // Muestra el error del backend si está disponible
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Credenciales incorrectas");
      }
    }
  };

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt="100px"
      p="6"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
    >
      <Text fontSize="2xl" mb="4" textAlign="center">
        Iniciar sesión
      </Text>

      {error && (
        <Text color="red.500" mb="4">
          {error}
        </Text>
      )}

      <VStack spacing={4} align="stretch">
        <FormControl isRequired isInvalid={error}>
          <FormLabel htmlFor="correo">Correo electrónico</FormLabel>
          <Input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={error}>
          <FormLabel htmlFor="contrasenia">Contraseña</FormLabel>
          <Input
            type="password"
            id="contrasenia"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            required
          />
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={4} onClick={handleSubmit}>
          Iniciar sesión
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
