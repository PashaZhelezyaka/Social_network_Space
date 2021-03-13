import React, {ChangeEvent} from "react";
import d from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogName} from "./DialogName/DialogName";
import {
    addMessageActionCreator, initialStateType,
    upDateNewMessageTextActionCreator
} from "../../redux/Dialog-reducer";
import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateReducer} from "../../redux/Redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogPage: initialStateType
}

type mapDispatchPropsType = {
    addMessageAC: (messageText: string)=> void
    upDateNewMessageTextAC: (text: string)=> void
}

export type DialogType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType=> {
    return {
        dialogPage: state.dialogPage

    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessageAC: (messageText) => {
            dispatch(addMessageActionCreator(messageText))
        },
        upDateNewMessageTextAC: (text)=> {
            dispatch(upDateNewMessageTextActionCreator(text))
        }

    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)