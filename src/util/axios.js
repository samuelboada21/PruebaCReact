import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5011",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a cada petición
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obtener el token almacenado
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agregar el token en los headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
