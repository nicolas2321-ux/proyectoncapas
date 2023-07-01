import { NavBarComp } from "../../components/navbar.jsx"
import Footer  from "../../components/footer.jsx"
import { Form } from "react-bootstrap"
import "../../stylesheets/imagenRedondeada.css"
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import { useState } from "react"
import {BsFillPersonFill} from 'react-icons/bs'
import { redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import store from "../../store/index.js"
import { traerEvento } from "../../services/administrador/evento.js"
import {BiCategory} from 'react-icons/bi'
import { GiMicrophone } from "react-icons/gi"
import { getLocalidades } from "../../services/administrador/localidad.js"
import { Button } from "bootstrap"
export function VerEvento(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state  = store.getState()
    const token = localStorage.getItem('token')
    const [events, setEvents] = useState([])
    const [precio, setPrecio] = useState([])
    const [tickets, setTickets] = useState([])
    const [codigosLocalidad, setCodigosLocalidades] = useState([])
    const [descripcionLocalid, setDescripcionLocalidad] = useState([])
    useEffect(() => {
        
        const fetch = async() => {
            if(token === null){
                navigate('/')
            }else{
        if(state.ID_evento.id === null){
            navigate('/')
        }else{
            const id = state.ID_evento.id
           
            const object = {
                id: id,
                token: token
            }
            const getOneEvent = await traerEvento(object)
            const res = await getOneEvent.json()
            console.log(res)
            setEvents(res)

        }
    }
    }
        fetch()

        const getLocalidad = async() => {
            if(token !== null){
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

    }, [])
        const goComprar = () => {
            dispatch({ type: 'CHANGE_COMPRA', payload: {
                nombreEvento:"Vivimos para bailar",
                fecha:"2023-06-20",
                localidad: "Salamanca",


            } });
           navigate('/comprarBoleto')
        }
        return (
            <>
             <NavBarComp />
            
             
             <div className="contenedor-shows-todo-events">
             <img src={events.imagen} className="img-show-panel "  style={{margin: "40px"}}/>  
             {events.fecha_evento !== undefined && (
        <Form.Label className='mt-2' style={{color:'white'}}>
            <BsFillCalendarCheckFill style={{fontSize:"24px"}}></BsFillCalendarCheckFill> {events.fecha_evento.substr(0,10)}
            <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BiCategory style={{fontSize:"24px"}}></BiCategory> {events.id_categoria.descripcion}</Form.Label>
        </Form.Label>
            )}
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><GiMicrophone style={{fontSize:"24px"}}></GiMicrophone> {events.descripcion}</Form.Label>
        

        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><AiFillClockCircle style={{fontSize:"24px"}}></AiFillClockCircle> 1 hr</Form.Label>
        

        
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BsFillPersonFill style={{fontSize:"24px"}}></BsFillPersonFill> {events.capacidad}</Form.Label>
      

          
    
            </div>
    
    
            <div className="contenedor-shows-todo-events" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Form.Label className='mt-2' style={{ color: 'white', fontSize:"32px" }}>
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
        
        {/* <Button variant="warning" className="mt-2 mx-2"><AiTwotoneEdit></AiTwotoneEdit></Button> */}
            </div>
        </div>
            </>
                
                
                ))}

        </div>    
        </div>
    
    
            <div  className="contenedor-shows-todo-events"  style={{marginTop: "5px"}}>
    
            <div className="contenedor-btn">
                            <button className="boton-mas" onClick={goComprar}>Comprar boleto</button><br />
                           
            </div>
           
    
            </div>
             <Footer />
            </>
        )
    
}