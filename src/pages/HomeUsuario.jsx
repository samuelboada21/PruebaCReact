import { useState, useEffect } from "react";
import { Input, Button, Box, VStack, Text } from "@chakra-ui/react";
import { obtenerNotificacionesPago, obtenerNotificacionPagoPorId } from "../services/PaymentNotificationServices"; // Asegúrate de que el archivo de servicios esté correcto
import Table from "../components/Table"; // Importamos el componente Table

const HomeUsuario = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [searchId, setSearchId] = useState(""); // Estado para la búsqueda por ID
  const [error, setError] = useState(""); // Estado para manejar errores

  // Cargar las notificaciones de pagos
  const cargarNotificaciones = async () => {
    try {
      const data = await obtenerNotificacionesPago();
      setNotificaciones(data);
      setError("");
    } catch (err) {
      setError("Hubo un error al cargar las notificaciones.");
    }
  };

  // Buscar notificación por ID
  const buscarPorId = async () => {
    try {
      const data = await obtenerNotificacionPagoPorId(searchId);
      setNotificaciones([data]); // Mostrar solo la notificación que coincide con el ID
      setError("");
    } catch (err) {
      setError("No se encontró la notificación con ese ID.");
    }
  };

  // Cargar las notificaciones al inicio
  useEffect(() => {
    cargarNotificaciones();
  }, []);

  const columns = ["FechaHora", "TransaccionID", "Monto", "Banco", "MetodoPago"];

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4} textAlign="center">Catálogo de Notificaciones de Pagos</Text>

      {error && <Text color="red.500" mb={4}>{error}</Text>}

      <VStack spacing={4} align="stretch" mb={4}>
        <Input
          placeholder="Buscar por ID de Transacción"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button colorScheme="teal" onClick={buscarPorId}>Buscar</Button>
      </VStack>

      <Table
        data={notificaciones}
        columns={columns}
        caption="Notificaciones de Pago"
      />
    </Box>
  );
};

export default HomeUsuario;
