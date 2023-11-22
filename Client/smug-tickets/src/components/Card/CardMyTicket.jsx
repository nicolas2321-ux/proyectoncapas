import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CardMyTicket = ({ idTicket, eventName, location, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardTicket = () => {
    navigate("/cliente/transferTicket");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`bg-white m-auto md:m-0 shadow-lg rounded-t-3xl overflow-hidden w-9/12 md:w-2/3 lg:w-2/3 cursor-pointer ${isHovered ? 'border-2 border-orange' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleCardTicket}>
      {/* Imagen de la tarjeta */}
      <img className="w-full h-64 object-cover object-center rounded-t-lg" src={imageUrl} alt={eventName} />

      {/* Contenido de la tarjeta */}
      <div className="bg-blue h-17">
        {/* Título de la tarjeta */}
        <h2 className="text-white font-bold text-2xl text-center">{eventName}</h2>
        {/* Localidad */}
        <h3 className="text-white text-center text-xl ">{location}</h3>
      </div>
    </div>

  );
};

export default CardMyTicket;


