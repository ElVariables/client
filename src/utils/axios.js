import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:5000',
});

export const getMovies = async (arr) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/${arr}`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
            },
        });
        console.log(data.results);
    } catch (error) {
        console.error(error);
    }
};
