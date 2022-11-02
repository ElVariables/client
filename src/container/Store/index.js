import React, { useState, useEffect } from 'react';
import './style.css';

import Movies from '../../components/Movies';
import MoviesFilter from '../../components/Share/MoviesFilter';

const StorePage = () => {
    const baseURL = 'https://api.themoviedb.org/3';
    const api_key = '?&api_key=a38b8708c5afb11a25e8460a65847b94';
    const querySelect = {
        discover: '/discover/movie',
        mostPopular: 'movie/popular',
        nowPlaying: 'movie/now_playing',
        upComing: 'movie/upcoming',
        topRated: 'movie/top_rated',
    };
    const tmdbApi = baseURL + querySelect.discover + api_key;

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(tmdbApi)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

    return (
        <div className="container">
            <div className="Title">
                <div className="Title-Page">
                    <div className="app-content">
                        <p>
                            app
                            <br />
                            STORE
                        </p>
                    </div>
                    <div className="title-second">theMovie</div>
                </div>
                <div className="SearchBox">
                    <input className="SearchBox-Input"></input>
                    <div className="SearchBox-Btn">
                        <p>search</p>
                    </div>
                </div>
            </div>
            <div className="movie_app">
                <div className="movies_list">
                    <MoviesFilter value="mostPopular" name="most popular" onClick={() => {}}></MoviesFilter>
                    <MoviesFilter name="now playing"></MoviesFilter>
                    <MoviesFilter name="top rate"></MoviesFilter>
                    <MoviesFilter name="up coming"></MoviesFilter>
                </div>
                <div className="Movies">
                    {movies.map((movie) => (
                        <Movies key={movie.id} {...movie} />
                    ))}
                </div>
                <div>2</div>
            </div>
        </div>
    );
};

export default StorePage;
