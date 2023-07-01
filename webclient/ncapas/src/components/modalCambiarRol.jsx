import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getRolById } from '../services/user/rol';
import { ModalAgregarRol } from './showAgregarRol';
import Swal from 'sweetalert2';
import { deletePermiso } from '../services/user/rol';
export function ModalCambiarRol(props){
    const token = localStorage.getItem('token')
    const [roles, setRoles] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [Ids, setIDs] = useState([])
    useEffect(() => {
        const fetchRoles = async() => {
            const object = {
                token: token,
                id: props.id
            }
            const res = await getRolById(object)
            const data = (await res)
            if(data.status === 200){
              const resultado = await data.json()
              setRoles(resultado.roles)
              setIDs(resultado.user_rol_ids)
            }
          }
        
        fetchRoles()

    }, [props.show])
    const handleSave = () => {
        setShowModal(true)
       
        props.onHide()

    }
    const handleEliminar = async(idPermiso) => {
      console.log(idPermiso)
      Swal.fire({
        title: 'Estas seguro?',
        text: "Se eliminara este permiso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro'
      }).then(async (result) => {
        if (result.isConfirmed) {
          
            const object = {
                token: token,
                idPermiso: idPermiso
            }
           const ocultar = await deletePermiso(object)
           const response = await ocultar
           console.log(response)
            if( response.status === 200){
          Swal.fire(
            'Accion realizada con exito',
            'El evento fue ocultado',
            'success'
          )
            }else{
              Swal.fire(
                'Error',
                'Ocurrio un error inesperado',
                'error'
              )
            }
            props.onHide()
         
        }
      })
    }
    return(
        <>
        <ModalAgregarRol
        show={showModal}
        onHide={() => {setShowModal(false)}}
        id={props.id}
        />
         <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Cambiar rol para el usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table">
            <thead>
              <tr>
                <th>Rol</th>
                <th>Descripcion</th>
                <th>Acciones</th>
                
              </tr>
            </thead>
            <tbody>
            {roles.map((item, index) => (
                <tr>
                  <td>{item.rol}</td>
                  <td>{item.descripcion}</td>
                  <td>
                    <Button variant='danger' onClick={() => {handleEliminar(Ids[index])}} >Desactivar rol</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Agregar  rol
            </Button>
        </Modal.Footer>
    </Modal> 
        </>
    )
}