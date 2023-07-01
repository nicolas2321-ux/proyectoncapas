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

export const getRolById = async(data) => {
    
    const response = await fetch(`${BASE_URL}userRol/getRolesById?userid=${data.id}`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
         
    })
    const respuesta = await response;
   
    return respuesta
}


export const SaveRol = async(data) => {
    
    const response = await fetch(`${BASE_URL}userRol/saveUserRol`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: data.id,
            rol: data.rol,
        })
         
    })
    const respuesta = await response;
   
    return respuesta
}
export const deletePermiso = async(data) => {
    
    const response = await fetch(`${BASE_URL}userRol/desactivarRol`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
           code: data.idPermiso,
        })
         
    })
    const respuesta = await response;
   
    return respuesta
}