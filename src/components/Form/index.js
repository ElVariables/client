import React, { useState, useContext } from 'react';
import style from './style.module.css';
import Card from '../Share/card';
import InputGroup from '../Share/InputGroup';
import http from '../../utils/axios';
import InstanceContext from '../../context/auth';

const FormEl = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useContext(InstanceContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const Authorization =  await http.post('/login', {
                username: username,
                password: password,
            });
            console.log(Authorization)
            authCtx.setUser(Authorization.data.username)
            localStorage.setItem("accessToken", Authorization.data.accessToken)
        
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.container}>
            <Card className={style.form}>
                <h3>welcome back</h3>
                <form onSubmit={handleSubmit}>
                    <InputGroup
                        htmlType="text"
                        label={<i className="fa-solid fa-user"></i>}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />

                    <InputGroup
                        htmlType="password"
                        label={<i className="fa-solid fa-lock"></i>}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className={style.btn}>submit
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default FormEl;
