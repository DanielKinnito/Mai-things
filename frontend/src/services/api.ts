import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tools/';

export const fetchTools = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTool = async (formData: FormData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};