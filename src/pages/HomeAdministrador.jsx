import { useState, useEffect } from "react";
import { Input, Button, Box, VStack, Text } from "@chakra-ui/react";
import { obtenerNotificacionesPago, obtenerNotificacionPagoPorId } from "../services/PaymentNotificationServices"; 
import Table from "../components/Table";

const HomeAdministrador = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [searchId, setSearchId] = useState(""); 
  const [error, setError] = useState("");

  // Cargar las notificaciones de pagos
  const cargarNotificaciones = async () => {
    try {
      const data = await obtenerNotificacionesPago();
      console.log("LAS NOTIFICACIONES", data);
      setNotificaciones(data);
      setError("");
    } catch (err) {
      setError("Hubo un error al cargar las notificaciones.", err);
    }
  };

  // Buscar notificación por ID
  const buscarPorId = async () => {
    try {
      const data = await obtenerNotificacionPagoPorId(searchId);
      setNotificaciones([data]);
      setError("");
    } catch (err) {
      setError("No se encontró la notificación con ese ID.", err);
    }
  };

  // Cargar las notificaciones al inicio
  useEffect(() => {
    cargarNotificaciones();
  }, []);

  const columns = ["fechaHora", "transaccionID", "monto", "banco", "metodoPago", "usuarioId"];


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

export default HomeAdministrador;
