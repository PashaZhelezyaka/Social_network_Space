import {UserProfileType} from "./Profile-reducer";
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
export type AddPostTextActionType = {
    type: "ADD_POST_TEXT"
    addNewPost: string
}
export type AddMessageTextActionType = {
    type: "ADD_MESSAGE_TEXT"
    updateNewMessageText: string
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
    | AddMessageTextActionType
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


