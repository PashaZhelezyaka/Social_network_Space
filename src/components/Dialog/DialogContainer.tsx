import React from "react";
import {addMessage, initialStateType} from "../../redux/Dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {AppStateReducer} from "../../redux/Redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    dialogPage: initialStateType
}

type mapDispatchPropsType = {
    addMessage: (newMessageText: string) => void
    upDateNewMessageText: (text: string) => void
}

export type DialogType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect)(Dialog);
