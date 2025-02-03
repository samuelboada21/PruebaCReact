import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeUsuario from "../pages/HomeUsuario";
import HomeAdministrador from "../pages/HomeAdministrador";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home-usuario" element={<HomeUsuario />} />
        <Route path="/home-administrador" element={<HomeAdministrador />} />
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
