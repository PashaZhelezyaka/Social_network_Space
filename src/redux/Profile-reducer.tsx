import {
    ActionsTypes,
    AddPostTextActionType,
    MessageDataType,
    PostDataType,
    PostPageType,
    StateType,
    UpdateNewPostTextActionType
} from "./Store";

let initialState : PostPageType = {
    postData: [
        {id: 1, message: "Hallo", likesCount: "like 15"},
        {id: 2, message: "Yo space", likesCount: "like 20"},
        {id: 3, message: "You are infinity?", likesCount: "like 15"},
        {id: 4, message: "Sky limit", likesCount: "like 15"},
        {id: 5, message: "Sky limit", likesCount: "like 15"},
        {id: 6, message: "Sky limit", likesCount: "like 15"},
    ],
    newPostText: "I am super"
}


const profileReducer = (state = initialState /*: PostPageType*/,
                        action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST-TEXT": {
            const newPost: PostDataType = {
                id: 7,
                message: state.newPostText,
                likesCount: "like 0"
            }
            state.postData.push(newPost)
            state.newPostText = " "
            return state
        }
        case "UP-DATE-NEW-POST-TEXT": {
            state.newPostText = action.newPostText
            return state
        }
        default:
            return state
    }
}
export const addPostActionCreator = (postText: string): AddPostTextActionType => {
    return {type: "ADD-POST-TEXT" ,updateNewPostText: postText}
}
export const upDateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType=> {
    return {type:"UP-DATE-NEW-POST-TEXT" , newPostText:text}
}


export default profileReducer