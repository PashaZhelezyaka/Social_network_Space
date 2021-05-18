import profileReducer, {UserProfileType} from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {UserType} from "./Users-reducer";
import {DataDataType} from "./Auth-reducer";

export type StateType = {
    dialogPage: DialogPageType
    postPage: PostPageType
    sidebar: any

}
export type PostDataType = {
    id: number
    message: string
    likesCount: string
}
type MessageDataType = {
    message: string
}
type DialogNamesType = {
    id: number
    name: string
}
type DialogPageType = {
    dialogNames: Array<DialogNamesType>
    messageData: Array<MessageDataType>
    newMessageText: string
}
export type PostPageType = {
    posts: Array<PostDataType>
    newPostText: string
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (_state: StateType) => void) => void
    /*addPostText: () => void
    updateNewPostText: (newPostText: string) => void
    addMessageText: () => void
    updateNewMessageText: (newMessageText: string) => void*/
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


export type AddPostTextActionType = {
    type: "ADD_POST_TEXT"
    updateNewPostText: string
}
export type UpdateNewPostTextActionType = {
    type: "UP_DATE_NEW_POST_TEXT"
    newPostText: string
}
export type AddMessageTextActionType = {
    type: "ADD_MESSAGE_TEXT"
    updateNewMessageText: string //(newMessageText: string)=>void
}
export type UpdateNewMessageTextActionType = {
    type: "UP_DATE_NEW_MESSAGE_TEXT"
    newMessageText: string
}
export type FollowActionType = {
    type: "FOLLOW"
    userID: number
}
export type UnfollowActionType = {
    type: "UNFOLLOW"
    userID: number
}
export type SetUserActionType = {
    type: "SET_USERS"
    users: Array<UserType>
}
export type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type setTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
export type ToggleIsFetchingActionType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export type FollowingProgressActionType = {
    type: "FOLLOWING_IN_PROGRESS"
    isFetching: boolean
    userID: number
}
export type setUserProfileActionType = {
    type: "SET_USER_PROFILE"
    profile: UserProfileType | null
}
export type setUserStatusActionType = {
    type: "SET_USER_STATUS"
    status: string
}
export type setUserAuthDataActionType = {
    type: "SET_USER_DATE"
    data: DataDataType | null

}


export type ActionsTypes =
    AddPostTextActionType
    | UpdateNewPostTextActionType
    | AddMessageTextActionType
    | UpdateNewMessageTextActionType
    | FollowActionType
    | UnfollowActionType
    | SetUserActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | setUserProfileActionType
    | setUserAuthDataActionType
    | FollowingProgressActionType
    | setUserStatusActionType


/*let store: StoreType = {
    _state: {
        dialogPage: {
            dialogNames: [
                {id: 1, name: "Korolyov"},
                {id: 2, name: "Belka & Strelka"},
                {id: 3, name: "Yuri"},
                {id: 4, name: "Iloha"},
                {id: 5, name: "Mars"},
                {id: 6, name: "Neznaika"},
            ]
            ,
            messageData: [
                {message: "go to space, i created"},
                {message: "we will definitely be back?"},
                {message: "how are you descendants?"},
                {message: "Yura, we have lost everything"},
                {message: "I'm just a chocolate bar"},
                {message: "I do not know anything"},
            ],
            newMessageText: " "
        },

        postPage: {
            posts: [
                {id: 1, message: "Hallo", likesCount: "like 15"},
                {id: 2, message: "Yo space", likesCount: "like 20"},
                {id: 3, message: "You are infinity?", likesCount: "like 15"},
                {id: 4, message: "Sky limit", likesCount: "like 15"},
                {id: 5, message: "Sky limit", likesCount: "like 15"},
                {id: 6, message: "Sky limit", likesCount: "like 15"},
            ],
            newPostText: "I am super"
        },
        sidebar: {},


    },
    _callSubscriber() {
        console.log("State change")
    },
    subscribe(observer: (_state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        /!*this._state.postPage = profileReducer(this._state.postPage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)*!/


        /!* if (action.type === "ADD-POST-TEXT") {
             const newPost: PostDataType = {
                 id: 7,
                 message: this._state.postPage.newPostText,
                 likesCount: "like 0" }
             this._state.postPage.postData.push(newPost)
             this._state.postPage.newPostText = " "
             //action.updateNewPostText = ''
             this._callSubscriber(this._state)
         }
         else if (action.type === "UP-DATE-NEW-POST-TEXT") {
             this._state.postPage.newPostText = action.newPostText
             this._callSubscriber(this._state)
         }
         else if (action.type === "ADD-MESSAGE-TEXT") {
             const newMessage: MessageDataType = {
                 message: this._state.dialogPage.newMessageText
             }
             this._state.dialogPage.messageData.push(newMessage)
             //action.updateNewMessageText = ''
             this._state.dialogPage.newMessageText = ""
             this._callSubscriber(this._state)
         }
         else if (action.type === "UP-DATE-NEW-MESSAGE-TEXT") {
             this._state.dialogPage.newMessageText = action.newMessageText
             this._callSubscriber(this._state)
         }*!/
        this._callSubscriber(this._state)
    },

}*/


/*
export default store;*/
