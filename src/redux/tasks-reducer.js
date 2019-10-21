import {tasksAPI} from "../api/api";

const ADD_TASK = "ADD-TASK";
const SET_STATUS_TASK = "SET_STATUS_TASK";
const SET_TASKS = "SET_TASKS";
const SET_TOTAL_TASK_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
    tasks: [],
    totalTaskCount: 0,
    currentPage: 1
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            let newTask = {...action.task};

            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        }
        case SET_STATUS_TASK: {
            //TODO
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
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default: 
            return state;
    }
}

export const addTask = (task) => ({type: ADD_TASK, task});
export const setStatusTask = (id, status) => ({type: SET_STATUS_TASK, id, status});
export const setTasks = (tasks) => ({type: SET_TASKS, tasks})
export const setTotalTaskCount = (totalTaskCount) => ({type: SET_TOTAL_TASK_COUNT, totalTaskCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});


export const getTasks = (pageNumber,sortField, sortDirection) => {
    return async (dispatch) => {
        let data = await tasksAPI.getTasks(pageNumber, sortField, sortDirection);
        dispatch(setTasks(data.message.tasks));
        dispatch(setTotalTaskCount(data.message.total_task_count))
        dispatch(setCurrentPage(pageNumber));
    }
}

export const addTaskThunk = (username, email, text) =>{
    return async (dispatch) => {
        let data = await tasksAPI.createTask(username, email, text);   
        dispatch(addTask(data.message));
    }
}

export default tasksReducer;
