import NavBarComp from "../../components/navbar";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import  {cambiarEstado, traerTicket} from '../../services/empleado/verificarTicket'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function VerificarTicket(){
    const {idTicket} = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const fetch = async() => {
            const object = {
                token: localStorage.getItem('token'),
                evento: idTicket
            }
            const res = await traerTicket(object)
            console.log(res)
            if(res.status === 200){
              const response = await res.json()
               if(response.estado === 0){
                Swal.fire(
                    'Ticket ya verificado!',
                    'Exito',
                    'success'
                  ).then(()=>{
                    navigate('/')
                  })
               }
              }else{
                navigate('/')
              }
            
        }
        fetch()
    }, [])
    const verificarTicket = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Se procedera con la verificacion del ticket!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar!'
          }).then(async (result) => {
              if (result.isConfirmed) {
               const object = {
                token: localStorage.getItem('token'),
                evento: idTicket
               }

                const res = await cambiarEstado(object)
                const response = await res
                if(response.status === 200){

                  Swal.fire(
                    'Ticket verificado con exito!',
                    'Exito',
                    'success'
                  ).then(()=>{
                    navigate('/')
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
    return(
        <div>
           <NavBarComp></NavBarComp>
           <div className="contenedor-shows-todo" >
                <Container className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h3 className="titulo">Verificación de Ticket</h3>
                <Button variant="primary" className="mt-3 mx-3" onClick={verificarTicket}>Verificar ticket</Button>

            </div>
            </Container>
           </div>
        </div>
    )
}