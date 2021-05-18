import {
    ActionsTypes,
    AddPostTextActionType,
    PostDataType, setUserProfileActionType, setUserStatusActionType,
    UpdateNewPostTextActionType
} from "./Store";
import {PhotosType} from "./Users-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST_TEXT = "ADD_POST_TEXT"
const UP_DATE_NEW_POST_TEXT = "UP_DATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"


export type PostType = {
    id: number
    message: string
    likesCount: string
}
export type ContactsUserProfileType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsUserProfileType
    photos: PhotosType

}

export type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hallo", likesCount: "like 15"},
        {id: 2, message: "Yo space", likesCount: "like 20"},
        {id: 3, message: "You are infinity?", likesCount: "like 15"},
        {id: 4, message: "Sky limit", likesCount: "like 15"},
        {id: 5, message: "Sky limit", likesCount: "like 15"},
        {id: 6, message: "Sky limit", likesCount: "like 15"},
    ] as Array<PostType>,

    newPostText: "I am superman",
    profile: null as UserProfileType | null,
    status: ""
}


const profileReducer = (state: initialStateType = initialState,
                        action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST_TEXT: {
            let newPost: PostDataType = {
                id: 7,
                message: state.newPostText,
                likesCount: "like 0"
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UP_DATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newPostText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
export const addPostAC = (postText: string): AddPostTextActionType => {
    return {type: ADD_POST_TEXT, updateNewPostText: postText}
}
export const upDateNewPostTextAC = (text: string): UpdateNewPostTextActionType => {
    return {type: UP_DATE_NEW_POST_TEXT, newPostText: text}
}
export const setUserProfileAC = (profile: UserProfileType | null): setUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}
export const setUserStatusAC = (status: string): setUserStatusActionType => {
    return {type: SET_USER_STATUS, status}
}
export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })
    }
}
export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusAC(response.data))
        })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
    }
}

export default profileReducer