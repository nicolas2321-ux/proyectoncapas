import { NavBarComp } from "../components/navbar.jsx"
import Footer  from "../components/footer.jsx"
import { Form } from "react-bootstrap"
import "../stylesheets/imagenRedondeada.css"
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import { ModalEditarEvento } from "../components/modalEditarEvento.jsx"
import { useState } from "react"
import {BsFillPersonFill} from 'react-icons/bs'

export function VerEventos(){
    const [verEditarEvento, setVerEditarEvento] = useState(false)

    function verColaboradores(){

    }
    function editarEvento(){
        setVerEditarEvento(true)
        console.log('entre')
    }

    return (
        <>
         <NavBarComp />
         <ModalEditarEvento
         show = {verEditarEvento}
         onHide = {() => {setVerEditarEvento(false)}}
         nombreEvento = {"Vivimos para bailar"}
         duration = {60}
         localidad = {"Salamanca"}
         capacidad = {100}
         fecha  ={"2023-05-24"}/>

         
         <div className="contenedor-shows-todo">
         <img src={require(`../images/Bailar.jpg`)} className="img-show-panel " />  
        <Form.Label className='mt-2' style={{color:'white'}}><BsFillCalendarCheckFill style={{fontSize:"24px"}}></BsFillCalendarCheckFill> 24/05/2023</Form.Label>
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><AiFillClockCircle style={{fontSize:"24px"}}></AiFillClockCircle> 1 hr</Form.Label>
        
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><ImLocation style={{fontSize:"24px"}}></ImLocation> Salamanca</Form.Label>
        
        <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BsFillPersonFill style={{fontSize:"24px"}}></BsFillPersonFill> 100</Form.Label>
      

        </div>


        <div className="contenedor-shows-todo" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"5px" }}>
            <Form.Label className='mt-2' style={{ color: 'white', margin: '30px', fontSize:"32px" }}>
            Localidades
         </Form.Label>
        </div>
        <div className="contenedor-shows-todo">
        <div className="row">
            <div className="col-md-6">
        <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        Platinum
        </Form.Label>
            <div style={{width:"10%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
        <div className="col-md-6">
            <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        VIP
        </Form.Label>
            <div style={{width:"10%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
        <div className="col-md-6">
            <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        Gold
        </Form.Label>
            <div style={{width:"10%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
        <div className="col-md-6">
            <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
        General
        </Form.Label>
            <div style={{width:"10%", marginLeft:"10px"}}>
        <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
            </div>
        </div>
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