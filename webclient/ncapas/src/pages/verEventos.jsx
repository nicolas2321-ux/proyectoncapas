import { NavBarComp } from "../components/navbar.jsx"
import Footer  from "../components/footer.jsx"
import { Button, Form } from "react-bootstrap"
import "../stylesheets/imagenRedondeada.css"
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import { ModalEditarEvento } from "../components/modalEditarEvento.jsx"
import { useState } from "react"
import {BsFillPersonFill} from 'react-icons/bs'
import { ModalAgregarColaboradores } from "../components/modalAgregarColaboradores.jsx"
import {AiFillEdit} from 'react-icons/ai'
import { EditarLocalidades } from "../components/modalEditarLocalidades.jsx"
import { useEffect } from "react"
import { traerEvento } from "../services/administrador/evento.js"
import store from "../store/index.js"

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
    useEffect(() => {
        const getSingleEvent = async() =>{
            const id = state.ID_evento.id
            console.log(id)
            const object = {
                id: id,
                token: token
            }
            const getOneEvent = await traerEvento(object)
          
            setcurrentEvent(await getOneEvent.json())
            setFecha(currentEvent.fecha_evento)
           
        }
        getSingleEvent()
        
    }, [])

    function verColaboradores(){
        setMostrarcolaboradores(true)
    }
    function editarEvento(){
        setVerEditarEvento(true)
    }
    
    function editarLocalidades(){
        setEditarLocalidad(true)
        
    }

    return (
        <>
         <NavBarComp />
         <EditarLocalidades
         show={EditarLocalidadesModal}
         onHide = {() => setEditarLocalidad(false)}
         platinum = {platinum}
         gold = {gold}
         vip = {vip}
         general = {general}
         />
         <ModalEditarEvento
         show = {verEditarEvento}
         onHide = {() => {setVerEditarEvento(false)}}
         nombreEvento = {currentEvent.descripcion}
         duration = {60}
        
         capacidad = {currentEvent.capacidad}
         
         fecha  ={currentEvent.fecha_evento}/>

         <ModalAgregarColaboradores
         show = {mostraColaboradores}
         onHide = {() => {setMostrarcolaboradores(false)}}
         />

         
         <div className="contenedor-shows-todo">
         <img src={currentEvent.imagen} className="img-show-panel " />  
         {currentEvent.fecha_evento !== undefined && (
        <Form.Label className='mt-2 mx-1' style={{color:'white'}}>
            <BsFillCalendarCheckFill style={{fontSize:"24px"}}></BsFillCalendarCheckFill> {currentEvent.fecha_evento.substr(0,10)}
        </Form.Label>
            )}
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><AiFillClockCircle style={{fontSize:"24px"}}></AiFillClockCircle> 1 hr</Form.Label>
        

        
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BsFillPersonFill style={{fontSize:"24px"}}></BsFillPersonFill> {currentEvent.capacidad}</Form.Label>
      

        </div>


        <div className="contenedor-shows-todo" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"5px", }}>
            <Form.Label className='mt-2' style={{ color: 'white', margin: '30px', fontSize:"32px" }}>
            Localidades
         </Form.Label>
        </div>
        <div className="contenedor-shows-todo" style={{ margin: "auto", display: "flex", justifyContent: "center",  }}>
        <div className="row">
            <div className="col-md-6">
        <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        Platinum
        </Form.Label>
            <div style={{width:"20%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={platinum} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
        <div className="col-md-6">
            <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        VIP
        </Form.Label>
            <div style={{width:"20%", marginLeft:"10px"}}>
          
            <Form.Control type="text" name='text' placeholder="$$" value={vip} className="form-control form-control-sm" readOnly/>
          
            </div>
        </div>
        <div className="col-md-6" style={{ marginBottom: "20px"}}>
            <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        Gold
        </Form.Label>
            <div style={{width:"20%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={gold} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
        <div className="col-md-6">
            <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        General
        </Form.Label>
            <div style={{width:"20%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={general} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
        </div>

        <div className="contenedor-btn">
                        <button className="boton-editar" onClick={editarLocalidades}>Editar localidades</button><br />
                       
        </div>
        
        </div>


        <div  className="contenedor-shows-todo"  style={{marginTop: "5px"}}>

        <div className="contenedor-btn">
                        <button className="boton-mas" onClick={verColaboradores}>Ver colaboradores</button><br />
                       
        </div>
        <div className="contenedor-btn">
                        <button className="boton-editar" onClick={editarEvento}>Editar evento</button><br />
                       
        </div>

        </div>
         <Footer />
        </>
    )
}