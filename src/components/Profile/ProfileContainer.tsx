import React from 'react';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {AppStateReducer} from "../../redux/Redux-store";
import {getUserProfileTC, getUserStatusTC, updateStatusTC, UserProfileType} from '../../redux/Profile-reducer';
import {Preloader} from "../common/Preloader/Preloader";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type MapStatePropsType = {
    profile: UserProfileType | null
    status: string
    authorizedUserId: number | null
    isauth: boolean
}

type mapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => string
}

type PathParamsType = {
    userId: string
}

type UserPropsType = RouteComponentProps<PathParamsType> & OneUserPropsType

export type OneUserPropsType = MapStatePropsType & mapDispatchPropsType

class ProfileContainer extends React.Component <UserPropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            if(this.props.authorizedUserId)
                userId = String(this.props.authorizedUserId);
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateStatus={this.props.updateStatusTC}/>
    }
}

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        profile: state.postPage.profile,
        status: state.postPage.status,
        authorizedUserId: state.auth.data.id,
        isauth: state.auth.data.isAuth
    })
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC, getUserStatusTC, updateStatusTC
    }),
    withRouter)(ProfileContainer)

