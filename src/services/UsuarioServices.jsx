import axios from "../util/axios";

export const registrarUsuario = async (usuarioData) => {
  try {
    const response = await axios.post("/api/registro", usuarioData);
    return response.data;
  } catch (error) {
    console.error("Error registrando usuario:", error);
    throw error;
  }
};

export const loginUsuario = async (loginData) => {
  try {
    const response = await axios.post("/api/login", loginData);
    const { token } = response.data;

    if (token) {
      localStorage.setItem("token", token);
    }

    return response.data;
  } catch (error) {
    console.error("Error iniciando sesión:", error);
    throw error;
  }
};
