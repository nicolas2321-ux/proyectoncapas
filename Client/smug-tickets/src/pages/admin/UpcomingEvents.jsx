import React, { useState, useEffect } from "react";
import SearchBoxTicket from '../../components/SearchBox/SearchBoxTicket';
import NavbarAdmin from "../../components/Navbar/NavbarAdmin.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CardModify from '../../components/Card/CardModify';
import { useNavigate } from 'react-router-dom';
import EventService from "../../services/Publico/PublicService.js";

export const UpcomingEvents = () => {
    const [event, setEvent] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        fetchAllEvents();
      }, [currentPage]);

    const fetchAllEvents = async () => {

    const response = await EventService.getAllEvents(currentPage, 6);
    
    console.log(response.content);
     if (!response.error) {
          const { content, totalPages } = response;
          setEvent(content);
          setTotalPages(totalPages);
        }
    };

    const handleCreateEvent = () => {
        navigate('/admin/createEvent');
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      };
    
      const handleNextPage = () => {
        if (currentPage < totalPages-1) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      };

    return (
        <>
            <NavbarAdmin/>
            <div className='flex flex-col items-center p-5 gap-5'>
                <h1 className=' font-bold text-xl  md:text-4xl'>Eventos proximos</h1>
            <div className='flex flex-col items-center gap-5'>
                <SearchBoxTicket/>
                <button onClick={handleCreateEvent} className=' bg-orange font-bold text-black w-20 lg:w-24 lg:h-10 rounded-2xl md:text-lg h-8' >Crear</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-8 lg:p-5'>
                {event &&
            event.map((events) => (
              <CardModify
                key={events.idEvento}
                isMainView={true}
                id={events.idEvento}
                descripcion={events.descripcion}
                imagen={events.imagen}
              />
            ))}
   
            </div>
            <div className='flex flex-row items-center gap-5 pt-3'>
                <button onClick={handlePrevPage} className=' bg-orange rounded-xl text-black font-bold text-lg w-28 h-8 lg:h-10'>Anterior</button>
                <button onClick={handleNextPage} className='bg-blue rounded-xl text-white font-bold text-lg w-28 h-8 lg:h-10'>Siguiente</button>
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default UpcomingEvents;