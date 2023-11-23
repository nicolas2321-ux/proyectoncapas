import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQrcode } from 'react-icons/fa';

const CardMyTicket = ({ idTicket, eventName, location, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardTicket = () => {
    localStorage.setItem('ticket', idTicket);
    navigate("/cliente/transferTicket");
  };

  const handleViewQR = () => {
    navigate("/cliente/viewQR");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-white m-auto md:m-0 shadow-lg rounded-t-3xl overflow-hidden w-9/12 md:w-2/3 lg:w-2/3 cursor-pointer ${
        isHovered ? 'border-2 border-orange' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagen de la tarjeta */}
      <div className="relative">
        <img className="w-full h-64 object-cover object-center rounded-t-lg" src={imageUrl} alt={eventName} />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="bg-blue p-4">
        {/* Título de la tarjeta */}
        <h2 className="text-white font-bold text-2xl text-center">{eventName}</h2>
        {/* Localidad */}
        <h3 className="text-white text-center text-xl">{location}</h3>

        {/* Botones */}
        <div className="flex justify-between mt-4">

          {/* Botón de transferir */}
          <button
            className="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 rounded focus:outline-none text-lg"
            onClick={handleCardTicket}
          >
            Transferir
          </button>

          {/* Botón de ver ticket con icono de QR */}
          <button
            className="bg-orange hover:bg-orange-dark text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none text-lg"
            onClick={handleViewQR}
          >
            <FaQrcode className="mr-1" /> Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMyTicket;

