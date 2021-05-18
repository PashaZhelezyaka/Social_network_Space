import {ActionsTypes, AddMessageTextActionType} from "./Store";

const ADD_MESSAGE_TEXT = "ADD_MESSAGE_TEXT"

export type initialStateType = typeof initialState

export type MessageDataType = {
    id: number
    message: string
}
export type DialogNamesType = {
    id: number
    name: string
}

const initialState = {
    dialogNames: [
        {id: 1, name: "Korolyov"},
        {id: 2, name: "Belka & Strelka"},
        {id: 3, name: "Yuri"},
        {id: 4, name: "Iloha"},
        {id: 5, name: "Mars"},
        {id: 6, name: "Neznaika"},
    ] as Array<DialogNamesType>,

    messages: [
        {id: 1, message: "go to space, i created"},
        {id: 2, message: "we will definitely be back?"},
        {id: 3, message: "how are you descendants?"},
        {id: 4, message: "Yura, we have lost everything"},
        {id: 5, message: "I'm just a chocolate bar"},
        {id: 6, message: "I do not know anything"},
    ] as Array<MessageDataType>,

}
const dialogReducer = (state: initialStateType = initialState,
                       action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE_TEXT: {
            let newMessage = action.updateNewMessageText
            return {
                ...state,
                messages: [...state.messages,
                    {id: 7, message: newMessage}]
            }
        }
        default:
            return state
    }
}
export const addMessage = (newMessageText: string): AddMessageTextActionType => {
    return {
        type: "ADD_MESSAGE_TEXT",
        updateNewMessageText: newMessageText
    }
}

export default dialogReducer