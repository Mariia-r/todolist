import {loginAPI} from "../api/api";
import { async } from "q";

const LOG_OUT = "LOG_OUT";
const LOGIN_ADMIN="LOGIN_ADMIN";

const initialState = {
    admin: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_ADMIN: {
            return {
                ...state,
                user: {username: action.username, password: action.password},
                admin: true
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                user: {username: null, password: null},
                admin: false
            }
        }
        default: 
            return state;
    }
}

export const logoutAdmin = () => ({type: LOG_OUT})
export const loginAdmin = (username, password) => ({type: LOGIN_ADMIN, username, password});

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem("token");
        dispatch(logoutAdmin());
    }
}

export const login = (username, password) => {
    return async (dispatch) => {
        let data = await loginAPI.login(username, password);
        if (data.status === "ok") {
            localStorage.setItem("token", data.message.token);
            dispatch(loginAdmin(username, password));
        } else if (data.status = "error") {
            window.alert(data.message.password);
        }
    }
}

export default authReducer;