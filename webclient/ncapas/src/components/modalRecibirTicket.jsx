import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { recibirTicket } from '../services/general/cliente';
import Swal from 'sweetalert2';
export function ModalRecibirTicket(props){
    const [ticket, setTicket] = useState('')

    const transferir = async() => {
        const object = {
            token: localStorage.getItem('token'),
            ticket: ticket
        }
        const res = await recibirTicket(object)
        const data = await res
        if(data.status === 200){
            Swal.fire(
                'Ticket recibido!',
                'Exito',
                'success'
                ).then(()=>{
                    props.onHide()
                }
                )
        }else{
            Swal.fire(
                'No se encontro el ticket',
                'Error',
                'error'
                ).then(()=>{
                    props.onHide()
                }
                )
        }
    }
    return(
    <>
    <Modal show={props.show} onHide={props.onHide}>
<Modal.Header closeButton>
 <Modal.Title>Recibir un ticket</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form.Label className='mt-2'>Ingrese el codigo del ticket</Form.Label>
<Form.Control type="text" name='text' placeholder="################" onChange={(e) => {setTicket(e.target.value)}}/>
</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={props.onHide}>
   Cancelar
 </Button>
 <Button variant="primary" onClick={transferir}>
   Recibir
 </Button>
</Modal.Footer>
</Modal>
   </>
    )
}