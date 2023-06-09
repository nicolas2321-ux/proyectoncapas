import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalBoletos(props){
return(
    <> 
    <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.artista}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Que desea hacer?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>
        Transferir ticker
      </Button>
      <Button variant="primary" onClick={props.onHide}>
        Generar QR
      </Button>
    </Modal.Footer>
  </Modal>
    </>
)
}