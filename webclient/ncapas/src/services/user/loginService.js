



export const login = (data) => {
console.log(data)
if(data.email === "orellanaj2321@gmail.com"){
    console.log("admin")
    data.rol = "admin"
}else if(data.email === "00035819@uca.edu.sv"){
    console.log('cliente')
    data.rol = "cliente"
}
return data
}

export const register = (data) => {
    console.log('peticion para el registro')
    console.log('data')
    return data
}