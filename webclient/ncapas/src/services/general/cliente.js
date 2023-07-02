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