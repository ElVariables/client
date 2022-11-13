import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Movies from '.';
import MoviesList from '../Share/MoviesList';

const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const fetchNowPlaying = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_URL}/now_playing`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                },
            });
            setNowPlaying(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNowPlaying();
    }, []);

    return <MoviesList>{nowPlaying && nowPlaying.map((movie) => <Movies key={movie.id} {...movie} />)}</MoviesList>;
};

export default NowPlaying;
