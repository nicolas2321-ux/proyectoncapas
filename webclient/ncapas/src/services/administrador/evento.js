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
            id_categoria: data.categoria

        })
    })
    const respuesta = await response;
    return respuesta
}