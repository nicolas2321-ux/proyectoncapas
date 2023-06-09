import NavBarComp from "../../components/navbar";
import BootstrapTable from "react-bootstrap-table-next";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModerarUsuario } from "../../components/modalModerador";
export function ModerarUsuarios(){
    const [showModal, setShowModal] = useState(false)
    const [rol, setRol] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [estado, SetEstado] = useState('')

    const handleRol = (e) => {
        setShowModal(true)
        setRol(e.rol)
        setName(e.name)
        setUsername(e.usuario)
        SetEstado(e.estado)
    }
    const products = [ {
        id:"1",name:"Nicolas Orellana",rol:"administrador", usuario:"orellanaj2321", estado:"activo"
    }, 
    {
        id:"2", name:"Usuario de prueba 2",rol:"cliente", usuario: "usuarioPrueba2321", estado: "inactivo"
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
    dataField: "estado",
    text:"estado"
    },{
        dataField: "rol",
        text: "rol"
    }, {
        text: 'Acciones',
        formatter: (cell, row) => {
            if (row.estado === 'activo') {
              return (
                <Button variant="danger" onClick={() => handleRol(row)}>Desactivar usuario</Button>
              );
            } else if (row.estado === 'inactivo') {
              return (
                <Button variant="success" onClick={() => handleRol(row)}>Activar usuario
                </Button>
              );
            } else {
              return null; // Si no hay un rol específico, no mostrar el botón
            }
          }
        }
      ];


    return(
        <>
        <NavBarComp></NavBarComp>
        <ModerarUsuario
        show={showModal}
        onHide={() => setShowModal(false)}
        estado={estado}/>
        
        <center>  <h1 style={{marginTop:"20px"}}>Moderar usuarios</h1> </center>
      
        <div style={{margin:"20px"}}>
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
        </div>
        </>
    )
}