import React, { useEffect, useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiCalendar} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';
import { Link } from 'react-router-dom';

import '../stylesheets/cartelera.css';
import { ModalBoletos } from "./modalBoletos";

function CarteleraOwn(props) {

  const [rol, setRol] = useState(null)
  const [showModalBoletos, setshowModalBoletos] = useState(false)
  useEffect(() => {
    setRol(localStorage.getItem('rol'))
  }, [])

  const showBoletos = () => {
    setshowModalBoletos(true)
  }
    
    return (<>
            <ModalBoletos
            show={showModalBoletos}
            onHide={()=>setshowModalBoletos(false)}
            artista = {props.artista}
            />

        
            <div className="contenedor-show">
                <img src={require(`../images/${props.image}.jpg`)} className="img-show" />
                <div className="texto-superpuesto">
                    <div className="contenedor-texto">
                        <h1 className="artista">{props.artista}</h1>
                        <p className="fecha">
                            <BiCalendar /> {props.fecha}
                        </p>
                        <p className="ubicacion">
                            <GoLocation /> {props.ubi}
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