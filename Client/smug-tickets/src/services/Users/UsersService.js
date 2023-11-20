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
    }
};

export default UsersService;
