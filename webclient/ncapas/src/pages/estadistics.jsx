import { NavBarComp } from "../components/navbar.jsx"
import React, { PureComponent } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Bars from "../services/barChart.js";
import { Container, Row, Col } from 'react-bootstrap';
import Pies from "../services/pieChart.js";
import LinesChart from "../services/lineChart.js";
import html2pdf from 'html2pdf.js';
export function Stadistics(){
    function handlePDF(){
      const element = document.getElementById('imprimir');
       // Configurar opciones para la generación del PDF
    const options = {
      filename: 'contenido.pdf',
      jsPDF: { format: 'a4' },
    };

    // Generar el PDF
    html2pdf().set(options).from(element).save();
    }
   
    return(
        <>
        <NavBarComp />
        <Container id="imprimir">
      <Row>
        <Col style={{marginTop:"50px"}}>
        <div>
        <h3>Ventas del evento</h3>
        <Bars></Bars>
        </div>

        <div style={{marginTop:"35px"}}>
        <h3>Ventas del evento</h3>
        <label>Boletos vendidos hasta el momento</label>
        <div className="boletos"><p className="textoBoletos">5432</p></div>
        </div>
        
        <div style={{marginTop:"75px", marginBottom:"20px"}}>
        <h3>Asistencia</h3>
        <label>Porcentaje de asistencia hasta el momento</label>
        <div className="boletos"><p className="textoBoletos">59%</p></div>
        </div>
        </Col>

        <Col  style={{marginTop:"50px"}}>
        <div>
        <h3>Disponibilidad</h3>
        <Pies></Pies>
        </div>
        </Col>
        <Col  style={{marginTop:"50px"}}>
        <h3>Tickets canjeados a lo largo del tiempo</h3>
          <LinesChart></LinesChart>
        </Col>
      </Row>
    </Container>
        <div className="contenedor-btn">
            <button className="boton-editar" onClick={handlePDF}>Exportar a PDF</button><br />           
        </div>
        

        </>
    )
}