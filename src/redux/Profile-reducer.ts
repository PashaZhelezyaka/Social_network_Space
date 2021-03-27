import {
    ActionsTypes,
    AddPostTextActionType,
    PostDataType,
    UpdateNewPostTextActionType
} from "./Store";

const ADD_POST_TEXT = "ADD_POST_TEXT"
const UP_DATE_NEW_POST_TEXT = "UP_DATE_NEW_POST_TEXT"

export type PostType = {
    id: number
    message: string
    likesCount: string
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
    ] as Array <PostType>,

    newPostText: "I am superman"
}


const profileReducer = (state:initialStateType = initialState,
                        action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST_TEXT: {
            let newPost: PostDataType = {
                id: 7,
                message: state.newPostText,
                likesCount: "like 0"
            }
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UP_DATE_NEW_POST_TEXT: {
            return  {...state,newPostText: action.newPostText}
            }
        default:
            return state
    }
}
export const addPostAC = (postText: string): AddPostTextActionType => {
    return {type: "ADD_POST_TEXT" ,updateNewPostText: postText}
}
export const upDateNewPostTextAC = (text: string): UpdateNewPostTextActionType=> {
    return {type:"UP_DATE_NEW_POST_TEXT" , newPostText:text}
}


export default profileReducer