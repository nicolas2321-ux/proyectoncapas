import NavBarComp from "../../components/navbar";
import Footer  from "../../components/footer.jsx"
import Cartelera from "../../components/cartelera.jsx"
import CarteleraOwn from '../../components/carteleraOwn'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { GetEvents } from "../../services/general/cliente";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { ModalRecibirTicket } from "../../components/modalRecibirTicket";
export function Myevents() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const [events, setEvents] = useState([])
    const [tickets, setTickets] = useState([])
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        if(token === null){
            navigate('/')
        }
        const fetch = async() => {
            const data = await GetEvents(token)
            const res = await data.json()
            console.log(res)
           setEvents(res)
        }
        fetch()

    }, [showModal])

    const recibirTicketHandler = () => {
        setShowModal(true)
    }

    return (
        <>
        <NavBarComp></NavBarComp>
        <ModalRecibirTicket show={showModal} onHide={() => setShowModal(false)}></ModalRecibirTicket>
                    <h1 className="titulo" style={{ backgroundColor: "black", margin:"0"}}>Mis eventos</h1>
                    <div className="contenedor-shows-todo-extended">
                         <div className="contenedor-btn">
                        <button className="boton-mas" onClick={recibirTicketHandler}>Recibir ticket</button>
                    </div>
                    <div className="contenedor-solo-shows-extended">
                       
                    {events.map((elemento, index) => (

                    <CarteleraOwn
                        image={elemento.id_evento.imagen}
                        artista={elemento.id_evento.descripcion}
                        fecha={elemento.id_evento.fecha_evento.substring(0,10)}
                        categoria={elemento.id_evento.id_categoria.descripcion}
                        idTicket={elemento.idTicket}
                        ubi="Salamanca"
                            />
                    ))}
                            
                    </div>
                   
                </div>
        <Footer />
        </>
    )
}