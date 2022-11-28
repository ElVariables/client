import fetchAPI from '../utils/fetch';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT,
    ADD_NOTE_REQUEST,
    ADD_NOTE_ERROR,
    ADD_NOTE_SUCCESS,
    FETCH_USER,
    FETCH_USER_ERROR,
    NOTE_REQUEST,
    NOTE_ERROR,
    NOTE_SUCCESS,
} from './type';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                ...payload,
            };
        case LOGIN_ERROR:
        case FETCH_USER_ERROR:
        case LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                isNote: false,
                error: payload,
                username: null,
                accessToken: null,
            };
        case FETCH_USER:
            return {
                ...state,
                isAuthenticated: true,
                isNote: false,
                note: null,
                ...payload,
            };
        case NOTE_REQUEST:
            return {
                ...state,
                isAuthenticated: true,
                isNote: false,
            };
        case NOTE_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isNote: true,
                note: payload.data,
            };
        case NOTE_ERROR:
            return {
                ...state,
                isNote: false,
                error: payload,
            };
        default:
            return;
    }
};

export const actionsLogin = async (FormData, dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    });
    try {
        const response = await fetchAPI.login(FormData);
        const action = {
            type: LOGIN_SUCCESS,
            payload: response.data,
        };
        dispatch(action);
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: err.response.data.msg,
        });
    }
};

export const userData = async (dispatch) => {
    try {
        const response = await fetchAPI.loadUser();
        dispatch({
            type: FETCH_USER,
            payload: response.data.user,
        });
    } catch (err) {
        dispatch({
            type: FETCH_USER_ERROR,
            payload: err.response.data.msg,
        });
    }
};

export const noteData = async (dispatch) => {
    dispatch({
        type: NOTE_REQUEST,
    });
    try {
        const note = await fetchAPI.loadNote();
        dispatch({
            type: NOTE_SUCCESS,
            payload: note.data,
        });
    } catch (e) {
        dispatch({
            type: NOTE_ERROR,
            payload: e.note.data.msg,
        });
    }
};

export default reducer;
