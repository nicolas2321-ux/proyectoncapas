
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { get_rol } from "../user/rol";
export const ProtectedModerador = ({component: Component}) => {
    const history = useNavigate();
    const [rol, setRoles] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            history('/')
        }else{
           get_roles()
        }
       async function get_roles(){
        const object = {token: token}
        const roles = await get_rol(object)
        const result = await roles.json()
        let verificacion = false
        setRoles(result.roles)
        result.roles.forEach(element => {
            if(element.rol === 'moderador'){
              verificacion = true
            }
        });
        if(!verificacion){
            history('/')
        }
       } 
    }, [])
    return <Component></Component>
}