import { http } from './axios';

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('token', token);
        http.defaults.headers.common['HVA-auth-token'] = token;
    } else {
        localStorage.removeItem('token');
        delete http.defaults.headers.common['HVA-auth-token'];
    }
};
