import React, { useState, useEffect } from "react";
import NavbarAdmin from "../../components/Navbar/NavbarAdmin.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import CardHome from "../../components/Card/CardHome.jsx";
//import ViewEvent from "./ViewEvent";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import context from "../../Context/UserContext";
import EventService from "../../services/Publico/PublicService.js";

const HomeAdmin = () => {
  const [event, setEvent] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchAllEvents();
  }, [title, currentPage]);



  const fetchAllEvents = async () => {

    const response = await EventService.getAllEvents(currentPage, 6);

    console.log(response.content);
    if (!response.error) {
      const { content, totalPages } = response;
      setEvent(content);
      setTotalPages(totalPages);
    }
  };

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

  const handleSearch = (text) => {
    setTitle(text);
  };


  return (
    <>
      <NavbarAdmin />
      <Carousel className="max-h-64"/>
      <div>
        <div className="flex flex-row space-x-32 justify-center bg-blue h-20">
          <h1 className=" text-center text-white text-2xl font-bold my-5 md:text-3xl md:my-4 lg:text-4xl">Cartelera</h1>
          <SearchBox getTitle={handleSearch} />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 justify-items-center mt-10 mx-auto max-w-7xl px-4"
          style={{ rowGap: "40px" }}
        >
          {event &&
            event.map((events) => (
              <CardHome
                key={events.idEvento}
                isMainView={true}
                id={events.idEvento}
                descripcion={events.descripcion}
                imagen={events.imagen}
              />
            ))}
        </div>

        <div className="flex justify-center p-12">
          <button
            className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold"
            onClick={handlePrevPage}
          >
            Anterior
          </button>
          <button
            className="px-4 py-2 bg-blue rounded-md text-white font-bold"
            onClick={handleNextPage}
          >
            Siguiente
          </button>
        </div>

        <div className="mt-2">
        <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;