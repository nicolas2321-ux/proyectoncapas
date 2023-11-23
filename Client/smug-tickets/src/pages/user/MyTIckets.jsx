import React, { useState, useEffect } from "react";
import NavbarClient from "../../components/Navbar/NavbarUser.jsx";
import Footer from "../../components/Footer/Footer";
import CardMyTicket from "../../components/Card/CardMyTicket";
import context from "../../Context/UserContext.js";
import ticketService from '../../services/Ticket/TicketService.js';
import { useNavigate } from 'react-router-dom';

export const MyTickets = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();    
  }, []);

  const fetchTickets = async () => {
    const token = context.getToken();

    const response = await ticketService.getMyTickets(token);

    if (!response.hasError) {
      // Mapear la respuesta para obtener la información deseada
      const mappedTickets = response.map((ticket) => {
        const evento = ticket.id_evento;
        const localidad = ticket.id_localidad;

        return {
          idTicket: ticket.idTicket, // Agregado
          evento: {
            idEvento: evento.idEvento,
            descripcion: evento.descripcion,
            imagen: evento.imagen,
          },
          localidad: {
            idLocalidad: localidad.code, // Cambia por el campo que necesitas
            descripcion: localidad.descripcion,
          },
        };
      });

      setTickets(mappedTickets);
      console.log(mappedTickets);
    } else {
      console.log(response.hasError);
    }
  };

  const cardStyle = {
    maxWidth: '300px', // Ajusta según tus necesidades
  };

  /*const pruebaTicket = {
    idTicket: 1,
    evento: {
      idEvento: 1,
      descripcion: "Retumbar",
      imagen: "https://i.pinimg.com/originals/a0/08/cb/a008cbe67fba1ea160f75dc6d20d0aa6.jpg",
    },
    localidad: {
      idLocalidad: 1,
      descripcion: "VIP",
      
    },
  };*/


  return (
    <>
      <NavbarClient />
      <div className="flex justify-center p-2">
         
          <button
            className="px-4 py-2 bg-blue rounded-md text-white font-bold"
            onClick={() => navigate('/cliente/recibirTicket')}
          >
            Recibir ticket
          </button>
        </div>
      <div className="text-center text-4xl font-bold mt-8 mb-4">
        Mis Tickets
        <div className="flex justify-center mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Agregar la card de prueba 
            <div className="flex justify-center">
              <CardMyTicket
                idTicket={pruebaTicket.idTicket}
                eventName={pruebaTicket.evento.descripcion}
                location={pruebaTicket.localidad.descripcion}
                imageUrl={pruebaTicket.evento.imagen}
                style={cardStyle}
              />
            </div>
            <div className="flex justify-center">
              <CardMyTicket
                idTicket={pruebaTicket.idTicket}
                eventName={pruebaTicket.evento.descripcion}
                location={pruebaTicket.localidad.descripcion}
                imageUrl="https://d1af7m13b2f34i.cloudfront.net/media/league-of-legends-worlds-2023-sportstiger-1673357714695-original.jpg"
              />
            </div>

            <div className="flex justify-center">
              <CardMyTicket
                idTicket={pruebaTicket.idTicket}
                eventName={pruebaTicket.evento.descripcion}
                location={pruebaTicket.localidad.descripcion}
                imageUrl="https://d1af7m13b2f34i.cloudfront.net/media/league-of-legends-worlds-2023-sportstiger-1673357714695-original.jpg"
              />
            </div>
          */}
                        
            {tickets.map((ticket) => (
              <div key={ticket.idTicket} className="flex justify-center">
                <CardMyTicket
                  idTicket={ticket.idTicket}
                  eventName={ticket.evento.descripcion}
                  location={ticket.localidad.descripcion}
                  imageUrl={ticket.evento.imagen}
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyTickets;
