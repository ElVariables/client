import React from 'react';
import style from './style.module.css';

const Docs = () => {
    return (
        <div className={style.container}>
            <div className={style.slide_bar}>
                <div className={style.space}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={style.space}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={style.space}>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
            <div className={style.app}>
                <p>supperNote</p>
                <div className={style.center}>1</div>
            </div>
        </div>
    );
};

export default Docs;
