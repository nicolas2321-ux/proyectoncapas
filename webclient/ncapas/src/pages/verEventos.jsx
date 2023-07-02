import { NavBarComp } from "../components/navbar.jsx"
import Footer  from "../components/footer.jsx"
import { Button, Form } from "react-bootstrap"
import "../stylesheets/imagenRedondeada.css"
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiFillClockCircle, AiFillDelete} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import { ModalEditarEvento } from "../components/modalEditarEvento.jsx"
import { useState } from "react"
import {BsFillPersonFill} from 'react-icons/bs'
import { ModalAgregarColaboradores } from "../components/modalAgregarColaboradores.jsx"
import {AiFillEdit, AiTwotoneEdit} from 'react-icons/ai'
import { EditarLocalidades } from "../components/modalEditarLocalidades.jsx"
import { useEffect } from "react"
import { traerEvento } from "../services/administrador/evento.js"
import store from "../store/index.js"
import {GiMicrophone} from 'react-icons/gi'
import {BiCategory} from 'react-icons/bi'
import { getLocalidades } from "../services/administrador/localidad.js"
import Swal from 'sweetalert2'
import { deleteLocalidad } from "../services/administrador/localidad.js"
import { useNavigate } from "react-router-dom";
export function VerEventos(){
    const [verEditarEvento, setVerEditarEvento] = useState(false)
    const [mostraColaboradores, setMostrarcolaboradores] = useState(false)
    const [EditarLocalidadesModal, setEditarLocalidad] = useState(false)
    const [platinum, setPlatinum] = useState(100)
    const [vip, setVip] = useState(100)
    const [gold, setGold] = useState(100)
    const [general, setGeneral] = useState(100)
    const state  = store.getState()
    const token = localStorage.getItem('token')
    const [fecha, setFecha] = useState('')
    const [currentEvent, setcurrentEvent] = useState({})
    const [categoria, setCategoria] = useState('')
    const [codigosLocalidad, setCodigosLocalidades] = useState([])
    const [descripcionLocalid, setDescripcionLocalidad] = useState([])
    const [precio, setPrecio] = useState([])
    const [tickets, setTickets] = useState([])
    const [helper, setHelper] = useState(true)
    const navigate = useNavigate();
    
    useEffect(() => {
        const getSingleEvent = async() =>{
            console.log(state.ID_evento.id)
            if(state.ID_evento.id !== null){
            const id = state.ID_evento.id
           
            const object = {
                id: id,
                token: token
            }
            const getOneEvent = await traerEvento(object)
          
           setcurrentEvent(await getOneEvent.json())
           
            setFecha(currentEvent.fecha_evento)
            if(currentEvent.id_categoria !== undefined){
              
                setCategoria(currentEvent.id_categoria.idCategoria)
            }}else{
                navigate('/')
            }
        }
        getSingleEvent()

        const getLocalidad = async() => {
            if(state.ID_evento.id !== null){
            const id = state.ID_evento.id
            const object = {
                id: id,
                token: token
            }
            const Localidades = await getLocalidades(object)
            const response = await Localidades.json();
            setCodigosLocalidades(response.code)
            setDescripcionLocalidad(response.descripcion)
            setPrecio(response.precio)
            setTickets(response.tickets)
        }
            
        }
        getLocalidad()
        
    }, [verEditarEvento, EditarLocalidadesModal, helper])

    function verColaboradores(){
        setMostrarcolaboradores(true)
    }
    function editarEvento(){
        
        setCategoria(currentEvent.id_categoria.idCategoria)
        setVerEditarEvento(true)
    }
    
    function editarLocalidades(){
        setEditarLocalidad(true)
        
    }
    function borrarLocalidad(idLocalidad){
        Swal.fire({
            title: 'Estas seguro?',
            text: "Se eliminara la localidad",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
          }).then(async (result) => {
            if (result.isConfirmed) {
              
                const object = {
                    token: token,
                    idLocalidad: idLocalidad
                }
                const ocultar = await deleteLocalidad(object)
                const response = await ocultar
                console.log(response)
                if( response.status === 200){
              Swal.fire(
                'Accion realizada con exito',
                'El evento fue ocultado',
                'success'
              )
                }
             
            }
          }).then(()=> {
            setHelper(!helper)
          })
    }

    return (
        <>
         <NavBarComp />
         <EditarLocalidades
         show={EditarLocalidadesModal}
         onHide = {() => setEditarLocalidad(false)}
         idEvento = {currentEvent.idEvento}
         />
         <ModalEditarEvento
         show = {verEditarEvento}
         onHide = {() => {setVerEditarEvento(false)}}
         nombreEvento = {currentEvent.descripcion}
         duration = {60}
        idEvento = {currentEvent.idEvento}
        imagen = {currentEvent.imagen}
        capacidad = {currentEvent.capacidad}
        categoria = {categoria}
         
         fecha  ={currentEvent.fecha_evento}/>
         

         <ModalAgregarColaboradores
         show = {mostraColaboradores}
         onHide = {() => {setMostrarcolaboradores(false)}}
         />

         
         <div className="contenedor-shows-todo-events">
         <img src={currentEvent.imagen} className="img-show-panel " />  
         {currentEvent.fecha_evento !== undefined && (
        <Form.Label className='mt-2' style={{color:'white'}}>
            <BsFillCalendarCheckFill style={{fontSize:"24px"}}></BsFillCalendarCheckFill> {currentEvent.fecha_evento.substr(0,10)}
            <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BiCategory style={{fontSize:"24px"}}></BiCategory> {currentEvent.id_categoria.descripcion}</Form.Label>
        </Form.Label>
            )}
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><GiMicrophone style={{fontSize:"24px"}}></GiMicrophone> {currentEvent.descripcion}</Form.Label>
        

        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><AiFillClockCircle style={{fontSize:"24px"}}></AiFillClockCircle> 1 hr</Form.Label>
        

        
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BsFillPersonFill style={{fontSize:"24px"}}></BsFillPersonFill> {currentEvent.capacidad}</Form.Label>
      

        </div>


        <div className="contenedor-shows-todo-events" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"5px", }}>
            <Form.Label className='mt-2' style={{ color: 'white', margin: '30px', fontSize:"32px" }}>
            Localidades
         </Form.Label>
        </div>


        <div className="contenedor-shows-todo-events" style={{ margin: "auto", display: "flex", justifyContent: "center",  }}>
        <div className="row">
               
        {codigosLocalidad.map((elemento, index) => (
            <>
            <div className="col-md-6">
        <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        {descripcionLocalid[index]}
        </Form.Label>
            <div style={{width:"40%", marginLeft:"10px"}}>
        <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '16px' }}>Precio</Form.Label>
        <Form.Control type="text" name='text' placeholder="$$" value={precio[index]} className="form-control form-control-sm" readOnly/>

        <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '16px' }}>Tickets</Form.Label>
        <Form.Control type="text" name='text' placeholder="$$" value={tickets[index]} className="form-control form-control-sm" readOnly/>
        <Button variant="danger" className="mt-2" onClick={() => {borrarLocalidad(elemento)}}><AiFillDelete></AiFillDelete></Button>
        {/* <Button variant="warning" className="mt-2 mx-2"><AiTwotoneEdit></AiTwotoneEdit></Button> */}
            </div>
        </div>
            </>
                
                
                ))}

        <div className="contenedor-btn" style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Button style={{ margin: "20px" }} onClick={editarLocalidades}>Agregar localidades</Button><br />
        </div>

       
        </div>

        
        
        </div>


        <div  className="contenedor-shows-todo-events"  style={{marginTop: "5px"}}>
{/* 
        <div className="contenedor-btn">
                        <button className="boton-mas" onClick={verColaboradores}>Ver colaboradores</button><br />
                       
        </div> */}
        <div className="contenedor-btn">
                        <button className="boton-editar" onClick={editarEvento}>Editar evento</button><br />
                       
        </div>

        </div>
         <Footer />
        </>
    )
}