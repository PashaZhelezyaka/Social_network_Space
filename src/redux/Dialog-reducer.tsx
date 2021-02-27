import {
    ActionsTypes,
    AddMessageTextActionType,
    DialogPageType,
    MessageDataType,
    StateType,
    UpdateNewMessageTextActionType
} from "./Store";

let initialState : DialogPageType = {
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
    newMessageText: " ",
}
const dialogReducer = (state = initialState /*: DialogPageType*/, action: ActionsTypes) => {

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