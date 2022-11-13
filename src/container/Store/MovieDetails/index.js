import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';

import Templates from '../../../components/Movies/Templates';
import Btn from '../../../components/Share/Button/Btn';
import Provider from '../../../components/Movies/Provider';
import Credits from '../../../components/Movies/Credits';

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const imgURL = 'https://image.tmdb.org/t/p/w500';

    const { id } = useParams();
    const fetchMovie = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/${id}`, {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
            },
        });
        setMovie(data);
        console.log(data);
    };

    useEffect(() => {
        fetchMovie();
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src={imgURL + movie.poster_path} alt={movie.poster_path} className={style.logo} />
                <img src={imgURL + movie.backdrop_path} alt={movie.backdrop_path} className={style.poster} />
                <div className={style.content}>
                    <h3>{movie.original_title}</h3>
                    <h4> {movie.tagline}</h4>
                    <div className={style.templates}>
                        {movie && movie.genres
                            ? movie.genres.map((genre) => <Templates key={genre.id} name={genre.name}></Templates>)
                            : ''}
                    </div>
                    <p>{movie.overview}</p>
                    <div className={style.btn}>
                        <Btn name="trainer"></Btn>
                        <Btn name="movie review"></Btn>
                        <Btn name="watch now"></Btn>
                    </div>
                </div>
            </div>
            <div className={style.provider}>
                <div className={style.company}>
                    <h3>producer by</h3>
                    <div className={style.logo_company}>
                        {movie && movie.production_companies
                            ? movie.production_companies.map((company) => (
                                  <Provider key={company.id} {...company}></Provider>
                              ))
                            : ' '}
                    </div>
                </div>
                <div className={style.actor}>
                    <p>actor</p>
                    <div className={style.credits}>{<Credits />}</div>
                </div>
            </div>
        </div>
    );
};
export default MovieDetails;
