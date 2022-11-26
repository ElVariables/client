import React, { useContext, useEffect, useState } from 'react';
import style from './style.module.css';
import InputNote from '../InputNote';
import fetchAPI from '../../../utils/fetch';
import AuthContext from '../../../context/Context';
import { handleAddNode } from '../../../context/Reducer';

const AddNote = () => {
    const [task, setTask] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const {
        state: { addNoteErr },
        dispatch,
    } = useContext(AuthContext);

    const [hide, setHide] = useState(true);

    return (
        <div>
            {hide ? (
                <form className={style.add_box}>
                    <p onClick={() => setHide(false)}>
                        <i className="fa-solid fa-delete-left"></i>
                    </p>
                    <div className={style.add_box_title}>
                        <InputNote
                            placeholder="Title"
                            label="Title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <InputNote
                            placeholder="task"
                            label="task"
                            value={task}
                            onChange={(e) => {
                                setTask(e.target.value);
                            }}
                        ></InputNote>
                    </div>
                    <textarea
                        placeholder="Text.."
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}
                    />
                    <button>submit</button>
                </form>
            ) : null}
        </div>
    );
};

export default AddNote;
