import React from 'react';
import style from "./style.module.css"

const MoviesFilter = (props) => {
    return (
        <div className={style.movie_app}>
            <h3>{props.name}</h3>
            <div className={style.movies}>
                <div>{props.children}</div>
            </div>
        </div>
    );
};

export default MoviesFilter;
