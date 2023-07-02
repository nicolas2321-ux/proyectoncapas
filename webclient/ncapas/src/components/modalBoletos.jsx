import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalTransferirTicket } from './modalTransferirTicket';
import QRCode from 'qrcode.react';
import {QRimage} from './QR'

export function ModalBoletos(props){
  const [showModalTransferir, setshowModalTransferir] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [idTicket, setidTicket] = useState(null)
  const handleTransferir = () =>{
    props.onHide()
    setshowModalTransferir(true)
  }
  const handleGenerarQR = () => {
    props.onHide()
    setShowQR(true)
  }
  useEffect(() => {
   // console.log(props.idTicket)
    setidTicket(props.idTicket)
  }, [props.show])
return(
    <> 
    <ModalTransferirTicket
    show={showModalTransferir}
    onHide = {() => setshowModalTransferir(false)}
    />
    <QRimage
    show={showQR}
    onHide={()=> setShowQR(false)}
    idTicket = {idTicket}
    />
    <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.artista}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Que desea hacer?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleTransferir}>
        Transferir ticker
      </Button>
      <Button variant="primary" onClick={handleGenerarQR}>
        Generar QR
      </Button>
    </Modal.Footer>
  </Modal>
    </>
)
}