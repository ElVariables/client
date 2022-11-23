import { http } from './axios';

const fetchAPI = {
    login: (formData) => http.post('/auth/login', formData),
    note: (formData) => http.post('/note', formData),
    getNote: () => http.get('/note'),
    addNote: (data) => http.post('/note', data),
};

export default fetchAPI;
