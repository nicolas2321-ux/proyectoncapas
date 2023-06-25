import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { GetCategoria } from '../services/administrador/categoria';
import { crearEvento } from '../services/administrador/evento';
import Swal from 'sweetalert2';

export function CrearEvento(props){
    const [categorias, setCategorias] = useState([])
    const [descripcion, setDescripcion] = useState('')
    const [tickets_disponibles, setTicketsDisponibles] = useState(0)
    const [fecha, setFecha] = useState('')
    const [capacidad, setCapacidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const token = localStorage.getItem('token')

    useEffect(() => {
        const getCategoria = async() =>{
            const categorias = await GetCategoria(token)
            const listCategorias = await categorias.json()
            setCategorias(listCategorias)
            console.log(listCategorias)
        }
        getCategoria()
      }, [])
      
    const handleSave = async() => {
        const object = {
            token: token,
            descripcion: descripcion,
            tickets_disponibles: tickets_disponibles,
            fecha: fecha,
            capacidad: capacidad,
            categoria: categoria
        }
        const insertEvento = await crearEvento(object)
        const response = await insertEvento
        console.log(response.status)
        if(response.status === 200){
            console.log('creado')
            Swal.fire(
                'Evento creado!',
                'El evento fue creado con exito',
                'success'
              ).then(()=>{
                props.onHide()
              })
        }else{
            Swal.fire(
                'Ocurrio un error!',
                'El evento no pudo crearse',
                'error'
              ).then(()=>{
                props.onHide()
              })
        }
        console.log(object)
    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Crear evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Descripcion</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe"  onChange={(e) => {setDescripcion(e.target.value)}} />
                   
                    <Form.Label className='mt-2'>Tickets disponibles</Form.Label>
                    <Form.Control type="number" name='tickets' placeholder="1000"   onChange={(e) => {setTicketsDisponibles(e.target.value)}}/>

                    <Form.Label className='mt-2'>Fecha del evento</Form.Label>
                    <Form.Control type="date" name='fechaevento' placeholder="Ultrasecretpassword"   onChange={(e) => {setFecha(e.target.value)}}/>

                    <Form.Label className='mt-2'>Capacidad</Form.Label>
                    <Form.Control type="number" name='password' placeholder="1000"  onChange={(e) => {setCapacidad(e.target.value)}} />

                    <Form.Label className='mt-2'>Categoria</Form.Label>
                    <Form.Select aria-label="Default select example"  onChange={(e) => {setCategoria(e.target.value)}}>
                    <option value={0}>Seleccione una opcion</option>
                    {categorias.map((categorias, index) => (
                    <option key={categorias.idCategoria} value={categorias.idCategoria}>
                    {categorias.descripcion}
                    </option>
                    ))}
                     </Form.Select>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Crear evento
            </Button>
        </Modal.Footer>
    </Modal>
    )
}