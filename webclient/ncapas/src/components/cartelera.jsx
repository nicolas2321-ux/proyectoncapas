import React, { useEffect, useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiCalendar} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';
import { Link } from 'react-router-dom';
import {BsGraphUpArrow} from 'react-icons/bs'
import '../stylesheets/cartelera.css';

function Cartelera(props) {

  const [rol, setRol] = useState(null)

  useEffect(() => {
    setRol(localStorage.getItem('rol'))
  }, [])
    
    return (
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
                       
                        <>
                        <Link to="/verEstadisiticas" className="btn-info">Ver estadisticas <BsGraphUpArrow /></Link><br />
                        <Link style={{marginTop:"10px"}}to="/verEventos" className="btn-info">Ver detalles <AiOutlineArrowRight /></Link>
                        </>
                        
                        </div>
                </div>
            </div>
    );
}
export default Cartelera;