import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
export function ModalTransferirTicket(props){
    return(
        <>
         <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Transferir ticket a usuario</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Label className='mt-2'>Nombre del usuario</Form.Label>
    <Form.Control type="text" name='text' placeholder="John Doe"/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={props.onHide}>
        Transferir
      </Button>
    </Modal.Footer>
  </Modal>
        </>
    )
}