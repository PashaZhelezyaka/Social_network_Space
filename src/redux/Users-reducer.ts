import {ActionsTypes} from "./Store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

type LocationType = {
    city: string
    country: string
}
export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    usersPage: initialStateType
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


const usersReducer = (state: initialStateType = initialState,
                      action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID}
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID}
}
export const setUserAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users}
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}


export default usersReducer