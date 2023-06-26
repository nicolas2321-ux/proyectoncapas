import React, { useEffect, useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BiCalendar} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';
import { Link } from 'react-router-dom';
import {BsGraphUpArrow} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../stylesheets/cartelera.css';

function Cartelera(props) {

  const [rol, setRol] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setRol(localStorage.getItem('rol'))
  }, [])

    const handleInformacion = () => {
       
        dispatch({
            type: 'CHANGE_ID', payload:{
                id: props.idEvento
            }
        })
        navigate('/verEventos')
    }
    
    return (
            <div className="contenedor-show">
                <img src={props.imagen} className="img-show" />
                <div className="texto-superpuesto">
                    <div className="contenedor-texto">
                        <h1 className="artista">{props.artista}</h1>
                        <p className="fecha">
                            <BiCalendar /> {props.fecha}
                        </p>
                        <p className="ubicacion">
                           
                        </p>
                       
                        <>
                        <Link to="/verEstadisiticas" className="btn-info">Ver estadisticas <BsGraphUpArrow /></Link><br />
                        <Button style={{marginTop:"10px"}} onClick={handleInformacion} className="btn-info">Ver detalles <AiOutlineArrowRight /></Button>
                        </>
                        
                        </div>
                </div>
            </div>
    );
}
export default Cartelera;