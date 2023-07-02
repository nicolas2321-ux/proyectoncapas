import React, { useEffect, useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';

import {GoLocation} from 'react-icons/go';
import { Link } from 'react-router-dom';
import {BiCalendar, BiCategory} from 'react-icons/bi';
import '../stylesheets/cartelera.css';
import { ModalBoletos } from "./modalBoletos";

function CarteleraOwn(props) {

  const [rol, setRol] = useState(null)
  const [showModalBoletos, setshowModalBoletos] = useState(false)
  const [idTicket, setidTicket] = useState(null)
  useEffect(() => {
    console.log(props)
    setRol(localStorage.getItem('rol'))
    setidTicket(props.idTicket)
  }, [])

  const showBoletos = () => {
    setshowModalBoletos(true)
  }
    
    return (<>
            <ModalBoletos
            show={showModalBoletos}
            onHide={()=>setshowModalBoletos(false)}
            artista = {props.artista}
            idTicket = {idTicket}
            />

        
            <div className="contenedor-show">
            <img src={props.image} className="img-show" />
                <div className="texto-superpuesto">
                    <div className="contenedor-texto">
                        <h1 className="artista">{props.artista}</h1>
                        <p className="fecha">
                            <BiCalendar /> {props.fecha}
                        </p>
                        <p className="ubicacion">
                        <BiCategory /> {props.categoria}
                        </p>
                        {rol === 'admin' ? (
                        <Link to="/verEventos" className="btn-info">Ver detalles <AiOutlineArrowRight /></Link>
                        ) : (
                        <Link  onClick={showBoletos} className="btn-info">Ver boletos <AiOutlineArrowRight /></Link>
                        )}
                        </div>
                </div>
            </div>
            </>
    );
}
export default CarteleraOwn;