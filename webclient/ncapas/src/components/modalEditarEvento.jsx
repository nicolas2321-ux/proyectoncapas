import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import { editarEvento, ocultarEvento } from '../services/administrador/evento';
import { GetCategoria } from '../services/administrador/categoria';
export function ModalEditarEvento(props){
    const [nombreEvento, setNombreEvento] = useState('')
    const [fecha, setFecha] = useState('')
    const [duration, setDuration] = useState('')
    const [capacidad, setCapacidad] = useState(0)
    const [categorias, setCategorias] = useState([])
    const [imagen, setImagen] = useState('')
    const [categoria, setCategoria] = useState('')
    const [idEvento, setIdEvento] = useState('')
  
    const token = localStorage.getItem('token')
    useEffect(() => {
        const getCategoria = async() =>{
            const categorias = await GetCategoria(token)
            const listCategorias = await categorias.json()
            setCategorias(listCategorias)
           
        }
        getCategoria()

       setNombreEvento(props.nombreEvento)
       
       if(props.fecha !== undefined){
       setFecha(props.fecha.substr(0,10))
       setCategoria(props.categoria)
       setIdEvento(props.idEvento)
      
       }
       setImagen(props.imagen)
       setDuration(props.duration)
       setCapacidad(props.capacidad)
       
     }, [props.show])



    const handleOcultar= async () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Se ocultara el evento de la cartelera",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
          }).then(async (result) => {
            if (result.isConfirmed) {
                const object = {
                    token: token,
                    idEvento: idEvento
                }
                const ocultar = await ocultarEvento(object)
                if(await ocultar.status === 200){
              Swal.fire(
                'Accion realizada con exito',
                'El evento fue ocultado',
                'success'
              )
                }
             
            }
          }).then(()=> {
            props.onHide()
          })
    }

    const handleSave = async() => {
       
        const object = {
            idEvento: idEvento,
            descripcion: nombreEvento,
            tickets_disponibles: capacidad,
            fecha_evento: fecha,
            capacidad: capacidad,
            id_categoria: categoria,
            imagen: imagen,
            token: token

        }
        
        const result = await editarEvento(object)
        if(await result.status === 200){
            Swal.fire(
                'Accion realizada con exito',
                'El evento fue editado exitosamente',
                'success'
              ).then(()=> {
                
                props.onHide()
              })
        }
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

                    <Form.Label className='mt-2'>Categoria</Form.Label>
                    <Form.Select aria-label="Default select example"  onChange={(e) => {setCategoria(e.target.value)}} value={categoria}>
                    <option value={0}>Seleccione una opcion</option>
                    {categorias.map((categorias, index) => (
                    <option key={categorias.idCategoria} value={categorias.idCategoria}>
                    {categorias.descripcion}
                    </option>
                    ))}
                     </Form.Select>


                    <Form.Label className='mt-2'>Imagen</Form.Label>
                    <Form.Control type="text" name='text' placeholder="0" value={imagen} onChange={(e) => setImagen(e.target.value)}/>

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