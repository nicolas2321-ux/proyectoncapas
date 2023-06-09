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
import Swal from 'sweetalert2'
export function ComprarBoleto (){
    const [startDate, setStartDate] = useState(new Date());
    const state = store.getState();
    const navigate = useNavigate();
    const [nombreEvento, setNombreEvento] = useState('')
    const [fecha, setFecha] =useState('')
    const [localidad, setLocalidad] = useState('')
    const [value, setValue] = useState('');

    useEffect(() => {
     
        if(state.CompraBoletoReducer.localidad === ''){
            navigate('/eventoInfo')
        }else{
            setNombreEvento(state.CompraBoletoReducer.nombreEvento)
            setFecha(state.CompraBoletoReducer.fecha)
            setLocalidad(state.CompraBoletoReducer.localidad)
        }
    }, [])
    const handleComprar = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Se procedera con la compra!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Compra realizada con exito!',
                'Su compra fue aprobada',
                'success'
              ).then(()=>{
                navigate('/eventoInfo')
              })
             
            }
          })
    }
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^[0-9]{0,3}$/; // Expresión regular para permitir solo hasta 3 dígitos numéricos
        if (regex.test(inputValue)) {
          setValue(inputValue);
        }
      };

    return (
        <>
        <NavBarComp></NavBarComp>
        <Form.Label className='mt-2 mx-2 mt-4' style={{color:'black', fontSize:"32px"}}>{nombreEvento}</Form.Label>
        <br />
        <Form.Label className='mt-2 mx-2' style={{color:'black'}}><BsFillCalendarCheckFill style={{fontSize:"24px", marginRight:"10px"}}></BsFillCalendarCheckFill>{fecha}</Form.Label>

        <Form.Label className='mt-2 mx-2' style={{color:'black'}}><ImLocation style={{fontSize:"24px", marginRight:"10px"}}></ImLocation>{localidad}</Form.Label>

        <Form.Label className='mt-2 mx-2' style={{color:'black'}}><AiFillClockCircle style={{fontSize:"24px", marginRight:"10px"}}></AiFillClockCircle>1:30 hrs</Form.Label>

        <Form.Label className='mt-2 mx-2' style={{color:'black'}}><AiFillClockCircle style={{fontSize:"24px", marginRight:"10px"}}></AiFillClockCircle>6:45 PM</Form.Label>
        <hr style={{ borderTop: '2px solid #000' }} />

        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"32px"}}>Ingresa los siguientes datos</Form.Label>

        <div className="container" style={{marginTop:"5%"}}>
      <div className="row">
        <div className="col-4">
        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"16px"}}>Selecciona la localidad</Form.Label>
        <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox}`}
            label={`Platinum`}
          />
        <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox}`}
            label={`VIP`}
          />
        <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox}`}
            label={`Gold`}
          />
        <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-checkbox}`}
            label={`General`}
        />
          <Form.Label className='mt-5 mx-2' style={{color:'black', fontSize:"16px"}}>Seleccione la cantidad de tickets</Form.Label>
            <Form.Select aria-label="Default select example">
            <option>Selecciona una opcion</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </Form.Select>

            <Form.Label className='mt-5 mx-2' style={{color:'black', fontSize:"16px"}}>Total:</Form.Label>
            <p style={{marginLeft:"10px"}}>$0.00</p>
        </div>
        <div className="col-8">
        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"21px"}}>Ingresa la informacion bancaria</Form.Label><br/>
        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"21px"}}>Nombre en la tarjeta</Form.Label>
        <Form.Control type="text" name='text' placeholder="John Doe"/>

        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"21px"}}>No de la tarjeta</Form.Label>
        <Form.Control type="text" name='text' placeholder="John Doe"/>
        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"21px"}}>Fecha de expedicion</Form.Label>
        <DatePicker  dateFormat="MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
        <Form.Label className='mt-2 mx-2' style={{color:'black', fontSize:"21px"}}>CVV</Form.Label>
        <Form.Control type="number" name='text' placeholder="***"   onChange={handleChange}  value={value} />

        </div>
      </div>

        <div className="contenedor-btn">
        <button className="boton-mas" onClick={handleComprar} >Comprar boleto</button><br />                   
        </div>
    </div>
        </>
    )
}