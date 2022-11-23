import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/Context';
import InputNote from '../../components/Docs/InputNote';
import style from './style.module.css';
import Notes from '../../components/Docs/Notes';
import { handleNote } from '../../context/Reducer';
import AddNote from '../../components/Docs/AddNew';

const Docs = () => {
    const {
        state: { note },
        dispatch,
    } = useContext(AuthContext);
    const [hide, setHide] = useState(true);
    const [search, setSearch] = useState(false);
    const [add, setAdd] = useState(false);

    const getData = () => {
        handleNote(dispatch);
    };

    useEffect(() => {
        getData();
    }, []);

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
                            <ul>
                                {note
                                    ? note.map((data) => (
                                          <li key={data._id} {...data}>
                                              {data.task}
                                          </li>
                                      ))
                                    : null}
                            </ul>
                        </div>
                    ) : null}
                    <div className={style.content}>
                        {search ? (
                            <div className={style.search_bar}>{<InputNote placeholder="Search by keyword" />}</div>
                        ) : null}
                        <div className={style.notes}>
                            {note ? note.map((data) => <Notes key={data._id} {...data}></Notes>) : null}
                        </div>
                    </div>
                </div>
                {add ? <AddNote hide /> : null}
            </div>
        </div>
    );
};

export default Docs;
