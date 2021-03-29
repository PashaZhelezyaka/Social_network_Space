import React from "react";
import d from './Dialog.module.css'
import {
    addMessage, initialStateType,
    upDateNewMessageText
} from "../../redux/Dialog-reducer";
import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateReducer} from "../../redux/Redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogPage: initialStateType
}

type mapDispatchPropsType = {
    addMessage: (messageText: string) => void
    upDateNewMessageText: (text: string) => void
}

export type DialogType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage

    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessage: (messageText) => {
            dispatch(addMessage(messageText))
        },
        upDateNewMessageText: (text) => {
            dispatch(upDateNewMessageText(text))
        }

    }
}*/

export const DialogContainer = connect(mapStateToProps, {
    addMessage, upDateNewMessageText,})(Dialog)