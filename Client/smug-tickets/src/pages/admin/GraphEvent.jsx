import React, { useEffect, useState } from 'react';
import Bars from "../../components/BarChart";
import NavbarAdmin from "../../components/Navbar/NavbarAdmin.jsx";
import Footer from "../../components/Footer/Footer";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import { generatePDF } from "../../utils/pdfUtils";
import EventService from "../../services/Event/EventService.js";
import localityService from "../../services/Locality/LocalityService.js";
import { useNavigate, useParams } from 'react-router-dom';

export const GraphEvent = () => {

  const { id } = useParams();

  //Obtener info del evento
  const [event, setEvent] = useState(null);
  const [localidades, setLocalidades] = useState([]);
  const [individualPercentage, setIndividualPercentage] = useState(0);
  const [groupPercentage, setGroupPercentage] = useState(0);

  useEffect(() => {

    fetchEventDetails();
    const fetchLocality = async () => {
      try {
        const response = await localityService.getLocalidadesPorEvento(id);
        if (Array.isArray(response)) {
          setLocalidades(response);
          console.log(response);
        }
      } catch (error) {
        console.error('Error al obtener las localidades', error);
      }
    };

    fetchLocality();
    generateRandomPercentages();
  }, [id]);

  const generateRandomPercentages = () => {
    const randomIndividual = Math.floor(Math.random() * 100);
    const randomGroup = 100 - randomIndividual;
    
    setIndividualPercentage(randomIndividual);
    setGroupPercentage(randomGroup);
  };

  const fetchEventDetails = async () => {
    const response = await EventService.getEventById(id);
    console.log(response);
    if (!response.error) {
      setEvent(response);
    } else {
      console.log(response.error);
    }
  };

  const handleDownloadPDF = async () => {
    generatePDF({ event, localidades,individualPercentage,groupPercentage });
  };
  
  return (
    <>
      <NavbarAdmin />
      <div>
        <div className="bg-orange p-2 rounded-lg w-2/3 mx-auto m-4">
          <h1 className="text-center text-4xl font-Popins font-extrabold text-white">
            Grafico: {event && event.descripcion}
          </h1>
        </div>

        <div className="flex flex-col mx-auto m-4 md:flex-row md:justify-between">
          <div className="bg-light rounded-lg p-4 mb-4 md:w-1/2 md:mr-4">
            <div className="rounded-lg w-full mb-4 bg-light p-4 mx-auto sm:flex-col sm:items-center flex flex-col items-center justify-center" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <div className="flex items-center">
                <IoTicket className="text-blue font-extrabold text-4xl sm:text-2xl text-center font-Popins" />
                <h2 className="text-blue font-extrabold text-4xl sm:text-3xl text-center font-Popins ml-4">Tickets Vendidos</h2>
              </div>
              <div className="mt-2 text-center font-extrabold text-4xl sm:text-3xl font-Popins">{event && event.tickets_disponibles}</div>
            </div>


            <div className="flex flex-col bg-light rounded-lg p-4 mx-auto w-full">
              <div className="rounded-lg font-extrabold text-4xl font-Popins" style={{ backgroundColor: "#F9F7F4", padding: "10px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                <h2 className="text-blue font-extrabold text-4xl mb-4">Localidades Populares:</h2>
                <ul>
                  {localidades.map((localidad) => (
                    <li key={localidad.code} className="flex justify-between mb-2">
                      <span>{localidad.descripcion}:</span>
                      <span>{localidad.tickets}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>

          <div className="bg-light rounded-lg p-4 md:w-1/2">
            <div
              className="bg-f9f7f4 mx-auto rounded-lg"
              style={{ maxWidth: "500px", height: "230px" }}
            >
              <Bars localidades={localidades} />
            </div>

            <div className="flex flex-col bg-light rounded-lg p-4 mx-auto w-full">
              <div
                className="rounded-lg text-center flex items-center justify-between my-2"
                style={{ backgroundColor: "#F9F7F4", padding: "10px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: "75px" }}
              >
                <div className="flex items-center">
                  <BsFillPersonFill className="text-4xl text-blue-500" />
                  <h2 className="text-blue-500 ml-2 font-bold text-lg">Entrada Individual</h2>
                </div>
                <p className="font-bold text-2xl">{individualPercentage}%</p>
              </div>
            </div>

            <div className="flex flex-col bg-light rounded-lg p-4 mx-auto w-full">
              <div
                className="rounded-lg text-center flex items-center justify-between my-2"
                style={{ backgroundColor: "#F9F7F4", padding: "10px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: "75px" }}
              >
                <div className="flex items-center">
                  <BsFillPeopleFill className="text-4xl text-blue-500" />
                  <h2 className="text-blue-500 ml-2 font-bold text-lg">Entrada Grupal</h2>
                </div>
                <p className="font-bold text-2xl">{groupPercentage}%</p>
              </div>
            </div>

            <div className="flex justify-center m-4">
              <button onClick={handleDownloadPDF}
                className="bg-blue rounded-full px-4 py-2 text-white mr-2"
                style={{ width: "150px" }}
              >
                Generar PDF
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GraphEvent;