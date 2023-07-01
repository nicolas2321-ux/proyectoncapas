import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import Swal from 'sweetalert2'
import { activar, desactivar } from '../services/user/loginService';
export function ModerarUsuario(props){
    const token = localStorage.getItem('token')
    const handleDesactivar = async ()=> {
        const res = await desactivar(props.id)
        if(res.status === 200){
        Swal.fire(
            'Accion realizada con exito',
            '',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
                props.onHide()
             
            }
          })
        }else{
            Swal.fire(
                'Ocurrio un error',
                '',
                'error'
              )
        }
    }

    
    const handleActivar = async()=> {
        
        const res = await activar(props.id)
        if(res.status === 200){
        Swal.fire(
            'Accion realizada con exito',
            '',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
                props.onHide()
             
            }
          })
        }else{
            Swal.fire(
                'Ocurrio un error',
                '',
                'error'
              )
        }
    }
    if(props.estado === 1){
        return (

            <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Desactivar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>¿Desactivar este usuario?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleDesactivar} >
                    Desactivar
                </Button>
            </Modal.Footer>
        </Modal> 
        )
    }else{
        return (

            <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Activar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>¿Volver a activar este usuario?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleActivar} >
                    Activar
                </Button>
            </Modal.Footer>
        </Modal> 
        )
    }

}