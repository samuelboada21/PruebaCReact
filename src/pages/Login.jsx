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
import { loginUsuario } from "../services/UsuarioServices"; // Importa la función de login

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      await loginUsuario({ correo, contrasenia });

      // Guardar el token en localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Error al obtener el token.");
        return;
      }

      // Decodificar el token para obtener el rol del usuario
      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      if (decodedToken.rol === "Usuario") {
        navigate("/home-usuario");
      } else if (decodedToken.rol === "Administrador") {
        navigate("/home-administrador");
      } else {
        setError("Rol no reconocido.");
      }
    } catch (error) {
      setError("Credenciales incorrectas.", error);
    }
  };
  return (
    <Box w="400px" p="6" borderWidth="1px" borderRadius="md" boxShadow="lg">
      <Text fontSize="2xl" mb="4" textAlign="center">
        Iniciar sesión
      </Text>

      {error && (
        <Text color="red.500" mb="4">
          {error}
        </Text>
      )}

      <VStack spacing={4} align="stretch">
        <FormControl isRequired isInvalid={!!error}>
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

        <FormControl isRequired isInvalid={!!error}>
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

        <Button colorScheme="teal" onClick={handleSubmit}>
          Iniciar sesión
        </Button>

        <Button
          colorScheme="gray"
          variant="outline"
          onClick={() => navigate("/registro")}
        >
          Registrarse
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
