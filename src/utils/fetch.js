import { http } from './axios';

const fetchAPI = {
    loadUser: () => http.get('/auth'),
    login: (formData) => http.post('/auth/login', formData),
    note: (formData) => http.post('/note', formData),
    loadNote: () => http.get('/note'),
};

export default fetchAPI;
