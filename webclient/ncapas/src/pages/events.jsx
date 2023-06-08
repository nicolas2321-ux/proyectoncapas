import { NavBarComp } from "../components/navbar.jsx"
import Presentation from "../components/presentation.jsx"
import "../stylesheets/example.css"
import Footer  from "../components/footer.jsx"
import Cartelera from "../components/cartelera.jsx"
import { CrearEvento } from "../components/creaEventoModal.jsx"
import { useState } from "react"
export function Events(){
    const [addModal, setAddModal] = useState(false)

    function handleCrearEvento(){
        console.log('entrte')
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
                        <Cartelera
                            image="Bailar"
                            artista="no se xd"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                        <Cartelera
                            image="Homenaje"
                            artista="NO SE TAMPOCO lol"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                        <Cartelera
                            image="IlVolo"
                            artista="il volo"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                        <Cartelera
                            image="JuanLuisGuerra"
                            artista="Juan Luis Guerra"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                        <Cartelera
                            image="LagoDeCisnes"
                            artista="saber xd"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                        <Cartelera
                            image="VanGogh"
                            artista="saber xd"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                    </div>
                    <div className="contenedor-btn">
                        <button className="boton-mas" onClick={handleCrearEvento}>Crear evento</button>
                    </div>
                </div>
        <Footer />
        </>
    )
}