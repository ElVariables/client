import React, { useState } from 'react';
import style from './style.module.css';
import InputNote from '../InputNote';
import fetchAPI from '../../../utils/fetch';

const AddNote = () => {
    const [task, setTask] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onAdd = async (value) => {
        const getValue = {
            task: value.task,
            title: value.title,
            desc: value.desc,
        };

        try {
            await fetchAPI.note(getValue);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form className={style.add_box} onSubmit={onAdd}>
                <p>
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
        </div>
    );
};

export default AddNote;
