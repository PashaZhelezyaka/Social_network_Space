import React from 'react';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {AppStateReducer} from "../../redux/Redux-store";
import {getUserProfile, UserProfileType} from '../../redux/Profile-reducer';
import {Preloader} from "../common/Preloader/Preloader";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type MapStatePropsType = {
    profile: UserProfileType | null
    isAuth: boolean
}

type mapDispatchPropsType = {
    getUserProfile: (userID: string) => void
}

type PathParamsType = {
    userId: string
}

type UserPropsType = RouteComponentProps<PathParamsType> & OneUserPropsType


class ProfileContainer extends React.Component <UserPropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }


    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        if (!this.props.isAuth) {  //this.props.isAuth === false
            return <Redirect to={'/login'} />
        }

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


export type OneUserPropsType = MapStatePropsType & mapDispatchPropsType


let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        profile: state.postPage.profile,
        isAuth: state.auth.isAuth
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
