import axios from 'axios';

const BASE_URL = "http://localhost:8080/evento"

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const PublicService = {
    getAllEvents: async (page, size) => {
        try {
            const response = await API.get('/all', {
                params: {
                    page,
                    size,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    },
};

export default PublicService;
