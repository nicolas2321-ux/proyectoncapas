import axios from 'axios';

const BASE_URL_ROLE = 'http://localhost:8080/evento';

const API = axios.create({
  baseURL: BASE_URL_ROLE,
  headers: {
    'Content-Type': 'application/json',
  },
});

const eventService = {
    //Crear un evento nuevo
    createEvent: async (token, descripcion, tickets_disponibles, fecha_evento,capacidad, id_categoria, imagen ) => {
        let payload = {
            descripcion: descripcion,
            tickets_disponibles: tickets_disponibles,
            fecha_evento: fecha_evento,
            capacidad: capacidad,
            id_categoria: id_categoria,
            imagen: imagen
        };
        try {
            const response = await API.post('/crearEvento', payload, {
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
    }
}

export default eventService;