import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/Context';
import InputNote from '../../components/Docs/InputNote';
import style from './style.module.css';
import { noteData } from '../../context/Reducer';
import AddNote from '../../components/Docs/AddNew';
import { Navigate } from 'react-router-dom';

const Docs = () => {
    const {
        state: { isNote, error },
        dispatch,
    } = useContext(AuthContext);
    const [hide, setHide] = useState(false);
    const [search, setSearch] = useState(false);
    const [add, setAdd] = useState(false);
    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    return (
        <div className={style.container}>
            <ul className={style.slide_bar}>
                <li className={style.space}>
                    <i className="fa-solid fa-bars" onClick={() => setHide(!hide)}></i>
                </li>
                <li className={style.space}>
                    <i className="fa-solid fa-magnifying-glass" onClick={() => setSearch(!search)}></i>
                </li>
                <li className={style.space}>
                    <i className="fa-solid fa-plus" onClick={() => setAdd(!add)}></i>
                </li>
            </ul>
            <div className={style.app}>
                <div className={style.title}>supperNote</div>
                <div className={style.center}>
                    {hide ? (
                        <div className={style.menu_bar}>
                            <div className={style.menu_bar_title}>
                                <i className="fa-sharp fa-solid fa-house"></i>
                                <h3>home</h3>
                            </div>
                            <p>Task</p>
                            <ul></ul>
                        </div>
                    ) : null}
                    <div className={style.content}>
                        {search ? (
                            <div className={style.search_bar}>{<InputNote placeholder="Search by keyword" />}</div>
                        ) : null}
                        <div className={style.notes}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;
