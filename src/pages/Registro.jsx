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
} from "@chakra-ui/react";
import { registrarUsuario } from "../services/UsuarioServices";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [confirmarContrasenia, setConfirmarContrasenia] = useState("");
  const [rol] = useState("u");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setExito("");

    // Validaciones básicas
    if (contrasenia !== confirmarContrasenia) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await registrarUsuario({
        nombre,
        apellido,
        correo,
        contrasenia,
        rol,
      });
      setExito("Registro exitoso. Redirigiendo al login...");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setError("Error al registrar usuario.", error);
    }
  };

  return (
    <Box h={"100vh"} display="flex" alignItems="center" justifyContent="center">
      <Box w="400px" p="6" borderWidth="1px" borderRadius="md" boxShadow="lg">
        <Text fontSize="2xl" mb="4" textAlign="center">
          Registro de Usuario
        </Text>

        {error && (
          <Text color="red.500" mb="4">
            {error}
          </Text>
        )}
        {exito && (
          <Text color="green.500" mb="4">
            {exito}
          </Text>
        )}

        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Apellido</FormLabel>
            <Input
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirmar Contraseña</FormLabel>
            <Input
              type="password"
              value={confirmarContrasenia}
              onChange={(e) => setConfirmarContrasenia(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="teal" onClick={handleSubmit}>
            Registrarse
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Volver al Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Registro;
