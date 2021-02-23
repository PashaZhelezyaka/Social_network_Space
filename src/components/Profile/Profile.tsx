import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostPageType} from "../../redux/State";
type ProfilePropsType={
    state:PostPageType
    //addPostText: (newPostMessage: string) => void
    //updateNewPostText: (newPostText: string) =>void
    dispatch: (action: ActionsTypes)=> void
}
export function Profile(props: ProfilePropsType ) {

    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPosts state = {props.state } dispatch ={props.dispatch}
                 /*updateNewPostText={props.updateNewPostText}*/ />
    </div>
}

