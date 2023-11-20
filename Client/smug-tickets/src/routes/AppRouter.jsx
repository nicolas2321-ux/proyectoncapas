import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthGoogle from "../pages/user/AuthGoogle";
import GoogleRegister from "../pages/user/GoogleRegister";
import { DashboardClient } from "./DashboardClient";
import { GoogleOAuthProvider } from "@react-oauth/google";
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

import Home from "../pages/user/Home";
import CreateEvent from "../pages/admin/CreatEvent";
import UserManagement from "../pages/admin/UserManagement";
import NewLocation from "../pages/admin/NewLocation";
import ListOfLocations from "../pages/admin/ListOfLocations";
import EditEvent from "../pages/admin/EditEvent";


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

             <Route path="/create" element={<CreateEvent />} />
             <Route path="/allusers" element={<UserManagement />} />
             <Route path="/newlocation/:id/:evento" element={<NewLocation />} />
             <Route path="/listlocations/:id" element={<ListOfLocations />} />
              <Route path="/edit" element={<EditEvent />} />
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

