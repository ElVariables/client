import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from '.';
import MoviesList from '../Share/MoviesList';

const UpComing = () => {
    const [upComing, setUpComing] = useState([]);
    const fetchComing = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_URL}/upcoming`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                },
            });
            setUpComing(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchComing();
    }, []);

    return <MoviesList>{upComing && upComing.map((movie) => <Movies key={movie.id} {...movie} />)}</MoviesList>;
};

export default UpComing;
