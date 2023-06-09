import NavBarComp from "../../components/navbar";
import Footer  from "../../components/footer.jsx"
import Cartelera from "../../components/cartelera.jsx"
import CarteleraOwn from '../../components/carteleraOwn'
export function Myevents() {

    return (
        <>
        <NavBarComp></NavBarComp>
                    <h1 className="titulo" style={{ backgroundColor: "black", margin:"0"}}>Mis eventos</h1>
                    <div className="contenedor-shows-todo-extended">
                    <div className="contenedor-solo-shows-extended">
                       
                        <CarteleraOwn
                            image="LagoDeCisnes"
                            artista="Lago de cisnes"
                            fecha="25-09-23"
                            ubi="Salamanca"
                                />
                        <CarteleraOwn
                            image="VanGogh"
                            artista="Van gogh"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                             <CarteleraOwn
                            image="VanGogh"
                            artista="Arte"
                            fecha="25-09-23"
                            ubi="Salamanca" />
                            
                    </div>
                    {/* <div className="contenedor-btn">
                        <button className="boton-mas" onClick={handleCrearEvento}>Crear evento</button>
                    </div> */}
                </div>
        <Footer />
        </>
    )
}