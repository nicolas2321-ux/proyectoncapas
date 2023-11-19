import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import context from "../Context/UserContext";
import rolService from "../services/Auth/RolService";
import authService from "../services/Auth/AuthService";

const ProtectedRoutesClient = ({ isClient }) =>{
    //console.log(isClient);
    if (isClient != "Cliente") {
        return <Navigate to="/"/>
    }
/* 
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getRole = async() =>{
      const token = context.getToken();
      try {
        const id = await authService.verifyToken(token);
        console.log(id);
        const rol = await rolService.getRoles(id,token);
        console.log(rol);
        rol.forEach(element =>{
          if (element === "Cliente") {
            setClient(true);
          }
        })
        
      } catch (error) {
        console.log(error);
      }
    
    
  }
    
    useEffect(() =>{
        getToke();
    },[]);

    useEffect(()=>{
        if (isclient) {
            console.log(client);
            return()=>{
            <AppRouter props={client} />;
            //navigate('/user/prueba');
            }
        }
    },[isclient]);

    if (isLoading) {
        console.log("Cargando..................");; // Mostrar indicador de carga
    }
    if (!isClient) {
        return <Navigate to="/"/>
    }
*/

    return <Outlet />;  
}

export default ProtectedRoutesClient;