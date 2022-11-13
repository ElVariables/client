import React from 'react';
import style from './style.module.css';

const Btn = (props) => {
    return <div className={style.container}>{props.name}</div>;
};

export default Btn;
