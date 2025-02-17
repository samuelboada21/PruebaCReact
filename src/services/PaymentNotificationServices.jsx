import axios from '../util/axios';

// Crear sesión de pago con Stripe
export const crearSesionPago = async (checkoutData) => {
  try {
    const response = await axios.post('/api/create-checkout-session', checkoutData);
    return response.data;
  } catch (error) {
    console.error('Error creando sesión de pago:', error);
    throw error; 
  }
};

// Obtener todas las notificaciones de pagos
export const obtenerNotificacionesPago = async () => {
  try {
    const response = await axios.get('/api/webhook/payments');
    console.log("EL BACKEND MANDA", response);
    return response.data; 
  } catch (error) {
    console.error('Error obteniendo las notificaciones de pagos:', error);
    throw error; 
  }
};

// Obtener notificación de pago por ID
export const obtenerNotificacionPagoPorId = async (id) => {
  try {
    const response = await axios.get(`/api/webhook/payments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error obteniendo la notificación de pago con ID ${id}:`, error);
    throw error;
  }
};
