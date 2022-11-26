import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/Context';

const Private = ({ component: Component }) => {
    const { state } = useContext(AuthContext);
    const { isAuthenticated } = state;
    return isAuthenticated ? <Component /> : <Navigate to="/form" />;
};

export default Private;

export const DocsRouter = ({ component: Component }) => {
    const { state } = useContext(AuthContext);
    const { isNote } = state;
    return isNote ? <Component /> : <Navigate to="/form" />;
};
