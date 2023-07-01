const BASE_URL = process.env.REACT_APP_API_URL

export const crearTicket = async(data) => {
    
    const response = await fetch(`${BASE_URL}ticket/crearTicket`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
           fecha: data.fecha,
           evento: data.evento,
           cantidadTickets: data.cantidadTickets,
           localidad: data.localidad
        })
         
    })
    const respuesta = await response;
   
    return respuesta
}