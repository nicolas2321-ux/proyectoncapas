import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import context from "../Context/UserContext";
import rolService from "../services/Auth/RolService";
import authService from "../services/Auth/AuthService";

const Private = () =>{
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const useAuth = async() =>{
        const token = context.getToken();
        console.log("Token:", token);
        try {
            const id = await authService.verifyToken(token);
            const rol = await rolService.getRoles(id,token);
            console.log("Roles:", rol[0]);
            if (rol.includes('Cliente')) {
                console.log('Es un cliente');
                setIsClient(true);
                console.log('isClient:', isClient);
            }
            /*
            rol.forEach(element =>{
                if (element === "Cliente") {
                    console.log("Es un cliente");
                    setIsClient(true);
                }
            })*/
        } catch (error) {
            console.error('Error:', error);
        }finally{
            setIsLoading(false);
        }
    }
    
    useEffect(() =>{
        useAuth();
    },[]); 
    
    useEffect(()=>{
        console.log(isClient);
    },[isClient]);
    
    if (isLoading) {
        console.log("Cargando..............."); // Mostrar indicador de carga
    }

    return isClient ? <Outlet/> : <Navigate to='/'/>
}
export default Private;