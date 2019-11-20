import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2/",
    headers: {'Content-Type': 'multipart/form-data'}
});

instance.interceptors.request.use(config => {
    config.params = {
      ...config.params,
     developer: 'Mariia',
    };
    return config;
});

export const tasksAPI = {
    getTasks(pageNumber, sortField, sortDirection) {
        return instance.get(``, {
            params: {
                page: pageNumber,
                sort_field: sortField,
                sort_direction: sortDirection
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log("axios error: " + error)
        })
    },

    createTask(username, email, text) {
        const bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('email', email);
        bodyFormData.set('text', text);
        return instance.post(
            `create`, 
            bodyFormData
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log("axios error: " + error)
        })
    },

    editTask(id, text, status) {
        const bodyFormData = new FormData();
        bodyFormData.set('text', text);
        bodyFormData.set('status', status);
        bodyFormData.set('token', localStorage.token);

        return instance.post(
            `edit/${id}`,
            bodyFormData
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log("axios error: " + error)
        })
    }
}

export const loginAPI = {
    login(username, password) {
        const bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        return instance.post(
            'login',
            bodyFormData
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            alert(error.message);
        })
    }
}