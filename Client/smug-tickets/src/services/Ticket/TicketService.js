import axios from 'axios';

const BASE_URL_ROLE = 'http://localhost:8080/ticket';

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
    }

}

export default ticketService;
