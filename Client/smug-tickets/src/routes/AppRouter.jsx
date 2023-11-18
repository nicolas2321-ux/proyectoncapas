import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthGoogle from "../pages/user/AuthGoogle";
import GoogleRegister from "../pages/user/GoogleRegister";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { DashboardClient } from "./DashboardClient";
import { ProtectedRoutesClient } from "./ProtectedRoutesClient";
import Home from "../pages/user/Home";

export const AppRouter = () =>{
    return(
        <Router>
            <div> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<AuthGoogle />} />
                    <Route path="/register" element={<GoogleRegister />} />
                    <Route element={<ProtectedRoutesClient/>}>
                        <Route path="/user/*" element={<DashboardClient />} />
                    </Route>
                    {/*<Route path="/register" element={<GoogleRegister />} />*/}
                </Routes>
            </div>
        </Router>
    );
};