import {createStore, combineReducers, applyMiddleware} from "redux";
import tasksReducer from "./tasks-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    tasks: tasksReducer,
    form: formReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
