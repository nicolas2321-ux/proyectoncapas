import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthGoogle from "../pages/user/AuthGoogle";
import GoogleRegister from "../pages/user/GoogleRegister";
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from "../pages/user/Home";
import CreateEvent from "../pages/admin/CreatEvent";
import NewLocation from "../pages/admin/NewLocation";
import ListOfLocations from "../pages/admin/ListOfLocations";
import EditEvent from "../pages/admin/EditEvent";


export const AppRouter = () =>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<AuthGoogle />} />
                    <Route path="/register" element={<GoogleRegister />} />
                    <Route path="/create" element={<CreateEvent />} />
                    <Route path="/newlocation/:id/:evento" element={<NewLocation />} />
                    <Route path="/listlocations/:id" element={<ListOfLocations />} />
                    <Route path="/edit" element={<EditEvent />} />
                    
                    {/*<Route path="/register" element={<GoogleRegister />} />*/}
                </Routes>
            </div>
        </Router>
    );
};