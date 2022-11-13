import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import style from './style.module.css';

const Credits = () => {
    const URL = 'https://image.tmdb.org/t/p/w500';
    const [Actors, setActors] = useState([]);
    const { id } = useParams();
    const fetchCredits = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_URL}/${id}/credits`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                },
            });
            setActors(data.cast);
            console.log(data.cast);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCredits();
    }, []);

    return (
        <div className={style.container}>
            {Actors
                ? Actors.splice(0, 5).map((Actor) => (
                      <div key={Actor.id} className={style.actor}>
                          <img src={URL + Actor.profile_path} alt={Actor.name} />
                          <p>{Actor.name}</p>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default Credits;
