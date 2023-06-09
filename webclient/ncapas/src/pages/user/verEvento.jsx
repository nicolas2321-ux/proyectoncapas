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

import { useDispatch } from 'react-redux';

export function VerEvento(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            
             
             <div className="contenedor-shows-todo">
             <img src={require(`../../images/Bailar.jpg`)} className="img-show-panel "  style={{margin: "40px"}}/>  
            <Form.Label className='mt-2' style={{color:'white'}}><BsFillCalendarCheckFill style={{fontSize:"24px"}}></BsFillCalendarCheckFill> 24/05/2023</Form.Label>
            <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><AiFillClockCircle style={{fontSize:"24px"}}></AiFillClockCircle> 1 hr</Form.Label>
            
            <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><ImLocation style={{fontSize:"24px"}}></ImLocation> Salamanca</Form.Label>
            
            <Form.Label className='mt-2' style={{color:'white', margin:"30px"}}><BsFillPersonFill style={{fontSize:"24px"}}></BsFillPersonFill> 100</Form.Label>
          
    
            </div>
    
    
            <div className="contenedor-shows-todo" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Form.Label className='mt-2' style={{ color: 'white', fontSize:"32px" }}>
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
            <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
                </div>
            </div>
            <div className="col-md-6">
                <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
            VIP
            </Form.Label>
                <div style={{width:"20%", marginLeft:"10px"}}>
            <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
                </div>
            </div>
            <div className="col-md-6">
                <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
            Gold
            </Form.Label>
                <div style={{width:"20%", marginLeft:"10px"}}>
            <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
                </div>
            </div>
            <div className="col-md-6">
                <Form.Label className='mt-2' style={{ color: 'white', margin: '10px', fontSize: '32px' }}>
            General
            </Form.Label>
                <div style={{width:"20%", marginLeft:"10px", marginBottom:"30px"}}>
            <Form.Control type="text" name='text' placeholder="$$" value={"$100"} className="form-control form-control-sm" readOnly/>
                </div>
            </div>
            </div>
            
            </div>
    
    
            <div  className="contenedor-shows-todo"  style={{marginTop: "5px"}}>
    
            <div className="contenedor-btn">
                            <button className="boton-mas" onClick={goComprar}>Comprar boleto</button><br />
                           
            </div>
           
    
            </div>
             <Footer />
            </>
        )
    
}