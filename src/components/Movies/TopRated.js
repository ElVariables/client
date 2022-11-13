import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from '.';
import MoviesList from '../Share/MoviesList';

const TopRated = () => {
    const [topRated, setTopRated] = useState([]);
    const fetchTopRated = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_URL}/top_rated`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                },
            });
            setTopRated(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTopRated();
    }, []);

    return <MoviesList>{topRated && topRated.map((movie) => <Movies key={movie.id} {...movie} />)}</MoviesList>;
};

export default TopRated;
