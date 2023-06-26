import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { crearLocalidad } from '../services/administrador/localidad';
import Swal from 'sweetalert2'

export function EditarLocalidades(props){
    const [amount, setAmount] = useState('');
    const [idEvento, setIdEvento] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [ticket, setTicket] = useState(1)
    const token = localStorage.getItem('token')
    useEffect(() => {
        if(props.idEvento !== undefined){
        setIdEvento(props.idEvento)
        }
    }, [props.show])
    async function handleSave(){
       const object = {
        token: token, 
        descripcion: descripcion,
        idEvento: idEvento,
        precio: amount,
        ticket: ticket
       }
       const guardarLocalidad = await crearLocalidad(object)
       if(await guardarLocalidad.status === 200){
        Swal.fire(
          'Accion realizada con exito',
          'Localidad creada',
          'success'
        ) .then(()=> {
            props.onHide()
          })
          }else{
            Swal.fire(
                'No se pudo completar la accion, revise los campos',
                'Error',
                'error'
              )
          }
       
      }
  
    
    const handleInputChange = (e) => {
        setAmount(e.target.value);
      };
    const handleticketChange = (e) => {
        setTicket(e.target.value);
    }
    return(
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Editar localidades</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Descripcion</Form.Label>
                    <Form.Control type="text" name='text' placeholder="Platinum" onChange={(e) => {setDescripcion(e.target.value)}}/>

                    <Form.Label className='mt-2'>Precio</Form.Label>
                    <Form.Control
                    type="number"
                    step="0.01"
                    min="0"
                    value={amount}
                    onChange={handleInputChange}
                    placeholder="Ingrese el monto"
                    required
                    />
                    <Form.Label className='mt-2'>Tickets</Form.Label>
                    <Form.Control
                    type="number"
                    step="1"
                    min="0"
                    value={ticket}
                    onChange={handleticketChange}
                    placeholder="Ingrese el monto"
                    required
                    />
                
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Editar
            </Button>
        </Modal.Footer>
    </Modal> 
    )
}