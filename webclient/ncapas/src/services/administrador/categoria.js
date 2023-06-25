const BASE_URL = process.env.REACT_APP_API_URL



export const GetCategoria = async(token) => {
    const response = await fetch(`${BASE_URL}categoria`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
    })
    const respuesta = await response;
    return respuesta
}
