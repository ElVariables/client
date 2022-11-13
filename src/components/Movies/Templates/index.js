import React from 'react';
import style from './style.module.css';

const Templates = ({ name }) => {
    return <div className={style.container}>{name}</div>;
};

export default Templates;
