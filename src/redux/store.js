import {createStore, combineReducers, applyMiddleware} from "redux";
import tasksReducer from "./tasks-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    tasks: tasksReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
