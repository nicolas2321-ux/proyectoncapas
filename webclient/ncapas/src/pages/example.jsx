import { NavBarComp } from "../components/navbar.jsx"
import Presentation from "../components/presentation.jsx"
import Cartelera from "../components/cartelera.jsx"
import Footer  from "../components/footer.jsx"
import "../stylesheets/example.css"



export function Example(){
    return (
            <>
                <NavBarComp />
                <Presentation />
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
                        <button className="boton-mas">Cargar más eventos</button>
                    </div>
                </div>
                <Footer />
            </>
            )
}