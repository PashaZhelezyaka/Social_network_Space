import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/Profile-reducer";

type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => string
}

export function Profile(props: PropsType) {
    return <div className={s.profile}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

