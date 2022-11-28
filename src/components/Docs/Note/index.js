import React, { } from 'react';
import style from './style.module.css';


const Note = ({title, desc}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.desc}>{desc}</div>
            <button>
                <p>update</p>
            </button>
            <button>
                <p>remove</p>
            </button>
        </div>
    );
};

export default Note;
