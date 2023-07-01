import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarComp from "../components/navbar";
import store from "../store";
import { Buscar } from "../services/general/buscar";
import Cartelera from "../components/cartelera";
export function Busqueda(){
    const state = store.getState();
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [evento, setEvents] = useState([])
    useEffect(() => {

        if(state.BusquedaReducer.nombreEvento === ''){
            navigate('/')
        }else{
           getBusqueda()
        }
        async function getBusqueda() {
            const object = {
                token: token,
                title: state.BusquedaReducer.nombreEvento
            }
            const res = await Buscar(object)
            const response = (await res.json())
            setEvents(response.content)
        }
    }, [state.BusquedaReducer.nombreEvento])
    console.log(state)
    return (
        <>
        <NavBarComp></NavBarComp>
        <div className="contenedor-shows-todo" >
        <h1 className="titulo">Resultados para</h1>
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
        </div>
        </>
    )
}