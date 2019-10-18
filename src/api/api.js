import * as axios from "axios";

const instance = axios.create({
    baseURL: " https://uxcandy.com/~shapoval/test-task-backend/v2"
});

export const tasksAPI = {
    getTasks() {
        return instance.get(`/?developer=Mariia`)
        .then(response => {
            return response.data;
        })
    },

    createTask(username, email, text) {
        var bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('email', email);
        bodyFormData.set('text', text);
        return instance
        .post(
            `/create?developer=${username}`, 
            bodyFormData, 
            { headers: {'Content-Type': 'multipart/form-data' }}
        ).then(response => {
            return response.data;
        })
    }
}