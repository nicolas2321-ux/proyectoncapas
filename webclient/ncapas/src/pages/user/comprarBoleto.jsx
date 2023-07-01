import { useEffect, useState } from "react";
import NavBarComp from "../../components/navbar";
import store from '../../store';
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getLocalidades } from "../../services/administrador/localidad.js"
import { traerEvento } from "../../services/administrador/evento.js"
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import { BiCategory } from "react-icons/bi";
import { crearTicket } from "../../services/general/tickets";
export function ComprarBoleto (){
    const [startDate, setStartDate] = useState(new Date());
    const state = store.getState();
    const navigate = useNavigate();
    const [nombreEvento, setNombreEvento] = useState('')
    const [fecha, setFecha] =useState('')
    const [localidad, setLocalidad] = useState('')
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const [events, setEvents] = useState([])
    const [precio, setPrecio] = useState([])
    const [tickets, setTickets] = useState([])
    const [codigosLocalidad, setCodigosLocalidades] = useState([])
    const [descripcionLocalid, setDescripcionLocalidad] = useState([])
    const [checkboxSeleccionado, setCheckboxSeleccionado] = useState('');
    const [helper, setHelper] = useState(null)
    const [price, setPrice] = useState(0.00)
    const [cantidadTickets, setCantidadTickets] = useState(0)

    useEffect(() => {
        
      const fetch = async() => {
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
      fetch()

      const getLocalidad = async() => {
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
      getLocalidad()

  }, [])

    const handleComprar = async() => {
      
      if(checkboxSeleccionado === '' || cantidadTickets === 0){
      
        Swal.fire({
          title: 'Error',
          text: "Se detectaron campos vacios!",
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok'
        })
      }else{
      Swal.fire({
          title: 'Estas seguro?',
          text: "Se procedera con la compra!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
              const fechaActual = new Date();
              const dia = String(fechaActual.getDate()).padStart(2, '0');
              const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
              const año = fechaActual.getFullYear();
              const fecha = año+'-'+mes+'-'+dia
              const object = {
                token: token,
                fecha: fecha,
                cantidadTickets: cantidadTickets,
                evento: state.ID_evento.id,
                localidad: checkboxSeleccionado
              }
              const res = await crearTicket(object)
              const response = await res
              if(response.status === 200){
                
                Swal.fire(
                  'Compra realizada con exito!',
                  'Su compra fue aprobada',
                  'success'
                ).then(()=>{
                  navigate('/eventoInfo')
                })
              }else{
                Swal.fire(
                  'ERROR!',
                  'No se pudo completar la transaccion',
                  'error'
                )
              }
             
            }
          })
        }
    }
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^[0-9]{0,3}$/; // Expresión regular para permitir solo hasta 3 dígitos numéricos
        if (regex.test(inputValue)) {
          setValue(inputValue);
        }
      };


      const handleSelect = (elemento, index) => {
        setCheckboxSeleccionado(elemento);
        setHelper(index)
      };
      const handlePrice = (e) => {
       setCantidadTickets(e)
        if(helper !== null){
          const money = precio[helper]*e
         setPrice(money)

        }
      }

    return (
        <>
        <NavBarComp></NavBarComp>
        <Form.Label className='mt-2 mx-2 mt-4' style={{color:'black', fontSize:"32px"}}>{events.descripcion}</Form.Label>
        <br />
        {events.fecha_evento !== undefined && (
        <Form.Label className='mt-2' style={{color:'black'}}>
            <BsFillCalendarCheckFill  style={{color:'black', fontSize:"32px"}}></BsFillCalendarCheckFill> {events.fecha_evento.substr(0,10)}
            <Form.Label className='mt-2'  style={{color:'black', fontSize:"16px",  marginLeft:'10px'}}><BiCategory style={{fontSize:"24px"}}></BiCategory> {events.id_categoria.descripcion}</Form.Label>
        </Form.Label>
            )}

       

       

       
        <hr style={{ borderTop: '2px solid #000' }} />

        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"32px"}}>Ingresa los siguientes datos</Form.Label>

        <div className="container" style={{marginTop:"5%"}}>
      <div className="row">
        <div className="col-4">
        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"16px"}}>Selecciona la localidad</Form.Label>
        {codigosLocalidad.map((elemento, index) => (

        <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox}`}
            label={descripcionLocalid[index]}
            onClick={() => {handleSelect(elemento)}}
            onChange={() => handleSelect(elemento, index)}
            checked={checkboxSeleccionado === elemento}
          />
        ))}
       
          <Form.Label className='mt-5 mx-2' style={{color:'black', fontSize:"16px"}}>Seleccione la cantidad de tickets</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => {handlePrice(e.target.value)}}>
            <option>Selecciona una opcion</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </Form.Select>

            <Form.Label className='mt-5 mx-2' style={{color:'black', fontSize:"16px"}}>Total:</Form.Label>
            <p style={{marginLeft:"10px"}}>${price}</p>
        </div>
        <div className="col-8">
       
        <div className="contenedor-btn">
        <button className="boton-mas" onClick={handleComprar} >Comprar boleto</button><br />                   
        </div>

        </div>
      </div>

    </div>
        </>
    )
}