import React from "react";
import {addMessage, initialStateType, upDateNewMessageText} from "../../redux/Dialog-reducer";
import {Dialog} from "./Dialog";
import {connect} from "react-redux";
import {AppStateReducer} from "../../redux/Redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

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
        dialogPage: state.dialogPage,

    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialog)

export const DialogContainer = connect(mapStateToProps, {
    addMessage, upDateNewMessageText,
})(AuthRedirectComponent)