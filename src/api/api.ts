import axios from "axios";
import {authDataType} from "../redux/Auth-reducer";

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
    },
    follow(id: number = 1) {
        return instanse.post(`follow/${id}`
        ).then(response => {
            return response.data
        })
    },
    unfollow(id: number = 1) {
        return instanse.delete(`follow/${id}`
        ).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instanse.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instanse.put(`/profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instanse.get<authDataType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instanse.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instanse.delete(`/auth/login`)
    }

}



