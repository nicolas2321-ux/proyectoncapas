import QRCode from 'qrcode.react';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
const BASE_URL = process.env.REACT_APP
export function QRimage(props){
    const link = BASE_URL+'/verificarTicket/'+props.idTicket
    return (
        <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>QR para entrar al evento</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <QRCode value={link}></QRCode>
    </Modal.Body>
   
  </Modal> 
    )
}