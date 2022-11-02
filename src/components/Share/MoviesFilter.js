import React from 'react';
import "./MoviesFilter.css"

const MoviesFilter = (props) => {
    return (
        <div onChange={props.onChange} value={props.value} className="bar">
            {props.name}
        </div>
    );
};

export default MoviesFilter;
