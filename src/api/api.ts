import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ea564460-4138-4503-aa33-6bc94781f7f2"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data
        })
    }
}



/* headers: {
         "API-KEY":"ea564460-4138-4503-aa33-6bc94781f7f2"}*/