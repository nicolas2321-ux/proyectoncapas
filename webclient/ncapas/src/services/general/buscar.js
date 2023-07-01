const BASE_URL = process.env.REACT_APP_API_URL

export const Buscar = async(data) => {
    
    const response = await fetch(`${BASE_URL}evento/buscarEventos?page=0&size=5`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
           title: data.title,
        })
         
    })
    const respuesta = await response;
   
    return respuesta
}