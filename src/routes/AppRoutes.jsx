import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeUsuario from "../pages/HomeUsuario";
import HomeAdministrador from "../pages/HomeAdministrador";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home-usuario" element={<HomeUsuario />} />
        <Route path="/home-administrador" element={<HomeAdministrador />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
