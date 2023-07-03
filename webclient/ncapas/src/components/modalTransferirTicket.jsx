import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import { transferirTicket } from '../services/general/cliente';
import Swal from 'sweetalert2'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Myevents } from '../pages/user/myevents';

export function ModalTransferirTicket(props){
  const [username, setUsername] = useState('')
  const navigate = useNavigate();
 
  useEffect(() => {
    setUsername('')
  }, [props.show])
  const transferir = async() => {
    if(username !== ''){
    const object  = {
      token: localStorage.getItem('token'),
      ticket: props.idTicket,
      username: username
    }
    Swal.fire({
      text: 'Cargando...',
      showConfirmButton: false,
      allowOutsideClick: false
    });
    const res = await transferirTicket(object)
    const data = await res
    if(data.status === 200){
     
      Swal.fire(
        'Ticket transferido!',
        'Exito',
        'success'
      ).then(()=>{
        navigate('/')
      })
    }else if(data.status === 400){
    
      Swal.fire(
        'No puedes transferir tickets a tu cuenta',
        'Error',
        'error'
      )
      props.onHide()
    }else{
     
      Swal.fire(
        'No se encontro el usuario',
        'Error',
        'error'
      )
      props.onHide()
    }
  }else{
    Swal.fire(
      'Se detectaron campos vacios',
      'Error',
      'error'
    )
  }
  }
    return(
        <>
         <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Transferir ticket a usuario o correo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Label className='mt-2'>Nombre del usuario</Form.Label>
    <Form.Control type="text" name='text' placeholder="John Doe" onChange={(e) => {setUsername(e.target.value)}}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={transferir}>
        Transferir
      </Button>
    </Modal.Footer>
  </Modal>
        </>
    )
}