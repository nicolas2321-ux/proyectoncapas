const BASE_URL = process.env.REACT_APP_API_URL



export const login = async(data) => {
    const response = await fetch(`${BASE_URL}user/login`,{
        "method": "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            identifier: data.email,

        })
    })
    const respuesta = await response;
    return respuesta
}
export const register = async(data) => {
    const response = await fetch(`${BASE_URL}user/signup`,{
        "method": "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
            nombre: data.nombre,

        })
    })
    const respuesta = await response;
    return respuesta
}
export const GetUsers = async(token) => {
    const response = await fetch(`${BASE_URL}user/getAllUsers`,{
        "method": "GET",
        headers:{
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json",

        },
    })
    const respuesta = await response;
    return respuesta
}
export const getAllUsers = async(token) => {
    const response = await fetch(`${BASE_URL}user/getALL`,{
        "method": "GET",
        headers:{
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json",

        },
    })
    const respuesta = await response;
    return respuesta
}
export const activar = async(data) => {
    const response = await fetch(`${BASE_URL}user/activarUsuario?id=${data}`,{
        "method": "POST",
        headers:{
           
            "Content-type": "application/json",

        },
    })
    const respuesta = await response;
    return respuesta
}
export const desactivar = async(data) => {
    const response = await fetch(`${BASE_URL}user/desactivarUsuario?id=${data}`,{
        "method": "POST",
        headers:{
            "Content-type": "application/json",

        },
    })
    const respuesta = await response;
    return respuesta
}



