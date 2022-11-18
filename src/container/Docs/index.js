import React, { useState } from 'react';
import InputNote from '../../components/Docs/InputNote';
import style from './style.module.css';

const Docs = () => {
    const [hide, setHide] = useState(true);
    const [search, setSearch] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.slide_bar}>
                <div className={style.space}>
                    <i className="fa-solid fa-bars" onClick={() => setHide(!hide)}></i>
                </div>
                <div className={style.space}>
                    <i className="fa-solid fa-magnifying-glass" onClick={() => setSearch(!search)}></i>
                </div>
                <div className={style.space}>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
            <div className={style.app}>
                <p>supperNote</p>
                <div className={style.center}>
                    {hide ? (
                        <div className={style.menu_bar}>
                            <div className={style.menu_bar_title}>
                                <i class="fa-sharp fa-solid fa-house"></i>
                                <h3>home</h3>
                            </div>
                            <ul>
                                Task
                                <li></li>
                            </ul>
                        </div>
                    ) : null}
                    <div className={style.content}>
                        {search ? <div className={style.search_bar}>{<InputNote placeholder = "Search by keyword"/>}</div> : null}
                        <div>content</div>
                    </div>
                </div>
                <div className={style.add_box}>
                        <InputNote placeholder = "Title " className = {style.add_box_title}/>
                        <textarea placeholder = "Text.."/>
                        <button>add new</button>
                </div>
            </div>
        </div>
    );
};

export default Docs;
