import fetchAPI from '../utils/fetch';
import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOG_OUT,
    NOTE_REQUEST,
    NOTE_SUCCESS,
    NOTE_ERROR,
    ADD_NOTE_REQUEST,
    ADD_NOTE_ERROR,
    ADD_NOTE_SUCCESS,
} from './type';

const reducer = (state, action) => {
    const { type, payload } = action;
    console.log({ type, payload });

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                user: null,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false,
                isAuthenticated: true,
            };
        case LOGIN_FAIL:
        case LOG_OUT:
        case NOTE_ERROR:
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                error: payload,
                token: null,
                user: null,
                note: null,
            };
        case NOTE_REQUEST:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                note: null,
            };
        case NOTE_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                note: payload.data,
            };
        default:
            return;
    }
};

export const handleLogin = async (FormData, dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    });
    console.log(FormData);
    try {
        const responsive = await fetchAPI.login(FormData);
        const action = {
            type: LOGIN_SUCCESS,
            payload: responsive.data,
        };
        dispatch(action);
        localStorage.setItem('token', responsive.data.accessToken);
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg,
        });
    }
};

export const handleNote = async (dispatch) => {
    dispatch({
        type: NOTE_REQUEST,
    });
    try {
        const response = await fetchAPI.getNote();
        const action = {
            type: NOTE_SUCCESS,
            payload: response.data,
        };
        dispatch(action);
    } catch (err) {
        dispatch({
            type: NOTE_ERROR,
            payload: err.response.data.msg,
        });
    }
};

export const handleNewNode = async (data, dispatch) => {
    dispatch({
        type: ADD_NOTE_REQUEST,
    });
    try {
        const responsive = await fetchAPI.addNote(data, dispatch);
        const action = {
            type: ADD_NOTE_SUCCESS,
            payload: responsive.data,
        };
        dispatch(action);
    } catch (err) {
        dispatch({
            type: ADD_NOTE_ERROR,
            payload: err.responsive.data.msg,
        });
    }
};

export default reducer;
