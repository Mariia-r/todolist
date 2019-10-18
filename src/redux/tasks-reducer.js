import {tasksAPI} from "../api/api";

const ADD_TASK = "ADD-TASK";
const SET_STATUS_TASK = "SET_STATUS_TASK";
const SET_TASKS = "SET_TASKS";
const SET_TOTAL_TASK_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
    tasks: [],
    totalTaskCount: 0
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            let newTask = {
                id: state.tasks.length + 1,
                username: action.username,
                email: action.email,
                text: action.text,
                status: 0
            };

            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        }
        case SET_STATUS_TASK: {
            //if(state.tasks.find(item => item.id === action.id)) {}
        }
        case SET_TASKS: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case SET_TOTAL_TASK_COUNT: {
            return {
                ...state,
                totalTaskCount: action.totalTaskCount
            }
        }
        default: 
            return state;
    }
}

export const addTask = (username, email, text) => ({type: ADD_TASK, username, email, text});
export const setStatusTask = (id, status) => ({type: SET_STATUS_TASK, id, status});
export const setTasks = (tasks) => ({type: SET_TASKS, tasks})
export const setTotalTaskCount = (totalTaskCount) => ({type: SET_TOTAL_TASK_COUNT, totalTaskCount});


export const getTasks = () => {
    return async (dispatch) => {
        let data = await tasksAPI.getTasks();
        dispatch(setTasks(data.message.tasks));
        dispatch(setTotalTaskCount(data.message.total_task_count))
    }
}

export const addTaskThunk = (username, email, text) =>{
    return async (dispatch) => {
        let data = await tasksAPI.createTask(username, email, text);
        dispatch(addTask(data.message));
    }
}

export default tasksReducer;
