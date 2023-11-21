import React from "react";
import NavbarClient from "../../components/Navbar/NavbarUser.jsx";
import Footer from "../../components/Footer/Footer";
import CardMyTicket from "../../components/Card/CardMyTicket";
import { useNavigate } from 'react-router-dom';

export const MyTickets = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarClient />
      <div>
      <div className="text-center text-4xl font-bold mt-8 mb-4">
      Mis Tickets
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center">
            <CardMyTicket 
              eventName="Nombre del Evento"
              location="Localidad"
              imageUrl="https://i.blogs.es/685059/shingeki/1366_2000.jpeg"
            />
          </div>
          <div className="flex justify-center">
            <CardMyTicket 
              eventName="Nombre del Evento"
              location="Localidad"
              imageUrl="https://elcomercio.pe/resizer/8WzqX98NIUjSpvUS22Q1G-9UfeI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GSFEIY2W2ZE77JW2E3UILXAEII.jpg"
            />
          </div>
          <div className="flex justify-center">
            <CardMyTicket 
              eventName="Nombre del Evento"
              location="Localidad"
              imageUrl="https://elcomercio.pe/resizer/8WzqX98NIUjSpvUS22Q1G-9UfeI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GSFEIY2W2ZE77JW2E3UILXAEII.jpg"
            />
          </div>
          <div className="flex justify-center">
            <CardMyTicket 
              eventName="Nombre del Evento"
              location="Localidad"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAjICCObU4EhWQlYfA19D6ffion0l3Xlxbw&usqp=CAU"
            />
          </div>
        </div>
      </div>
    </div>


        <Footer />
      </div>
    </>
  );
};

export default MyTickets;
