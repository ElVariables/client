import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from '.';
import MoviesList from '../Share/MoviesList';

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const fetchPopular = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_URL}/popular`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                },
            });
            setPopular(data.results);
            console.log(data.results)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPopular();
    }, []);

    return <MoviesList>{popular && popular.map((movie) => <Movies key={movie.id} {...movie} />)}</MoviesList>;
};

export default Popular;
