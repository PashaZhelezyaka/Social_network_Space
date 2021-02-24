import {
    ActionsTypes,
    AddMessageTextActionType,
    DialogPageType,
    MessageDataType,
    StateType,
    UpdateNewMessageTextActionType
} from "./State";

const dialogReducer = (state: DialogPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE-TEXT": {
            const newMessage: MessageDataType = {
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ""
            return state
        }
        case "UP-DATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newMessageText
            return state
        }
        default:
            return state
    }
}
export const addMessageActionCreator = (messageText: string): AddMessageTextActionType=> {
    return {type: "ADD-MESSAGE-TEXT",
        updateNewMessageText: messageText }
}
export const upDateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType=> {
    return {type: "UP-DATE-NEW-MESSAGE-TEXT",
        newMessageText: text}
}

export default dialogReducer