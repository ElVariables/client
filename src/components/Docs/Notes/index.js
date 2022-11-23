import React from 'react';
import style from './style.module.css';
import btn from '../../Share/Button/Btn';

const Notes = ({ title, desc }) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.desc}>{desc}</div>
            <button>
                <p>remove</p>
            </button>
        </div>
    );
};

export default Notes;
