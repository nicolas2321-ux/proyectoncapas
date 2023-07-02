import NavBarComp from "../../components/navbar";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import  {cambiarEstado, traerTicket} from '../../services/empleado/verificarTicket'

export default function VerificarTicket(){
    const {idTicket} = useParams()

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