import React from 'react';
import style from './style.module.css';

const InputNote = (props) => {
    return (
        <div className={style.container}>
            <input placeholder={props.placeholder} className={style.input} />
        </div>
    );
};

export default InputNote;
