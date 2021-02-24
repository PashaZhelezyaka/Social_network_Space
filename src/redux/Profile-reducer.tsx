import {
    ActionsTypes,
    AddPostTextActionType,
    MessageDataType,
    PostDataType,
    PostPageType,
    StateType,
    UpdateNewPostTextActionType
} from "./State";

const profileReducer = (state: PostPageType, action: ActionsTypes) => {

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