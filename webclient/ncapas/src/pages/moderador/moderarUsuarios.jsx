import NavBarComp from "../../components/navbar";
import BootstrapTable from "react-bootstrap-table-next";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModerarUsuario } from "../../components/modalModerador";
import { useEffect } from "react";
import { getAllUsers } from "../../services/user/loginService";
export function ModerarUsuarios(){
    const [showModal, setShowModal] = useState(false)
    const [rol, setRol] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [estado, SetEstado] = useState('')
    const token = localStorage.getItem('token')
    const [ids, setId] = useState('')
    const [users, setUsers] = useState([])
    useEffect(() => {
      const fetchData = async() => {
        
        const res = await getAllUsers(token)
       
        const data = await res.json()
        const array = [];
        data.map(element => {
            const object = {email: element.email, name: element.nombre, usuario:element.username, id: element.id, estado: element.estado}
            array.push(object)
         })
        
        setUsers(array)
      }
      fetchData()
    }, [showModal])
    const handleRol = (e) => {
      console.log(e)
        setId(e.id)
        setShowModal(true)
        setRol(e.rol)
        setName(e.name)
        setUsername(e.usuario)
        SetEstado(e.estado)
    }
  
    const columns = [ 
      {
    dataField: 'name',
    text: 'Nombre del usuario'
    }, {
    dataField: 'usuario',
    text: 'Usuario'
    },{
    dataField: "email",
    text:"email"
    }, {
        text: 'Acciones',
        formatter: (cell, row) => {
            if (row.estado === 1) {
              return (
                <Button variant="danger" onClick={() => handleRol(row)}>Desactivar usuario</Button>
              );
            } else if (row.estado === 0) {
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
        estado={estado}
        id={ids}
        />
        
        <center>  <h1 style={{marginTop:"20px"}}>Moderar usuarios</h1> </center>
      
        <div style={{margin:"20px"}}>
        <BootstrapTable keyField='id' data={ users } columns={ columns } />
        </div>
        </>
    )
}