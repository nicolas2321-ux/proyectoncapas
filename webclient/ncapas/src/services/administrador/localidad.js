const BASE_URL = process.env.REACT_APP_API_URL



export const crearLocalidad = async(data) => {
    const response = await fetch(`${BASE_URL}lugares/saveLugar`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            descripcion: data.descripcion,
            id_evento: data.idEvento,
            precio: data.precio,
            tickets: data.ticket

        })
    })
    const respuesta = await response;
    return respuesta
}


export const getLocalidades = async(data) => {
    const response = await fetch(`${BASE_URL}lugares/getLocalidad?evento=${data.id}`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          }
    })
    const respuesta = await response;
    return respuesta
}
export const deleteLocalidad = async(data) => {
    const response = await fetch(`${BASE_URL}lugares/deleteLocalidad?lugar=${data.idLocalidad}`,{
        "method": "PATCH",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          }
    })
    const respuesta = await response;
    return respuesta
}