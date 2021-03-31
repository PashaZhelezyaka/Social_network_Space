import {
    ActionsTypes,
    AddPostTextActionType,
    PostDataType, setUserProfileActionType,
    UpdateNewPostTextActionType
} from "./Store";
import {PhotosType} from "./Users-reducer";

const ADD_POST_TEXT = "ADD_POST_TEXT"
const UP_DATE_NEW_POST_TEXT = "UP_DATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"


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
        default:
            return state
    }
}
export const addPost = (postText: string): AddPostTextActionType => {
    return {type: ADD_POST_TEXT, updateNewPostText: postText}
}
export const upDateNewPostText = (text: string): UpdateNewPostTextActionType => {
    return {type: UP_DATE_NEW_POST_TEXT, newPostText: text}
}
export const setUserProfile = (profile: UserProfileType | null): setUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}


export default profileReducer