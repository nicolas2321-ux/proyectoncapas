import QRCode from 'qrcode.react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
const BASE_URL = 'http://localhost:3000'


export function QRimage(props){
 // console.log(props.idTicket)
 // console.log(BASE_URL)
  useEffect(() => {
    //console.log(props.idTicket)
  }, [props.show])
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