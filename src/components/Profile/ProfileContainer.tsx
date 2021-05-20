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
}

type mapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
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
            userId = '14'
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
        status: state.postPage.status
    })
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC, getUserStatusTC, updateStatusTC
    }),
    withRouter)(ProfileContainer)

