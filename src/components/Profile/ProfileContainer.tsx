import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {initialStateType, UserType} from "../../redux/Users-reducer";
import {AppStateReducer} from "../../redux/Redux-store";
import {setUserProfile, UserProfileType} from '../../redux/Profile-reducer';
import {Preloader} from "../common/Preloader/Preloader";
import { withRouter, RouteComponentProps } from 'react-router-dom';

type MapStatePropsType = {
    profile: UserProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType | null) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}



export type OneUserPropsType = MapStatePropsType & mapDispatchPropsType


let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        profile: state.postPage.profile
    })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
