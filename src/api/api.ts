import axios from "axios";
import {UserProfileType} from "../redux/Profile-reducer";
import { authDataType } from "../redux/Auth-reducer";

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
    },
    getProfile(userId: string) {
        return instanse.get(`profile/${userId}`)
    }
}
export const authAPI = {
    me() {
        return instanse.get<authDataType>(`auth/me`)
    }
}



