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
    createEvent: async (token, descripcion, tickets_disponibles, fecha_evento, capacidad, id_categoria, imagen) => {
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
    },
    //Buscar un evento
    searchEventsByTitle: async (token, title, page, size) => {
        let payload = {
            title: title
        };
        try {
            const response = await API.post(`/buscarEventos?page=${page}&size=${size}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
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
    //Traer información de un evento
    getEventById: async (event) => {
        try {
            const response = await API.get(`/getSingleEvent?event=${event}`);

            if (response.status === 200) {
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
    //Editar un evento
    editEvent: async (token, id, descripcion, tickets_disponibles, fecha_evento, capacidad, id_categoria, imagen) => {
        let payload = {
            descripcion: descripcion,
            tickets_disponibles: tickets_disponibles,
            fecha_evento: fecha_evento,
            capacidad: capacidad,
            id_categoria: id_categoria,
            imagen: imagen
        };

        try {
            const response = await API.put(`/editarEvento/${id}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status == 200) {
                console.log('Evento editado exitosamente:', response.data);
                return response.data;
            } else {
                throw new Error(`Error en la respuesta del servidor: ${response.status}`);
            }
        } catch (error) {
            console.error('Error al editar el evento:', error);
            return {
                hasError: true,
            };
        }
    },
    //Traer todos los eventos ocultos/finalizados
    getAllEventsHide: async (token, page, size) => {
        try {
            const response = await API.get(`/getEventoCancelados?page=${page}&size=${size}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                return response.data;
                console.log(response.data);
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    },

    //Finalizar un evento y ocultarlo de la vista de los usuarios
    hideEvent: async (token, eventId) => {
        try {
            const response = await API.patch(`/actualizarEstado?evento=${eventId}`, null, {
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
            console.error('Error fetching events:', error);
            throw error;
        }
    },

}

export default eventService;