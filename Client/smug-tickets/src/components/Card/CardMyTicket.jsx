import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const CardMyTicket = ({ eventName, location, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    //setIsHovered(true);
  };

  const handleCardTicket = () => {
    //navigate('/user/info-pay-ticket');
  };

  const handleMouseLeave = () => {
    //setIsHovered(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Imagen de la tarjeta */}
      <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
        <img className="absolute inset-0 w-full h-full object-cover" src={imageUrl} alt={eventName} />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="px-6 py-4">
        {/* Título de la tarjeta */}
        <div className="font-bold text-xl mb-2 text-center overflow-hidden line-clamp-2">{eventName}</div>
        
        {/* Descripción de la tarjeta */}
        <p className="text-gray-700 text-base text-center overflow-hidden line-clamp-3">{location}</p>
      </div>
    </div>
  );
};

export default CardMyTicket;