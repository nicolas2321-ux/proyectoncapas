import QRCode from 'qrcode.react';
import Modal from 'react-bootstrap/Modal';

export function QRimage(props){
    const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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