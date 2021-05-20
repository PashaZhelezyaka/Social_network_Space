import {ActionsTypes} from "./StoreTypes";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"

type LocationType =  {
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
    followingInProgress: Array<number>
}
export type PhotosType = {
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
    followingInProgress: Array<number>
}

const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userID: number) => {
    return {type: FOLLOW, userID}
}
export const unfollowSuccess = (userID: number) => {
    return {type: UNFOLLOW, userID}
}
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (isFetching: boolean, userID: number) => {
    return {type: FOLLOWING_IN_PROGRESS, isFetching, userID}
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.follow(userID).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
    }
}

export const unfollow = (userID: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.unfollow(userID).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
    }
}


export default usersReducer