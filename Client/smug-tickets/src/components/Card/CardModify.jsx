import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CardModify = (props) => {
  const navigate = useNavigate();

  const handleEditEvent = () => {
    const id = props.id;
    navigate(`/admin/editEvent/${id}`);
  };

  return (
    <div className='bg-locations-gray shadow-lg rounded-xl overflow-hidden p-5 h-auto'>
      <div className="rounded-t-3xl overflow-hidden h-auto w-full">
        <img className="w-full h-72" src={props.imagen} alt="Artista" />
        <div className="bg-blue h-10">
          <h2 className="text-white font-bold text-2xl text-center">{props.descripcion}</h2>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-5 pt-3'>
        <button onClick={handleEditEvent} className='bg-orange rounded-xl text-black font-bold text-lg w-28'>Modificar</button>
        <button className='bg-blue rounded-xl text-white font-bold text-lg w-28'>Desactivar</button>
      </div>
    </div>
  );
};

export default CardModify;