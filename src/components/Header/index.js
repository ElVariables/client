import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Link to="/">
                    <p>myAPP</p>
                </Link>
            </div>
            <div className={style.controller}>
                <div className={style.store}>
                    <Link to ="/store">
                        <p>Store</p>
                    </Link>
                </div>
                <div className={style.wallet}>
                    <p>wallet</p>
                </div>
                <div className={style.docs}>
                    <Link to = "/docs">
                        <p>myDocument</p>
                    </Link>
                </div>
            </div>
            <div className={style.btn}>
                <div>
                    <Link to ="/form">
                        <p>get started</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
