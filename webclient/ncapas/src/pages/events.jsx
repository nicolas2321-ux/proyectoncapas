import { NavBarComp } from "../components/navbar.jsx"
import Presentation from "../components/presentation.jsx"
import "../stylesheets/example.css"
import Footer  from "../components/footer.jsx"
import Cartelera from "../components/cartelera.jsx"
import { CrearEvento } from "../components/creaEventoModal.jsx"
import { getEvento } from "../services/administrador/evento.js"
import { useEffect, useState } from "react"
export function Events(){
    const [addModal, setAddModal] = useState(false)
    const [page, setPage] = useState(0)
    const token = localStorage.getItem('token')
    const [eventos, setEventos] = useState([])
    useEffect(() => {
        const object = {
            token: token,
            page: page,
            limit: 20
        }
        const traerEventos = async() =>{
            const evento = await getEvento(object) 
           // console.log(await evento.json())
            const eventoArray = await evento.json()
            setEventos(eventoArray.content)
          
        }
        traerEventos()
       
    }, [])
    function handleCrearEvento(){
       
        setAddModal(true)
    }
    return (
        <>
        <NavBarComp />

        <CrearEvento 
        show={addModal}
        onHide={()=>setAddModal(false)}
        />
        <div className="contenedor-shows-todo"> 
      
                    <h1 className="titulo">Eventos próximos...</h1>
                    <div className="contenedor-solo-shows" >
                    {eventos.map((elemento, index) => (
                    <Cartelera
                    image="Bailar"
                    artista={elemento.descripcion}
                    fecha={elemento.fecha_evento.substr(0,10)}
                    key={elemento.idEvento}
                    idEvento={elemento.idEvento}
                    imagen={elemento.imagen}
                    tipo={"administrador"}
                    />
                        ))}
                      
                    </div>
                    <div className="contenedor-btn">
                        <button className="boton-mas" onClick={handleCrearEvento}>Crear evento</button>
                    </div>
                </div>
        <Footer />
        </>
    )
}