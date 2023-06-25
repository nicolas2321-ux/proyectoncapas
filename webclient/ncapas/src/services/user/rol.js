const BASE_URL = process.env.REACT_APP_API_URL



export const get_rol = async(data) => {
    
    const response = await fetch(`${BASE_URL}userRol/getRoles`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
         
    })
    const respuesta = await response;
   
    return respuesta
}