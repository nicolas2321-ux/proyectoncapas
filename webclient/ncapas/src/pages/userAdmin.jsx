import NavBarComp from "../components/navbar";
import BootstrapTable from "react-bootstrap-table-next";
import Button from 'react-bootstrap/Button';
import { ModalCambiarRol } from "../components/modalCambiarRol";
import { useState } from "react";
export function UserAdmin(){
    const [showModal, setShowModal] = useState(false)
    const [rol, setRol] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const handleRol = (e) => {
        setShowModal(true)
        setRol(e.rol)
        setName(e.name)
        setUsername(e.usuario)
    }
    const products = [ {
        id:"1",name:"Nicolas Orellana",rol:"administrador", usuario:"orellanaj2321"
    }, 
    {
        id:"2", name:"Usuario de prueba 2",rol:"cliente", usuario: "usuarioPrueba2321"
    }]
    const columns = [{
    dataField: 'id',
    text: ' ID'
    }, {
    dataField: 'name',
    text: 'Nombre del usuario'
    }, {
    dataField: 'usuario',
    text: 'Usuario'
    },{
        dataField: "rol",
        text: "rol"
    }, {
        text: 'Acciones',
        formatter: (cell, row) => (
          <Button variant="primary" onClick={() => handleRol(row)}>Cambiar de rol</Button>
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
        />
        <div style={{margin:"20px"}}>
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
        </div>
        </>
    )
}