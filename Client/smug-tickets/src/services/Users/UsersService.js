import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const UsersService = {
    //Traer todos los usuarios
    getAllUsers: async () => {
        try {
            const response = await API.get("/getALL");

            if (response.status == 200) {
                return response.data;
                console.log(response.data);
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(error);
            return {
                hasError: true,
            };
        }
    },

    //Activar usuario
    ActiveUser: async ( userId) => {
        try {
            const response = await API.post(`/activarUsuario?id=${userId}`, {
            });

            if (response.status == 200) {
                return response.data;
                console.log(response.data);
                
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(error);
            return {
                hasError: true,
            };
        }
    },

    //Desactivar usuario
    DisableUser: async ( userId) => {
        try {
            const response = await API.post(`/desactivarUsuario?id=${userId}`, {
            });

            if (response.status == 200) {
                return response.data;
                console.log(response.data);
                
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(error);
            return {
                hasError: true,
            };
        }
    }
};

export default UsersService;
