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

class ProfileContainer extends React.Component <UserPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
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

type MapStatePropsType = {
    profile: UserProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType | null) => void
}

export type UserPropsType = MapStatePropsType & mapDispatchPropsType


let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        profile: state.postPage.profile
    })
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
