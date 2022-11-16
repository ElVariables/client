import React from 'react';
import { Link } from 'react-router-dom';
import Style from './style.module.css';

const SearchBox = ({ title, poster_path, release_date, id }) => {
    const imgURL = 'https://image.tmdb.org/t/p/w500';

    return (
        <Link to={`${id}`}>
            <div className={Style.container}>
                {<img src={imgURL + poster_path} alt="" />}
                <div className={Style.title}>{title}</div>
                <div className={Style.date}>{release_date.toString().slice(0, 4)}</div>
            </div>
        </Link>
    );
};

export default SearchBox;
