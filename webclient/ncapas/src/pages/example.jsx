import { NavBarComp } from "../components/navbar.jsx"
import Presentation from "../components/presentation.jsx"
import Cartelera from "../components/cartelera.jsx"
import Footer  from "../components/footer.jsx"
import "../stylesheets/example.css"
import { useEffect, useState } from "react"
import { getEvento } from "../services/administrador/evento.js"

export function Example(){
    const [page, setPage] = useState(0)
    const token = localStorage.getItem('token')
    const [evento, setEventos] = useState([])
    useEffect(() => {
        const object = {
           
            page: page,
            limit: 20
        }
         const traerEventos = async() =>{
            const evento = await getEvento(object) 
            const eventoArray = await evento.json()
            setEventos(eventoArray.content)
          
        }

          return () => {
          traerEventos()
          }; 
       
    
    },[])
    return (
            <>
                <NavBarComp />
                <Presentation />
                <div className="contenedor-shows-todo"> 
                    <h1 className="titulo">Eventos próximos...</h1>
                    <div className="contenedor-solo-shows" >
                    {evento.map((elemento, index) => (
                    <Cartelera
                    image="Bailar"
                    artista={elemento.descripcion}
                    fecha={elemento.fecha_evento.substr(0,10)}
                    key={elemento.idEvento}
                    idEvento={elemento.idEvento}
                    imagen={elemento.imagen}
                    tipo={"cliente"}
                    />
                        ))}
                    </div>
                    <div className="contenedor-btn">
                        <button className="boton-mas">Cargar más eventos</button>
                    </div>
                </div>
                <Footer />
            </>
            )
}