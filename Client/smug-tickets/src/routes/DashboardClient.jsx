import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from "../pages/user/Prueba";

export const DashboardClient = () =>{
    return(
        <>
            <Routes>
                <Route path="/prueba" element={Prueba} />
            </Routes>
        </>
    );
};