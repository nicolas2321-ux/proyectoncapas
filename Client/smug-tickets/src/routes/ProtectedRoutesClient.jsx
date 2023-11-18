import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoutesClient = ({isClient}) =>{
    if (!isClient) {
        return <Navigate to="/"/>
    }
    return <Outlet/>
}