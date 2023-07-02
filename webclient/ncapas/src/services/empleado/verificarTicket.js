const BASE_URL = process.env.REACT_APP_API_URL

export const cambiarEstado = async(data) => {
    
    const response = await fetch(`${BASE_URL}ticket/changeEstado`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
           evento: data.evento,
        })
         
    })
    const respuesta = await response;
   
    return respuesta
}



export const traerTicket = async(data) => {
    
    const response = await fetch(`${BASE_URL}ticket/ticket`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
           evento: data.evento,
        })
         
    })
    const respuesta = await response;
   
    return respuesta
}