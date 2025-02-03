// src/config/axios.js
import axios from 'axios';

// Configuración global de axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5011',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
