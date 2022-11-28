import { useEffect, useReducer } from 'react';
import { setAuthToken } from '../utils/token';
import AuthContext from './Context';
import reducer, { userData } from './Reducer';

const AuthState = (props) => {
    const initialState = {
        accessToken: localStorage.getItem('token'),
        isAuthenticated: false,
        isNote: false,
        error: null,
        username: null,
        note: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setAuthToken(state.accessToken);
        userData(dispatch);
    }, [state.accessToken]);

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
