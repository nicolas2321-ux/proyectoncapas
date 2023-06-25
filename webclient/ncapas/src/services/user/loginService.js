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



export const register = (data) => {
    console.log('peticion para el registro')
    console.log('data')
    return data
}