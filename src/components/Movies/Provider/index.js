import React from 'react';
import style from "./style.module.css"

const Provider = ({ name, logo_path }) => {
    const URL = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className={style.container}>
            <img src={URL + logo_path} alt="no img" />
            <p>{name}</p>
        </div>
    );
};

export default Provider;
