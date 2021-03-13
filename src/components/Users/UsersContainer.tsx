import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, initialStateType, setUserAC, unfollowAC, UserType} from "../../redux/Users-reducer";
import {AppStateReducer} from '../../redux/Redux-store';
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: initialStateType
}
type mapDispatchPropsType = {
    follow: (userID: number)=> void
    unfollow: (userID: number)=> void
    setUsers: (users: Array<UserType>)=> void
}

export type UsersType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        usersPage: state.usersPage
    })
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUserAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)