import React from 'react';
import './MoviesList.css';

const MoviesList = (props) => {
    return <div className="MoviesList">{props.children}</div>;
};

export default MoviesList;
