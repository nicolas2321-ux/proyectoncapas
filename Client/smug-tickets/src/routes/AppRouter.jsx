import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthGoogle from "../pages/user/AuthGoogle";
import GoogleRegister from "../pages/user/GoogleRegister";
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from "../pages/user/Home";

export const AppRouter = () =>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<AuthGoogle />} />
                    <Route path="/register" element={<GoogleRegister />} />
                    {/*<Route path="/register" element={<GoogleRegister />} />*/}
                </Routes>
            </div>
        </Router>
    );
};