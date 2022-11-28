import React, { useState, useContext, useEffect } from 'react';
import style from './style.module.css';
import Card from '../Share/card';
import InputGroup from '../Share/InputGroup';
import AuthContext from '../../context/Context';
import { actionsLogin } from '../../context/Reducer';
import { Navigate } from 'react-router-dom';

const FormEl = () => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const { state, dispatch } = useContext(AuthContext);
    const { error, isAuthenticated } = state;

    const onLogin = async (e) => {
        e.preventDefault();
        const submitValue = {
            username: username,
            password: password,
        };
        actionsLogin(submitValue, dispatch);
    };

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    if (isAuthenticated) {
        return <Navigate to={window.history.back()} />;
    }

    return (
        <div className={style.container}>
            <Card className={style.form}>
                <h3>welcome back</h3>
                <form onSubmit={onLogin}>
                    <InputGroup
                        htmlType="text"
                        label={<i className="fa-solid fa-user"></i>}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputGroup
                        htmlType="password"
                        label={<i className="fa-solid fa-lock"></i>}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className={style.btn}>submit</button>
                </form>
            </Card>
        </div>
    );
};

export default FormEl;
