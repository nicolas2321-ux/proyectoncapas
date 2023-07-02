import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { getRolById } from '../services/user/rol';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { SaveRol } from '../services/user/rol';
export  function ModalAgregarRol(props){
  const token = localStorage.getItem('token')

  const [roles, setRoles] = useState('')

  const handleSend = async() => {
    const object = {
      token: token,
      rol: roles,
      id: props.id
    }
    const res = await SaveRol(object)
    const response = await res
    if(response.status === 200){
      Swal.fire(
        'Accion realizada con exito',
        'Se ha creado el rol',
        'success'
      )
      props.onHide()
    }else if(response.status === 409){
      Swal.fire(
        'Error',
        'Ya posee este rol',
        'error'
      )
    }else{
      Swal.fire(
        'Error',
        'Ocurrio un error inesperado',
        'error'
      )
    }

  }
    return(
        <>
            <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Elige un rol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select aria-label="" onChange={(e) => {setRoles(e.target.value)}}>
          <option>Selecciona una opcion</option>
          <option value="administrador">Administrador</option>
          <option value="moderador">Moderador</option>
          <option value="empleado">Empleado</option>
         
        </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSend}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}