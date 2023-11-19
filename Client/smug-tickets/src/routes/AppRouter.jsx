import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthGoogle from "../pages/user/AuthGoogle";
//import ProtectedRoutesClient from "./ProtectedRoutesClient";
import ProtectedRoutesClient from "./ProtectedRoutesClient";
import GoogleRegister from "../pages/user/GoogleRegister";
import { DashboardClient } from "./DashboardClient";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "../pages/user/Home";
import Private from "./Private";
import Prueba from "../pages/user/Prueba";
import Prueba2 from "../pages/user/Prueba2";
import { useLocation } from "react-router-dom";

const Location = () => {
    //const location = useLocation();
    //const myRol = location.state && location.state.myRol;
    //console.log(myRol);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthGoogle />} />
            <Route path="/register" element={<GoogleRegister />} />
            {/*<Route path="/register" element={<GoogleRegister />} />*/}
            {/*
            <Route element={<ProtectedRoutesClient isClient={myRol} />}>
                <Route path="/user/*" element={<DashboardClient />} />
            </Route>
            */}
            <Route element={<Private />}>
                <Route path="/prueba2" element={<Prueba />} />
                <Route path="/prueba3" element={<Prueba2 />} />
            </Route>
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
