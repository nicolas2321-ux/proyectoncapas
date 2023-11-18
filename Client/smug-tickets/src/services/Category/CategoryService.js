import axios from "axios";

const BASE_URL = "http://localhost:8080";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const categoryService = {
  //Traer todas las categorias
  getAll: async (token) => {
    try {
      const response = await API.get("/categoria", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
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

export default categoryService;