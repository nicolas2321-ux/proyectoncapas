import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
export function ModalEditarEvento(props){
    const [nombreEvento, setNombreEvento] = useState('')
    const [fecha, setFecha] = useState('')
    const [duration, setDuration] = useState('')
    const [capacidad, setCapacidad] = useState(0)
    useEffect(() => {
       setNombreEvento(props.nombreEvento)
       setFecha(props.fecha)
       setDuration(props.duration)
       setCapacidad(props.capacidad)
       
     }, [props.data])



    const handleOcultar= () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Se ocultara el evento de la cartelera",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Accion realizada con exito',
                'El evento fue ocultado',
                'success'
              )
             
            }
          }).then(()=> {
            props.onHide()
          })
    }

    const handleSave = () => {

    }
    return(
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Editar evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Nombre del evento</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe" value={nombreEvento} onChange={(e) => setNombreEvento(e.target.value)}/>
                   
                    <Form.Label className='mt-2'>Fecha</Form.Label>
                    <Form.Control type="date" name='text' placeholder="John2321" value={fecha} onChange={(e) => setFecha(e.target.value)}/>

                    <Form.Label className='mt-2'>Duracion (en minutos)</Form.Label>
                    <Form.Control type="number" name='text' placeholder="0" value={duration} onChange={(e) => setDuration(e.target.value)}/>

                    <Form.Label className='mt-2'>Capacidad</Form.Label>
                    <Form.Control type="number" name='text' placeholder="0" value={capacidad} onChange={(e) => setCapacidad(e.target.value)}/>
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
            <Button variant="danger" onClick={handleOcultar} >
                Ocultar evento
            </Button>
        </Modal.Footer>
    </Modal> 
    )
}