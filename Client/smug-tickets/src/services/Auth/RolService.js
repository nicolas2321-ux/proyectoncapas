import axios from 'axios';

const BASE_URL_ROLE = 'http://localhost:8080/userRol';

const API = axios.create({
  baseURL: BASE_URL_ROLE,
  headers: {
    'Content-Type': 'application/json',
  },
});

const rolService = {
    //Obtener el rol del usuario por medio del ID
  getRoles: async (userid) => {
    try {
      const response = await API.get(`/getRolesById?userid=${userid}`);

      if (response.status === 200) {
        console.log(response.data);
        const { roles } = response.data;
        const roleNames = roles.map((role) => role.rol);
        return roleNames;
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
};

export default rolService;