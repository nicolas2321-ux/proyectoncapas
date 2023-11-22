import NavbarUser from "../components/Navbar/NavbarUser";
import { Prueba } from "../pages/user/Prueba";
import Prueba2 from "../pages/user/Prueba2";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const DashboardClient = () =>{
    return(
        <>
            <NavbarUser/>
            <div>
                <Routes>
                    <Route path="/prueba" element={<Prueba/>}/>
                    <Route path="/prueba2" element={<Prueba/>}/>
                </Routes>
            </div>
        </>
    );
};