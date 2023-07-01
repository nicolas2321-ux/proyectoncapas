import NavBarComp from "../components/navbar";
import BootstrapTable from "react-bootstrap-table-next";
import Button from 'react-bootstrap/Button';
import { ModalCambiarRol } from "../components/modalCambiarRol";
import { useState, useEffect } from "react";
import { GetUsers } from "../services/user/loginService";

export function UserAdmin(){

    const [showModal, setShowModal] = useState(false)
    const [rol, setRol] = useState('')
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [id, setId] = useState('')
   const token = localStorage.getItem('token')

    useEffect(() => {

        const fetchUsers = async() => {
            const res = await GetUsers(token)
            //console.log(await res.json())
            const data = await res.json()
            const array = [];
            data.map(element => {
                const object = {email: element.email, name: element.nombre, usuario:element.username, id: element.id}
                array.push(object)
             })
            
            setUsers(array)
               
              
        }
        fetchUsers()
      
    }, [])
   
    const handleRol = (e) => {
        setId(e.id)
        setShowModal(true)
        setRol(e.rol)
        setName(e.name)
        setUsername(e.usuario)
    }


    const columns = [{
    dataField: 'email',
    text: ' email'
    }, {
    dataField: 'name',
    text: 'Nombre del usuario'
    }, {
    dataField: 'usuario',
    text: 'Usuario'
    }, {
        text: 'Acciones',
        formatter: (cell, row) => (
          <Button variant="primary" onClick={() => handleRol(row)}>Agregar rol</Button>
        )
      }];

    return(
        <>
        <NavBarComp></NavBarComp>
         <ModalCambiarRol
        show={showModal}
        onHide = {() => setShowModal(false)}
        rol = {rol}
        name = {name}
        username = {username}
        id={id}
        /> 
        <div style={{margin:"20px"}}>
         <BootstrapTable keyField='id' data={ users } columns={ columns } /> 
        </div>
        </>
    )
}