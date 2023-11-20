import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthGoogle from "../pages/user/AuthGoogle";
import GoogleRegister from "../pages/user/GoogleRegister";
import { DashboardClient } from "./DashboardClient";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "../pages/user/Home";
import Private from "./Private";
import Prueba from "../pages/user/Prueba";
import Prueba2 from "../pages/user/Prueba2";
import { useLocation } from "react-router-dom";
import { ProtectedAdmin } from "./ProtectedAdmin";
import { ProtectedLectorQR } from "./ProtectedLectorQR";
import { ProtectedCliente } from "./ProtectedClient";
import { ProtectedModerador } from "./ProtectedModerador";
import Prueba3 from "../pages/user/Prueba3";
import Prueba4 from "../pages/user/Prueba4";


const Location = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthGoogle />} />
            <Route path="/register" element={<GoogleRegister />} />
            <Route path="/admin" element={<ProtectedAdmin component={Prueba} />} />
            <Route path="/lector" element={<ProtectedLectorQR component={Prueba2} />} />
            <Route path="/cliente" element={<ProtectedCliente component={Prueba3} />} />
            <Route path="/moderador" element={<ProtectedModerador component={Prueba4} />} />
        </Routes>
    );
};

export const AppRouter = () => {
    return (
    <Router>
        <div>
            <Location/>
        </div>
    </Router>
    );
};
