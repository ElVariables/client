import { useEffect, useReducer } from 'react';
import AuthContext from './Context';
import reducer, { handleNote } from './Reducer';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: false,
        error: false,
        user: null,
        note: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
