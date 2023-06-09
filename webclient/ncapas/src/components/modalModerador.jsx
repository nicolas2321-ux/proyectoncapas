import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import Swal from 'sweetalert2'
export function ModerarUsuario(props){
    const handleSave = ()=> {
        Swal.fire(
            'Accion realizada con exito',
            '',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
                props.onHide()
             
            }
          })
    }
    if(props.estado === "activo"){
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
                <Button variant="primary" onClick={handleSave} >
                    Activar
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
                <Button variant="primary" onClick={handleSave} >
                    Activar
                </Button>
            </Modal.Footer>
        </Modal> 
        )
    }

}