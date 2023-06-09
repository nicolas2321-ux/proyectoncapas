const BASE_URL = process.env.REACT_APP_API_URL

export const GetEvents = async(data) => {

    const response = await fetch(`${BASE_URL}ticket/getMyEvents`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${data}`,
            "Content-Type": "application/json",
          },

    })
    const respuesta = await response;

    return respuesta
}

export const transferirTicket = async(data) => {
    const response = await fetch(`${BASE_URL}email/sendEmail`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
                to: data.username,
                ticket: data.ticket,
             })
    })
    const respuesta = await response;
    return respuesta
}

export const recibirTicket = async(data) => {
    const response = await fetch(`${BASE_URL}ticket/verificarTranspaso`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              
                ticket: data.ticket,
             })
    })
    const respuesta = await response;
    return respuesta
}