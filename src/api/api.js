import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2"
});

export const tasksAPI = {
    getTasks(pageNumber, sortField, sortDirection) {
        return instance.get(`/?developer=Mariia&page=${pageNumber}&sort_field=${sortField}&sort_direction=${sortDirection}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log("axios error: " + error)
        })
    },

    createTask(username, email, text) {
        var bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('email', email);
        bodyFormData.set('text', text);
        return instance.post(
            `/create?developer=Mariia`, 
            bodyFormData, 
            {headers: {'Content-Type': 'multipart/form-data'}}
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
            `/edit/${id}?developer=Mariia`,
            bodyFormData,
            {headers: {'Content-Type': 'multipart/form-data'}}
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
            '/login?developer=Mariia',
            bodyFormData,
            {headers: {'Content-Type': 'multipart/form-data'}}
        )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            alert(error.message);
        })
    }
}