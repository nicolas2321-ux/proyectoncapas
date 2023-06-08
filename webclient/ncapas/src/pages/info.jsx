import React from 'react';
import { NavBarComp } from "../components/navbar.jsx"

function InfoPage(props) {
return (

    <>
        <NavBarComp />
        <div className='contenedor-info'>
            <div className='info-principal'>
                <div className='imagen-div'>
                    <img src={require(`../images/${props.image}.jpg`)} className="img-show" />
                </div>
                <div>
                    <div className='texto-principal1'>
                        <p></p>
                    </div>
                    <div className='texto-principal2'>

                    </div>
                </div>
            </div>
            <div className='info-principal'>

            </div>
            <div className='info-localidades'>

            </div>
            <div className='info-principal'>

            </div>

        </div>
    </>
);
}

export default InfoPage;