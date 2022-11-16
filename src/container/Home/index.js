import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={style.container}>
            <Link to="store">
                <h3>movie app</h3>
                <i className="fa-regular fa-circle-check"></i>
                <p>get started</p>
            </Link>
            <Link>
                <h3>wallet</h3>
                <i className="fa-regular fa-circle-exclamation"></i>
                <p>on going</p>
            </Link>
            <Link to="docs">
                <h3>docs</h3>
                <i className="fa-regular fa-circle-exclamation"></i>
                <p>on going</p>
            </Link>
        </div>
    );
};

export default Home;
