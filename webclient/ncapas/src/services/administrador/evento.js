const BASE_URL = process.env.REACT_APP_API_URL



export const crearEvento = async(data) => {
    const response = await fetch(`${BASE_URL}evento/crearEvento`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            descripcion: data.descripcion,
            tickets_disponibles: data.tickets_disponibles,
            fecha_evento: data.fecha,
            capacidad: data.capacidad,
            id_categoria: data.categoria,
            imagen: data.imagen

        })
    })
    const respuesta = await response;
    return respuesta
}
export const getEvento = async(data) => {
    const response = await fetch(`${BASE_URL}evento/getEventosAdmin?page=${data.page}&size=${data.limit}`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
        }
    })
    const respuesta = await response
    return respuesta
}

export const traerEvento = async(data) => {
    const response = await fetch(`${BASE_URL}evento/getSingleEvent?event=${data.id}`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
        }
    })
    const respuesta = await response
    return respuesta
}
export const editarEvento = async(data) => {
    console.log(data)
    const response = await fetch(`${BASE_URL}evento/editarEvento/${data.idEvento}`,{
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            descripcion: data.descripcion,
            tickets_disponibles: data.tickets_disponibles,
            fecha_evento: data.fecha_evento,
            capacidad: data.capacidad,
            id_categoria: data.id_categoria,
            imagen: data.imagen
        })
        
    })
    const respuesta = await response
    return respuesta
}
export const ocultarEvento = async(data) => {
    console.log(data)
    const response = await fetch(`${BASE_URL}evento/actualizarEstado?evento=${data.idEvento}`,{
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
        }
       
        
    })
    const respuesta = await response
    return respuesta
}
