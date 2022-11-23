import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/Context';
import style from './style.module.css';

const Header = () => {
    const {
        state: { isAuthenticated },
    } = useContext(AuthContext);

    const auth = isAuthenticated ? (
        <>
            <div className={style.auth}>
                <i className="fa-solid fa-circle-check"></i>
                <p>isAuthenticated</p>
            </div>
        </>
    ) : (
        <>
            <div className={style.btn}>
                <Link to="/form">
                    <p>get started</p>
                </Link>
            </div>
        </>
    );

    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.logo}>
                    <Link to="/">
                        <p>myAPP</p>
                    </Link>
                </div>
                <div className={style.controller}>
                    <div className={style.store}>
                        <Link to="/store">
                            <p>Store</p>
                        </Link>
                    </div>
                    <div className={style.wallet}>
                        <p>wallet</p>
                    </div>
                    <div className={style.docs}>
                        <Link to="/docs">
                            <p>myDocument</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.right}>{auth}</div>
        </div>
    );
};

export default Header;
