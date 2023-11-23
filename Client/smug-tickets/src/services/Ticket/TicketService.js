import axios from 'axios';

const BASE_URL_ROLE = 'http://localhost:8080/ticket';
const BASE_URL = 'http://localhost:8080/';
const API = axios.create({
    baseURL: BASE_URL_ROLE,
    headers: {
        'Content-Type': 'application/json',
    },
});

const ticketService = {

    getMyTickets: async (token) => {
        try {
            const response = await API.get('/getMyEvents', {
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
    transferirTicket: async(data) => {
        const response = await fetch(`${BASE_URL}email/sendEmail`,{
            "method": "POST",
            headers: {
                "Authorization": `Bearer ${data.token}`,
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
              
                    to: data.to,
                    ticket: data.ticket,
                 })
        })
        const respuesta = await response;
        return respuesta
    },
    recibirTicket : async(data) => {
        const response = await fetch(`${BASE_URL}ticket/verificarTranspaso`,{
            "method": "POST",
            headers: {
                "Authorization": `Bearer ${data.token}`,
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ticket: data.ticket,
                 })
        })
        const respuesta = await response;
        return respuesta
    },
    verificarTicket: async (token, eventoId) => {
        try {
            const response = await API.post('/changeEstado', {
                evento: eventoId,
            }, {
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

export default ticketService;
