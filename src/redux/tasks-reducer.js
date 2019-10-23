import {tasksAPI} from "../api/api";

const ADD_TASK = "ADD-TASK";
const SET_TASKS = "SET_TASKS";
const SET_TOTAL_TASK_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SORT = "SET_SORT";
const EDIT_TASK = "EDIT_TASK";

const initialState = {
    tasks: [],
    totalTaskCount: 0,
    currentPage: 1,
    sortField: "",
    sortDirection: ""
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
        case EDIT_TASK: {
            let editTask = state.tasks.find((item => item.id === action.id));
            editTask.status = action.status;
            editTask.text = action.text;
            
            return {
                ...state,
                tasks: [...state.tasks]     
            }
        }
        case SET_TASKS: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case SET_SORT: {
            return {
                ...state,
                sortField: action.sortField,
                sortDirection: action.sortDirection
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
export const setTasks = (tasks) => ({type: SET_TASKS, tasks})
export const setTotalTaskCount = (totalTaskCount) => ({type: SET_TOTAL_TASK_COUNT, totalTaskCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setSort = (sortField, sortDirection) => ({type: SET_SORT, sortField, sortDirection});
export const editTaskSuccess = (id, text, status) => ({type: EDIT_TASK, id, text, status})

export const getTasks = (pageNumber, sortField, sortDirection) => {
    return async (dispatch) => {
        let data = await tasksAPI.getTasks(pageNumber, sortField, sortDirection);
        dispatch(setTasks(data.message.tasks));
        dispatch(setSort(sortField, sortDirection));
        dispatch(setTotalTaskCount(data.message.total_task_count))
        dispatch(setCurrentPage(pageNumber));
    }
}

export const addTaskThunk = (username, email, text) => {
    return async (dispatch) => {
        let data = await tasksAPI.createTask(username, email, text);   
        if(data.status === "ok") {
            dispatch(addTask(data.message));
            window.alert(`Task was successfully added`);
        }
    }
}

export const editTask = (id, text, status) => {
    return async (dispatch) => {
        let data = await tasksAPI.editTask(id, text, status);
        if (data.status === "ok") {
            dispatch(editTaskSuccess(id, text, status));
            window.alert(`Task was successfully edited`);
        } else if (data.status === "error") {
            window.alert(data.message.token);
        }
    }
}
export default tasksReducer;
