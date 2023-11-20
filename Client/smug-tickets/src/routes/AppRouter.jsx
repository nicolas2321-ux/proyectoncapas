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
import HomeAdmin from "../pages/admin/HomeAdmin";
import UpcomingEvents from "../pages/admin/UpcomingEvents";
import FinishedEvents from "../pages/admin/FinishedEvents";
//import GraphEvents from "../pages/admin/GraphEvents";

import Record from "../pages/user/Record";
import MyTIckets from "../pages/user/MyTIckets";


const Location = () => {

    return (
        <Routes>
            {/*VISTAS PÚBLICAS*/ }
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthGoogle />} />
            <Route path="/register" element={<GoogleRegister />} />

            {/*VISTAS DE PRUEBA*/ }
            <Route path="/admin" element={<ProtectedAdmin component={Prueba} />} />
            <Route path="/lector" element={<ProtectedLectorQR component={Prueba2} />} />
            <Route path="/cliente" element={<ProtectedCliente component={Prueba3} />} />
            <Route path="/moderador" element={<ProtectedModerador component={Prueba4} />} />

            {/*VISTAS DE ADMIN*/ }
            <Route path="/admin/Home" element={<ProtectedAdmin component={HomeAdmin} />} />
            <Route path="/admin/createEvent" element={<ProtectedAdmin component={CreateEvent} />} />
            <Route path="/admin/newlocation/:id/:evento" element={<ProtectedAdmin component={NewLocation} />} />
            <Route path="/admin/listlocations/:id" element={<ProtectedAdmin component={ListOfLocations} />} />
            <Route path="/admin/editEvent/:id" element={<ProtectedAdmin component={EditEvent} />} />
            <Route path="/admin/allusers" element={<ProtectedAdmin component={UserManagement} />} />
            <Route path="/admin/upcoming" element={<ProtectedAdmin component={UpcomingEvents} />} />
            <Route path="/admin/finished" element={<ProtectedAdmin component={FinishedEvents} />} />
            
    
            {/*VISTAS DE CLIENTE*/ }
            <Route path="/cliente/Home" element={<ProtectedCliente component={Home} />} />
            <Route path="/cliente/history" element={<ProtectedCliente component={Record} />} />
            <Route path="/cliente/mytickets" element={<ProtectedCliente component={MyTIckets} />} />

            {/*VISTAS DE LECTORQR*/ }

            
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

